# My Little Finance｜金融學習筆記

一個使用 HTML、CSS、JavaScript 製作的繁體中文金融學習知識庫。專案以 `AGENTS.md` 定義網站規則，讓 AI 日後能以相同格式持續新增頁面與內容。

## 功能
- 首頁：網站介紹與分類入口
- 金融知識庫：CAPM、WACC、DCF、分散化概念
- 個股研究：台積電、GE Vernova、印能科技示範研究摘要
- 學習筆記：課堂與研究重點
- 關鍵字搜尋、分類篩選、手機版排版

## 檔案
- `index.html`：網站入口與導覽
- `css/style.css`：版面、色彩、響應式設計
- `js/data.js`：所有筆記與研究資料
- `js/app.js`：分頁、搜尋與畫面渲染
- `AGENTS.md`：AI 開發與擴充規則

## 如何使用
下載後直接開啟 `index.html`，或將整個資料夾上傳 GitHub Repository，再到 Settings → Pages → Deploy from a branch，選擇 `main` / `(root)`。

## 如何擴充
先閱讀 `AGENTS.md`，依照 `js/data.js` 現有物件格式新增資料，重新整理頁面即可顯示，不需手動修改 HTML 卡片。

## 注意
本網站為學習示範，不構成投資建議；個股摘要不代表即時研究結論。
