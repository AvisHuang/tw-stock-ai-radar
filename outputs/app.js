let stocks = [
  { code: "2330", name: "台積電", sector: "半導體", price: 984, flow5: 8420, foreign: 6200, trust: 980, dealer: 1240, mom20: 9.6, mom60: 18.2, volume: 1.42, volatility: 18, pe: 24 },
  { code: "2317", name: "鴻海", sector: "電子代工", price: 181, flow5: 4120, foreign: 3300, trust: 520, dealer: 300, mom20: 6.8, mom60: 11.4, volume: 1.28, volatility: 22, pe: 15 },
  { code: "2454", name: "聯發科", sector: "IC 設計", price: 1315, flow5: 1880, foreign: 900, trust: 650, dealer: 330, mom20: 8.2, mom60: 14.8, volume: 1.11, volatility: 25, pe: 21 },
  { code: "2382", name: "廣達", sector: "AI 伺服器", price: 286, flow5: 5340, foreign: 4100, trust: 780, dealer: 460, mom20: 11.4, mom60: 22.5, volume: 1.63, volatility: 28, pe: 19 },
  { code: "3231", name: "緯創", sector: "AI 伺服器", price: 122, flow5: 3620, foreign: 2600, trust: 430, dealer: 590, mom20: 12.1, mom60: 25.3, volume: 1.82, volatility: 34, pe: 18 },
  { code: "2308", name: "台達電", sector: "電源管理", price: 372, flow5: 2190, foreign: 1400, trust: 610, dealer: 180, mom20: 5.4, mom60: 9.2, volume: 1.08, volatility: 17, pe: 27 },
  { code: "2881", name: "富邦金", sector: "金融", price: 83.6, flow5: 1550, foreign: 1100, trust: 290, dealer: 160, mom20: 3.1, mom60: 7.6, volume: 0.96, volatility: 12, pe: 13 },
  { code: "2603", name: "長榮", sector: "航運", price: 183, flow5: -1480, foreign: -2100, trust: 360, dealer: 260, mom20: -2.8, mom60: 6.1, volume: 1.36, volatility: 31, pe: 8 },
  { code: "6505", name: "台塑化", sector: "塑化", price: 66.2, flow5: -920, foreign: -800, trust: -180, dealer: 60, mom20: -4.1, mom60: -8.7, volume: 0.88, volatility: 15, pe: 31 },
  { code: "3661", name: "世芯-KY", sector: "IC 設計", price: 3180, flow5: 760, foreign: 420, trust: 210, dealer: 130, mom20: 14.7, mom60: 31.8, volume: 1.74, volatility: 41, pe: 36 },
  { code: "3017", name: "奇鋐", sector: "散熱", price: 648, flow5: 2840, foreign: 2050, trust: 550, dealer: 240, mom20: 13.3, mom60: 29.1, volume: 1.69, volatility: 32, pe: 25 },
  { code: "8046", name: "南電", sector: "載板", price: 172, flow5: -360, foreign: -620, trust: 120, dealer: 140, mom20: 1.4, mom60: 4.2, volume: 1.03, volatility: 29, pe: 22 },
  { code: "2379", name: "瑞昱", sector: "IC 設計", price: 515, flow5: 1320, foreign: 780, trust: 410, dealer: 130, mom20: 7.1, mom60: 15.3, volume: 1.22, volatility: 27, pe: 20 },
  { code: "2357", name: "華碩", sector: "品牌電腦", price: 612, flow5: 980, foreign: 560, trust: 330, dealer: 90, mom20: 4.8, mom60: 12.2, volume: 1.05, volatility: 20, pe: 16 },
  { code: "3034", name: "聯詠", sector: "IC 設計", price: 548, flow5: -1180, foreign: -1430, trust: 180, dealer: 70, mom20: -1.2, mom60: 2.5, volume: 0.92, volatility: 24, pe: 14 },
  { code: "5871", name: "中租-KY", sector: "金融", price: 148, flow5: -680, foreign: -760, trust: 40, dealer: 40, mom20: -3.6, mom60: -5.2, volume: 0.84, volatility: 16, pe: 11 },
  { code: "2345", name: "智邦", sector: "網通", price: 745, flow5: 2460, foreign: 1700, trust: 520, dealer: 240, mom20: 10.8, mom60: 23.6, volume: 1.58, volatility: 30, pe: 26 },
  { code: "6669", name: "緯穎", sector: "AI 伺服器", price: 2875, flow5: 1120, foreign: 620, trust: 360, dealer: 140, mom20: 15.2, mom60: 34.1, volume: 1.66, volatility: 38, pe: 31 },
  { code: "3711", name: "日月光投控", sector: "半導體", price: 168, flow5: 2980, foreign: 2250, trust: 420, dealer: 310, mom20: 5.9, mom60: 13.5, volume: 1.18, volatility: 19, pe: 17 },
  { code: "2327", name: "國巨", sector: "被動元件", price: 712, flow5: 820, foreign: 510, trust: 210, dealer: 100, mom20: 6.4, mom60: 10.8, volume: 1.14, volatility: 24, pe: 18 },
  { code: "6415", name: "矽力-KY", sector: "IC 設計", price: 428, flow5: 640, foreign: 380, trust: 170, dealer: 90, mom20: 9.1, mom60: 16.6, volume: 1.31, volatility: 36, pe: 33 },
  { code: "2002", name: "中鋼", sector: "鋼鐵", price: 24.8, flow5: -1860, foreign: -1420, trust: -260, dealer: -180, mom20: -1.8, mom60: -3.4, volume: 0.9, volatility: 13, pe: 28 },
  { code: "1101", name: "台泥", sector: "水泥", price: 34.6, flow5: 420, foreign: 280, trust: 90, dealer: 50, mom20: 1.8, mom60: 3.9, volume: 0.98, volatility: 11, pe: 19 },
  { code: "1519", name: "華城", sector: "重電", price: 721, flow5: 1760, foreign: 980, trust: 560, dealer: 220, mom20: 18.4, mom60: 38.2, volume: 1.93, volatility: 43, pe: 35 }
];

const DISPLAY_LIMIT = 20;
let dataMeta = {
  source: "內建展示資料",
  updatedAt: new Date().toISOString()
};

const weights = {
  balanced: { flow: 0.34, momentum: 0.32, volume: 0.18, risk: 0.16, label: "均衡策略" },
  momentum: { flow: 0.2, momentum: 0.5, volume: 0.18, risk: 0.12, label: "動量策略" },
  chip: { flow: 0.52, momentum: 0.2, volume: 0.14, risk: 0.14, label: "籌碼策略" }
};

const viewCopy = {
  overview: { title: "台股 AI 監測主頁", subtitle: "AI 判斷基準：法人、動能、MACD、均線、量能、風險、回測。", table: "候選清單" },
  strong: { title: "強勢股", subtitle: "可切換 1、3、5、10、20、60 日區間，找出各時間週期的強勢排行。", table: "強勢股排行" },
  sectors: { title: "產業強勢度", subtitle: "把個股訊號彙整成產業分數，快速判斷資金正在流向哪裡。", table: "產業成分股" },
  institution: { title: "法人買賣超", subtitle: "監測三大法人資金動作，可切換買超或賣超排行，並依 1、3、5、10、20、60 日期間排序。", table: "法人買賣超排行" },
  momentum: { title: "動量排行", subtitle: "依 20 日與 60 日價格動量、量能變化排序，觀察趨勢延續。", table: "動量排行" },
  screener: { title: "智慧選股器", subtitle: "用產業、法人方向、動量、PE、量能與風險建立每日候選名單。", table: "智慧篩選結果" },
  analysis: { title: "個股分析", subtitle: "輸入股票代碼，整合均線方向、MACD、RSI、法人籌碼、主力估算與量化買賣區間。", table: "個股分析" },
  ai: { title: "AI 選股", subtitle: "以籌碼、動量、量能與風險加權計算 AI 分數，產生每日追蹤清單。", table: "AI 選股清單" },
  qa: { title: "AI 助手", subtitle: "在網頁內直接詢問強勢股、產業輪動、法人買賣超與 AI 選股理由。", table: "問答參考清單" }
};

const state = {
  view: "overview",
  mode: "balanced",
  minScore: 0,
  minFlow: -5000,
  search: "",
  strongPeriod: 20,
  strongLimit: 10,
  institutionDirection: "buy",
  buyPeriod: 5,
  buyLimit: 10
};

const screenerState = {
  activeGroup: "suggested",
  activeMetric: "score",
  conditions: [],
  hasRun: false
};

const conditionGroups = {
  suggested: {
    title: "建議策略",
    hint: "常用台股短線與波段篩選條件",
    metrics: ["score", "flow5", "mom20", "volume", "risk"]
  },
  chip: {
    title: "籌碼法人",
    hint: "用三大法人與外資、投信資金流向篩選",
    metrics: ["flow5", "flow20", "flow60", "foreign", "trust", "dealer"]
  },
  technical: {
    title: "技術指標",
    hint: "用動量、MACD、均線、量能與回測勝率篩選",
    metrics: ["mom20", "mom60", "momentumPower", "macdValue", "maBullishCount", "backtestWinRate", "volume"]
  },
  basic: {
    title: "基本面",
    hint: "用產業、PE、波動與風險做基本篩選",
    metrics: ["sector", "pe", "volatility", "risk"]
  }
};

const conditionMetrics = {
  score: { label: "AI 分數", type: "number", defaultValue: 70, value: (stock) => stock.score },
  flow5: { label: "法人 5 日買賣超", type: "number", defaultValue: 1000, value: (stock) => stock.flow5, suffix: "張" },
  flow20: { label: "法人 20 日買賣超", type: "number", defaultValue: 3000, value: (stock) => stock.flow20, suffix: "張" },
  flow60: { label: "法人 60 日買賣超", type: "number", defaultValue: 8000, value: (stock) => stock.flow60, suffix: "張" },
  foreign: { label: "外資買賣超", type: "number", defaultValue: 1000, value: (stock) => stock.foreign, suffix: "張" },
  trust: { label: "投信買賣超", type: "number", defaultValue: 300, value: (stock) => stock.trust, suffix: "張" },
  dealer: { label: "自營商買賣超", type: "number", defaultValue: 200, value: (stock) => stock.dealer, suffix: "張" },
  mom20: { label: "20 日漲幅", type: "number", defaultValue: 5, value: (stock) => stock.mom20, suffix: "%" },
  mom60: { label: "60 日漲幅", type: "number", defaultValue: 10, value: (stock) => stock.mom60, suffix: "%" },
  momentumPower: { label: "動能分數", type: "number", defaultValue: 65, value: (stock) => momentumPower(stock) },
  macdValue: { label: "MACD 強度", type: "number", defaultValue: 3, value: (stock) => stock.macdValue },
  maBullishCount: { label: "均線多頭數", type: "number", defaultValue: 2, value: (stock) => stock.maBullishCount },
  backtestWinRate: { label: "回測勝率", type: "number", defaultValue: 55, value: (stock) => stock.backtestWinRate, suffix: "%" },
  volume: { label: "量能倍數", type: "number", defaultValue: 1.2, value: (stock) => stock.volume, suffix: "倍" },
  pe: { label: "PE 本益比", type: "number", defaultValue: 30, value: (stock) => stock.pe },
  volatility: { label: "波動率", type: "number", defaultValue: 30, value: (stock) => stock.volatility },
  sector: { label: "產業", type: "select", defaultValue: "", value: (stock) => stock.sector, options: () => [...new Set(stocks.map((stock) => stock.sector))].sort((a, b) => a.localeCompare(b, "zh-Hant")) },
  risk: { label: "風險標籤", type: "select", defaultValue: "可追蹤", value: (stock) => stock.risk, options: () => ["可追蹤", "觀望", "高波動"] }
};

const operatorOptions = {
  number: [
    { value: "gte", label: "大於等於" },
    { value: "lte", label: "小於等於" },
    { value: "gt", label: "大於" },
    { value: "lt", label: "小於" }
  ],
  select: [{ value: "eq", label: "等於" }]
};

const els = {
  table: document.querySelector("#stockTable"),
  scoreRange: document.querySelector("#scoreRange"),
  flowRange: document.querySelector("#flowRange"),
  scoreOutput: document.querySelector("#scoreOutput"),
  flowOutput: document.querySelector("#flowOutput"),
  searchInput: document.querySelector("#searchInput"),
  refreshButton: document.querySelector("#refreshButton"),
  updatedAt: document.querySelector("#updatedAt"),
  candidateCount: document.querySelector("#candidateCount"),
  avgScore: document.querySelector("#avgScore"),
  netFlow: document.querySelector("#netFlow"),
  hotSector: document.querySelector("#hotSector"),
  capitalSector: document.querySelector("#capitalSector"),
  capitalSectorNote: document.querySelector("#capitalSectorNote"),
  institutionTotal: document.querySelector("#institutionTotal"),
  topPick: document.querySelector("#topPick"),
  topBadge: document.querySelector("#topBadge"),
  filterLabel: document.querySelector("#filterLabel"),
  viewTitle: document.querySelector("#viewTitle"),
  viewSubtitle: document.querySelector("#viewSubtitle"),
  tableTitle: document.querySelector("#tableTitle"),
  sectorList: document.querySelector("#sectorList"),
  sectorFilter: document.querySelector("#sectorFilter"),
  flowFilter: document.querySelector("#flowFilter"),
  momentumRange: document.querySelector("#momentumRange"),
  momentumOutput: document.querySelector("#momentumOutput"),
  peRange: document.querySelector("#peRange"),
  peOutput: document.querySelector("#peOutput"),
  riskFilter: document.querySelector("#riskFilter"),
  volumeFilter: document.querySelector("#volumeFilter"),
  conditionGroupTitle: document.querySelector("#conditionGroupTitle"),
  conditionGroupHint: document.querySelector("#conditionGroupHint"),
  conditionMetricList: document.querySelector("#conditionMetricList"),
  conditionOperator: document.querySelector("#conditionOperator"),
  conditionValue: document.querySelector("#conditionValue"),
  addConditionButton: document.querySelector("#addConditionButton"),
  clearConditionsButton: document.querySelector("#clearConditionsButton"),
  runScreenerButton: document.querySelector("#runScreenerButton"),
  selectedConditions: document.querySelector("#selectedConditions"),
  stockAnalysisForm: document.querySelector("#stockAnalysisForm"),
  analysisCodeInput: document.querySelector("#analysisCodeInput"),
  stockAnalysisResult: document.querySelector("#stockAnalysisResult"),
  strongLimitInput: document.querySelector("#strongLimitInput"),
  strongSearchButton: document.querySelector("#strongSearchButton"),
  buyLimitInput: document.querySelector("#buyLimitInput"),
  buySearchButton: document.querySelector("#buySearchButton"),
  institutionHint: document.querySelector("#institutionHint"),
  momentumHeader: document.querySelector("#momentumHeader"),
  flowHeader: document.querySelector("#flowHeader"),
  chatLog: document.querySelector("#chatLog"),
  chatForm: document.querySelector("#chatForm"),
  chatInput: document.querySelector("#chatInput"),
  canvas: document.querySelector("#signalCanvas")
};

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function formatNumber(value) {
  return new Intl.NumberFormat("zh-TW").format(Math.round(value));
}

function formatPercent(value) {
  return `${value >= 0 ? "+" : ""}${value.toFixed(1)}%`;
}

function roundOne(value) {
  return Math.round(value * 10) / 10;
}

function periodMomentum(stock, period) {
  if (period === 20) return stock.mom20;
  if (period === 60) return stock.mom60;

  const flowPulse = clamp(stock.flow5 / 5000, -1.2, 1.8);
  const volumePulse = clamp((stock.volume - 1) * 2, -0.6, 1.8);
  const pulse = flowPulse + volumePulse;

  if (period === 1) return roundOne(stock.mom20 * 0.12 + pulse * 0.65);
  if (period === 3) return roundOne(stock.mom20 * 0.22 + pulse * 0.85);
  if (period === 5) return roundOne(stock.mom20 * 0.34 + pulse * 1.05);
  if (period === 10) return roundOne(stock.mom20 * 0.58 + stock.mom60 * 0.08 + pulse * 0.8);
  return stock.mom20;
}

function estimateFlow(stock, days) {
  if (days === 1) return Math.round(stock.flow5 * 0.22 + stock.dealer * 0.2);
  if (days === 3) return Math.round(stock.flow5 * 0.62 + stock.trust * 0.25);
  if (days === 5) return stock.flow5;
  if (days === 10) return Math.round(stock.flow5 * 1.75 + stock.trust * 0.6 + stock.dealer * 0.35);
  if (days === 20) return Math.round(stock.flow5 * 3.1 + stock.trust * 1.4 + stock.dealer * 0.8);
  if (days === 60) return Math.round(stock.flow5 * 7.2 + stock.foreign * 1.6 + stock.trust * 2.2);
  return stock.flow5;
}

function momentumPower(stock) {
  const gain = stock.activeMomentum ?? stock.mom20;
  return Math.round(clamp(gain * 4 + stock.volume * 18 + stock.score * 0.22, 0, 100));
}

function technicalProfile(stock) {
  const ma5 = roundOne(stock.price * (1 + stock.mom20 / 100 * 0.12));
  const ma10 = roundOne(stock.price * (1 + stock.mom20 / 100 * 0.06));
  const ma20 = roundOne(stock.price * (1 - stock.mom20 / 100 * 0.1));
  const ma60 = roundOne(stock.price * (1 - stock.mom60 / 100 * 0.18));
  const isCoreBullTrend = ma5 > ma10 && ma10 > ma20 && ma20 > ma60;
  const maBullishCount = [ma5 > ma10, ma10 > ma20, ma20 > ma60].filter(Boolean).length;
  const macdValue = roundOne(stock.mom20 * 0.45 + stock.mom60 * 0.18 + (stock.volume - 1) * 5);
  const macdSignal = macdValue >= 5 ? "MACD 強多" : macdValue >= 0 ? "MACD 偏多" : "MACD 偏弱";
  const trendText = isCoreBullTrend ? "均線多頭排列" : maBullishCount === 2 ? "均線偏多" : "均線未轉強";
  const backtestWinRate = Math.round(clamp(48 + stock.mom20 * 1.2 + stock.volume * 5 - stock.volatility * 0.35, 35, 78));
  const techScore = Math.round(clamp(maBullishCount * 18 + (isCoreBullTrend ? 12 : -8) + macdValue * 2.2 + stock.volume * 12 + backtestWinRate * 0.25, 0, 100));

  return {
    ma5,
    ma10,
    ma20,
    ma60,
    isCoreBullTrend,
    maBullishCount,
    macdValue,
    macdSignal,
    trendText,
    backtestWinRate,
    techScore
  };
}

function aiPickScore(stock) {
  const profile = technicalProfile(stock);
  const chipScore = clamp((stock.flow5 + 2500) / 95, 0, 100);
  const momentumScore = clamp(stock.mom20 * 4 + stock.mom60 * 1.25, 0, 100);
  const riskPenalty = stock.risk === "高波動" ? 12 : stock.risk === "觀望" ? 8 : 0;
  const trendGate = profile.isCoreBullTrend ? 0 : 45;
  return Math.round(clamp(stock.score * 0.28 + chipScore * 0.22 + momentumScore * 0.2 + profile.techScore * 0.24 - riskPenalty - trendGate, 0, 100));
}

function rsiValue(stock) {
  return Math.round(clamp(50 + stock.mom20 * 1.25 + stock.mom60 * 0.35 + (stock.volume - 1) * 8 - stock.volatility * 0.22, 18, 86));
}

function mainForceFlow(stock) {
  return Math.round(stock.foreign * 0.35 + stock.trust * 0.7 + stock.dealer * 0.65 + stock.flow5 * 0.28);
}

function technicalSummary(stock) {
  if (stock.isCoreBullTrend && stock.macdValue > 0 && rsiValue(stock) < 78) return "5、10、20、60 日均線呈現多頭排列，多方趨勢完整";
  if (!stock.isCoreBullTrend && stock.macdValue >= 0) return "尚未符合 5、10、20、60 日均線多頭排列，因此不列為正式看多推薦";
  if (stock.macdValue < 0 || stock.mom20 < 0) return "技術面偏弱，先以反彈或整理看待";
  return "技術面中性，等待價格突破或籌碼轉強";
}

function chipSummary(stock) {
  const force = mainForceFlow(stock);
  if (stock.flow5 > 0 && force > 0) return "法人與主力估算同步偏買，籌碼面加分";
  if (stock.flow5 > 0 && force <= 0) return "法人偏買，但主力估算未同步，追價要保守";
  if (stock.flow5 < 0 && force < 0) return "法人與主力估算同步調節，短線風險較高";
  return "籌碼分歧，適合等待更明確方向";
}

function tradePlan(stock) {
  const rsi = rsiValue(stock);
  const trendBonus = stock.maBullishCount === 3 ? 0.02 : stock.maBullishCount === 2 ? 0.01 : -0.005;
  const riskBuffer = clamp(stock.volatility / 100 * 0.32, 0.025, 0.1);
  const support = roundOne(Math.min(stock.ma20, stock.price * (1 - riskBuffer)));
  const ma20DeductionPrice = roundOne(stock.price / (1 + stock.mom20 / 100));
  const buyLow = roundOne(support * (1 - 0.012));
  const buyHigh = roundOne(Math.min(stock.price * (1 - 0.015), stock.ma10 * (1 + 0.006)));
  const resistance = roundOne(stock.price * (1 + clamp(stock.mom20 / 100 * 0.42 + trendBonus, 0.035, 0.16)));
  const smallStopLoss = ma20DeductionPrice;
  const bigStopLoss = stock.ma60;
  const sellLow = roundOne(resistance * (1 - 0.012));
  const sellHigh = roundOne(resistance * (1 + 0.018));
  const action =
    stock.isCoreBullTrend && stock.score >= 72 && stock.flow5 > 0 && stock.macdValue > 0 && rsi < 76
      ? "偏多觀察"
      : stock.flow5 < 0 || stock.macdValue < 0
        ? "保守觀望"
        : "區間操作";

  return { action, buyLow, buyHigh, sellLow, sellHigh, smallStopLoss, bigStopLoss, ma20DeductionPrice, resistance, support };
}

function analysisScore(stock) {
  const rsi = rsiValue(stock);
  const forceScore = clamp((mainForceFlow(stock) + 2500) / 70, 0, 100);
  const rsiScore = rsi > 78 ? 48 : rsi < 35 ? 45 : 78;
  return Math.round(clamp(stock.score * 0.3 + stock.techScore * 0.24 + forceScore * 0.22 + rsiScore * 0.12 + stock.backtestWinRate * 0.12, 0, 100));
}

function scoreStock(stock) {
  const w = weights[state.mode];
  const flowScore = clamp((stock.flow5 + 3000) / 120, 0, 100);
  const momentumScore = clamp((stock.mom20 + 8) * 3.4 + stock.mom60 * 0.9, 0, 100);
  const volumeScore = clamp(stock.volume * 55, 0, 100);
  const riskScore = clamp(100 - stock.volatility * 1.7 - Math.max(stock.pe - 28, 0) * 1.1, 0, 100);

  return Math.round(flowScore * w.flow + momentumScore * w.momentum + volumeScore * w.volume + riskScore * w.risk);
}

function enrich(stock) {
  const score = scoreStock(stock);
  const strength = Math.round(score * 0.45 + clamp(stock.mom20 * 5, -30, 70) + clamp(stock.volume * 12, 0, 24));
  const risk =
    stock.volatility > 35 || stock.pe > 34
      ? "高波動"
      : stock.flow5 < 0 || stock.mom20 < 0
        ? "觀望"
        : "可追蹤";
  const profile = technicalProfile(stock);
  return {
    ...stock,
    score,
    aiPickScore: aiPickScore({ ...stock, score, risk }),
    strength,
    risk,
    ...profile,
    flow20: estimateFlow(stock, 20),
    flow60: estimateFlow(stock, 60)
  };
}

function baseFilter(list) {
  const keyword = state.search.trim().toLowerCase();
  return list
    .filter((stock) => stock.score >= state.minScore)
    .filter((stock) => stock.flow5 >= state.minFlow)
    .filter((stock) => {
      if (!keyword) return true;
      return stock.code.includes(keyword) || stock.name.toLowerCase().includes(keyword) || stock.sector.toLowerCase().includes(keyword);
    });
}

function normalizeConditionValue(metric, rawValue) {
  if (metric.type === "number") return Number(rawValue);
  return String(rawValue);
}

function compareCondition(stockValue, operator, conditionValue, type) {
  if (type === "number") {
    const left = Number(stockValue);
    const right = Number(conditionValue);
    if (operator === "gte") return left >= right;
    if (operator === "lte") return left <= right;
    if (operator === "gt") return left > right;
    if (operator === "lt") return left < right;
    return left === right;
  }
  return String(stockValue) === String(conditionValue);
}

function conditionText(condition) {
  const metric = conditionMetrics[condition.metric];
  const operator = operatorOptions[metric.type].find((item) => item.value === condition.operator);
  return `${metric.label} ${operator?.label || ""} ${condition.value}${metric.suffix || ""}`;
}

function applyCustomConditions(list) {
  return list.filter((stock) =>
    screenerState.conditions.every((condition) => {
      const metric = conditionMetrics[condition.metric];
      return compareCondition(metric.value(stock), condition.operator, condition.value, metric.type);
    })
  );
}

function getViewStocks() {
  let list = stocks.map(enrich);
  let result;

  if (state.view === "strong") {
    list = list
      .map((stock) => ({ ...stock, activeMomentum: periodMomentum(stock, state.strongPeriod) }))
      .filter((stock) => stock.activeMomentum > 0);
    result = baseFilter(list).sort((a, b) => b.activeMomentum - a.activeMomentum || b.volume - a.volume);
    return result.slice(0, state.strongLimit);
  }

  if (state.view === "institution") {
    list = list
      .map((stock) => ({ ...stock, activeFlow: estimateFlow(stock, state.buyPeriod) }))
      .filter((stock) => (state.institutionDirection === "buy" ? stock.activeFlow > 0 : stock.activeFlow < 0));
    result = baseFilter(list).sort((a, b) => {
      if (state.institutionDirection === "buy") return b.activeFlow - a.activeFlow || b.score - a.score;
      return a.activeFlow - b.activeFlow || b.volatility - a.volatility;
    });
    return result.slice(0, state.buyLimit);
  }

  if (state.view === "momentum") {
    list = list.filter((stock) => stock.mom20 > 0 || stock.mom60 > 0);
    result = baseFilter(list).sort((a, b) => b.mom20 + b.mom60 * 0.35 - (a.mom20 + a.mom60 * 0.35));
    return result.slice(0, DISPLAY_LIMIT);
  }

  if (state.view === "screener") {
    list = screenerState.hasRun ? applyCustomConditions(list) : list;
    result = baseFilter(list).sort((a, b) => b.score - a.score || b.mom20 - a.mom20);
    return result.slice(0, DISPLAY_LIMIT);
  }

  if (state.view === "ai") {
    result = baseFilter(list).sort((a, b) => b.score - a.score || b.flow5 - a.flow5);
    return result.slice(0, DISPLAY_LIMIT);
  }

  if (state.view === "qa") {
    result = baseFilter(list).sort((a, b) => b.score - a.score || b.flow5 - a.flow5);
    return result.slice(0, DISPLAY_LIMIT);
  }

  if (state.view === "sectors") {
    result = baseFilter(list).sort((a, b) => b.score - a.score || b.flow5 - a.flow5);
    return result.slice(0, DISPLAY_LIMIT);
  }

  result = baseFilter(list).sort((a, b) => b.score - a.score || b.strength - a.strength);
  return result.slice(0, DISPLAY_LIMIT);
}

function getSectors() {
  const grouped = stocks.map(enrich).reduce((map, stock) => {
    if (!map[stock.sector]) map[stock.sector] = [];
    map[stock.sector].push(stock);
    return map;
  }, {});

  return Object.entries(grouped)
    .map(([sector, members]) => {
      const avgScore = members.reduce((sum, stock) => sum + stock.score, 0) / members.length;
      const avgMomentum = members.reduce((sum, stock) => sum + stock.mom20, 0) / members.length;
      const flow = members.reduce((sum, stock) => sum + stock.flow5, 0);
      const sectorScore = Math.round(avgScore * 0.55 + clamp(avgMomentum * 3, -25, 40) + clamp(flow / 350, -15, 25));
      return { sector, members, avgScore, avgMomentum, flow, sectorScore };
    })
    .sort((a, b) => b.sectorScore - a.sectorScore);
}

function riskClass(risk) {
  if (risk === "可追蹤") return "good";
  if (risk === "觀望") return "watch";
  return "bad";
}

function renderTable(list) {
  if (!list.length) {
    els.table.innerHTML = `<tr><td class="empty" colspan="9">目前沒有股票符合條件，可以降低 AI 分數、調整法人買賣超門檻，或切換其他功能。</td></tr>`;
    return;
  }

  els.table.innerHTML = list
    .map(
      (stock, index) => `
        <tr>
          <td><span class="rank-number">${index + 1}</span></td>
          <td>
            <div class="stock-cell">
              <strong>${stock.name}</strong>
              <span>${stock.code} · ${stock.price} 元</span>
            </div>
          </td>
          <td>${stock.sector}</td>
          <td class="${(stock.activeMomentum ?? stock.mom20) >= 0 ? "positive" : "negative"}">${formatPercent(stock.activeMomentum ?? stock.mom20)}</td>
          <td class="${(stock.activeFlow ?? stock.flow5) >= 0 ? "positive" : "negative"}">${(stock.activeFlow ?? stock.flow5) >= 0 ? "+" : ""}${formatNumber(stock.activeFlow ?? stock.flow5)} 張</td>
          <td class="${stock.flow20 >= 0 ? "positive" : "negative"}">${stock.flow20 >= 0 ? "+" : ""}${formatNumber(stock.flow20)} 張</td>
          <td class="${stock.flow60 >= 0 ? "positive" : "negative"}">${stock.flow60 >= 0 ? "+" : ""}${formatNumber(stock.flow60)} 張</td>
          <td><span class="tag ${momentumPower(stock) >= 70 ? "good" : "watch"}">${momentumPower(stock)}</span></td>
          <td><span class="tag good">${stock.score}</span></td>
        </tr>
      `
    )
    .join("");
}

function renderTopPick(list) {
  const picks = stocks
    .map(enrich)
    .filter((stock) => stock.isCoreBullTrend)
    .sort((a, b) => b.aiPickScore - a.aiPickScore || b.flow5 - a.flow5)
    .slice(0, 3);
  if (!picks.length) {
    els.topBadge.textContent = "--";
    els.topPick.innerHTML = `
      <div class="empty-condition">
        <strong>目前沒有符合核心均線多頭排列的標的</strong>
        <span>推薦候選必須先符合 5 日線 > 10 日線 > 20 日線 > 60 日線，再看法人、MACD、RSI 與量能。</span>
      </div>
    `;
    return;
  }
  const best = picks[0];
  els.topBadge.textContent = `${best.aiPickScore} 分`;
  els.topPick.innerHTML = picks
    .map(
      (stock, index) => `
        <article class="pick-card">
          <div class="pick-card-head">
            <span class="pick-rank">Top ${index + 1}</span>
            <span class="score-badge">${stock.aiPickScore}</span>
          </div>
          <div class="pick-name">
            <strong>${stock.name}</strong>
            <span class="pick-code">${stock.code}</span>
          </div>
          <div class="pick-metrics">
            <span>${stock.sector}</span>
            <span>${stock.macdSignal}</span>
            <span>${stock.trendText}</span>
            <span>回測勝率 ${stock.backtestWinRate}%</span>
          </div>
          <ul class="reason-list">
            <li>法人近 5 日${stock.flow5 >= 0 ? "買超" : "賣超"} ${formatNumber(Math.abs(stock.flow5))} 張，20 日動量 ${formatPercent(stock.mom20)}。</li>
            <li>核心均線：MA5 ${stock.ma5} > MA10 ${stock.ma10} > MA20 ${stock.ma20} > MA60 ${stock.ma60}。</li>
            <li>AI 判斷：通過均線多頭門檻，技術分 ${stock.techScore}、風險「${stock.risk}」。</li>
          </ul>
        </article>
      `
    )
    .join("");
}

function renderMetrics(list, sectors) {
  const avg = list.length ? list.reduce((sum, stock) => sum + stock.score, 0) / list.length : 0;
  const netFlow = list.reduce((sum, stock) => sum + stock.flow5, 0);
  const hotSector = sectors[0]?.sector || "--";

  els.candidateCount.textContent = list.length;
  els.avgScore.textContent = Math.round(avg);
  els.netFlow.textContent = `${netFlow >= 0 ? "+" : ""}${formatNumber(netFlow)}`;
  els.hotSector.textContent = hotSector;
}

function renderMarketBrief(sectors) {
  if (!els.capitalSector) return;
  const sector = sectors[0];
  const totalFlow = stocks.reduce((sum, stock) => sum + stock.flow5, 0);
  els.capitalSector.textContent = sector?.sector || "--";
  els.capitalSectorNote.textContent = sector
    ? `產業強勢分數 ${sector.sectorScore}，法人${sector.flow >= 0 ? "買超" : "賣超"} ${formatNumber(Math.abs(sector.flow))} 張`
    : "尚無產業資料";
  els.institutionTotal.textContent = `${totalFlow >= 0 ? "+" : ""}${formatNumber(totalFlow)} 張`;
  els.institutionTotal.className = totalFlow >= 0 ? "positive" : "negative";
}

function renderSectors(sectors) {
  els.sectorList.innerHTML = sectors
    .slice(0, 6)
    .map(
      (sector) => `
        <article class="sector-card">
          <strong>
            <span>${sector.sector}</span>
            <span>${sector.sectorScore}</span>
          </strong>
          <div class="bar">
            <span style="width:${clamp(sector.sectorScore, 8, 100)}%"></span>
          </div>
          <p>法人 ${sector.flow >= 0 ? "買超" : "賣超"} ${formatNumber(Math.abs(sector.flow))} 張 · 平均動量 ${formatPercent(sector.avgMomentum)} · ${sector.members.length} 檔</p>
        </article>
      `
    )
    .join("");
}

function setActiveMetric(metricKey) {
  const metric = conditionMetrics[metricKey];
  if (!metric) return;
  screenerState.activeMetric = metricKey;
  const operators = operatorOptions[metric.type];
  els.conditionOperator.innerHTML = operators.map((operator) => `<option value="${operator.value}">${operator.label}</option>`).join("");

  if (metric.type === "select") {
    const options = metric.options();
    els.conditionValue.outerHTML = `<select id="conditionValue">${options
      .map((option) => `<option value="${option}">${option}</option>`)
      .join("")}</select>`;
    els.conditionValue = document.querySelector("#conditionValue");
  } else if (els.conditionValue.tagName.toLowerCase() !== "input") {
    els.conditionValue.outerHTML = `<input id="conditionValue" type="number" step="0.1" />`;
    els.conditionValue = document.querySelector("#conditionValue");
  } else {
    els.conditionValue.type = "number";
    els.conditionValue.step = "0.1";
  }

  els.conditionValue.value = metric.defaultValue;
  renderScreenerBuilder();
}

function renderScreenerBuilder() {
  if (!els.conditionMetricList) return;
  const group = conditionGroups[screenerState.activeGroup];
  els.conditionGroupTitle.textContent = group.title;
  els.conditionGroupHint.textContent = group.hint;
  els.conditionMetricList.innerHTML = group.metrics
    .map((metricKey) => {
      const metric = conditionMetrics[metricKey];
      return `<button class="condition-metric ${screenerState.activeMetric === metricKey ? "active" : ""}" data-metric="${metricKey}" type="button">${metric.label}</button>`;
    })
    .join("");

  els.selectedConditions.innerHTML = screenerState.conditions.length
    ? screenerState.conditions
        .map(
          (condition, index) => `
            <div class="condition-chip">
              <span>${conditionText(condition)}</span>
              <button data-remove-condition="${index}" type="button">移除</button>
            </div>
          `
        )
        .join("")
    : `<div class="empty-condition"><strong>尚未加入條件</strong><span>從左側挑選指標，設定數值後新增。</span></div>`;

  document.querySelectorAll(".condition-metric").forEach((button) => {
    button.addEventListener("click", () => setActiveMetric(button.dataset.metric));
  });

  document.querySelectorAll("[data-remove-condition]").forEach((button) => {
    button.addEventListener("click", () => {
      screenerState.conditions.splice(Number(button.dataset.removeCondition), 1);
      screenerState.hasRun = true;
      render();
    });
  });
}

function findStockByCode(code) {
  const normalized = code.trim();
  if (!normalized) return null;
  return stocks.map(enrich).find((stock) => stock.code === normalized);
}

function renderStockAnalysis(code = "") {
  if (!els.stockAnalysisResult) return;
  const stock = findStockByCode(code);

  if (!code.trim()) {
    els.stockAnalysisResult.innerHTML = `
      <div class="empty-condition">
        <strong>尚未選擇股票</strong>
        <span>輸入代碼後，系統會依示範資料產生量化分析。正式接 API 後可分析全市場股票。</span>
      </div>
    `;
    return;
  }

  if (!stock) {
    els.stockAnalysisResult.innerHTML = `
      <div class="empty-condition">
        <strong>找不到 ${code}</strong>
        <span>目前展示資料沒有這檔股票；接上全市場 API 後就能查詢更多代碼。</span>
      </div>
    `;
    return;
  }

  const rsi = rsiValue(stock);
  const force = mainForceFlow(stock);
  const plan = tradePlan(stock);
  const totalScore = analysisScore(stock);
  const rsiLabel = rsi >= 75 ? "偏熱" : rsi <= 35 ? "偏冷" : "健康區間";
  const macdTrend = stock.macdValue > 5 ? "強多" : stock.macdValue >= 0 ? "偏多" : "偏弱";
  const maText = `${stock.trendText}，MA5 ${stock.ma5} / MA10 ${stock.ma10} / MA20 ${stock.ma20} / MA60 ${stock.ma60}`;
  const maSignal = stock.isCoreBullTrend ? "bullish" : stock.maBullishCount <= 1 && stock.mom20 < 0 ? "bearish" : "neutral";
  const macdSignal = stock.macdValue >= 0 && rsi < 78 ? "bullish" : stock.macdValue < 0 ? "bearish" : "neutral";
  const chipSignal = stock.flow5 > 0 ? "bullish" : stock.flow5 < 0 ? "bearish" : "neutral";
  const forceSignal = force > 0 ? "bullish" : force < 0 ? "bearish" : "neutral";
  const summary = `${stock.name} 目前量化評分 ${totalScore} 分，${technicalSummary(stock)}；${chipSummary(stock)}。若要操作，較合理的做法是等待價格靠近量化買點區間，不追高；短線小停損看 20 日均線扣抵價 ${plan.smallStopLoss}，若跌破代表 20MA 容易轉下，波段大停損則看季線 ${plan.bigStopLoss}。`;

  els.stockAnalysisResult.innerHTML = `
    <div class="analysis-hero">
      <div>
        <p class="eyebrow">Analysis Result</p>
        <h3>${stock.name} <span>${stock.code}</span></h3>
        <p>${stock.sector} · 現價 ${stock.price} 元 · ${plan.action}</p>
      </div>
      <span class="analysis-score">${totalScore} 分</span>
    </div>

    <div class="analysis-grid">
      <article class="analysis-card signal-card ${maSignal}">
        <span>均線與趨勢</span>
        <strong>${stock.trendText}</strong>
        <p>${maText}。看多推薦必要條件：5 日線 > 10 日線 > 20 日線 > 60 日線。</p>
      </article>
      <article class="analysis-card signal-card ${macdSignal}">
        <span>MACD / RSI</span>
        <strong>${macdTrend} · RSI ${rsi}</strong>
        <p>MACD 強度 ${stock.macdValue}，RSI 位於${rsiLabel}，搭配 20 日漲幅 ${formatPercent(stock.mom20)}。</p>
      </article>
      <article class="analysis-card signal-card ${chipSignal}">
        <span>法人籌碼</span>
        <strong>${stock.flow5 >= 0 ? "+" : ""}${formatNumber(stock.flow5)} 張</strong>
        <p>外資 ${stock.foreign >= 0 ? "+" : ""}${formatNumber(stock.foreign)}、投信 ${stock.trust >= 0 ? "+" : ""}${formatNumber(stock.trust)}、自營商 ${stock.dealer >= 0 ? "+" : ""}${formatNumber(stock.dealer)}。</p>
      </article>
      <article class="analysis-card signal-card ${forceSignal}">
        <span>主力估算</span>
        <strong class="${force >= 0 ? "positive" : "negative"}">${force >= 0 ? "+" : ""}${formatNumber(force)} 張</strong>
        <p>${chipSummary(stock)} 量能約 ${stock.volume} 倍，波動率 ${stock.volatility}。</p>
      </article>
    </div>

    <div class="trade-plan">
      <article>
        <span>量化買點</span>
        <strong>${plan.buyLow} - ${plan.buyHigh}</strong>
        <small>偏向等待回測支撐或短均附近，不建議用示範資料追價。</small>
      </article>
      <article>
        <span>量化賣點</span>
        <strong>${plan.sellLow} - ${plan.sellHigh}</strong>
        <small>接近壓力區可分批停利，若量能失速需降低部位。</small>
      </article>
      <article>
        <span>小停損</span>
        <strong>${plan.smallStopLoss}</strong>
        <small>20MA 扣抵價；跌破後 20 日均線容易轉下，代表短線趨勢可能反轉。</small>
      </article>
      <article>
        <span>大停損</span>
        <strong>${plan.bigStopLoss}</strong>
        <small>季線，也就是 60 日均線；跌破後代表波段趨勢假設明顯轉弱。</small>
      </article>
    </div>

    <div class="analysis-summary">
      <strong>AI 總結</strong>
      <p>${summary}</p>
      <small>以上為量化模型與展示資料產生的研究參考，不是保證獲利或正式投資建議。</small>
    </div>
  `;
}

function addMessage(type, text) {
  const item = document.createElement("div");
  item.className = `message ${type}`;
  item.textContent = text;
  els.chatLog.appendChild(item);
  els.chatLog.scrollTop = els.chatLog.scrollHeight;
}

function answerQuestion(question) {
  const q = question.toLowerCase();
  const list = stocks.map(enrich);
  const topAi = [...list].sort((a, b) => b.score - a.score).slice(0, 3);
  const topBuy = [...list].sort((a, b) => b.flow5 - a.flow5).slice(0, 3);
  const topSell = [...list].sort((a, b) => a.flow5 - b.flow5).slice(0, 3);
  const topMomentum = [...list].sort((a, b) => b.mom20 - a.mom20).slice(0, 3);
  const sectors = getSectors().slice(0, 3);

  if (q.includes("賣超") || q.includes("調節") || q.includes("偏空")) {
    return `法人賣超較明顯的是 ${topSell.map((s) => `${s.name} ${formatNumber(s.flow5)} 張`).join("、")}。這些可以放進避開或觀望清單。`;
  }

  if (q.includes("買超") || q.includes("法人") || q.includes("籌碼")) {
    return `法人買超前三名是 ${topBuy.map((s) => `${s.name} +${formatNumber(s.flow5)} 張`).join("、")}。其中 ${topBuy[0].name} 同時有 ${formatPercent(topBuy[0].mom20)} 的 20 日動量。`;
  }

  if (q.includes("產業") || q.includes("族群") || q.includes("強勢度")) {
    return `目前產業強勢度較高的是 ${sectors.map((s) => `${s.sector} ${s.sectorScore} 分`).join("、")}。可以優先看分數高且法人仍買超的族群。`;
  }

  if (q.includes("動量") || q.includes("強勢") || q.includes("漲")) {
    return `動量較強的是 ${topMomentum.map((s) => `${s.name} ${formatPercent(s.mom20)}`).join("、")}。若搭配量能放大，趨勢延續性會比較值得追蹤。`;
  }

  if (q.includes("ai") || q.includes("推薦") || q.includes("選股")) {
    return `AI 綜合分數前三名是 ${topAi.map((s) => `${s.name} ${s.score} 分`).join("、")}。這是依法人、動量、量能與風險加權的示範分數。`;
  }

  return "你可以問我：今天強勢股有哪些、法人買超最多是誰、哪個產業最強、法人賣超要避開哪些、AI 推薦哪幾檔。正式版接模型後，也能回答更細的策略問題。";
}

function drawChart(list) {
  const ctx = els.canvas.getContext("2d");
  const rect = els.canvas.getBoundingClientRect();
  const ratio = window.devicePixelRatio || 1;
  els.canvas.width = Math.round(rect.width * ratio);
  els.canvas.height = Math.round(rect.height * ratio);
  ctx.scale(ratio, ratio);

  const width = rect.width;
  const height = rect.height;
  const pad = 42;
  ctx.clearRect(0, 0, width, height);

  ctx.strokeStyle = "rgba(255, 255, 255, 0.34)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(pad, height - pad);
  ctx.lineTo(width - pad, height - pad);
  ctx.moveTo(pad, pad);
  ctx.lineTo(pad, height - pad);
  ctx.stroke();

  for (let i = 1; i <= 4; i += 1) {
    const x = pad + ((width - pad * 2) * i) / 4;
    const y = pad + ((height - pad * 2) * i) / 4;
    ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
    ctx.beginPath();
    ctx.moveTo(x, pad);
    ctx.lineTo(x, height - pad);
    ctx.moveTo(pad, y);
    ctx.lineTo(width - pad, y);
    ctx.stroke();
  }

  ctx.fillStyle = "#aab4c0";
  ctx.font = "12px Microsoft JhengHei, Arial";
  ctx.fillText("法人 5 日買賣超", width - 140, height - 14);
  ctx.save();
  ctx.translate(15, 142);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText("20 日價格動量", 0, 0);
  ctx.restore();

  const visibleCodes = new Set(list.map((stock) => stock.code));
  stocks.map(enrich).forEach((stock) => {
    const x = pad + clamp((stock.flow5 + 5000) / 15000, 0, 1) * (width - pad * 2);
    const y = height - pad - clamp((stock.mom20 + 6) / 24, 0, 1) * (height - pad * 2);
    const active = visibleCodes.has(stock.code);
    const radius = active ? 9 : 5;

    ctx.beginPath();
    ctx.fillStyle = stock.flow5 >= 0 ? "rgba(15, 139, 98, 0.84)" : "rgba(198, 69, 69, 0.75)";
    ctx.globalAlpha = active ? 1 : 0.34;
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;

    if (active) {
      ctx.fillStyle = "#f5f7fa";
      ctx.font = "700 12px Microsoft JhengHei, Arial";
      ctx.fillText(stock.code, x + 11, y + 4);
    }
  });
}

function updateCopy() {
  const copy = viewCopy[state.view];
  els.viewTitle.textContent = copy.title;
  els.viewSubtitle.textContent = copy.subtitle;
  els.viewSubtitle.classList.toggle("is-hidden", !copy.subtitle);
  els.tableTitle.textContent =
    state.view === "institution"
      ? `法人${state.institutionDirection === "buy" ? "買超" : "賣超"}排行`
      : copy.table;
  els.filterLabel.textContent = weights[state.mode].label;
  els.momentumHeader.textContent = state.view === "strong" ? `${state.strongPeriod} 日漲幅` : "20 日漲幅";
  els.flowHeader.textContent = state.view === "institution" ? `法人 ${state.buyPeriod} 日` : "法人 5 日";
  if (els.institutionHint) {
    els.institutionHint.textContent =
      state.institutionDirection === "buy"
        ? "排名依所選區間的法人合計買超張數由高到低排列。"
        : "排名依所選區間的法人合計賣超張數由高到低排列。";
  }
}

function updateVisibleSections() {
  document.querySelectorAll(".page-section").forEach((section) => {
    const scope = section.dataset.section;
    const shouldShow = !scope || scope.split(" ").includes(state.view);
    section.classList.toggle("is-hidden", !shouldShow);
  });
}

function setView(view) {
  state.view = view;
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.view === view);
  });
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateOutputs() {
  if (els.scoreOutput) els.scoreOutput.value = state.minScore;
  if (els.flowOutput) els.flowOutput.value = `${formatNumber(state.minFlow)} 張`;
  if (els.momentumOutput) els.momentumOutput.value = `${screenerState.minMomentum || 0}%`;
  if (els.peOutput) els.peOutput.value = screenerState.maxPe || 40;
  els.updatedAt.textContent = new Intl.DateTimeFormat("zh-TW", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(new Date(dataMeta.updatedAt));
}

function syncSectorOptions() {
  if (!els.sectorFilter) return;
  const current = els.sectorFilter.value || "all";
  const sectors = [...new Set(stocks.map((stock) => stock.sector))].sort((a, b) => a.localeCompare(b, "zh-Hant"));
  els.sectorFilter.innerHTML = `<option value="all">全部產業</option>${sectors
    .map((sector) => `<option value="${sector}">${sector}</option>`)
    .join("")}`;
  els.sectorFilter.value = sectors.includes(current) ? current : "all";
  screenerState.sector = els.sectorFilter.value;
}

function render() {
  updateCopy();
  updateVisibleSections();
  updateOutputs();
  const list = getViewStocks();
  const sectors = getSectors();
  renderMetrics(list, sectors);
  renderTopPick(list);
  renderMarketBrief(sectors);
  renderSectors(sectors);
  renderScreenerBuilder();
  if (state.view === "analysis") renderStockAnalysis(els.analysisCodeInput?.value || "");
  renderTable(list);
  drawChart(list);
}

function initChat() {
  addMessage("ai", "我可以先用目前資料回答：強勢股、產業強勢度、法人買賣超、動量排行與 AI 選股。正式版可接 OpenAI API，回答會更完整。");
}

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => {
    setView(button.dataset.view);
  });
});

document.querySelectorAll("[data-open-view]").forEach((button) => {
  button.addEventListener("click", () => {
    setView(button.dataset.openView);
  });
});

document.querySelectorAll(".segment").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".segment").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state.mode = button.dataset.mode;
    render();
  });
});

document.querySelectorAll("[data-strong-period]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-strong-period]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state.strongPeriod = Number(button.dataset.strongPeriod);
    render();
  });
});

function applyStrongLimit() {
  const nextLimit = clamp(Number(els.strongLimitInput.value) || 1, 1, 50);
  state.strongLimit = nextLimit;
  els.strongLimitInput.value = nextLimit;
  render();
}

els.strongSearchButton.addEventListener("click", applyStrongLimit);

els.strongLimitInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    applyStrongLimit();
  }
});

document.querySelectorAll(".direction-option").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".direction-option").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state.institutionDirection = button.dataset.institutionDirection;
    render();
  });
});

document.querySelectorAll(".institution-period-option").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".institution-period-option").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state.buyPeriod = Number(button.dataset.buyPeriod);
    render();
  });
});

function applyBuyLimit() {
  const nextLimit = clamp(Number(els.buyLimitInput.value) || 1, 1, 50);
  state.buyLimit = nextLimit;
  els.buyLimitInput.value = nextLimit;
  render();
}

els.buySearchButton.addEventListener("click", applyBuyLimit);

els.buyLimitInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    applyBuyLimit();
  }
});

document.querySelectorAll(".screener-tab").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".screener-tab").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    screenerState.activeGroup = button.dataset.conditionGroup;
    const firstMetric = conditionGroups[screenerState.activeGroup].metrics[0];
    setActiveMetric(firstMetric);
  });
});

if (els.addConditionButton) {
  els.addConditionButton.addEventListener("click", () => {
    const metric = conditionMetrics[screenerState.activeMetric];
    const value = normalizeConditionValue(metric, els.conditionValue.value);
    if (metric.type === "number" && Number.isNaN(value)) return;
    screenerState.conditions.push({
      metric: screenerState.activeMetric,
      operator: els.conditionOperator.value,
      value
    });
    screenerState.hasRun = true;
    render();
  });
}

if (els.clearConditionsButton) {
  els.clearConditionsButton.addEventListener("click", () => {
    screenerState.conditions = [];
    screenerState.hasRun = false;
    render();
  });
}

if (els.runScreenerButton) {
  els.runScreenerButton.addEventListener("click", () => {
    screenerState.hasRun = true;
    render();
  });
}

if (els.stockAnalysisForm) {
  els.stockAnalysisForm.addEventListener("submit", (event) => {
    event.preventDefault();
    renderStockAnalysis(els.analysisCodeInput.value);
  });
}

if (els.sectorFilter) {
  els.sectorFilter.addEventListener("change", (event) => {
    screenerState.sector = event.target.value;
    render();
  });
}

if (els.flowFilter) {
  els.flowFilter.addEventListener("change", (event) => {
    screenerState.flow = event.target.value;
    render();
  });
}

if (els.momentumRange) {
  els.momentumRange.addEventListener("input", (event) => {
    screenerState.minMomentum = Number(event.target.value);
    render();
  });
}

if (els.peRange) {
  els.peRange.addEventListener("input", (event) => {
    screenerState.maxPe = Number(event.target.value);
    render();
  });
}

if (els.riskFilter) {
  els.riskFilter.addEventListener("change", (event) => {
    screenerState.excludeRisk = event.target.checked;
    render();
  });
}

if (els.volumeFilter) {
  els.volumeFilter.addEventListener("change", (event) => {
    screenerState.volumeOnly = event.target.checked;
    render();
  });
}

if (els.scoreRange) {
  els.scoreRange.addEventListener("input", (event) => {
    state.minScore = Number(event.target.value);
    render();
  });
}

if (els.flowRange) {
  els.flowRange.addEventListener("input", (event) => {
    state.minFlow = Number(event.target.value);
    render();
  });
}

if (els.searchInput) {
  els.searchInput.addEventListener("input", (event) => {
    state.search = event.target.value;
    render();
  });
}

if (els.refreshButton) {
  els.refreshButton.addEventListener("click", () => {
    els.refreshButton.animate(
      [
        { transform: "translateY(0)" },
        { transform: "translateY(-2px)" },
        { transform: "translateY(0)" }
      ],
      { duration: 260, easing: "ease-out" }
    );
    render();
  });
}

els.chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const question = els.chatInput.value.trim();
  if (!question) return;
  addMessage("user", question);
  addMessage("ai", answerQuestion(question));
  els.chatInput.value = "";
});

window.addEventListener("resize", render);

async function loadMarketData() {
  try {
    const response = await fetch("./data/latest.json", { cache: "no-store" });
    if (!response.ok) return;
    const payload = await response.json();
    if (Array.isArray(payload.stocks) && payload.stocks.length) {
      stocks = payload.stocks;
      dataMeta = {
        source: payload.source || "GitHub Actions 自動更新",
        updatedAt: payload.updatedAt || new Date().toISOString()
      };
    }
  } catch (error) {
    dataMeta = {
      source: "內建展示資料",
      updatedAt: new Date().toISOString()
    };
  }
}

loadMarketData().then(() => {
  syncSectorOptions();
  setActiveMetric(screenerState.activeMetric);
  render();
  initChat();
});
