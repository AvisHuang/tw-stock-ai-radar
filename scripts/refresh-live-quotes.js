const fs = require("node:fs/promises");
const path = require("node:path");

const DATA_FILE = path.join(__dirname, "..", "outputs", "data", "latest.json");
const MIN_LIVE_QUOTES = 300;

function numberValue(value) {
  if (value === null || value === undefined) return 0;
  const parsed = Number(String(value).replace(/,/g, "").replace(/[^\d.+-]/g, "").trim());
  return Number.isFinite(parsed) ? parsed : 0;
}

function liveDate(value) {
  const text = String(value || "");
  if (!/^\d{8}$/.test(text)) return "";
  return `${text.slice(0, 4)}-${text.slice(4, 6)}-${text.slice(6, 8)}`;
}

function liveChannel(stock) {
  return `${stock.market === "tpex" ? "otc" : "tse"}_${stock.code}.tw`;
}

function parseQuote(row, stock) {
  const last = numberValue(row.z) || numberValue(row.pz) || numberValue(row.y) || stock.price;
  const previous = numberValue(row.y) || stock.price;
  const open = numberValue(row.o) || last;
  const high = numberValue(row.h) || Math.max(open, last);
  const low = numberValue(row.l) || Math.min(open, last);
  const lots = numberValue(row.v) || 0;
  const shares = lots * 1000;
  const amount = shares > 0 ? Math.round(shares * last) : Math.round((stock.history?.at(-1)?.amount || 0) * last / Math.max(stock.price, 1));
  const date = liveDate(row.d);

  if (!date || !last || !high || !low) return null;
  return {
    date,
    open: Math.round(open * 100) / 100,
    high: Math.round(high * 100) / 100,
    low: Math.round(low * 100) / 100,
    close: Math.round(last * 100) / 100,
    volume: Math.round(shares / 1000),
    amount,
    market: row.ex === "otc" ? "tpex" : "twse",
    change: Math.round((last - previous) * 100) / 100
  };
}

async function fetchBatch(channels) {
  const response = await fetch(
    `https://mis.twse.com.tw/stock/api/getStockInfo.jsp?ex_ch=${encodeURIComponent(channels.join("|"))}&json=1&delay=0`,
    {
      headers: {
        accept: "application/json,text/plain,*/*",
        referer: "https://mis.twse.com.tw/stock/fibest.jsp",
        "user-agent": "Mozilla/5.0 tw-stock-ai-radar/1.0"
      }
    }
  );
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
  return JSON.parse((await response.text()).trim()).msgArray || [];
}

async function main() {
  const payload = JSON.parse(await fs.readFile(DATA_FILE, "utf8"));
  const stocksByCode = new Map(payload.stocks.map((stock) => [stock.code, stock]));
  const channels = payload.stocks.map(liveChannel);
  const rows = [];

  for (let index = 0; index < channels.length; index += 90) {
    try {
      rows.push(...await fetchBatch(channels.slice(index, index + 90)));
    } catch (error) {
      console.warn(`Live batch skipped ${index}: ${error.message}`);
    }
  }

  let updated = 0;
  let liveDateKey = payload.dataDate;
  for (const row of rows) {
    const stock = stocksByCode.get(row.c);
    if (!stock) continue;
    const bar = parseQuote(row, stock);
    if (!bar) continue;

    stock.price = bar.close;
    stock.mom1 = Math.round((bar.change / Math.max(numberValue(row.y), 1)) * 1000) / 10;
    stock.volume = Math.round(Math.max(0.45, Math.min(3.2, bar.amount / 100000000 / 8 + Math.abs(stock.mom1) / 8 + 0.75)) * 100) / 100;
    stock.volatility = Math.round(Math.max(((bar.high - bar.low) / bar.close) * 100, Math.abs(stock.mom1)) * 10) / 10;

    if (!Array.isArray(stock.history)) stock.history = [];
    const historyBar = {
      date: bar.date,
      open: bar.open,
      high: bar.high,
      low: bar.low,
      close: bar.close,
      volume: bar.volume,
      amount: bar.amount,
      market: bar.market
    };
    if (stock.history.at(-1)?.date === bar.date) {
      stock.history[stock.history.length - 1] = historyBar;
    } else {
      stock.history.push(historyBar);
    }
    liveDateKey = bar.date > liveDateKey ? bar.date : liveDateKey;
    updated += 1;
  }

  if (updated < MIN_LIVE_QUOTES) {
    throw new Error(`Only ${updated} live quotes parsed; keeping existing data.`);
  }

  payload.dataDate = liveDateKey;
  payload.updatedAt = new Date().toISOString();
  payload.liveQuoteCount = updated;
  payload.source = "TWSE + TPEx official APIs + TWSE MIS live quotes";
  await fs.writeFile(DATA_FILE, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
  console.log(`Live quotes updated: ${updated}`);
  console.log(`Data date: ${payload.dataDate}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
