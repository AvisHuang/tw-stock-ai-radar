# 台股 AI 多功能選股雷達

這是一個可部署到 GitHub Pages 的台股監測網站原型，包含主頁、強勢股、產業強勢度、法人買超、法人賣超、動量排行、AI 選股與 AI 問答介面。

## 本機開啟

```powershell
cd C:\Users\avism\Documents\Codex\2026-06-03\ai\outputs
python -m http.server 8765 --bind 127.0.0.1
```

打開：

```text
http://127.0.0.1:8765/index.html
```

## 自動更新

`.github/workflows/deploy-pages.yml` 會在台灣時間每天 06:00 與 18:00 執行：

- 產生 `outputs/data/latest.json`
- 部署 `outputs` 到 GitHub Pages

目前 `scripts/update-data.js` 使用示範資料。正式版可在這支腳本串接 TWSE、TPEX、FinMind 或券商 API。

## AI 問答

目前 AI 問答是前端示範邏輯。正式接 OpenAI API 時，API key 不可以放在瀏覽器端，需建立後端 API，例如 Vercel Serverless Function、Cloudflare Workers 或其他伺服器。
