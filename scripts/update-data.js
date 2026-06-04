const fs = require("node:fs/promises");
const path = require("node:path");

const OUTPUT_FILE = path.join(__dirname, "..", "outputs", "data", "latest.json");
const LOOKBACK_CALENDAR_DAYS = 240;
const MIN_COMMON_STOCKS = 300;

const sectorOverrides = new Map([
  ["2330", "半導體"],
  ["2454", "IC 設計"],
  ["2379", "IC 設計"],
  ["3034", "IC 設計"],
  ["3661", "IC 設計"],
  ["6415", "IC 設計"],
  ["2382", "AI 伺服器"],
  ["3231", "AI 伺服器"],
  ["6669", "AI 伺服器"],
  ["2356", "AI 伺服器"],
  ["3017", "散熱"],
  ["3324", "散熱"],
  ["1519", "重電"],
  ["2308", "電子零組件"],
  ["2327", "電子零組件"],
  ["2345", "網通"],
  ["2317", "電腦及週邊"],
  ["2357", "電腦及週邊"]
]);

const officialSectorNames = new Map([
  ["01", "水泥工業"], ["02", "食品工業"], ["03", "塑膠工業"], ["04", "紡織纖維"], ["05", "電機機械"],
  ["06", "電器電纜"], ["08", "玻璃陶瓷"], ["09", "造紙工業"], ["10", "鋼鐵工業"], ["11", "橡膠工業"],
  ["12", "汽車工業"], ["14", "建材營造業"], ["15", "航運業"], ["16", "觀光餐旅"], ["17", "金融保險業"],
  ["18", "貿易百貨業"], ["22", "生技醫療業"], ["23", "油電燃氣業"], ["24", "半導體業"],
  ["25", "電腦及週邊設備業"], ["26", "光電業"], ["27", "通信網路業"], ["28", "電子零組件業"],
  ["29", "電子通路業"], ["30", "資訊服務業"], ["31", "其他電子業"], ["32", "文化創意業"],
  ["33", "農業科技業"], ["35", "綠能環保"], ["36", "數位雲端"], ["37", "運動休閒"], ["38", "居家生活"]
]);

const sectorAliases = new Map([
  ["建材營造", "建材營造業"], ["金融保險", "金融保險業"], ["金融業", "金融保險業"],
  ["貿易百貨", "貿易百貨業"], ["生技醫療", "生技醫療業"], ["其他電子類", "其他電子業"],
  ["其他電子", "其他電子業"], ["電子零組件", "電子零組件業"], ["電腦及週邊", "電腦及週邊設備業"],
  ["數位雲端類", "數位雲端"], ["綠能環保類", "綠能環保"], ["運動休閒類", "運動休閒"],
  ["居家生活類", "居家生活"], ["航運", "航運業"], ["鋼鐵", "鋼鐵工業"], ["網通", "通信網路業"],
  ["光通訊", "通信網路業"], ["機器人", "電機機械"], ["電源與儲能", "電機機械"], ["IC 載板", "電子零組件業"],
  ["IC 設計", "半導體業"], ["半導體", "半導體業"], ["AI 伺服器", "電腦及週邊設備業"],
  ["散熱", "電子零組件業"], ["重電", "電機機械"], ["電源管理", "電子零組件業"], ["被動元件", "電子零組件業"],
  ["載板", "電子零組件業"], ["電腦品牌", "電腦及週邊設備業"], ["電子代工", "其他電子業"]
]);

function normalizeSector(value) {
  const cleaned = cleanName(value);
  if (!cleaned) return "其他";
  return sectorAliases.get(cleaned) || cleaned;
}

function sectorFor(code, fallback) {
  return normalizeSector(sectorOverrides.get(code) || fallback || "其他");
}

function toTaipeiDate(date = new Date()) {
  return new Date(date.toLocaleString("en-US", { timeZone: "Asia/Taipei" }));
}

function addDays(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function twseDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}${month}${day}`;
}

function slashDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}/${month}/${day}`;
}

function isoDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function numberValue(value) {
  if (value === null || value === undefined) return 0;
  const cleaned = String(value)
    .replace(/,/g, "")
    .replace(/X|--|---/g, "")
    .replace(/[^\d.+-]/g, "")
    .trim();
  const parsed = Number(cleaned);
  return Number.isFinite(parsed) ? parsed : 0;
}

function cleanName(value) {
  return String(value || "").replace(/\s+/g, " ").trim();
}

function isCommonStock(code) {
  return /^\d{4}$/.test(code) && !code.startsWith("00") && !code.startsWith("91");
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchJson(url, retries = 2) {
  let lastError;
  for (let attempt = 0; attempt <= retries; attempt += 1) {
    try {
      const response = await fetch(url, {
        headers: {
          "accept": "application/json,text/plain,*/*",
          "user-agent": "tw-stock-ai-radar/1.0"
        }
      });
      if (!response.ok) throw new Error(`${response.status} ${response.statusText}: ${url}`);
      return response.json();
    } catch (error) {
      lastError = error;
      if (attempt < retries) await sleep(450 * (attempt + 1));
    }
  }
  throw lastError;
}

function tableByField(tables, fieldName) {
  return (tables || []).find((table) => Array.isArray(table.fields) && table.fields.includes(fieldName));
}

async function fetchStockInfo() {
  try {
    const payload = await fetchJson("https://api.finmindtrade.com/api/v4/data?dataset=TaiwanStockInfo");
    const info = new Map();
    for (const item of payload.data || []) {
      if (!isCommonStock(item.stock_id)) continue;
      info.set(item.stock_id, {
        name: cleanName(item.stock_name),
        sector: sectorFor(item.stock_id, cleanName(item.industry_category)),
        market: item.type === "tpex" ? "tpex" : "twse"
      });
    }
    return info;
  } catch (error) {
    console.warn(`Stock info fallback: ${error.message}`);
    return new Map();
  }
}

async function fetchTwsePrices(date) {
  const payload = await fetchJson(
    `https://www.twse.com.tw/exchangeReport/MI_INDEX?response=json&date=${twseDate(date)}&type=ALLBUT0999`
  );
  const table = tableByField(payload.tables, "證券代號");
  if (!table || payload.stat !== "OK") return [];

  return table.data
    .filter((row) => isCommonStock(row[0]))
    .map((row) => ({
      code: row[0],
      name: cleanName(row[1]),
      close: numberValue(row[8]),
      open: numberValue(row[5]),
      high: numberValue(row[6]),
      low: numberValue(row[7]),
      change: numberValue(row[10]),
      shares: numberValue(row[2]),
      amount: numberValue(row[4]),
      pe: numberValue(row[15]),
      market: "twse"
    }))
    .filter((stock) => stock.close > 0);
}

async function fetchTpexPrices(date) {
  const payload = await fetchJson(
    `https://www.tpex.org.tw/www/zh-tw/afterTrading/otc?date=${slashDate(date)}&type=EW&response=json`
  );
  const table = tableByField(payload.tables, "代號");
  if (!table) return [];

  return table.data
    .filter((row) => isCommonStock(row[0]))
    .map((row) => ({
      code: row[0],
      name: cleanName(row[1]),
      close: numberValue(row[2]),
      open: numberValue(row[4]),
      high: numberValue(row[5]),
      low: numberValue(row[6]),
      change: numberValue(row[3]),
      shares: numberValue(row[7]),
      amount: numberValue(row[8]),
      pe: 0,
      market: "tpex"
    }))
    .filter((stock) => stock.close > 0);
}

async function fetchPrices(date) {
  const [twse, tpex] = await Promise.allSettled([fetchTwsePrices(date), fetchTpexPrices(date)]);
  return [
    ...(twse.status === "fulfilled" ? twse.value : []),
    ...(tpex.status === "fulfilled" ? tpex.value : [])
  ];
}

function liveDate(value) {
  const text = String(value || "");
  if (!/^\d{8}$/.test(text)) return "";
  return `${text.slice(0, 4)}-${text.slice(4, 6)}-${text.slice(6, 8)}`;
}

function liveChannel(stock) {
  const exchange = stock.market === "tpex" ? "otc" : "tse";
  return `${exchange}_${stock.code}.tw`;
}

function parseLiveQuote(row, fallback) {
  const last = numberValue(row.z) || numberValue(row.pz) || numberValue(row.y) || fallback.close;
  const previousClose = numberValue(row.y) || fallback.close;
  const open = numberValue(row.o) || last;
  const high = numberValue(row.h) || Math.max(open, last);
  const low = numberValue(row.l) || Math.min(open, last);
  const lots = numberValue(row.v) || numberValue(row.tv) || 0;
  const shares = lots > 0 ? lots * 1000 : fallback.shares;
  const amount = shares > 0 ? Math.round(shares * last) : fallback.amount;

  return {
    code: row.c || fallback.code,
    name: cleanName(row.n) || fallback.name,
    close: Math.round(last * 100) / 100,
    open: Math.round(open * 100) / 100,
    high: Math.round(high * 100) / 100,
    low: Math.round(low * 100) / 100,
    change: Math.round((last - previousClose) * 100) / 100,
    shares,
    amount,
    pe: fallback.pe || 0,
    market: row.ex === "otc" ? "tpex" : "twse",
    date: liveDate(row.d)
  };
}

async function fetchLivePrices(basePrices) {
  const fallbackByCode = new Map(basePrices.map((stock) => [stock.code, stock]));
  const channels = basePrices.map(liveChannel);
  const rows = [];

  for (let index = 0; index < channels.length; index += 90) {
    const batch = channels.slice(index, index + 90).join("|");
    try {
      const response = await fetch(
        `https://mis.twse.com.tw/stock/api/getStockInfo.jsp?ex_ch=${encodeURIComponent(batch)}&json=1&delay=0`,
        {
          headers: {
            "accept": "application/json,text/plain,*/*",
            "referer": "https://mis.twse.com.tw/stock/fibest.jsp",
            "user-agent": "Mozilla/5.0 tw-stock-ai-radar/1.0"
          }
        }
      );
      if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
      const payload = JSON.parse((await response.text()).trim());
      rows.push(...(payload.msgArray || []));
    } catch (error) {
      console.warn(`Live quote batch skipped ${index}: ${error.message}`);
    }
    await sleep(140);
  }

  return rows
    .map((row) => {
      const fallback = fallbackByCode.get(row.c);
      if (!fallback) return null;
      const quote = parseLiveQuote(row, fallback);
      return quote.date && quote.close > 0 && quote.high > 0 && quote.low > 0 ? quote : null;
    })
    .filter(Boolean);
}

async function fetchTwseInstitution(date) {
  const payload = await fetchJson(
    `https://www.twse.com.tw/rwd/zh/fund/T86?date=${twseDate(date)}&selectType=ALLBUT0999&response=json`
  );
  if (payload.stat !== "OK" || !Array.isArray(payload.data)) return [];
  return payload.data
    .filter((row) => isCommonStock(row[0]))
    .map((row) => ({
      code: row[0],
      foreign: numberValue(row[4]) / 1000,
      trust: numberValue(row[10]) / 1000,
      dealer: numberValue(row[11]) / 1000,
      total: numberValue(row[18]) / 1000
    }));
}

async function fetchTpexInstitution(date) {
  const payload = await fetchJson(
    `https://www.tpex.org.tw/www/zh-tw/insti/dailyTrade?date=${slashDate(date)}&type=Daily&response=json`
  );
  const table = tableByField(payload.tables, "代號");
  if (!table) return [];
  return table.data
    .filter((row) => isCommonStock(row[0]))
    .map((row) => ({
      code: row[0],
      foreign: numberValue(row[10]) / 1000,
      trust: numberValue(row[13]) / 1000,
      dealer: numberValue(row[22]) / 1000,
      total: numberValue(row[23]) / 1000
    }));
}

async function fetchInstitution(date) {
  let lastRows = [];
  for (let attempt = 0; attempt < 3; attempt += 1) {
    const [twse, tpex] = await Promise.allSettled([fetchTwseInstitution(date), fetchTpexInstitution(date)]);
    const rows = [
      ...(twse.status === "fulfilled" ? twse.value : []),
      ...(tpex.status === "fulfilled" ? tpex.value : [])
    ];
    lastRows = rows;
    if (rows.length >= 1400) return rows;
    await sleep(650 * (attempt + 1));
  }
  return lastRows;
}

async function mapLimit(items, limit, worker) {
  const results = new Array(items.length);
  let nextIndex = 0;
  const workers = Array.from({ length: limit }, async () => {
    while (nextIndex < items.length) {
      const index = nextIndex;
      nextIndex += 1;
      results[index] = await worker(items[index], index);
    }
  });
  await Promise.all(workers);
  return results;
}

async function findLatestTradingDate(today) {
  for (let offset = 0; offset < 14; offset += 1) {
    const date = addDays(today, -offset);
    const prices = await fetchPrices(date);
    if (prices.length >= MIN_COMMON_STOCKS) return { date, prices };
  }
  throw new Error("No recent TWSE/TPEx trading data found.");
}

function pctChange(current, previous) {
  if (!previous || previous <= 0) return 0;
  return Math.round(((current - previous) / previous) * 1000) / 10;
}

function isIsolatedBadBar(previous, current, next) {
  if (!previous || !current || !next) return false;
  const currentClose = Number(current.close);
  const previousClose = Number(previous.close);
  const nextClose = Number(next.close);
  if (![currentClose, previousClose, nextClose].every((value) => Number.isFinite(value) && value > 0)) return true;

  const dropThenRecover = currentClose < previousClose * 0.65 && nextClose > previousClose * 0.82;
  const spikeThenRecover = currentClose > previousClose * 1.55 && nextClose < previousClose * 1.18;
  return dropThenRecover || spikeThenRecover;
}

function cleanHistory(history) {
  return history.filter((item, index, list) => !isIsolatedBadBar(list[index - 1], item, list[index + 1]));
}

function sumFlow(flows, code, days, key = "total") {
  const rows = flows.slice(-days);
  const total = rows.reduce((sum, dayMap) => sum + (dayMap.get(code)?.[key] || 0), 0);
  return Math.round(total);
}

function riskLabel(volatility, pe, mom20) {
  if (volatility >= 9 || pe >= 45 || mom20 < -8) return "高風險";
  if (volatility >= 5 || pe >= 30) return "中性";
  return "低風險";
}

function buildStockRow(price, info, history, flows) {
  history = cleanHistory(history);
  const closes = history.map((item) => item.close);
  const current = price.close;
  const previous = closes.at(-2) || current - price.change;
  const close20 = closes.length > 20 ? closes.at(-21) : closes[0];
  const close60 = closes.length > 60 ? closes.at(-61) : closes[0];
  const rangePct = price.low > 0 ? ((price.high - price.low) / price.close) * 100 : 0;
  const mom20 = pctChange(current, close20);
  const mom60 = pctChange(current, close60);
  const todayPct = pctChange(current, previous);
  const volumeBase = Math.max(1, price.amount / 100000000);
  const volume = Math.round(Math.max(0.45, Math.min(3.2, volumeBase / 8 + Math.abs(todayPct) / 8 + 0.75)) * 100) / 100;

  return {
    code: price.code,
    name: info?.name || price.name,
    sector: sectorFor(price.code, info?.sector),
    price: Math.round(current * 100) / 100,
    market: info?.market || price.market,
    flow5: sumFlow(flows, price.code, 5),
    flow20: sumFlow(flows, price.code, 20),
    flow60: sumFlow(flows, price.code, 60),
    foreign: sumFlow(flows, price.code, 5, "foreign"),
    trust: sumFlow(flows, price.code, 5, "trust"),
    dealer: sumFlow(flows, price.code, 5, "dealer"),
    mom1: todayPct,
    mom20,
    mom60,
    volume,
    volatility: Math.round(Math.max(rangePct, Math.abs(todayPct)) * 10) / 10,
    pe: price.pe || 0,
    risk: riskLabel(Math.max(rangePct, Math.abs(todayPct)), price.pe || 0, mom20),
    history
  };
}

async function main() {
  const today = toTaipeiDate();
  const info = await fetchStockInfo();
  const latest = await findLatestTradingDate(today);
  let latestKey = isoDate(latest.date);
  let effectiveLatestPrices = latest.prices;
  let liveQuoteCount = 0;

  const calendarDates = Array.from({ length: LOOKBACK_CALENDAR_DAYS }, (_, index) =>
    addDays(latest.date, index - LOOKBACK_CALENDAR_DAYS + 1)
  );

  const priceSnapshots = await mapLimit(calendarDates, 4, async (date) => {
    try {
      const prices = await fetchPrices(date);
      return prices.length >= MIN_COMMON_STOCKS ? { date, prices } : null;
    } catch (error) {
      return null;
    }
  });

  const tradingDays = priceSnapshots.filter(Boolean).sort((a, b) => a.date - b.date);
  const priceHistory = new Map();
  for (const snapshot of tradingDays) {
    for (const stock of snapshot.prices) {
      if (!priceHistory.has(stock.code)) priceHistory.set(stock.code, []);
      priceHistory.get(stock.code).push({
        date: isoDate(snapshot.date),
        open: Math.round(stock.open * 100) / 100,
        high: Math.round(stock.high * 100) / 100,
        low: Math.round(stock.low * 100) / 100,
        close: Math.round(stock.close * 100) / 100,
        volume: Math.round(stock.shares / 1000),
        amount: Math.round(stock.amount),
        market: stock.market
      });
    }
  }

  try {
    const livePrices = await fetchLivePrices(latest.prices);
    const liveKey = livePrices[0]?.date || "";
    if (livePrices.length >= MIN_COMMON_STOCKS && liveKey >= latestKey) {
      for (const stock of livePrices) {
        if (!priceHistory.has(stock.code)) priceHistory.set(stock.code, []);
        const history = priceHistory.get(stock.code);
        const liveBar = {
          date: stock.date,
          open: stock.open,
          high: stock.high,
          low: stock.low,
          close: stock.close,
          volume: Math.round(stock.shares / 1000),
          amount: Math.round(stock.amount),
          market: stock.market
        };
        if (history.at(-1)?.date === stock.date) {
          history[history.length - 1] = liveBar;
        } else {
          history.push(liveBar);
        }
      }
      latestKey = liveKey;
      effectiveLatestPrices = livePrices;
      liveQuoteCount = livePrices.length;
    }
  } catch (error) {
    console.warn(`Live quote update skipped: ${error.message}`);
  }

  const institutionDays = tradingDays.slice(-60);
  const rawFlowSnapshots = await mapLimit(institutionDays, 2, async (snapshot) => {
    try {
      const rows = await fetchInstitution(snapshot.date);
      const map = new Map(rows.map((row) => [row.code, row]));
      return map.size >= 1400 ? { date: snapshot.date, map } : null;
    } catch (error) {
      console.warn(`Institution data skipped ${isoDate(snapshot.date)}: ${error.message}`);
      return null;
    }
  });
  const flowSnapshots = rawFlowSnapshots.filter(Boolean).map((snapshot) => snapshot.map);

  const latestPrices = new Map(effectiveLatestPrices.map((stock) => [stock.code, stock]));
  const stocks = [...latestPrices.values()]
    .map((price) => {
      const history = priceHistory.get(price.code) || [{
        date: latestKey,
        open: price.open,
        high: price.high,
        low: price.low,
        close: price.close,
        volume: Math.round(price.shares / 1000),
        amount: Math.round(price.amount),
        market: price.market
      }];
      return buildStockRow(price, info.get(price.code), history, flowSnapshots);
    })
    .filter((stock) => stock.name && stock.price > 0)
    .sort((a, b) => Math.abs(b.flow5) - Math.abs(a.flow5));

  const payload = {
    updatedAt: new Date().toISOString(),
    dataDate: latestKey,
    timezone: "Asia/Taipei",
    source: liveQuoteCount ? "TWSE + TPEx official APIs + TWSE MIS live quotes" : "TWSE + TPEx official APIs",
    liveQuoteCount,
    note: "價格使用上市/上櫃官方收盤行情；法人使用三大法人日報；20/60 日漲幅以近交易日收盤價估算。",
    stocks
  };

  await fs.mkdir(path.dirname(OUTPUT_FILE), { recursive: true });
  await fs.writeFile(OUTPUT_FILE, `${JSON.stringify(payload, null, 2)}\n`, "utf8");

  console.log(`Data date: ${latestKey}`);
  console.log(`Trading days loaded: ${tradingDays.length}`);
  console.log(`Stocks written: ${stocks.length}`);
  console.log(`Wrote ${OUTPUT_FILE}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
