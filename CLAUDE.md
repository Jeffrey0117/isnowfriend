# 友善時間 (isnowfriend)

即時查詢台灣 7-ELEVEN 與全家便利商店「友善食光」即期品折扣與庫存的純前端 Web App。線上站點：https://isnowfriend.com

## Stack

- **前端框架**: React 18（透過 unpkg CDN 載入，非建置工具）
- **轉譯**: Babel Standalone（瀏覽器端 JSX 轉譯，`<script type="text/babel">`）
- **語言**: JavaScript ES6+、HTML5、CSS3（無 TypeScript、無打包器）
- **後端服務**: Firebase Authentication + Firestore（ES module，自 gstatic CDN 載入）
- **第三方資料源**:
  - 7-ELEVEN OpenPoint LoveFood API（`lovefood.openpoint.com.tw`，token 流程）
  - 全家：靜態門市 JSON（Friendly-Cat GitHub Pages）+ `stamp.family.com.tw` 商品 API
- **定位**: 瀏覽器 Geolocation API
- **變現/SEO**: Google AdSense、JSON-LD 結構化資料、`sitemap.xml` / `robots.txt` / `ads.txt`
- **設計**: Glassmorphism 毛玻璃風格

無 `package.json`、無建置步驟、無測試框架——這是一個靜態網站。

## Directory structure

```
isnowfriend/
├── index.html          # SPA 主入口（~1946 行；含 inline React 元件 + <style>）
├── js/
│   ├── api.js          # 全域 API 物件：7-11 & 全家 整合、token 快取、距離計算、mock 後備
│   ├── auth.js         # Firebase Auth + Firestore（ES module）
│   ├── location.js     # 全域 LocationService：Geolocation 封裝 + 快取
│   └── ui.js           # UI 互動與顯示邏輯
├── blog/               # 靜態 SEO 部落格文章（HTML）+ blog.css + index.html
├── myicon.png          # Logo / favicon / OG image
├── sitemap.xml, robots.txt, ads.txt
├── README.md           # 中文專案文件
└── .vscode/settings.json   # Live Server 設定（port 5501）
```

## Key concepts

- **無模組系統**: `api.js`、`location.js`、`ui.js` 以 `<script src>` 載入，掛在全域物件（`API`、`LocationService`）。`auth.js` 例外，為 ES module（用了 `import`）。
- **統一搜尋介面**: `API.searchStoresByLocation(lat, lng)` 並行查兩家店（`Promise.all` + `.catch(() => [])`），映射成統一格式後依距離排序。`getStoreProducts(store)` 依 `store.type`（`'7-11'` / `'全家'`）分流。
- **7-11 流程**: 先 `get711Token()`（POST 帶 `mid_v`，token 快取 1 小時於 `sessionStorage`）→ 取分類圖（`get711FoodCategories`）→ `GetNearbyStoreList`。
- **全家流程**: 從靜態 JSON 過濾半徑內門市（`searchFamilyMartByLocation`），商品再打 `MapProductInfo`。
- **後備機制**: 兩家 API 都失敗時 `getMockStores()` 回傳信義區假資料，UI 不致空白。
- **距離**: `calculateDistance()` 用 Haversine 公式（公尺）。
- **Firebase config 與 7-11 `mid_v` 為硬編碼於前端**（純前端 app 的本質限制；Firebase apiKey 本就公開可見）。

## Commands

無建置/測試指令。本機開發需 HTTP 伺服器（勿用 `file://`，會踩 CORS）：

```bash
# VS Code Live Server（推薦，port 5501）— 對 index.html 右鍵 Open with Live Server
# 或：
python -m http.server 8000
# 或：
npx http-server
```

部署：靜態檔案直接上傳/推送即可（站點 isnowfriend.com）。

## Coding rules

- 註解與 UI 文案以**繁體中文**為主（部分簡體中文殘留）。
- 全域物件模式：新功能掛在既有 `API` / `LocationService` 上，保持單一全域命名。
- API 呼叫一律 `try/catch`，失敗時 `console.error` 並回傳安全預設值（`[]` / `null`），避免整頁崩潰。
- 修改 SEO 相關（`<title>`、meta、JSON-LD、sitemap）時保持與 isnowfriend.com 正式內容一致。
