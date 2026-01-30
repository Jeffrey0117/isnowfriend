<p align="center">
  <img src="myicon.png" alt="友善時間 Logo" width="160" />
</p>

<h1 align="center">友善時間</h1>

<p align="center">
  <strong>即時便利商店折扣與庫存查詢工具</strong><br/>
  一鍵定位附近 7-ELEVEN、全家便利商店的友善食光商品
</p>

<p align="center">
  <a href="https://isnowfriend.com/">https://isnowfriend.com</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white" alt="React 18" />
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Firebase-驗證 & 資料庫-FFCA28?logo=firebase&logoColor=black" alt="Firebase" />
  <img src="https://img.shields.io/badge/License-MIT-green" alt="MIT License" />
</p>

---

## 簡介

**友善時間**是一款專為台灣使用者設計的即時折扣查詢應用，整合 7-ELEVEN 與全家便利商店的友善食光（即期品折扣）資訊。透過瀏覽器定位功能，快速找到附近有折扣商品的門市，並即時顯示各分類庫存數量，讓你不再錯過任何省錢機會。

## 功能特色

- **雙品牌支援** — 同時查詢 7-ELEVEN 與全家便利商店
- **即時庫存顯示** — 各門市依商品分類顯示即時庫存數量
- **GPS 定位搜尋** — 根據目前位置自動排序最近門市
- **距離計算** — 精確顯示每間門市與你的距離
- **Google Maps 導航** — 一鍵開啟地圖前往目標門市
- **品牌篩選** — 可自由切換僅顯示 7-ELEVEN、全家或全部門市
- **響應式設計** — 手機、平板、桌機皆完美呈現
- **毛玻璃 UI** — 現代化 Glassmorphism 設計風格

## 技術架構

| 類別 | 技術 |
|------|------|
| 前端框架 | React 18（CDN） |
| 語言 | JavaScript ES6+、HTML5、CSS3 |
| 轉譯工具 | Babel Standalone |
| 後端服務 | Firebase Authentication + Firestore |
| 地理定位 | Browser Geolocation API |
| API 整合 | 7-ELEVEN OpenPoint API、全家門市 API |
| 設計風格 | Glassmorphism 毛玻璃質感 |

## 專案結構

```
isnowfriend/
├── index.html          # 主要入口（SPA 單頁應用）
├── js/
│   ├── api.js          # API 整合模組（7-11 & 全家）
│   ├── auth.js         # Firebase 身份驗證
│   ├── location.js     # 地理定位服務
│   └── ui.js           # UI 互動與顯示邏輯
├── myicon.png          # 應用程式 Logo
└── README.md           # 專案文件
```

## 快速開始

### 方法一：VS Code Live Server（推薦）

1. 用 VS Code 開啟專案資料夾
2. 安裝 [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) 擴充套件
3. 對 `index.html` 按右鍵 → **Open with Live Server**

### 方法二：本地 HTTP 伺服器

```bash
# Python
python -m http.server 8000

# Node.js
npx http-server

# 開啟瀏覽器
open http://localhost:8000
```

> **注意：** 請勿直接以檔案方式（`file://`）開啟，部分功能需要 HTTP 伺服器環境才能正常運作（CORS 限制）。

## 使用方式

1. 開啟應用，選擇要查詢的便利商店品牌（7-ELEVEN / 全家 / 全部）
2. 點擊 **搜尋附近門市**，允許瀏覽器取得你的位置
3. 系統自動顯示附近有折扣商品的門市清單
4. 點擊門市卡片查看各分類即時庫存
5. 點擊地圖連結可直接導航前往

## 瀏覽器支援

| 瀏覽器 | 支援狀態 |
|--------|---------|
| Chrome | ✅ 完整支援 |
| Firefox | ✅ 支援 |
| Safari | ✅ 支援 |
| Edge | ✅ 支援 |

需要支援 ES6+、Geolocation API 與 Fetch API。

## 授權條款

本專案採用 [MIT License](LICENSE) 授權。

---

<p align="center">
  <sub>以即時資訊減少食物浪費，讓每一份食物都找到歸屬。</sub>
</p>
