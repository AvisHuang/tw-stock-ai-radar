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
  overview: { title: "台股 AI 監測主頁", subtitle: "選擇一個功能開始看盤：強勢股、產業強勢度、法人買超、法人賣超、動量排行與 AI 問答。", table: "候選清單" },
  strong: { title: "強勢股", subtitle: "找出同時具備法人買超、價格動量、量能放大的股票。", table: "強勢股排行" },
  sectors: { title: "產業強勢度", subtitle: "把個股訊號彙整成產業分數，快速判斷資金正在流向哪裡。", table: "產業成分股" },
  buy: { title: "法人買超", subtitle: "聚焦近 5 日三大法人合計買超，並拆看外資、投信、自營商。", table: "法人買超排行" },
  sell: { title: "法人賣超", subtitle: "找出法人連續調節或籌碼轉弱標的，做風險控管與避開清單。", table: "法人賣超排行" },
  momentum: { title: "動量排行", subtitle: "依 20 日與 60 日價格動量、量能變化排序，觀察趨勢延續。", table: "動量排行" },
  ai: { title: "AI 選股", subtitle: "以籌碼、動量、量能與風險加權計算 AI 分數，產生每日追蹤清單。", table: "AI 選股清單" },
  qa: { title: "AI 問答", subtitle: "在網頁內直接詢問強勢股、產業輪動、法人買賣超與 AI 選股理由。", table: "問答參考清單" }
};

const state = {
  view: "overview",
  mode: "balanced",
  minScore: 0,
  minFlow: -5000,
  search: ""
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
  topPick: document.querySelector("#topPick"),
  topBadge: document.querySelector("#topBadge"),
  filterLabel: document.querySelector("#filterLabel"),
  viewTitle: document.querySelector("#viewTitle"),
  viewSubtitle: document.querySelector("#viewSubtitle"),
  tableTitle: document.querySelector("#tableTitle"),
  sectorList: document.querySelector("#sectorList"),
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
  return { ...stock, score, strength, risk };
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

function getViewStocks() {
  let list = stocks.map(enrich);
  let result;

  if (state.view === "strong") {
    list = list.filter((stock) => stock.strength >= 78 && stock.mom20 > 5 && stock.volume >= 1.05);
    result = baseFilter(list).sort((a, b) => b.strength - a.strength);
    return result.slice(0, DISPLAY_LIMIT);
  }

  if (state.view === "buy") {
    list = list.filter((stock) => stock.flow5 > 0);
    result = baseFilter(list).sort((a, b) => b.flow5 - a.flow5);
    return result.slice(0, DISPLAY_LIMIT);
  }

  if (state.view === "sell") {
    list = list.filter((stock) => stock.flow5 < 0);
    result = baseFilter(list).sort((a, b) => a.flow5 - b.flow5);
    return result.slice(0, DISPLAY_LIMIT);
  }

  if (state.view === "momentum") {
    list = list.filter((stock) => stock.mom20 > 0 || stock.mom60 > 0);
    result = baseFilter(list).sort((a, b) => b.mom20 + b.mom60 * 0.35 - (a.mom20 + a.mom60 * 0.35));
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
      (stock) => `
        <tr>
          <td>
            <div class="stock-cell">
              <strong>${stock.name}</strong>
              <span>${stock.code} · ${stock.price} 元</span>
            </div>
          </td>
          <td>${stock.sector}</td>
          <td><span class="tag good">${stock.score}</span></td>
          <td class="${stock.flow5 >= 0 ? "positive" : "negative"}">${stock.flow5 >= 0 ? "+" : ""}${formatNumber(stock.flow5)} 張</td>
          <td class="${stock.foreign >= 0 ? "positive" : "negative"}">${stock.foreign >= 0 ? "+" : ""}${formatNumber(stock.foreign)}</td>
          <td class="${stock.trust >= 0 ? "positive" : "negative"}">${stock.trust >= 0 ? "+" : ""}${formatNumber(stock.trust)}</td>
          <td class="${stock.mom20 >= 0 ? "positive" : "negative"}">${formatPercent(stock.mom20)}</td>
          <td>
            <div class="bar" title="${stock.volume} 倍">
              <span style="width:${clamp(stock.volume * 48, 12, 100)}%"></span>
            </div>
          </td>
          <td><span class="tag ${riskClass(stock.risk)}">${stock.risk}</span></td>
        </tr>
      `
    )
    .join("");
}

function renderTopPick(list) {
  const top = list[0] || stocks.map(enrich).sort((a, b) => b.score - a.score)[0];
  els.topBadge.textContent = `${top.score} 分`;
  els.topPick.innerHTML = `
    <div class="pick-name">
      <strong>${top.name}</strong>
      <span class="pick-code">${top.code}</span>
    </div>
    <ul class="reason-list">
      <li>法人近 5 日${top.flow5 >= 0 ? "買超" : "賣超"} ${formatNumber(Math.abs(top.flow5))} 張，外資 ${top.foreign >= 0 ? "偏多" : "偏空"}。</li>
      <li>20 日動量 ${formatPercent(top.mom20)}，60 日動量 ${formatPercent(top.mom60)}，量能 ${top.volume} 倍。</li>
      <li>AI 分數 ${top.score}，風險標籤為「${top.risk}」。正式交易前仍需確認基本面與停損位置。</li>
    </ul>
  `;
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

  ctx.strokeStyle = "#d7e0e7";
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
    ctx.strokeStyle = "rgba(101, 113, 128, 0.16)";
    ctx.beginPath();
    ctx.moveTo(x, pad);
    ctx.lineTo(x, height - pad);
    ctx.moveTo(pad, y);
    ctx.lineTo(width - pad, y);
    ctx.stroke();
  }

  ctx.fillStyle = "#657180";
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
      ctx.fillStyle = "#172029";
      ctx.font = "700 12px Microsoft JhengHei, Arial";
      ctx.fillText(stock.code, x + 11, y + 4);
    }
  });
}

function updateCopy() {
  const copy = viewCopy[state.view];
  els.viewTitle.textContent = copy.title;
  els.viewSubtitle.textContent = copy.subtitle;
  els.tableTitle.textContent = copy.table;
  els.filterLabel.textContent = weights[state.mode].label;
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
  els.scoreOutput.value = state.minScore;
  els.flowOutput.value = `${formatNumber(state.minFlow)} 張`;
  els.updatedAt.textContent = new Intl.DateTimeFormat("zh-TW", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(new Date(dataMeta.updatedAt));
}

function render() {
  updateCopy();
  updateVisibleSections();
  updateOutputs();
  const list = getViewStocks();
  const sectors = getSectors();
  renderMetrics(list, sectors);
  renderTopPick(list);
  renderSectors(sectors);
  renderTable(list);
  drawChart(list);
}

function initChat() {
  addMessage("ai", "我可以先用目前資料回答：強勢股、產業強勢度、法人買超、法人賣超、動量排行與 AI 選股。正式版可接 OpenAI API，回答會更完整。");
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

els.scoreRange.addEventListener("input", (event) => {
  state.minScore = Number(event.target.value);
  render();
});

els.flowRange.addEventListener("input", (event) => {
  state.minFlow = Number(event.target.value);
  render();
});

els.searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  render();
});

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
  render();
  initChat();
});
