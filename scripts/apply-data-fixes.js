const fs = require("node:fs/promises");
const path = require("node:path");

const DATA_FILE = path.join(__dirname, "..", "outputs", "data", "latest.json");

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
  return sectorAliases.get(value) || value || "其他";
}

function isIsolatedBadBar(previous, current, next) {
  if (!previous || !current || !next) return false;
  const currentClose = Number(current.close);
  const previousClose = Number(previous.close);
  const nextClose = Number(next.close);
  if (![currentClose, previousClose, nextClose].every((value) => Number.isFinite(value) && value > 0)) return true;
  return (currentClose < previousClose * 0.65 && nextClose > previousClose * 0.82) ||
    (currentClose > previousClose * 1.55 && nextClose < previousClose * 1.18);
}

async function main() {
  const payload = JSON.parse(await fs.readFile(DATA_FILE, "utf8"));
  let removedBars = 0;
  let relabeled = 0;

  for (const stock of payload.stocks) {
    const sector = normalizeSector(stock.sector);
    if (stock.sector !== sector) {
      stock.sector = sector;
      relabeled += 1;
    }

    if (Array.isArray(stock.history)) {
      const before = stock.history.length;
      stock.history = stock.history.filter((item, index, list) => !isIsolatedBadBar(list[index - 1], item, list[index + 1]));
      removedBars += before - stock.history.length;
    }
  }

  payload.updatedAt = new Date().toISOString();
  payload.note = `${payload.note || ""} Data fixes: removed isolated bad OHLC bars and applied thematic sector labels.`;
  await fs.writeFile(DATA_FILE, `${JSON.stringify(payload)}\n`, "utf8");
  console.log(`Relabeled stocks: ${relabeled}`);
  console.log(`Removed bad bars: ${removedBars}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
