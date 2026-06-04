const http = require("node:http");
const fs = require("node:fs/promises");
const path = require("node:path");

const ROOT = path.join(__dirname, "..", "outputs");
const PORT = Number(process.env.PORT || 8765);

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg"
};

function numeric(value) {
  const parsed = Number(String(value || "").replace(/,/g, ""));
  return Number.isFinite(parsed) ? parsed : null;
}

function firstLevel(value) {
  return numeric(String(value || "").split("_").find(Boolean));
}

async function fetchQuote(code, market) {
  const exchange = market === "tpex" ? "otc" : "tse";
  const url = `https://mis.twse.com.tw/stock/api/getStockInfo.jsp?ex_ch=${exchange}_${code}.tw&json=1&delay=0&_=${Date.now()}`;
  const response = await fetch(url, {
    headers: {
      accept: "application/json,text/plain,*/*",
      referer: "https://mis.twse.com.tw/stock/index.jsp",
      "user-agent": "tw-stock-ai-radar/1.0"
    }
  });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
  const text = await response.text();
  const payload = JSON.parse(text.trim());
  const item = payload.msgArray?.[0];
  if (!item) throw new Error("No quote returned");

  const bid = firstLevel(item.b);
  const ask = firstLevel(item.a);
  const last = numeric(item.z);
  const previousClose = numeric(item.y);
  const fallbackPrice = bid && ask ? (bid + ask) / 2 : bid || ask || previousClose;

  return {
    code: item.c || code,
    name: item.n,
    fullName: item.nf,
    market: item.ex === "otc" ? "tpex" : "twse",
    date: `${String(item.d).slice(0, 4)}-${String(item.d).slice(4, 6)}-${String(item.d).slice(6, 8)}`,
    time: item.t || item["%"],
    price: last || fallbackPrice,
    last,
    bid,
    ask,
    open: numeric(item.o),
    high: numeric(item.h),
    low: numeric(item.l),
    previousClose,
    volume: numeric(item.v),
    totalVolume: numeric(item.v),
    source: "TWSE MIS",
    delayMs: payload.userDelay || null,
    rawStatus: payload.rtcode
  };
}

async function serveStatic(req, res) {
  const parsed = new URL(req.url, `http://127.0.0.1:${PORT}`);
  const pathname = decodeURIComponent(parsed.pathname === "/" ? "/index.html" : parsed.pathname);
  const filePath = path.normalize(path.join(ROOT, pathname));

  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  try {
    const data = await fs.readFile(filePath);
    res.writeHead(200, {
      "content-type": mimeTypes[path.extname(filePath)] || "application/octet-stream",
      "cache-control": "no-store"
    });
    res.end(data);
  } catch {
    res.writeHead(404);
    res.end("Not found");
  }
}

const server = http.createServer(async (req, res) => {
  const parsed = new URL(req.url, `http://127.0.0.1:${PORT}`);

  if (parsed.pathname === "/api/quote") {
    try {
      const code = parsed.searchParams.get("code");
      const market = parsed.searchParams.get("market") || "twse";
      if (!/^\d{4}$/.test(code || "")) throw new Error("Invalid stock code");
      const quote = await fetchQuote(code, market);
      res.writeHead(200, {
        "content-type": "application/json; charset=utf-8",
        "cache-control": "no-store"
      });
      res.end(JSON.stringify({ ok: true, quote }));
    } catch (error) {
      res.writeHead(502, {
        "content-type": "application/json; charset=utf-8",
        "cache-control": "no-store"
      });
      res.end(JSON.stringify({ ok: false, error: error.message }));
    }
    return;
  }

  await serveStatic(req, res);
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`Local stock server: http://127.0.0.1:${PORT}`);
});
