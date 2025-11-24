<html lang="zh-Hant" style="--wm-toolbar-height: 66px; --vsc-domain: &quot;web.archive.org&quot;;"><head><script src="//archive.org/includes/athena.js" type="text/javascript"></script>
<script type="text/javascript">window.addEventListener('DOMContentLoaded',function(){var v=archive_analytics.values;v.service='wb';v.server_name='wwwb-app246.us.archive.org';v.server_ms=676;archive_analytics.send_pageview({});});</script>
<script type="text/javascript" src="https://web-static.archive.org/_static/js/bundle-playback.js?v=Hk4-lkW3" charset="utf-8"></script>
<script type="text/javascript" src="https://web-static.archive.org/_static/js/wombat.js?v=txqj7nKC" charset="utf-8"></script>
<script>window.RufflePlayer=window.RufflePlayer||{};window.RufflePlayer.config={"autoplay":"on","unmuteOverlay":"hidden","showSwfDownload":true};</script>
<script type="text/javascript" src="https://web-static.archive.org/_static/js/ruffle/ruffle.js"></script>
<script type="text/javascript">
    __wm.init("https://web.archive.org/web");
  __wm.wombat("https://isnowfriend.com/","20250904003919","https://web.archive.org/","web","https://web-static.archive.org/_static/",
	      "1756946359");
</script>
<link rel="stylesheet" type="text/css" href="https://web-static.archive.org/_static/css/banner-styles.css?v=1utQkbB3">
<link rel="stylesheet" type="text/css" href="https://web-static.archive.org/_static/css/iconochive.css?v=3PDvdIFv">
<!-- End Wayback Rewrite JS Include -->

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>友善時光-是或否(IsNowFriend)|乞丐超人|小七、全家折扣</title>
    <meta name="description" content="全家便利商店、7-11 小七友善時光折扣查詢，整理全家友善時光時間、小七打折時間，快速查詢即期品幾點開始打折。">
    <meta name="keywords" content="全家,小七,7-11,友善時光,乞丐時光,折扣,打折時間,全家友善時光查詢,全家友善時光時間,小七打折時間,便利商店折扣">
    <link rel="canonical" href="https://web.archive.org/web/20250904003919/https://isnowfriend.com/">
    <!-- 引入 React, ReactDOM, Babel CDN -->
    <script src="https://web.archive.org/web/20250904003919js_/https://unpkg.com/react@18/umd/react.production.min.js" crossorigin=""></script>
    <script src="https://web.archive.org/web/20250904003919js_/https://unpkg.com/react-dom@18/umd/react-dom.production.min.js" crossorigin=""></script>
    <script src="https://web.archive.org/web/20250904003919js_/https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <style>
      /* 毛玻璃質感 Header - 強化版 */
      .frosted-header {
        margin: 0 auto 32px auto;
        min-height: 72px;
        padding: 22px 0 18px 38px;
        background: rgba(36, 38, 48, 0.92);
        box-shadow: 0 6px 32px rgba(30, 32, 40, 0.18);
        backdrop-filter: blur(18px) saturate(1.7);
        -webkit-backdrop-filter: blur(18px) saturate(1.7);
        border-bottom: 1.5px solid rgba(80, 80, 90, 0.18);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        border-radius: 0;
        user-select: none;
        transition: background 0.3s;
        box-sizing: border-box;
      }
      .frosted-header .header-logo {
        width: 80px;
        height: 80px;
        min-width: 80px;
        min-height: 80px;
        border-radius: 50%;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.13);
        object-fit: cover;
        margin-right: 28px;
        background: #23242a;
        border: 1.5px solid #444;
        display: block;
      }
      .frosted-header .header-texts {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
      }
      .frosted-header .header-title {
        font-size: 2.3em;
        font-weight: 700;
        color: #fff;
        letter-spacing: 0.04em;
        margin-bottom: 0.18em;
        text-align: left;
        line-height: 1.1;
        text-shadow: 0 2px 12px rgba(0, 0, 0, 0.13);
      }
      .frosted-header .header-subtitle {
        font-size: 1.13em;
        color: #e0e0e0;
        font-weight: 400;
        letter-spacing: 0.02em;
        text-align: left;
        line-height: 1.5;
        opacity: 0.92;
      }
      @media (max-width: 600px) {
        .frosted-header {
          display: none !important;
        }
        /* 其餘 header 響應式設定保留，方便未來開啟 */
        /*
        .frosted-header {
          min-height: 44px;
          padding: 10px 0 7px 8px;
          border-radius: 0;
        }
        .frosted-header .header-logo {
          width: 48px;
          height: 48px;
          min-width: 48px;
          min-height: 48px;
          margin-right: 12px;
          border-radius: 50%;
        }
        .frosted-header .header-title {
          font-size: 1.18em;
        }
        .frosted-header .header-subtitle {
          font-size: 0.97em;
        }
        */
      }
      /* 基礎 CSS 樣式 */
      body {
        font-family: "Inter", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        display: flex;
        flex-direction: column; /* 讓內容垂直堆疊 */
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        margin: 0;
        background-color: #f0f2f5;
        color: #333;
        box-sizing: border-box; /* 確保 padding 不會增加總寬度 */
        position: relative; /* 為絕對定位的切換按鈕提供參考點 */
        overflow-x: hidden; /* 防止橫向捲軸 */
      }

      /* 主卡片容器 - 預設為無卡片效果 */
      .app-card-container {
        position: relative; /* 為絕對定位的時間顯示提供參考點 */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 450px; /* 模擬手機APP介面寬度，略微放寬 */
        padding: 20px;
        padding-top: 50px; /* 增加頂部內邊距，為時間顯示留出空間 */
        box-sizing: border-box;
        /* 初始狀態無背景、無圓角、無陰影 */
        background-color: transparent;
        border-radius: 0;
        box-shadow: none;
        margin-bottom: 25px; /* 與下方狀態顯示區塊的間距 */
        overflow: hidden; /* 確保背景不溢出圓角 */
        z-index: 1; /* 確保整個卡片在body的背景之上 */
        min-height: 250px; /* 確保卡片在沒有LOGO顯示時也有足夠高度 */
        transition: all 0.3s ease-in-out; /* 平滑過渡效果 */
      }

      /* 主卡片容器 - 選擇店家後的卡片效果 */
      .app-card-container.selected-state {
        background-color: #ffffff; /* 增加背景色 */
        border-radius: 20px; /* 圓角 */
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15); /* 更明顯的陰影 */
        background-size: contain; /* 背景圖片覆蓋整個容器 */
        background-position: center center; /* 背景圖片居中 */
        background-repeat: no-repeat; /* 背景圖片不重複 */
      }

      /* 右上角時間顯示 */
      .current-time-display {
        position: absolute;
        top: 15px; /* 距離頂部 */
        right: 20px; /* 距離右側 */
        font-size: 1.1em;
        font-weight: bold;
        color: #007bff; /* 藍色 */
        background-color: #e9ecef;
        padding: 5px 10px;
        border-radius: 8px;
        z-index: 10; /* 確保在最上層 */
      }

      /* 初始狀態：兩個大 LOGO 容器 (手機版為 column，桌面版為 grid) */
      .logo-container {
        width: 100%;
        display: flex; /* 預設為 flex，手機上為 column */
        flex-direction: column;
        gap: 25px; /* 增加間距 */
        margin-bottom: 35px; /* 增加下方間距 */
        position: relative; /* 確保內容在背景之上 */
        z-index: 2;
      }
      .logo-wrapper {
        background-color: rgba(255, 255, 255, 0.9); /* 輕微透明背景色 */
        border-radius: 18px; /* 圓角 */
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08); /* 輕微陰影 */
        overflow: hidden;
        cursor: pointer;
        transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
        padding: 25px; /* 增加內邊距 */
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 120px; /* 確保高度一致 */
      }
      .logo-wrapper:hover {
        transform: translateY(-7px); /* 懸停效果更明顯 */
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12); /* 懸停陰影 */
      }
      .logo-wrapper img {
        width: 100%; /* LOGO 尺寸放大 */
        height: 100%; /* 填滿容器高度 */
        max-width: 250px; /* 限制最大寬度 */
        object-fit: contain; /* 保持長寬比 */
        display: block;
      }

      /* 狀態顯示文字的外部容器 (位於主卡片下方) */
      .status-display-outer-container {
        width: 100%;
        max-width: 450px; /* 與主卡片寬度一致 */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0px 20px; /* 移除背景和陰影後，調整內邊距 */
        box-sizing: border-box;
        margin-bottom: 25px; /* 與下方切換按鈕的間距 */
        min-height: 100px; /* 確保有足夠高度 */
      }

      /* 選取後狀態：單一小 LOGO 外部容器 (位於狀態顯示區塊下方) */
      .switch-logo-container-outer {
        width: 100%; /* 預設100%避免超出 */
        max-width: none;
        display: flex;
        justify-content: center; /* 手機預設置中，桌面會覆蓋 */
        align-items: center;
        padding: 15px 20px;
        box-sizing: border-box;
        border-radius: 0;
        position: static;
        bottom: auto;
        right: auto;
        z-index: auto;
      }
      .switch-logo-wrapper {
        background-color: #ffffff; /* 更改為白色背景 */
        border-radius: 12px; /* 較小的圓角 */
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05); /* 較輕的陰影 */
        overflow: hidden;
        cursor: pointer;
        transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
        padding: 10px 15px; /* 調整內邊距，為垂直佈局留出空間 */
        display: flex;
        flex-direction: column; /* 垂直堆疊圖片和文字 */
        justify-content: center;
        align-items: center;
        width: fit-content; /* 內容自適應寬度 */
        max-width: 220px; /* 調整最大寬度以容納橫向 LOGO 和文字 */
        gap: 5px; /* 稍微減少 LOGO 與文字的間距 */
      }
      .switch-logo-wrapper:hover {
        transform: translateY(-3px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }
      .switch-logo-wrapper img {
        width: 100%; /* 讓圖片寬度填滿容器 */
        height: auto; /* 高度自適應以保持比例 */
        max-height: 35px; /* 限制圖片最大高度 */
        display: block;
        object-fit: contain; /* 保持長寬比 */
      }
      .switch-logo-text {
        font-size: 1em; /* 稍微調整字體大小 */
        color: #555;
        white-space: nowrap; /* 避免文字換行 */
        flex-shrink: 0; /* 確保文字不被壓縮 */
        text-align: center; /* 確保文字居中 */
      }

      /* 狀態顯示文字 */
      .status-main-text {
        font-size: 2.4em; /* 狀態文字放大 */
        font-weight: bold;
        color: #dc3545; /* 友善時光主文字為紅色 (恢復為淺色背景下的顏色) */
        text-align: center;
        min-height: 1.5em; /* 避免內容變動時高度跳動 */
        transition: color 0.3s ease-in-out;
        margin-bottom: 10px; /* 與折扣文字的間距 */
        text-shadow: none; /* 移除文字陰影 */
      }
      .status-discount-text {
        font-size: 1.8em; /* 折扣文字大小 */
        font-weight: bold;
        color: #28a745; /* 折扣文字為綠色 (恢復為淺色背景下的顏色) */
        text-align: center;
        min-height: 1.2em; /* 避免內容變動時高度跳動 */
        text-shadow: none; /* 移除文字陰影 */
      }
      .status-placeholder {
        font-size: 1.8em;
        color: #6c757d; /* 灰色提示文字 (恢復為淺色背景下的顏色) */
        text-align: center;
        min-height: 1.5em;
        text-shadow: none; /* 移除文字陰影 */
      }

      /* 響應式設計 */
      @media (max-width: 600px) {
        .app-card-container {
          padding: 15px;
          padding-top: 40px; /* 手機上調整頂部內邊距 */
          border-radius: 15px;
          box-shadow: none; /* 手機上移除陰影，更簡潔 */
          background-color: transparent; /* 手機上移除背景色 */
          margin-bottom: 15px; /* 手機上調整與下方狀態顯示區塊的間距 */
          min-height: 200px; /* 手機上調整卡片最小高度 */
        }
        .current-time-display {
          top: 10px;
          right: 10px;
          font-size: 0.9em;
          padding: 4px 8px;
          border-radius: 6px;
        }
        .logo-container {
          gap: 15px;
          margin-bottom: 25px;
        }
        .logo-wrapper {
          padding: 20px;
          border-radius: 12px;
        }
        .status-main-text {
          font-size: 1.8em;
        }
        .status-discount-text {
          font-size: 1.4em;
        }
        .status-placeholder {
          font-size: 1.4em;
        }
        /* 手機上狀態顯示區塊調整 */
        .status-display-outer-container {
          padding: 10px 15px;
          margin-bottom: 15px;
          min-height: 80px;
        }
        /* 手機上切換 LOGO 樣式調整 */
        .switch-logo-container-outer {
          width: 100%; /* 手機強制100% */
          padding: 10px 15px;
          position: static;
          justify-content: center;
        }
        .switch-logo-wrapper {
          padding: 6px 12px; /* 手機上更小的內邊距 */
          border-radius: 10px;
          max-width: 180px; /* 手機上調整最大寬度 */
        }
        .switch-logo-wrapper img {
          max-height: 28px; /* 手機上調整圖片最大高度 */
        }
        .switch-logo-text {
          font-size: 0.9em;
        }
      }

      /* 桌面版面 (> 600px) 專用樣式 */
      @media (min-width: 601px) {
        .logo-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr); /* 2 欄網格 */
          gap: 30px; /* 網格間距 */
          margin-bottom: 50px; /* 增加下方間距 */
        }
        .logo-wrapper {
          padding: 30px; /* 桌面版 LOGO 內邊距 */
        }
        .switch-logo-container-outer {
          width: 100vw;
          max-width: none;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          box-sizing: border-box;
          border-radius: 0;
          margin-bottom: 0;
        }
        .switch-logo-wrapper {
          padding: 12px 20px; /* 桌面版按鈕內邊距 */
          max-width: none; /* 取消最大寬度限制，讓內容決定 */
        }
      }

      .content-wrapper {
        display: flex;

        flex-direction: column; /* 桌機預設：文字在上、root在下 */
        gap: 20px;
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
        padding: 0 16px;
        box-sizing: border-box;
      }

      .intro-text {
        font-size: 1rem;
        line-height: 1.6;
      }

      .intro-text h1 {
        font-size: 1.6rem;
        margin-bottom: 12px;
      }

      /* 毛玻璃質感 Footer - 深色融入主題 */
      .frosted-footer {
        margin: 0 auto;
        margin-top: 50px;
        min-height: 28px;
        padding: 12px 0 10px 0;
        background: rgba(36, 38, 48, 0.92);
        box-shadow: 0 -2px 18px rgba(30, 32, 40, 0.13);
        backdrop-filter: blur(14px) saturate(1.5);
        -webkit-backdrop-filter: blur(14px) saturate(1.5);
        border-top: 1.5px solid rgba(80, 80, 90, 0.18);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1em;
        color: #e0e0e0;
        letter-spacing: 0.03em;
        font-family: "Inter", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        transition: background 0.3s;
        user-select: none;
        width: 100%;
        border-radius: 0;
      }
      @media (max-width: 600px) {
        .frosted-footer {
          font-size: 0.92em;
          min-height: 22px;
          padding: 8px 0 5px 0;
          border-radius: 0;
        }
      }

      .intro-text h2 {
        font-size: 1.3rem;
        margin-top: 20px;
        margin-bottom: 8px;
      }

      @media (max-width: 767px) {
        .content-wrapper {
          flex-direction: column-reverse; /* 手機：顛倒，root 在上、文字在下 */
          margin-top: 30px;
        }
        .intro-text {
          text-align: left;
          font-size: 1rem;
        }
        .intro-text h1 {
          font-size: 1.4rem;
        }
      }
    </style>
  <script>var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
let window = _____WB$wombat$assign$function_____("window");
let globalThis = _____WB$wombat$assign$function_____("globalThis");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");
{
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
// 動態移動切換 LOGO 區塊（手機 intro-text 上方，桌面 footer 上方）
function relocateSwitchLogoOuter() {
  var switchLogo = document.getElementById("switch-logo-outer");
  var statusContainer = document.querySelector(".status-display-outer-container");
  var footer = document.querySelector("footer.frosted-footer");
  if (!switchLogo) return;
  // 沒有選店家時直接隱藏
  if (switchLogo.style.display === "none") return;
  if (window.innerWidth <= 600) {
    // 手機：插入到 .status-display-outer-container 後面
    if (statusContainer) {
      if (statusContainer.nextSibling !== switchLogo) {
        statusContainer.parentNode.insertBefore(switchLogo, statusContainer.nextSibling);
      }
    } else {
      // 找不到插入點就隱藏
      switchLogo.style.display = "none";
    }
  } else {
    // 桌面：插入到 footer 前面
    if (footer) {
      if (footer.previousElementSibling !== switchLogo) {
        footer.parentNode.insertBefore(switchLogo, footer);
      }
    } else {
      switchLogo.style.display = "none";
    }
  }
}
// 定義友善時光區間與折扣資訊
var FRIENDLY_TIME_CONFIG = {
  sevenEleven: {
    id: "sevenEleven",
    name: "7-ELEVEN",
    // 更新為你提供的一般 LOGO 網址
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/7-eleven_logo.svg/800px-7-eleven_logo.svg.png",
    // 新增橫向 LOGO 網址
    horizontalLogo: "https://www.us3c.com.tw/wp-content/uploads/2022/04/7-ELEVEn_%E6%A9%AB%E5%BC%8Flogo-%E8%BD%89%E6%8F%9Brgb_10909-04.png",
    friendlyHours: [
    // 10:00 - 17:00 65折 (鮮食麵類與米飯)
    {
      start: {
        hour: 10,
        minute: 0
      },
      end: {
        hour: 17,
        minute: 0
      },
      discount: "65折",
      description: "鮮食麵類與米飯"
    },
    // 19:00 - 19:59 8折 (鮮食麵包含三角/圓形飯糰)
    {
      start: {
        hour: 19,
        minute: 0
      },
      end: {
        hour: 19,
        minute: 59
      },
      discount: "8折",
      description: "鮮食麵包含三角/圓形飯糰"
    },
    // 20:00 - 03:00 65折 (鮮食麵包含三角/圓形飯糰) - 跨日
    {
      start: {
        hour: 20,
        minute: 0
      },
      end: {
        hour: 3,
        minute: 0
      },
      discount: "65折",
      description: "鮮食麵包含三角/圓形飯糰"
    }]
  },
  familyMart: {
    id: "familyMart",
    name: "全家",
    // 更新為你提供的一般 LOGO 網址
    logo: "https://play-lh.googleusercontent.com/e3AKbefh3znufeBBSF1anaUZwV7oSkTjNCn67ZdSD18DwE95y7lZY9uHDloXH8fcmg",
    // 新增橫向 LOGO 網址
    horizontalLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-h1Z5--PFgKXN_kIDwmMLDPb0UPYkA5wqkQ&s",
    friendlyHours: [
    // 10:00 - 17:00 7折 (飯糰、壽司、手卷、便當類等)
    {
      start: {
        hour: 10,
        minute: 0
      },
      end: {
        hour: 17,
        minute: 0
      },
      discount: "7折",
      description: "飯糰、壽司、手卷、便當類等"
    },
    // 17:00 - 00:00 7折 (即期鮮食：便當、三明治、沙拉、湯品等)
    {
      start: {
        hour: 17,
        minute: 0
      },
      end: {
        hour: 24,
        minute: 0
      },
      discount: "7折",
      description: "即期鮮食（便當、三明治、沙拉、湯品等）"
    } // 24:00 代表當天結束，即 23:59:59
    ]
  }
};

/**
 * 判斷當前時間是否在友善時光區間內，並返回折扣資訊。
 * @param {Date} currentTime 當前時間物件。
 * @param {Object} storeConfig 店家配置，包含 friendlyHours 陣列。
 * @returns {{isFriendly: boolean, discount: string|null, description: string|null}} 判斷結果。
 */
var isFriendlyTime = function isFriendlyTime(currentTime, storeConfig) {
  var currentHour = currentTime.getHours();
  var currentMinute = currentTime.getMinutes();
  var currentTotalMinutes = currentHour * 60 + currentMinute;
  var _iterator = _createForOfIteratorHelper(storeConfig.friendlyHours),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var range = _step.value;
      var startTotalMinutes = range.start.hour * 60 + (range.start.minute || 0);
      var endTotalMinutes = range.end.hour * 60 + (range.end.minute || 0);

      // 判斷時間區間是否跨日 (例如 20:00 - 03:00)
      var crossesMidnight = range.start.hour > range.end.hour || range.start.hour === range.end.hour && range.start.minute > range.end.minute;
      var inRange = false;
      if (!crossesMidnight) {
        // 標準時間區間 (例如 10:00 - 17:00 或 19:00 - 19:59)
        // 如果結束分鐘是 59，表示包含該分鐘 (例如 19:59:59)
        if (range.end.minute === 59) {
          inRange = currentTotalMinutes >= startTotalMinutes && currentTotalMinutes <= endTotalMinutes;
        } else {
          // 否則，結束時間點不包含 (例如 17:00 指 16:59:59 之前)
          inRange = currentTotalMinutes >= startTotalMinutes && currentTotalMinutes < endTotalMinutes;
        }
      } else {
        // 跨日時間區間 (例如 20:00 - 03:00)
        // 判斷邏輯：在第一天的區間內 OR 在第二天的區間內
        var isAfterStartOnFirstDay = currentTotalMinutes >= startTotalMinutes && currentTotalMinutes < 24 * 60; // Up to 23:59
        var isBeforeEndOnNextDay = currentTotalMinutes >= 0; // From 00:00

        // 如果跨日區間的結束分鐘是 59，則第二天的區間需要包含該分鐘
        if (range.end.minute === 59) {
          isBeforeEndOnNextDay = isBeforeEndOnNextDay && currentTotalMinutes <= endTotalMinutes;
        } else {
          isBeforeEndOnNextDay = isBeforeEndOnNextDay && currentTotalMinutes < endTotalMinutes;
        }
        inRange = isAfterStartOnFirstDay || isBeforeEndOnNextDay;
      }
      if (inRange) {
        return {
          isFriendly: true,
          discount: range.discount,
          description: range.description
        };
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return {
    isFriendly: false,
    discount: null,
    description: null
  };
};

// 主要的應用組件
function App() {
  // 使用 useState 來管理當前時間和選擇的店家
  var _React$useState = React.useState(new Date()),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    currentTime = _React$useState2[0],
    setCurrentTime = _React$useState2[1];
  var _React$useState3 = React.useState(null),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    selectedStoreId = _React$useState4[0],
    setSelectedStoreId = _React$useState4[1]; // 'sevenEleven' or 'familyMart'

  // 使用 useEffect 來設定定時器，並在組件卸載時清除
  React.useEffect(function () {
    var intervalId = setInterval(function () {
      setCurrentTime(new Date()); // 每 1000 毫秒 (1 秒) 更新一次時間
    }, 1000);
    return function () {
      return clearInterval(intervalId);
    };
  }, []);

  // 處理店家 LOGO 點擊事件
  var handleLogoClick = function handleLogoClick(storeId) {
    setSelectedStoreId(storeId);
  };

  // 讓外部 LOGO 區塊可以切換 React 狀態
  window.setSelectedStoreId = function (storeId) {
    setSelectedStoreId(storeId);
  };

  // 外部 LOGO 區塊渲染函式
  function renderSwitchLogoOuter(storeId) {
    var outer = document.getElementById("switch-logo-outer");
    if (!outer) return;
    if (!storeId) {
      outer.style.display = "none";
      outer.innerHTML = "";
      return;
    }
    var html = "";
    if (storeId === FRIENDLY_TIME_CONFIG.sevenEleven.id) {
      html = "\n            <div class=\"switch-logo-wrapper\" onclick=\"window.setSelectedStoreId('familyMart')\">\n              <img src=\"".concat(FRIENDLY_TIME_CONFIG.familyMart.horizontalLogo, "\" alt=\"\u5207\u63DB\u81F3\u5168\u5BB6\" onerror=\"this.onerror=null; this.src='https://placehold.co/180x35/CCCCCC/333333?text=FamilyMart-Horizontal';\" />\n              <span class=\"switch-logo-text\">\u5207\u63DB\u81F3\u5168\u5BB6</span>\n            </div>\n          ");
    } else {
      html = "\n            <div class=\"switch-logo-wrapper\" onclick=\"window.setSelectedStoreId('sevenEleven')\">\n              <img src=\"".concat(FRIENDLY_TIME_CONFIG.sevenEleven.horizontalLogo, "\" alt=\"\u5207\u63DB\u81F37-ELEVEN\" onerror=\"this.onerror=null; this.src='https://placehold.co/180x35/CCCCCC/333333?text=7-ELEVEN-Horizontal';\" />\n              <span class=\"switch-logo-text\">\u5207\u63DB\u81F3\u5C0F\u4E03</span>\n            </div>\n          ");
    }
    outer.innerHTML = html;
    outer.style.display = "";
  }

  // 監控 selectedStoreId 變動時，渲染外部 LOGO 區塊
  React.useEffect(function () {
    renderSwitchLogoOuter(selectedStoreId);
    // 每次選擇店家變動時都 relocate，確保插入點正確
    setTimeout(function () {
      relocateSwitchLogoOuter();
    }, 0);
  }, [selectedStoreId]);

  // 格式化時間為 HH:MM:SS 格式 (24小時制)
  var formattedTime = React.useMemo(function () {
    var hours = String(currentTime.getHours()).padStart(2, "0");
    var minutes = String(currentTime.getMinutes()).padStart(2, "0");
    var seconds = String(currentTime.getSeconds()).padStart(2, "0");
    return "".concat(hours, ":").concat(minutes, ":").concat(seconds);
  }, [currentTime]);

  // 友善時光倒數提示 function
  function getFriendlyTimeNotice() {
    if (!selectedStoreId) return null;
    var storeConfig = FRIENDLY_TIME_CONFIG[selectedStoreId];
    var now = currentTime;
    var nowMinutes = now.getHours() * 60 + now.getMinutes();
    var periods = storeConfig.friendlyHours.map(function (r) {
      var start = r.start.hour * 60 + (r.start.minute || 0);
      var end = r.end.hour * 60 + (r.end.minute || 0);
      if (end <= start) end += 1440;
      return {
        start: start,
        end: end,
        discount: r.discount
      };
    });
    var sorted = periods.map(function (p) {
      return _objectSpread(_objectSpread({}, p), {}, {
        start: p.start,
        end: p.end
      });
    }).sort(function (a, b) {
      return a.start - b.start;
    });
    var inPeriod = null;
    var _iterator2 = _createForOfIteratorHelper(sorted),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _p = _step2.value;
        var _s = _p.start,
          e = _p.end;
        if (nowMinutes < _s) _s -= 1440, e -= 1440;
        if (nowMinutes >= _s && nowMinutes < e) {
          inPeriod = _p;
          break;
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    var nextPeriod = null;
    var minDelta = Infinity;
    var _iterator3 = _createForOfIteratorHelper(sorted),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _p2 = _step3.value;
        var _s2 = _p2.start;
        if (_s2 <= nowMinutes) _s2 += 1440;
        var _delta = _s2 - nowMinutes;
        if (_delta > 0 && _delta < minDelta) {
          minDelta = _delta;
          nextPeriod = _p2;
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    var nextChange = null;
    if (inPeriod) {
      var minChange = Infinity;
      var _iterator4 = _createForOfIteratorHelper(sorted),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var p = _step4.value;
          var s = p.start;
          if (s <= nowMinutes) s += 1440;
          var delta = s - nowMinutes;
          if (delta > 0 && delta < minChange) {
            minChange = delta;
            nextChange = p;
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
    function formatDelta(mins) {
      if (mins < 1) return "不到1分鐘";
      var h = Math.floor(mins / 60);
      var m = mins % 60;
      return (h ? h + "小時" : "") + (m ? m + "分" : !h ? "0分" : "");
    }
    if (!inPeriod && nextPeriod) {
      return "\u8DDD\u96E2\u4E0B\u6B21\u53CB\u5584\u6642\u5149\uFF08".concat(nextPeriod.discount, "\uFF09\u9084\u6709").concat(formatDelta(minDelta));
    }
    if (inPeriod) {
      var timeToEnd = inPeriod.end - nowMinutes;
      var msg = "\u672C\u6642\u6BB5\u5269\u9918".concat(formatDelta(timeToEnd));
      if (nextChange && nextChange.discount !== inPeriod.discount) {
        msg += "\uFF0C\u518D".concat(formatDelta(nextChange.start - nowMinutes), "\u8B8A\u6210").concat(nextChange.discount);
      }
      return msg;
    }
    return null;
  }

  // 狀態顯示內容
  var renderStatusContent = React.useMemo(function () {
    if (!selectedStoreId) {
      return /*#__PURE__*/React.createElement("p", {
        className: "status-placeholder"
      }, "\u8ACB\u9EDE\u64CA\u4E0A\u65B9 LOGO \u67E5\u8A62\u53CB\u5584\u6642\u5149");
    }
    var storeConfig = FRIENDLY_TIME_CONFIG[selectedStoreId];
    if (!storeConfig) {
      return /*#__PURE__*/React.createElement("p", {
        className: "status-placeholder"
      }, "\u67E5\u8A62\u932F\u8AA4\uFF0C\u8ACB\u91CD\u8A66");
    }
    var result = isFriendlyTime(currentTime, storeConfig);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: "100%",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("h1", {
      className: "status-main-text"
    }, storeConfig.name, " ", result.isFriendly ? "現在是友善時光" : "現在不是友善時光"), result.isFriendly && result.discount && /*#__PURE__*/React.createElement("p", {
      className: "status-discount-text"
    }, result.discount));
  }, [selectedStoreId, currentTime]);

  // 多商品輸入清單
  var _React$useState5 = React.useState([{
      price: ""
    }]),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    items = _React$useState6[0],
    setItems = _React$useState6[1];
  var currentDiscountRate = React.useMemo(function () {
    if (!selectedStoreId) return 1;
    var storeConfig = FRIENDLY_TIME_CONFIG[selectedStoreId];
    var result = isFriendlyTime(currentTime, storeConfig);
    if (!result.isFriendly || !result.discount) return 1;
    var match = result.discount.match(/(\d+)(?:\.(\d+))?折/);
    if (match) {
      var num = parseFloat(match[1] + (match[2] ? "." + match[2] : ""));
      if (num <= 10) {
        return num / 10;
      } else {
        return num / 100;
      }
    }
    return 1;
  }, [selectedStoreId, currentTime]);

  // 無條件進位 function
  function alwaysCeil(num) {
    return Math.ceil(num);
  }
  var discountedItems = React.useMemo(function () {
    return items.map(function (item) {
      var p = parseFloat(item.price);
      if (isNaN(p) || p <= 0) return "";
      var raw = p * (currentDiscountRate !== 1 ? currentDiscountRate : 1);
      if (selectedStoreId === "familyMart" || selectedStoreId === "sevenEleven") {
        // 全家、小七皆無條件進位
        return alwaysCeil(raw);
      } else {
        return Math.round(raw);
      }
    });
  }, [items, currentDiscountRate, selectedStoreId]);
  var totalDiscounted = React.useMemo(function () {
    return discountedItems.reduce(function (sum, val) {
      return sum + (parseInt(val) || 0);
    }, 0);
  }, [discountedItems]);
  var cardBackgroundLogo = selectedStoreId ? "url(".concat(FRIENDLY_TIME_CONFIG[selectedStoreId].logo, ")") : "none";
  var appCardClasses = "app-card-container ".concat(selectedStoreId !== null ? "selected-state" : "");
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: appCardClasses,
    style: {
      backgroundImage: cardBackgroundLogo
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "current-time-display"
  }, formattedTime), selectedStoreId === null &&
  /*#__PURE__*/
  // 初始狀態：顯示兩個大 LOGO
  React.createElement("div", {
    className: "logo-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "logo-wrapper",
    onClick: function onClick() {
      return handleLogoClick(FRIENDLY_TIME_CONFIG.sevenEleven.id);
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: FRIENDLY_TIME_CONFIG.sevenEleven.logo,
    alt: "7-ELEVEN Logo",
    onerror: "this.onerror=null; this.src='https://placehold.co/250x100/CCCCCC/333333?text=7-ELEVEN';"
  })), /*#__PURE__*/React.createElement("div", {
    className: "logo-wrapper",
    onClick: function onClick() {
      return handleLogoClick(FRIENDLY_TIME_CONFIG.familyMart.id);
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: FRIENDLY_TIME_CONFIG.familyMart.logo,
    alt: "FamilyMart Logo",
    onerror: "this.onerror=null; this.src='https://placehold.co/250x100/CCCCCC/333333?text=FamilyMart';"
  })))), selectedStoreId !== null && /*#__PURE__*/React.createElement("div", {
    className: "status-display-outer-container"
  }, renderStatusContent, " ", /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      color: "#007bff",
      fontSize: "1em",
      fontWeight: 500
    }
  }, getFriendlyTimeNotice()), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      fontWeight: "bold",
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, "\u539F\u50F9"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32
    }
  })), items.map(function (item, idx) {
    return /*#__PURE__*/React.createElement("div", {
      key: idx,
      style: {
        display: "flex",
        alignItems: "center",
        marginBottom: 6
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      inputMode: "decimal",
      pattern: "[0-9]*",
      value: item.price,
      onChange: function onChange(e) {
        var newItems = _toConsumableArray(items);
        newItems[idx].price = e.target.value.replace(/[^\d.]/g, "");
        setItems(newItems);
      },
      placeholder: "\u539F\u50F9",
      style: {
        flex: 1,
        marginRight: 6,
        padding: "6px 8px",
        fontSize: "1em",
        borderRadius: 6,
        border: "1px solid #ccc"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        color: currentDiscountRate !== 1 ? "#28a745" : "#888",
        fontWeight: "bold"
      }
    }, item.price ? currentDiscountRate !== 1 ? discountedItems[idx] + " 元" : "無折扣" : ""), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: function onClick() {
        return setItems(items.filter(function (_, i) {
          return i !== idx;
        }));
      },
      style: {
        marginLeft: 4,
        background: "#eee",
        border: "none",
        borderRadius: 4,
        cursor: "pointer",
        fontSize: "1.1em",
        padding: "2px 8px"
      },
      disabled: items.length === 1,
      title: "\u522A\u9664\u6B64\u5546\u54C1"
    }, "\xD7"));
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setItems([].concat(_toConsumableArray(items), [{
        price: ""
      }]));
    },
    style: {
      marginTop: 8,
      padding: "6px 16px",
      fontSize: "1em",
      borderRadius: 6,
      border: "1px solid #007bff",
      background: "#fff",
      color: "#007bff",
      cursor: items[items.length - 1].price ? "pointer" : "not-allowed",
      opacity: items[items.length - 1].price ? 1 : 0.5
    },
    disabled: !items[items.length - 1].price
  }, "\u65B0\u589E\u5546\u54C1"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      fontSize: "1.2em",
      fontWeight: "bold",
      color: "#28a745"
    }
  }, items.some(function (i) {
    return i.price;
  }) ? currentDiscountRate !== 1 ? "\u6298\u6263\u5F8C\u7E3D\u50F9\uFF1A".concat(totalDiscounted, " \u5143") : "\u7E3D\u50F9\uFF1A".concat(totalDiscounted, " \u5143") : ""))));
}

// 將 App 組件渲染到 DOM 中的 #root 元素
// 使用 window.onload 確保 DOM 完全載入後再渲染 React 應用
window.onload = function () {
  try {
    ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
  } catch (error) {
    console.error("Error rendering React app:", error);
    document.getElementById("root").innerHTML = '<p style="color: red; text-align: center; font-size: 1.5em; padding: 20px;">應用程式載入失敗，請檢查瀏覽器主控台錯誤。</p>';
  }
  relocateSwitchLogoOuter();
};
window.addEventListener("resize", relocateSwitchLogoOuter);

// 讓 React 切換 LOGO 時也能同步移動位置
var origRenderSwitchLogoOuter = window.renderSwitchLogoOuter;
window.renderSwitchLogoOuter = function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  if (typeof origRenderSwitchLogoOuter === "function") origRenderSwitchLogoOuter.apply(this, args);
  relocateSwitchLogoOuter();
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyZWxvY2F0ZVN3aXRjaExvZ29PdXRlciIsInN3aXRjaExvZ28iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3RhdHVzQ29udGFpbmVyIiwicXVlcnlTZWxlY3RvciIsImZvb3RlciIsInN0eWxlIiwiZGlzcGxheSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJuZXh0U2libGluZyIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwiRlJJRU5ETFlfVElNRV9DT05GSUciLCJzZXZlbkVsZXZlbiIsImlkIiwibmFtZSIsImxvZ28iLCJob3Jpem9udGFsTG9nbyIsImZyaWVuZGx5SG91cnMiLCJzdGFydCIsImhvdXIiLCJtaW51dGUiLCJlbmQiLCJkaXNjb3VudCIsImRlc2NyaXB0aW9uIiwiZmFtaWx5TWFydCIsImlzRnJpZW5kbHlUaW1lIiwiY3VycmVudFRpbWUiLCJzdG9yZUNvbmZpZyIsImN1cnJlbnRIb3VyIiwiZ2V0SG91cnMiLCJjdXJyZW50TWludXRlIiwiZ2V0TWludXRlcyIsImN1cnJlbnRUb3RhbE1pbnV0ZXMiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwicyIsIm4iLCJkb25lIiwicmFuZ2UiLCJ2YWx1ZSIsInN0YXJ0VG90YWxNaW51dGVzIiwiZW5kVG90YWxNaW51dGVzIiwiY3Jvc3Nlc01pZG5pZ2h0IiwiaW5SYW5nZSIsImlzQWZ0ZXJTdGFydE9uRmlyc3REYXkiLCJpc0JlZm9yZUVuZE9uTmV4dERheSIsImlzRnJpZW5kbHkiLCJlcnIiLCJlIiwiZiIsIkFwcCIsIl9SZWFjdCR1c2VTdGF0ZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJEYXRlIiwiX1JlYWN0JHVzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic2V0Q3VycmVudFRpbWUiLCJfUmVhY3QkdXNlU3RhdGUzIiwiX1JlYWN0JHVzZVN0YXRlNCIsInNlbGVjdGVkU3RvcmVJZCIsInNldFNlbGVjdGVkU3RvcmVJZCIsInVzZUVmZmVjdCIsImludGVydmFsSWQiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJoYW5kbGVMb2dvQ2xpY2siLCJzdG9yZUlkIiwicmVuZGVyU3dpdGNoTG9nb091dGVyIiwib3V0ZXIiLCJpbm5lckhUTUwiLCJodG1sIiwiY29uY2F0Iiwic2V0VGltZW91dCIsImZvcm1hdHRlZFRpbWUiLCJ1c2VNZW1vIiwiaG91cnMiLCJTdHJpbmciLCJwYWRTdGFydCIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwiZ2V0U2Vjb25kcyIsImdldEZyaWVuZGx5VGltZU5vdGljZSIsIm5vdyIsIm5vd01pbnV0ZXMiLCJwZXJpb2RzIiwibWFwIiwiciIsInNvcnRlZCIsInAiLCJfb2JqZWN0U3ByZWFkIiwic29ydCIsImEiLCJiIiwiaW5QZXJpb2QiLCJfaXRlcmF0b3IyIiwiX3N0ZXAyIiwibmV4dFBlcmlvZCIsIm1pbkRlbHRhIiwiSW5maW5pdHkiLCJfaXRlcmF0b3IzIiwiX3N0ZXAzIiwiZGVsdGEiLCJuZXh0Q2hhbmdlIiwibWluQ2hhbmdlIiwiX2l0ZXJhdG9yNCIsIl9zdGVwNCIsImZvcm1hdERlbHRhIiwibWlucyIsImgiLCJNYXRoIiwiZmxvb3IiLCJtIiwidGltZVRvRW5kIiwibXNnIiwicmVuZGVyU3RhdHVzQ29udGVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJyZXN1bHQiLCJ3aWR0aCIsInRleHRBbGlnbiIsIl9SZWFjdCR1c2VTdGF0ZTUiLCJwcmljZSIsIl9SZWFjdCR1c2VTdGF0ZTYiLCJpdGVtcyIsInNldEl0ZW1zIiwiY3VycmVudERpc2NvdW50UmF0ZSIsIm1hdGNoIiwibnVtIiwicGFyc2VGbG9hdCIsImFsd2F5c0NlaWwiLCJjZWlsIiwiZGlzY291bnRlZEl0ZW1zIiwiaXRlbSIsImlzTmFOIiwicmF3Iiwicm91bmQiLCJ0b3RhbERpc2NvdW50ZWQiLCJyZWR1Y2UiLCJzdW0iLCJ2YWwiLCJwYXJzZUludCIsImNhcmRCYWNrZ3JvdW5kTG9nbyIsImFwcENhcmRDbGFzc2VzIiwiRnJhZ21lbnQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJvbkNsaWNrIiwic3JjIiwiYWx0Iiwib25lcnJvciIsIm1hcmdpblRvcCIsImNvbG9yIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibWFyZ2luQm90dG9tIiwiZmxleCIsImlkeCIsImtleSIsImFsaWduSXRlbXMiLCJ0eXBlIiwiaW5wdXRNb2RlIiwicGF0dGVybiIsIm9uQ2hhbmdlIiwibmV3SXRlbXMiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJ0YXJnZXQiLCJyZXBsYWNlIiwicGxhY2Vob2xkZXIiLCJtYXJnaW5SaWdodCIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJmaWx0ZXIiLCJfIiwiaSIsIm1hcmdpbkxlZnQiLCJiYWNrZ3JvdW5kIiwiY3Vyc29yIiwiZGlzYWJsZWQiLCJsZW5ndGgiLCJ0aXRsZSIsIm9wYWNpdHkiLCJzb21lIiwib25sb2FkIiwiUmVhY3RET00iLCJjcmVhdGVSb290IiwicmVuZGVyIiwiZXJyb3IiLCJjb25zb2xlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9yaWdSZW5kZXJTd2l0Y2hMb2dvT3V0ZXIiLCJfbGVuIiwiYXJndW1lbnRzIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImFwcGx5Il0sInNvdXJjZXMiOlsiSW5saW5lIEJhYmVsIHNjcmlwdCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAvLyDli5XmhYvnp7vli5XliIfmj5sgTE9HTyDljYDloYrvvIjmiYvmqZ8gaW50cm8tdGV4dCDkuIrmlrnvvIzmoYzpnaIgZm9vdGVyIOS4iuaWue+8iVxuICAgIGZ1bmN0aW9uIHJlbG9jYXRlU3dpdGNoTG9nb091dGVyKCkge1xuICAgICAgY29uc3Qgc3dpdGNoTG9nbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3dpdGNoLWxvZ28tb3V0ZXJcIik7XG4gICAgICBjb25zdCBzdGF0dXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcIi5zdGF0dXMtZGlzcGxheS1vdXRlci1jb250YWluZXJcIlxuICAgICAgKTtcbiAgICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb290ZXIuZnJvc3RlZC1mb290ZXJcIik7XG4gICAgICBpZiAoIXN3aXRjaExvZ28pIHJldHVybjtcbiAgICAgIC8vIOaykuaciemBuOW6l+WutuaZguebtOaOpemaseiXj1xuICAgICAgaWYgKHN3aXRjaExvZ28uc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIpIHJldHVybjtcbiAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSA2MDApIHtcbiAgICAgICAgLy8g5omL5qmf77ya5o+S5YWl5YiwIC5zdGF0dXMtZGlzcGxheS1vdXRlci1jb250YWluZXIg5b6M6Z2iXG4gICAgICAgIGlmIChzdGF0dXNDb250YWluZXIpIHtcbiAgICAgICAgICBpZiAoc3RhdHVzQ29udGFpbmVyLm5leHRTaWJsaW5nICE9PSBzd2l0Y2hMb2dvKSB7XG4gICAgICAgICAgICBzdGF0dXNDb250YWluZXIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoXG4gICAgICAgICAgICAgIHN3aXRjaExvZ28sXG4gICAgICAgICAgICAgIHN0YXR1c0NvbnRhaW5lci5uZXh0U2libGluZ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8g5om+5LiN5Yiw5o+S5YWl6bue5bCx6Zqx6JePXG4gICAgICAgICAgc3dpdGNoTG9nby5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOahjOmdou+8muaPkuWFpeWIsCBmb290ZXIg5YmN6Z2iXG4gICAgICAgIGlmIChmb290ZXIpIHtcbiAgICAgICAgICBpZiAoZm9vdGVyLnByZXZpb3VzRWxlbWVudFNpYmxpbmcgIT09IHN3aXRjaExvZ28pIHtcbiAgICAgICAgICAgIGZvb3Rlci5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzd2l0Y2hMb2dvLCBmb290ZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzd2l0Y2hMb2dvLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyDlrprnvqnlj4vlloTmmYLlhYnljYDplpPoiIfmipjmiaPos4foqIpcbiAgICBjb25zdCBGUklFTkRMWV9USU1FX0NPTkZJRyA9IHtcbiAgICAgIHNldmVuRWxldmVuOiB7XG4gICAgICAgIGlkOiBcInNldmVuRWxldmVuXCIsXG4gICAgICAgIG5hbWU6IFwiNy1FTEVWRU5cIixcbiAgICAgICAgLy8g5pu05paw54K65L2g5o+Q5L6b55qE5LiA6IisIExPR08g57ay5Z2AXG4gICAgICAgIGxvZ286IFwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi80LzQwLzctZWxldmVuX2xvZ28uc3ZnLzgwMHB4LTctZWxldmVuX2xvZ28uc3ZnLnBuZ1wiLFxuICAgICAgICAvLyDmlrDlop7mqavlkJEgTE9HTyDntrLlnYBcbiAgICAgICAgaG9yaXpvbnRhbExvZ286XG4gICAgICAgICAgXCJodHRwczovL3d3dy51czNjLmNvbS50dy93cC1jb250ZW50L3VwbG9hZHMvMjAyMi8wNC83LUVMRVZFbl8lRTYlQTklQUIlRTUlQkMlOEZsb2dvLSVFOCVCRCU4OSVFNiU4RiU5QnJnYl8xMDkwOS0wNC5wbmdcIixcbiAgICAgICAgZnJpZW5kbHlIb3VyczogW1xuICAgICAgICAgIC8vIDEwOjAwIC0gMTc6MDAgNjXmipggKOmurumjn+m6temhnuiIh+exs+mjrylcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGFydDogeyBob3VyOiAxMCwgbWludXRlOiAwIH0sXG4gICAgICAgICAgICBlbmQ6IHsgaG91cjogMTcsIG1pbnV0ZTogMCB9LFxuICAgICAgICAgICAgZGlzY291bnQ6IFwiNjXmiphcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIumurumjn+m6temhnuiIh+exs+mjr1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgLy8gMTk6MDAgLSAxOTo1OSA45oqYICjprq7po5/purXljIXlkKvkuInop5Iv5ZyT5b2i6aOv57OwKVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXJ0OiB7IGhvdXI6IDE5LCBtaW51dGU6IDAgfSxcbiAgICAgICAgICAgIGVuZDogeyBob3VyOiAxOSwgbWludXRlOiA1OSB9LFxuICAgICAgICAgICAgZGlzY291bnQ6IFwiOOaKmFwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwi6a6u6aOf6bq15YyF5ZCr5LiJ6KeSL+Wck+W9oumjr+ezsFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgLy8gMjA6MDAgLSAwMzowMCA2NeaKmCAo6a6u6aOf6bq15YyF5ZCr5LiJ6KeSL+Wck+W9oumjr+ezsCkgLSDot6jml6VcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGFydDogeyBob3VyOiAyMCwgbWludXRlOiAwIH0sXG4gICAgICAgICAgICBlbmQ6IHsgaG91cjogMywgbWludXRlOiAwIH0sXG4gICAgICAgICAgICBkaXNjb3VudDogXCI2NeaKmFwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwi6a6u6aOf6bq15YyF5ZCr5LiJ6KeSL+Wck+W9oumjr+ezsFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgZmFtaWx5TWFydDoge1xuICAgICAgICBpZDogXCJmYW1pbHlNYXJ0XCIsXG4gICAgICAgIG5hbWU6IFwi5YWo5a62XCIsXG4gICAgICAgIC8vIOabtOaWsOeCuuS9oOaPkOS+m+eahOS4gOiIrCBMT0dPIOe2suWdgFxuICAgICAgICBsb2dvOiBcImh0dHBzOi8vcGxheS1saC5nb29nbGV1c2VyY29udGVudC5jb20vZTNBS2JlZmgzem51ZmVCQlNGMWFuYVVad1Y3b1NrVGpOQ242N1pkU0QxOER3RTk1eTdsWlk5dUhEbG9YSDhmY21nXCIsXG4gICAgICAgIC8vIOaWsOWinuapq+WQkSBMT0dPIOe2suWdgFxuICAgICAgICBob3Jpem9udGFsTG9nbzpcbiAgICAgICAgICBcImh0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1EtaDFaNS0tUEZnS1hOX2tJRHdtTUxEUGIwVVBZa0E1d3FrUSZzXCIsXG4gICAgICAgIGZyaWVuZGx5SG91cnM6IFtcbiAgICAgICAgICAvLyAxMDowMCAtIDE3OjAwIDfmipggKOmjr+ezsOOAgeWjveWPuOOAgeaJi+WNt+OAgeS+v+eVtumhnuetiSlcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGFydDogeyBob3VyOiAxMCwgbWludXRlOiAwIH0sXG4gICAgICAgICAgICBlbmQ6IHsgaG91cjogMTcsIG1pbnV0ZTogMCB9LFxuICAgICAgICAgICAgZGlzY291bnQ6IFwiN+aKmFwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwi6aOv57Ow44CB5aO95Y+444CB5omL5Y2344CB5L6/55W26aGe562JXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICAvLyAxNzowMCAtIDAwOjAwIDfmipggKOWNs+acn+murumjn++8muS+v+eVtuOAgeS4ieaYjuayu+OAgeaymeaLieOAgea5r+WTgeetiSlcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGFydDogeyBob3VyOiAxNywgbWludXRlOiAwIH0sXG4gICAgICAgICAgICBlbmQ6IHsgaG91cjogMjQsIG1pbnV0ZTogMCB9LFxuICAgICAgICAgICAgZGlzY291bnQ6IFwiN+aKmFwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwi5Y2z5pyf6a6u6aOf77yI5L6/55W244CB5LiJ5piO5rK744CB5rKZ5ouJ44CB5rmv5ZOB562J77yJXCIsXG4gICAgICAgICAgfSwgLy8gMjQ6MDAg5Luj6KGo55W25aSp57WQ5p2f77yM5Y2zIDIzOjU5OjU5XG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiDliKTmlrfnlbbliY3mmYLplpPmmK/lkKblnKjlj4vlloTmmYLlhYnljYDplpPlhafvvIzkuKbov5Tlm57mipjmiaPos4foqIrjgIJcbiAgICAgKiBAcGFyYW0ge0RhdGV9IGN1cnJlbnRUaW1lIOeVtuWJjeaZgumWk+eJqeS7tuOAglxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzdG9yZUNvbmZpZyDlupflrrbphY3nva7vvIzljIXlkKsgZnJpZW5kbHlIb3VycyDpmaPliJfjgIJcbiAgICAgKiBAcmV0dXJucyB7e2lzRnJpZW5kbHk6IGJvb2xlYW4sIGRpc2NvdW50OiBzdHJpbmd8bnVsbCwgZGVzY3JpcHRpb246IHN0cmluZ3xudWxsfX0g5Yik5pa357WQ5p6c44CCXG4gICAgICovXG4gICAgY29uc3QgaXNGcmllbmRseVRpbWUgPSAoY3VycmVudFRpbWUsIHN0b3JlQ29uZmlnKSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50SG91ciA9IGN1cnJlbnRUaW1lLmdldEhvdXJzKCk7XG4gICAgICBjb25zdCBjdXJyZW50TWludXRlID0gY3VycmVudFRpbWUuZ2V0TWludXRlcygpO1xuICAgICAgY29uc3QgY3VycmVudFRvdGFsTWludXRlcyA9IGN1cnJlbnRIb3VyICogNjAgKyBjdXJyZW50TWludXRlO1xuXG4gICAgICBmb3IgKGNvbnN0IHJhbmdlIG9mIHN0b3JlQ29uZmlnLmZyaWVuZGx5SG91cnMpIHtcbiAgICAgICAgY29uc3Qgc3RhcnRUb3RhbE1pbnV0ZXMgPVxuICAgICAgICAgIHJhbmdlLnN0YXJ0LmhvdXIgKiA2MCArIChyYW5nZS5zdGFydC5taW51dGUgfHwgMCk7XG4gICAgICAgIGxldCBlbmRUb3RhbE1pbnV0ZXMgPSByYW5nZS5lbmQuaG91ciAqIDYwICsgKHJhbmdlLmVuZC5taW51dGUgfHwgMCk7XG5cbiAgICAgICAgLy8g5Yik5pa35pmC6ZaT5Y2A6ZaT5piv5ZCm6Leo5pelICjkvovlpoIgMjA6MDAgLSAwMzowMClcbiAgICAgICAgY29uc3QgY3Jvc3Nlc01pZG5pZ2h0ID1cbiAgICAgICAgICByYW5nZS5zdGFydC5ob3VyID4gcmFuZ2UuZW5kLmhvdXIgfHxcbiAgICAgICAgICAocmFuZ2Uuc3RhcnQuaG91ciA9PT0gcmFuZ2UuZW5kLmhvdXIgJiZcbiAgICAgICAgICAgIHJhbmdlLnN0YXJ0Lm1pbnV0ZSA+IHJhbmdlLmVuZC5taW51dGUpO1xuXG4gICAgICAgIGxldCBpblJhbmdlID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKCFjcm9zc2VzTWlkbmlnaHQpIHtcbiAgICAgICAgICAvLyDmqJnmupbmmYLplpPljYDplpMgKOS+i+WmgiAxMDowMCAtIDE3OjAwIOaIliAxOTowMCAtIDE5OjU5KVxuICAgICAgICAgIC8vIOWmguaenOe1kOadn+WIhumQmOaYryA1Oe+8jOihqOekuuWMheWQq+ipsuWIhumQmCAo5L6L5aaCIDE5OjU5OjU5KVxuICAgICAgICAgIGlmIChyYW5nZS5lbmQubWludXRlID09PSA1OSkge1xuICAgICAgICAgICAgaW5SYW5nZSA9XG4gICAgICAgICAgICAgIGN1cnJlbnRUb3RhbE1pbnV0ZXMgPj0gc3RhcnRUb3RhbE1pbnV0ZXMgJiZcbiAgICAgICAgICAgICAgY3VycmVudFRvdGFsTWludXRlcyA8PSBlbmRUb3RhbE1pbnV0ZXM7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIOWQpuWJh++8jOe1kOadn+aZgumWk+m7nuS4jeWMheWQqyAo5L6L5aaCIDE3OjAwIOaMhyAxNjo1OTo1OSDkuYvliY0pXG4gICAgICAgICAgICBpblJhbmdlID1cbiAgICAgICAgICAgICAgY3VycmVudFRvdGFsTWludXRlcyA+PSBzdGFydFRvdGFsTWludXRlcyAmJlxuICAgICAgICAgICAgICBjdXJyZW50VG90YWxNaW51dGVzIDwgZW5kVG90YWxNaW51dGVzO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyDot6jml6XmmYLplpPljYDplpMgKOS+i+WmgiAyMDowMCAtIDAzOjAwKVxuICAgICAgICAgIC8vIOWIpOaWt+mCj+i8r++8muWcqOesrOS4gOWkqeeahOWNgOmWk+WFpyBPUiDlnKjnrKzkuozlpKnnmoTljYDplpPlhadcbiAgICAgICAgICBjb25zdCBpc0FmdGVyU3RhcnRPbkZpcnN0RGF5ID1cbiAgICAgICAgICAgIGN1cnJlbnRUb3RhbE1pbnV0ZXMgPj0gc3RhcnRUb3RhbE1pbnV0ZXMgJiZcbiAgICAgICAgICAgIGN1cnJlbnRUb3RhbE1pbnV0ZXMgPCAyNCAqIDYwOyAvLyBVcCB0byAyMzo1OVxuICAgICAgICAgIGxldCBpc0JlZm9yZUVuZE9uTmV4dERheSA9IGN1cnJlbnRUb3RhbE1pbnV0ZXMgPj0gMDsgLy8gRnJvbSAwMDowMFxuXG4gICAgICAgICAgLy8g5aaC5p6c6Leo5pel5Y2A6ZaT55qE57WQ5p2f5YiG6ZCY5pivIDU577yM5YmH56ys5LqM5aSp55qE5Y2A6ZaT6ZyA6KaB5YyF5ZCr6Kmy5YiG6ZCYXG4gICAgICAgICAgaWYgKHJhbmdlLmVuZC5taW51dGUgPT09IDU5KSB7XG4gICAgICAgICAgICBpc0JlZm9yZUVuZE9uTmV4dERheSA9XG4gICAgICAgICAgICAgIGlzQmVmb3JlRW5kT25OZXh0RGF5ICYmIGN1cnJlbnRUb3RhbE1pbnV0ZXMgPD0gZW5kVG90YWxNaW51dGVzO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpc0JlZm9yZUVuZE9uTmV4dERheSA9XG4gICAgICAgICAgICAgIGlzQmVmb3JlRW5kT25OZXh0RGF5ICYmIGN1cnJlbnRUb3RhbE1pbnV0ZXMgPCBlbmRUb3RhbE1pbnV0ZXM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW5SYW5nZSA9IGlzQWZ0ZXJTdGFydE9uRmlyc3REYXkgfHwgaXNCZWZvcmVFbmRPbk5leHREYXk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5SYW5nZSkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc0ZyaWVuZGx5OiB0cnVlLFxuICAgICAgICAgICAgZGlzY291bnQ6IHJhbmdlLmRpc2NvdW50LFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHJhbmdlLmRlc2NyaXB0aW9uLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB7IGlzRnJpZW5kbHk6IGZhbHNlLCBkaXNjb3VudDogbnVsbCwgZGVzY3JpcHRpb246IG51bGwgfTtcbiAgICB9O1xuXG4gICAgLy8g5Li76KaB55qE5oeJ55So57WE5Lu2XG4gICAgZnVuY3Rpb24gQXBwKCkge1xuICAgICAgLy8g5L2/55SoIHVzZVN0YXRlIOS+hueuoeeQhueVtuWJjeaZgumWk+WSjOmBuOaTh+eahOW6l+WutlxuICAgICAgY29uc3QgW2N1cnJlbnRUaW1lLCBzZXRDdXJyZW50VGltZV0gPSBSZWFjdC51c2VTdGF0ZShuZXcgRGF0ZSgpKTtcbiAgICAgIGNvbnN0IFtzZWxlY3RlZFN0b3JlSWQsIHNldFNlbGVjdGVkU3RvcmVJZF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTsgLy8gJ3NldmVuRWxldmVuJyBvciAnZmFtaWx5TWFydCdcblxuICAgICAgLy8g5L2/55SoIHVzZUVmZmVjdCDkvoboqK3lrprlrprmmYLlmajvvIzkuKblnKjntYTku7bljbjovInmmYLmuIXpmaRcbiAgICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgc2V0Q3VycmVudFRpbWUobmV3IERhdGUoKSk7IC8vIOavjyAxMDAwIOavq+enkiAoMSDnp5IpIOabtOaWsOS4gOasoeaZgumWk1xuICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gICAgICB9LCBbXSk7XG5cbiAgICAgIC8vIOiZleeQhuW6l+WutiBMT0dPIOm7nuaTiuS6i+S7tlxuICAgICAgY29uc3QgaGFuZGxlTG9nb0NsaWNrID0gKHN0b3JlSWQpID0+IHtcbiAgICAgICAgc2V0U2VsZWN0ZWRTdG9yZUlkKHN0b3JlSWQpO1xuICAgICAgfTtcblxuICAgICAgLy8g6K6T5aSW6YOoIExPR08g5Y2A5aGK5Y+v5Lul5YiH5o+bIFJlYWN0IOeLgOaFi1xuICAgICAgd2luZG93LnNldFNlbGVjdGVkU3RvcmVJZCA9IChzdG9yZUlkKSA9PiB7XG4gICAgICAgIHNldFNlbGVjdGVkU3RvcmVJZChzdG9yZUlkKTtcbiAgICAgIH07XG5cbiAgICAgIC8vIOWklumDqCBMT0dPIOWNgOWhiua4suafk+WHveW8j1xuICAgICAgZnVuY3Rpb24gcmVuZGVyU3dpdGNoTG9nb091dGVyKHN0b3JlSWQpIHtcbiAgICAgICAgY29uc3Qgb3V0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN3aXRjaC1sb2dvLW91dGVyXCIpO1xuICAgICAgICBpZiAoIW91dGVyKSByZXR1cm47XG4gICAgICAgIGlmICghc3RvcmVJZCkge1xuICAgICAgICAgIG91dGVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICBvdXRlci5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaHRtbCA9IFwiXCI7XG4gICAgICAgIGlmIChzdG9yZUlkID09PSBGUklFTkRMWV9USU1FX0NPTkZJRy5zZXZlbkVsZXZlbi5pZCkge1xuICAgICAgICAgIGh0bWwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3dpdGNoLWxvZ28td3JhcHBlclwiIG9uY2xpY2s9XCJ3aW5kb3cuc2V0U2VsZWN0ZWRTdG9yZUlkKCdmYW1pbHlNYXJ0JylcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIke0ZSSUVORExZX1RJTUVfQ09ORklHLmZhbWlseU1hcnQuaG9yaXpvbnRhbExvZ299XCIgYWx0PVwi5YiH5o+b6Iez5YWo5a62XCIgb25lcnJvcj1cInRoaXMub25lcnJvcj1udWxsOyB0aGlzLnNyYz0naHR0cHM6Ly9wbGFjZWhvbGQuY28vMTgweDM1L0NDQ0NDQy8zMzMzMzM/dGV4dD1GYW1pbHlNYXJ0LUhvcml6b250YWwnO1wiIC8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3dpdGNoLWxvZ28tdGV4dFwiPuWIh+aPm+iHs+WFqOWutjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIGA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaHRtbCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzd2l0Y2gtbG9nby13cmFwcGVyXCIgb25jbGljaz1cIndpbmRvdy5zZXRTZWxlY3RlZFN0b3JlSWQoJ3NldmVuRWxldmVuJylcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIke0ZSSUVORExZX1RJTUVfQ09ORklHLnNldmVuRWxldmVuLmhvcml6b250YWxMb2dvfVwiIGFsdD1cIuWIh+aPm+iHszctRUxFVkVOXCIgb25lcnJvcj1cInRoaXMub25lcnJvcj1udWxsOyB0aGlzLnNyYz0naHR0cHM6Ly9wbGFjZWhvbGQuY28vMTgweDM1L0NDQ0NDQy8zMzMzMzM/dGV4dD03LUVMRVZFTi1Ib3Jpem9udGFsJztcIiAvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN3aXRjaC1sb2dvLXRleHRcIj7liIfmj5voh7PlsI/kuIM8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBgO1xuICAgICAgICB9XG4gICAgICAgIG91dGVyLmlubmVySFRNTCA9IGh0bWw7XG4gICAgICAgIG91dGVyLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgICAgfVxuXG4gICAgICAvLyDnm6Pmjqcgc2VsZWN0ZWRTdG9yZUlkIOiuiuWLleaZgu+8jOa4suafk+WklumDqCBMT0dPIOWNgOWhilxuICAgICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcmVuZGVyU3dpdGNoTG9nb091dGVyKHNlbGVjdGVkU3RvcmVJZCk7XG4gICAgICAgIC8vIOavj+asoemBuOaTh+W6l+WutuiuiuWLleaZgumDvSByZWxvY2F0Ze+8jOeiuuS/neaPkuWFpem7nuato+eiulxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICByZWxvY2F0ZVN3aXRjaExvZ29PdXRlcigpO1xuICAgICAgICB9LCAwKTtcbiAgICAgIH0sIFtzZWxlY3RlZFN0b3JlSWRdKTtcblxuICAgICAgLy8g5qC85byP5YyW5pmC6ZaT54K6IEhIOk1NOlNTIOagvOW8jyAoMjTlsI/mmYLliLYpXG4gICAgICBjb25zdCBmb3JtYXR0ZWRUaW1lID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhvdXJzID0gU3RyaW5nKGN1cnJlbnRUaW1lLmdldEhvdXJzKCkpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgICAgICAgY29uc3QgbWludXRlcyA9IFN0cmluZyhjdXJyZW50VGltZS5nZXRNaW51dGVzKCkpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgICAgICAgY29uc3Qgc2Vjb25kcyA9IFN0cmluZyhjdXJyZW50VGltZS5nZXRTZWNvbmRzKCkpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgICAgICAgcmV0dXJuIGAke2hvdXJzfToke21pbnV0ZXN9OiR7c2Vjb25kc31gO1xuICAgICAgfSwgW2N1cnJlbnRUaW1lXSk7XG5cbiAgICAgIC8vIOWPi+WWhOaZguWFieWAkuaVuOaPkOekuiBmdW5jdGlvblxuICAgICAgZnVuY3Rpb24gZ2V0RnJpZW5kbHlUaW1lTm90aWNlKCkge1xuICAgICAgICBpZiAoIXNlbGVjdGVkU3RvcmVJZCkgcmV0dXJuIG51bGw7XG4gICAgICAgIGNvbnN0IHN0b3JlQ29uZmlnID0gRlJJRU5ETFlfVElNRV9DT05GSUdbc2VsZWN0ZWRTdG9yZUlkXTtcbiAgICAgICAgY29uc3Qgbm93ID0gY3VycmVudFRpbWU7XG4gICAgICAgIGNvbnN0IG5vd01pbnV0ZXMgPSBub3cuZ2V0SG91cnMoKSAqIDYwICsgbm93LmdldE1pbnV0ZXMoKTtcbiAgICAgICAgY29uc3QgcGVyaW9kcyA9IHN0b3JlQ29uZmlnLmZyaWVuZGx5SG91cnMubWFwKChyKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RhcnQgPSByLnN0YXJ0LmhvdXIgKiA2MCArIChyLnN0YXJ0Lm1pbnV0ZSB8fCAwKTtcbiAgICAgICAgICBsZXQgZW5kID0gci5lbmQuaG91ciAqIDYwICsgKHIuZW5kLm1pbnV0ZSB8fCAwKTtcbiAgICAgICAgICBpZiAoZW5kIDw9IHN0YXJ0KSBlbmQgKz0gMTQ0MDtcbiAgICAgICAgICByZXR1cm4geyBzdGFydCwgZW5kLCBkaXNjb3VudDogci5kaXNjb3VudCB9O1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3Qgc29ydGVkID0gcGVyaW9kc1xuICAgICAgICAgIC5tYXAoKHApID0+ICh7IC4uLnAsIHN0YXJ0OiBwLnN0YXJ0LCBlbmQ6IHAuZW5kIH0pKVxuICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBhLnN0YXJ0IC0gYi5zdGFydCk7XG4gICAgICAgIGxldCBpblBlcmlvZCA9IG51bGw7XG4gICAgICAgIGZvciAoY29uc3QgcCBvZiBzb3J0ZWQpIHtcbiAgICAgICAgICBsZXQgcyA9IHAuc3RhcnQsXG4gICAgICAgICAgICBlID0gcC5lbmQ7XG4gICAgICAgICAgaWYgKG5vd01pbnV0ZXMgPCBzKSAocyAtPSAxNDQwKSwgKGUgLT0gMTQ0MCk7XG4gICAgICAgICAgaWYgKG5vd01pbnV0ZXMgPj0gcyAmJiBub3dNaW51dGVzIDwgZSkge1xuICAgICAgICAgICAgaW5QZXJpb2QgPSBwO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBuZXh0UGVyaW9kID0gbnVsbDtcbiAgICAgICAgbGV0IG1pbkRlbHRhID0gSW5maW5pdHk7XG4gICAgICAgIGZvciAoY29uc3QgcCBvZiBzb3J0ZWQpIHtcbiAgICAgICAgICBsZXQgcyA9IHAuc3RhcnQ7XG4gICAgICAgICAgaWYgKHMgPD0gbm93TWludXRlcykgcyArPSAxNDQwO1xuICAgICAgICAgIGNvbnN0IGRlbHRhID0gcyAtIG5vd01pbnV0ZXM7XG4gICAgICAgICAgaWYgKGRlbHRhID4gMCAmJiBkZWx0YSA8IG1pbkRlbHRhKSB7XG4gICAgICAgICAgICBtaW5EZWx0YSA9IGRlbHRhO1xuICAgICAgICAgICAgbmV4dFBlcmlvZCA9IHA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBuZXh0Q2hhbmdlID0gbnVsbDtcbiAgICAgICAgaWYgKGluUGVyaW9kKSB7XG4gICAgICAgICAgbGV0IG1pbkNoYW5nZSA9IEluZmluaXR5O1xuICAgICAgICAgIGZvciAoY29uc3QgcCBvZiBzb3J0ZWQpIHtcbiAgICAgICAgICAgIGxldCBzID0gcC5zdGFydDtcbiAgICAgICAgICAgIGlmIChzIDw9IG5vd01pbnV0ZXMpIHMgKz0gMTQ0MDtcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gcyAtIG5vd01pbnV0ZXM7XG4gICAgICAgICAgICBpZiAoZGVsdGEgPiAwICYmIGRlbHRhIDwgbWluQ2hhbmdlKSB7XG4gICAgICAgICAgICAgIG1pbkNoYW5nZSA9IGRlbHRhO1xuICAgICAgICAgICAgICBuZXh0Q2hhbmdlID0gcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZm9ybWF0RGVsdGEobWlucykge1xuICAgICAgICAgIGlmIChtaW5zIDwgMSkgcmV0dXJuIFwi5LiN5YiwMeWIhumQmFwiO1xuICAgICAgICAgIGNvbnN0IGggPSBNYXRoLmZsb29yKG1pbnMgLyA2MCk7XG4gICAgICAgICAgY29uc3QgbSA9IG1pbnMgJSA2MDtcbiAgICAgICAgICByZXR1cm4gKGggPyBoICsgXCLlsI/mmYJcIiA6IFwiXCIpICsgKG0gPyBtICsgXCLliIZcIiA6ICFoID8gXCIw5YiGXCIgOiBcIlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWluUGVyaW9kICYmIG5leHRQZXJpb2QpIHtcbiAgICAgICAgICByZXR1cm4gYOi3nembouS4i+asoeWPi+WWhOaZguWFie+8iCR7bmV4dFBlcmlvZC5kaXNjb3VudH3vvInpgoTmnIkke2Zvcm1hdERlbHRhKFxuICAgICAgICAgICAgbWluRGVsdGFcbiAgICAgICAgICApfWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluUGVyaW9kKSB7XG4gICAgICAgICAgY29uc3QgdGltZVRvRW5kID0gaW5QZXJpb2QuZW5kIC0gbm93TWludXRlcztcbiAgICAgICAgICBsZXQgbXNnID0gYOacrOaZguauteWJqemkmCR7Zm9ybWF0RGVsdGEodGltZVRvRW5kKX1gO1xuICAgICAgICAgIGlmIChuZXh0Q2hhbmdlICYmIG5leHRDaGFuZ2UuZGlzY291bnQgIT09IGluUGVyaW9kLmRpc2NvdW50KSB7XG4gICAgICAgICAgICBtc2cgKz0gYO+8jOWGjSR7Zm9ybWF0RGVsdGEobmV4dENoYW5nZS5zdGFydCAtIG5vd01pbnV0ZXMpfeiuiuaIkCR7XG4gICAgICAgICAgICAgIG5leHRDaGFuZ2UuZGlzY291bnRcbiAgICAgICAgICAgIH1gO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbXNnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICAvLyDni4DmhYvpoa/npLrlhaflrrlcbiAgICAgIGNvbnN0IHJlbmRlclN0YXR1c0NvbnRlbnQgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICAgICAgaWYgKCFzZWxlY3RlZFN0b3JlSWQpIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3RhdHVzLXBsYWNlaG9sZGVyXCI+6KuL6bue5pOK5LiK5pa5IExPR08g5p+l6Kmi5Y+L5ZaE5pmC5YWJPC9wPlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RvcmVDb25maWcgPSBGUklFTkRMWV9USU1FX0NPTkZJR1tzZWxlY3RlZFN0b3JlSWRdO1xuICAgICAgICBpZiAoIXN0b3JlQ29uZmlnKSB7XG4gICAgICAgICAgcmV0dXJuIDxwIGNsYXNzTmFtZT1cInN0YXR1cy1wbGFjZWhvbGRlclwiPuafpeipoumMr+iqpO+8jOiri+mHjeippjwvcD47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gaXNGcmllbmRseVRpbWUoY3VycmVudFRpbWUsIHN0b3JlQ29uZmlnKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInN0YXR1cy1tYWluLXRleHRcIj5cbiAgICAgICAgICAgICAge3N0b3JlQ29uZmlnLm5hbWV9e1wiIFwifVxuICAgICAgICAgICAgICB7cmVzdWx0LmlzRnJpZW5kbHkgPyBcIuePvuWcqOaYr+WPi+WWhOaZguWFiVwiIDogXCLnj77lnKjkuI3mmK/lj4vlloTmmYLlhYlcIn1cbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICB7cmVzdWx0LmlzRnJpZW5kbHkgJiYgcmVzdWx0LmRpc2NvdW50ICYmIChcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3RhdHVzLWRpc2NvdW50LXRleHRcIj57cmVzdWx0LmRpc2NvdW50fTwvcD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9LCBbc2VsZWN0ZWRTdG9yZUlkLCBjdXJyZW50VGltZV0pO1xuXG4gICAgICAvLyDlpJrllYblk4HovLjlhaXmuIXllq5cbiAgICAgIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gUmVhY3QudXNlU3RhdGUoW3sgcHJpY2U6IFwiXCIgfV0pO1xuICAgICAgY29uc3QgY3VycmVudERpc2NvdW50UmF0ZSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBpZiAoIXNlbGVjdGVkU3RvcmVJZCkgcmV0dXJuIDE7XG4gICAgICAgIGNvbnN0IHN0b3JlQ29uZmlnID0gRlJJRU5ETFlfVElNRV9DT05GSUdbc2VsZWN0ZWRTdG9yZUlkXTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gaXNGcmllbmRseVRpbWUoY3VycmVudFRpbWUsIHN0b3JlQ29uZmlnKTtcbiAgICAgICAgaWYgKCFyZXN1bHQuaXNGcmllbmRseSB8fCAhcmVzdWx0LmRpc2NvdW50KSByZXR1cm4gMTtcbiAgICAgICAgY29uc3QgbWF0Y2ggPSByZXN1bHQuZGlzY291bnQubWF0Y2goLyhcXGQrKSg/OlxcLihcXGQrKSk/5oqYLyk7XG4gICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgIGNvbnN0IG51bSA9IHBhcnNlRmxvYXQobWF0Y2hbMV0gKyAobWF0Y2hbMl0gPyBcIi5cIiArIG1hdGNoWzJdIDogXCJcIikpO1xuICAgICAgICAgIGlmIChudW0gPD0gMTApIHtcbiAgICAgICAgICAgIHJldHVybiBudW0gLyAxMDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bSAvIDEwMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9LCBbc2VsZWN0ZWRTdG9yZUlkLCBjdXJyZW50VGltZV0pO1xuXG4gICAgICAvLyDnhKHmop3ku7bpgLLkvY0gZnVuY3Rpb25cbiAgICAgIGZ1bmN0aW9uIGFsd2F5c0NlaWwobnVtKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmNlaWwobnVtKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGlzY291bnRlZEl0ZW1zID0gUmVhY3QudXNlTWVtbyhcbiAgICAgICAgKCkgPT5cbiAgICAgICAgICBpdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHAgPSBwYXJzZUZsb2F0KGl0ZW0ucHJpY2UpO1xuICAgICAgICAgICAgaWYgKGlzTmFOKHApIHx8IHAgPD0gMCkgcmV0dXJuIFwiXCI7XG4gICAgICAgICAgICBjb25zdCByYXcgPVxuICAgICAgICAgICAgICBwICogKGN1cnJlbnREaXNjb3VudFJhdGUgIT09IDEgPyBjdXJyZW50RGlzY291bnRSYXRlIDogMSk7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHNlbGVjdGVkU3RvcmVJZCA9PT0gXCJmYW1pbHlNYXJ0XCIgfHxcbiAgICAgICAgICAgICAgc2VsZWN0ZWRTdG9yZUlkID09PSBcInNldmVuRWxldmVuXCJcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAvLyDlhajlrrbjgIHlsI/kuIPnmobnhKHmop3ku7bpgLLkvY1cbiAgICAgICAgICAgICAgcmV0dXJuIGFsd2F5c0NlaWwocmF3KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHJhdyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgIFtpdGVtcywgY3VycmVudERpc2NvdW50UmF0ZSwgc2VsZWN0ZWRTdG9yZUlkXVxuICAgICAgKTtcbiAgICAgIGNvbnN0IHRvdGFsRGlzY291bnRlZCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICByZXR1cm4gZGlzY291bnRlZEl0ZW1zLnJlZHVjZShcbiAgICAgICAgICAoc3VtLCB2YWwpID0+IHN1bSArIChwYXJzZUludCh2YWwpIHx8IDApLFxuICAgICAgICAgIDBcbiAgICAgICAgKTtcbiAgICAgIH0sIFtkaXNjb3VudGVkSXRlbXNdKTtcbiAgICAgIGNvbnN0IGNhcmRCYWNrZ3JvdW5kTG9nbyA9IHNlbGVjdGVkU3RvcmVJZFxuICAgICAgICA/IGB1cmwoJHtGUklFTkRMWV9USU1FX0NPTkZJR1tzZWxlY3RlZFN0b3JlSWRdLmxvZ299KWBcbiAgICAgICAgOiBcIm5vbmVcIjtcbiAgICAgIGNvbnN0IGFwcENhcmRDbGFzc2VzID0gYGFwcC1jYXJkLWNvbnRhaW5lciAke1xuICAgICAgICBzZWxlY3RlZFN0b3JlSWQgIT09IG51bGwgPyBcInNlbGVjdGVkLXN0YXRlXCIgOiBcIlwiXG4gICAgICB9YDtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICB7Lyog5Li75Y2h54mH5a655ZmoICovfVxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YXBwQ2FyZENsYXNzZXN9XG4gICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGNhcmRCYWNrZ3JvdW5kTG9nbyB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsvKiDlj7PkuIrop5LmmYLplpPpoa/npLogKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1cnJlbnQtdGltZS1kaXNwbGF5XCI+e2Zvcm1hdHRlZFRpbWV9PC9kaXY+XG5cbiAgICAgICAgICAgIHtzZWxlY3RlZFN0b3JlSWQgPT09IG51bGwgJiYgKFxuICAgICAgICAgICAgICAvLyDliJ3lp4vni4DmhYvvvJrpoa/npLrlhanlgIvlpKcgTE9HT1xuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgey8qIOWwj+S4gyBMT0dPICovfVxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxvZ28td3JhcHBlclwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVMb2dvQ2xpY2soRlJJRU5ETFlfVElNRV9DT05GSUcuc2V2ZW5FbGV2ZW4uaWQpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9e0ZSSUVORExZX1RJTUVfQ09ORklHLnNldmVuRWxldmVuLmxvZ299XG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIjctRUxFVkVOIExvZ29cIlxuICAgICAgICAgICAgICAgICAgICBvbmVycm9yPVwidGhpcy5vbmVycm9yPW51bGw7IHRoaXMuc3JjPSdodHRwczovL3BsYWNlaG9sZC5jby8yNTB4MTAwL0NDQ0NDQy8zMzMzMzM/dGV4dD03LUVMRVZFTic7XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7Lyog5YWo5a62IExPR08gKi99XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibG9nby13cmFwcGVyXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUxvZ29DbGljayhGUklFTkRMWV9USU1FX0NPTkZJRy5mYW1pbHlNYXJ0LmlkKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtGUklFTkRMWV9USU1FX0NPTkZJRy5mYW1pbHlNYXJ0LmxvZ299XG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIkZhbWlseU1hcnQgTG9nb1wiXG4gICAgICAgICAgICAgICAgICAgIG9uZXJyb3I9XCJ0aGlzLm9uZXJyb3I9bnVsbDsgdGhpcy5zcmM9J2h0dHBzOi8vcGxhY2Vob2xkLmNvLzI1MHgxMDAvQ0NDQ0NDLzMzMzMzMz90ZXh0PUZhbWlseU1hcnQnO1wiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7Lyog5Y+L5ZaE5pmC5YWJ54uA5oWL6IiH5oqY5omj6aGv56S6IC0g5L2N5pa85Li75Y2h54mH5LiL5pa577yM5LiU5Y+q5pyJ5Zyo6YG45Y+W5bqX5a625b6M5omN6aGv56S6ICovfVxuICAgICAgICAgIHtzZWxlY3RlZFN0b3JlSWQgIT09IG51bGwgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0dXMtZGlzcGxheS1vdXRlci1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAge3JlbmRlclN0YXR1c0NvbnRlbnR9IHsvKiDlj4vlloTmmYLlhYnlgJLmlbjmj5DnpLogKi99XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiA4LFxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzAwN2JmZlwiLFxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMWVtXCIsXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtnZXRGcmllbmRseVRpbWVOb3RpY2UoKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHsvKiDlpJrllYblk4HmuIXllq7ovLjlhaXljYDloYogKi99XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAyMCwgd2lkdGg6IFwiMTAwJVwiIH19PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiA2LFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6IDEgfX0+5Y6f5YO5PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6IDEgfX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAzMiB9fT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7aXRlbXMubWFwKChpdGVtLCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpZHh9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDYsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICBpbnB1dE1vZGU9XCJkZWNpbWFsXCJcbiAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuPVwiWzAtOV0qXCJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbS5wcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0l0ZW1zID0gWy4uLml0ZW1zXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0l0ZW1zW2lkeF0ucHJpY2UgPSBlLnRhcmdldC52YWx1ZS5yZXBsYWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAvW15cXGQuXS9nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXRlbXMobmV3SXRlbXMpO1xuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLljp/lg7lcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IDYsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjZweCA4cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjFlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA2LFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjY2NjXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGN1cnJlbnREaXNjb3VudFJhdGUgIT09IDEgPyBcIiMyOGE3NDVcIiA6IFwiIzg4OFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnByaWNlXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGN1cnJlbnREaXNjb3VudFJhdGUgIT09IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBkaXNjb3VudGVkSXRlbXNbaWR4XSArIFwiIOWFg1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCLnhKHmipjmiaNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRJdGVtcyhpdGVtcy5maWx0ZXIoKF8sIGkpID0+IGkgIT09IGlkeCkpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjZWVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEuMWVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjJweCA4cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpdGVtcy5sZW5ndGggPT09IDF9XG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCLliKrpmaTmraTllYblk4FcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgw5dcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEl0ZW1zKFsuLi5pdGVtcywgeyBwcmljZTogXCJcIiB9XSl9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDgsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNnB4IDE2cHhcIixcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMWVtXCIsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNixcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjMDA3YmZmXCIsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDA3YmZmXCIsXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogaXRlbXNbaXRlbXMubGVuZ3RoIC0gMV0ucHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICA/IFwicG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIm5vdC1hbGxvd2VkXCIsXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IGl0ZW1zW2l0ZW1zLmxlbmd0aCAtIDFdLnByaWNlID8gMSA6IDAuNSxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWl0ZW1zW2l0ZW1zLmxlbmd0aCAtIDFdLnByaWNlfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIOaWsOWinuWVhuWTgVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIHsvKiDnuL3oqIjpoa/npLogKi99XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAxNixcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMS4yZW1cIixcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMyOGE3NDVcIixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2l0ZW1zLnNvbWUoKGkpID0+IGkucHJpY2UpXG4gICAgICAgICAgICAgICAgICAgID8gY3VycmVudERpc2NvdW50UmF0ZSAhPT0gMVxuICAgICAgICAgICAgICAgICAgICAgID8gYOaKmOaJo+W+jOe4veWDue+8miR7dG90YWxEaXNjb3VudGVkfSDlhYNgXG4gICAgICAgICAgICAgICAgICAgICAgOiBg57i95YO577yaJHt0b3RhbERpc2NvdW50ZWR9IOWFg2BcbiAgICAgICAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyDlsIcgQXBwIOe1hOS7tua4suafk+WIsCBET00g5Lit55qEICNyb290IOWFg+e0oFxuICAgIC8vIOS9v+eUqCB3aW5kb3cub25sb2FkIOeiuuS/nSBET00g5a6M5YWo6LyJ5YWl5b6M5YaN5riy5p+TIFJlYWN0IOaHieeUqFxuICAgIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBSZWFjdERPTS5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKSkucmVuZGVyKDxBcHAgLz4pO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHJlbmRlcmluZyBSZWFjdCBhcHA6XCIsIGVycm9yKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpLmlubmVySFRNTCA9XG4gICAgICAgICAgJzxwIHN0eWxlPVwiY29sb3I6IHJlZDsgdGV4dC1hbGlnbjogY2VudGVyOyBmb250LXNpemU6IDEuNWVtOyBwYWRkaW5nOiAyMHB4O1wiPuaHieeUqOeoi+W8j+i8ieWFpeWkseaVl++8jOiri+aqouafpeeAj+imveWZqOS4u+aOp+WPsOmMr+iqpOOAgjwvcD4nO1xuICAgICAgfVxuICAgICAgcmVsb2NhdGVTd2l0Y2hMb2dvT3V0ZXIoKTtcbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgcmVsb2NhdGVTd2l0Y2hMb2dvT3V0ZXIpO1xuXG4gICAgLy8g6K6TIFJlYWN0IOWIh+aPmyBMT0dPIOaZguS5n+iDveWQjOatpeenu+WLleS9jee9rlxuICAgIGNvbnN0IG9yaWdSZW5kZXJTd2l0Y2hMb2dvT3V0ZXIgPSB3aW5kb3cucmVuZGVyU3dpdGNoTG9nb091dGVyO1xuICAgIHdpbmRvdy5yZW5kZXJTd2l0Y2hMb2dvT3V0ZXIgPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgaWYgKHR5cGVvZiBvcmlnUmVuZGVyU3dpdGNoTG9nb091dGVyID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIG9yaWdSZW5kZXJTd2l0Y2hMb2dvT3V0ZXIuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICByZWxvY2F0ZVN3aXRjaExvZ29PdXRlcigpO1xuICAgIH07XG4gICJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNJO0FBQ0EsU0FBU0EsdUJBQXVCQSxDQUFBLEVBQUc7RUFDakMsSUFBTUMsVUFBVSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQztFQUMvRCxJQUFNQyxlQUFlLEdBQUdGLFFBQVEsQ0FBQ0csYUFBYSxDQUM1QyxpQ0FDRixDQUFDO0VBQ0QsSUFBTUMsTUFBTSxHQUFHSixRQUFRLENBQUNHLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQztFQUM5RCxJQUFJLENBQUNKLFVBQVUsRUFBRTtFQUNqQjtFQUNBLElBQUlBLFVBQVUsQ0FBQ00sS0FBSyxDQUFDQyxPQUFPLEtB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

}}</script><link rel="stylesheet" href="chrome-extension://ihcjicgdanjaechkgeegckofjjedodee/app/content-style.css"></head>
  <body cz-shortcut-listen="true"><!-- BEGIN WAYBACK TOOLBAR INSERT -->
<script>__wm.rw(0);</script>
<div id="wm-ipp-base" lang="en" style="display: block; direction: ltr; height: 66px;" toolbar-mode="auto">
</div><div id="wm-ipp-print">The Wayback Machine - https://web.archive.org/web/20250904003919/https://isnowfriend.com/</div>
<script type="text/javascript">//<![CDATA[
__wm.bt(750,27,25,2,"web","https://isnowfriend.com/","20250904003919",1996,"https://web-static.archive.org/_static/",["https://web-static.archive.org/_static/css/banner-styles.css?v=1utQkbB3","https://web-static.archive.org/_static/css/iconochive.css?v=3PDvdIFv"], false);
  __wm.rw(1);
//]]></script>
<!-- END WAYBACK TOOLBAR INSERT -->
 
    <!-- Frosted Glass Header -->
    <header class="frosted-header">
      <img src="/web/20250904003919im_/https://isnowfriend.com/myicon.png" alt="友善時光LOGO" class="header-logo" loading="lazy">
      <div class="header-texts">
        <div class="header-title">友善時光是或否(IsNowFriend)</div>
        <div class="header-subtitle">
          全家 FamilyMart、小七 7-11 現在當下立馬告訴我，有沒有折扣？
        </div>
      </div>
    </header>

    <div class="content-wrapper">
      <!-- 介紹文字 -->
      <div class="intro-text">
        <h1>全家 &amp; 小七 友善時光（乞丐時光）折扣時間表</h1>
        <p>
          想知道全家便利商店和小七 7-11 什麼時候打折嗎？<br>
          我們整理了完整的「友善時光」資訊，包括全家友善時光時間、小七打折時段，
          幫助你快速查詢折扣（俗稱乞丐時光），避免錯過便宜好康。
        </p>

        <h2>全家友善時光折扣</h2>
        <ul>
          <li>10:00 - 17:00：7折（飯糰、壽司、手卷、便當類等）</li>
          <li>17:00 - 00:00：7折（便當、三明治、沙拉、湯品等）</li>
        </ul>

        <h2>小七 7-11 友善時光折扣</h2>
        <ul>
          <li>10:00 - 17:00：65折（鮮食麵類與米飯）</li>
          <li>19:00 - 19:59：8折（三角飯糰、鮮食麵）</li>
          <li>20:00 - 03:00：65折（三角飯糰、鮮食麵）</li>
        </ul>

        <p>
          使用本站「友善時光查詢工具」，就能立即確認全家或小七現在是否打折，
          幾點有折扣，以及折扣倒數計時。
        </p>
      </div>

      <!-- React App -->
      <div id="root" style="margin: 0 auto"><div class="app-card-container selected-state" style="background-image: url(&quot;https://web.archive.org/web/20250904003919/https://play-lh.googleusercontent.com/e3AKbefh3znufeBBSF1anaUZwV7oSkTjNCn67ZdSD18DwE95y7lZY9uHDloXH8fcmg&quot;);"><div class="current-time-display">15:01:54</div></div><div class="status-display-outer-container"><div style="width: 100%; text-align: center;"><h1 class="status-main-text">全家 現在是友善時光</h1><p class="status-discount-text">7折</p></div> <div style="margin-top: 8px; color: rgb(0, 123, 255); font-size: 1em; font-weight: 500;">本時段剩餘1小時59分</div><div style="margin-top: 20px; width: 100%;"><div style="display: flex; font-weight: bold; margin-bottom: 6px;"><div style="flex: 1 1 0%;">原價</div><div style="flex: 1 1 0%;"></div><div style="width: 32px;"></div></div><div style="display: flex; align-items: center; margin-bottom: 6px;"><input type="text" inputmode="decimal" pattern="[0-9]*" placeholder="原價" value="" style="flex: 1 1 0%; margin-right: 6px; padding: 6px 8px; font-size: 1em; border-radius: 6px; border: 1px solid rgb(204, 204, 204);"><div style="flex: 1 1 0%; color: rgb(40, 167, 69); font-weight: bold;"></div><button type="button" disabled="" title="刪除此商品" style="margin-left: 4px; background: rgb(238, 238, 238); border: none; border-radius: 4px; cursor: pointer; font-size: 1.1em; padding: 2px 8px;">×</button></div><button type="button" disabled="" style="margin-top: 8px; padding: 6px 16px; font-size: 1em; border-radius: 6px; border: 1px solid rgb(0, 123, 255); background: rgb(255, 255, 255); color: rgb(0, 123, 255); cursor: not-allowed; opacity: 0.5;">新增商品</button><div style="margin-top: 16px; font-size: 1.2em; font-weight: bold; color: rgb(40, 167, 69);"></div></div></div><div id="switch-logo-outer" class="switch-logo-container-outer" style="">
            <div class="switch-logo-wrapper" onclick="window.setSelectedStoreId('sevenEleven')">
              <img src="https://web.archive.org/web/20250904003919im_/https://www.us3c.com.tw/wp-content/uploads/2022/04/7-ELEVEn_%E6%A9%AB%E5%BC%8Flogo-%E8%BD%89%E6%8F%9Brgb_10909-04.png" alt="切換至7-ELEVEN" onerror="this.onerror=null; this.src='https://placehold.co/180x35/CCCCCC/333333?text=7-ELEVEN-Horizontal';">
              <span class="switch-logo-text">切換至小七</span>
            </div>
          </div></div>
    </div>

    <!-- 切換 LOGO 區塊（移到 root 外面，footer 上方）-->
    

    <!-- Frosted Glass Footer -->
    <footer class="frosted-footer">
      <span style="
          margin: 20px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          line-height: 1.6;
        ">
        <span>友善時光折扣查詢工具</span>
        <span>全家小七即時優惠時段 © 2025</span>
      </span>
    </footer>
  <script defer="" src="https://web.archive.org/web/20250904003919js_/https://static.cloudflareinsights.com/beacon.min.js/vcd15cbe7772f49c399c6a5babf22c1241717689176015" integrity="" data-cf-beacon="{&quot;version&quot;:&quot;2024.11.0&quot;,&quot;token&quot;:&quot;10208c41648645b58bf8a19b1baf941e&quot;,&quot;r&quot;:1,&quot;server_timing&quot;:{&quot;name&quot;:{&quot;cfCacheStatus&quot;:true,&quot;cfEdge&quot;:true,&quot;cfExtPri&quot;:true,&quot;cfL4&quot;:true,&quot;cfOrigin&quot;:true,&quot;cfSpeedBrain&quot;:true},&quot;location_startswith&quot;:null}}" crossorigin="anonymous"></script>


  <script type="text/babel">
    // 動態移動切換 LOGO 區塊（手機 intro-text 上方，桌面 footer 上方）
    function relocateSwitchLogoOuter() {
      const switchLogo = document.getElementById("switch-logo-outer");
      const statusContainer = document.querySelector(
        ".status-display-outer-container"
      );
      const footer = document.querySelector("footer.frosted-footer");
      if (!switchLogo) return;
      // 沒有選店家時直接隱藏
      if (switchLogo.style.display === "none") return;
      if (window.innerWidth <= 600) {
        // 手機：插入到 .status-display-outer-container 後面
        if (statusContainer) {
          if (statusContainer.nextSibling !== switchLogo) {
            statusContainer.parentNode.insertBefore(
              switchLogo,
              statusContainer.nextSibling
            );
          }
        } else {
          // 找不到插入點就隱藏
          switchLogo.style.display = "none";
        }
      } else {
        // 桌面：插入到 footer 前面
        if (footer) {
          if (footer.previousElementSibling !== switchLogo) {
            footer.parentNode.insertBefore(switchLogo, footer);
          }
        } else {
          switchLogo.style.display = "none";
        }
      }
    }
    // 定義友善時光區間與折扣資訊
    const FRIENDLY_TIME_CONFIG = {
      sevenEleven: {
        id: "sevenEleven",
        name: "7-ELEVEN",
        // 更新為你提供的一般 LOGO 網址
        logo: "https://web.archive.org/web/20250904003919/https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/7-eleven_logo.svg/800px-7-eleven_logo.svg.png",
        // 新增橫向 LOGO 網址
        horizontalLogo:
          "https://web.archive.org/web/20250904003919/https://www.us3c.com.tw/wp-content/uploads/2022/04/7-ELEVEn_%E6%A9%AB%E5%BC%8Flogo-%E8%BD%89%E6%8F%9Brgb_10909-04.png",
        friendlyHours: [
          // 10:00 - 17:00 65折 (鮮食麵類與米飯)
          {
            start: { hour: 10, minute: 0 },
            end: { hour: 17, minute: 0 },
            discount: "65折",
            description: "鮮食麵類與米飯",
          },
          // 19:00 - 19:59 8折 (鮮食麵包含三角/圓形飯糰)
          {
            start: { hour: 19, minute: 0 },
            end: { hour: 19, minute: 59 },
            discount: "8折",
            description: "鮮食麵包含三角/圓形飯糰",
          },
          // 20:00 - 03:00 65折 (鮮食麵包含三角/圓形飯糰) - 跨日
          {
            start: { hour: 20, minute: 0 },
            end: { hour: 3, minute: 0 },
            discount: "65折",
            description: "鮮食麵包含三角/圓形飯糰",
          },
        ],
      },
      familyMart: {
        id: "familyMart",
        name: "全家",
        // 更新為你提供的一般 LOGO 網址
        logo: "https://web.archive.org/web/20250904003919/https://play-lh.googleusercontent.com/e3AKbefh3znufeBBSF1anaUZwV7oSkTjNCn67ZdSD18DwE95y7lZY9uHDloXH8fcmg",
        // 新增橫向 LOGO 網址
        horizontalLogo:
          "https://web.archive.org/web/20250904003919/https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-h1Z5--PFgKXN_kIDwmMLDPb0UPYkA5wqkQ&s",
        friendlyHours: [
          // 10:00 - 17:00 7折 (飯糰、壽司、手卷、便當類等)
          {
            start: { hour: 10, minute: 0 },
            end: { hour: 17, minute: 0 },
            discount: "7折",
            description: "飯糰、壽司、手卷、便當類等",
          },
          // 17:00 - 00:00 7折 (即期鮮食：便當、三明治、沙拉、湯品等)
          {
            start: { hour: 17, minute: 0 },
            end: { hour: 24, minute: 0 },
            discount: "7折",
            description: "即期鮮食（便當、三明治、沙拉、湯品等）",
          }, // 24:00 代表當天結束，即 23:59:59
        ],
      },
    };

    /**
     * 判斷當前時間是否在友善時光區間內，並返回折扣資訊。
     * @param {Date} currentTime 當前時間物件。
     * @param {Object} storeConfig 店家配置，包含 friendlyHours 陣列。
     * @returns {{isFriendly: boolean, discount: string|null, description: string|null}} 判斷結果。
     */
    const isFriendlyTime = (currentTime, storeConfig) => {
      const currentHour = currentTime.getHours();
      const currentMinute = currentTime.getMinutes();
      const currentTotalMinutes = currentHour * 60 + currentMinute;

      for (const range of storeConfig.friendlyHours) {
        const startTotalMinutes =
          range.start.hour * 60 + (range.start.minute || 0);
        let endTotalMinutes = range.end.hour * 60 + (range.end.minute || 0);

        // 判斷時間區間是否跨日 (例如 20:00 - 03:00)
        const crossesMidnight =
          range.start.hour > range.end.hour ||
          (range.start.hour === range.end.hour &&
            range.start.minute > range.end.minute);

        let inRange = false;

        if (!crossesMidnight) {
          // 標準時間區間 (例如 10:00 - 17:00 或 19:00 - 19:59)
          // 如果結束分鐘是 59，表示包含該分鐘 (例如 19:59:59)
          if (range.end.minute === 59) {
            inRange =
              currentTotalMinutes >= startTotalMinutes &&
              currentTotalMinutes <= endTotalMinutes;
          } else {
            // 否則，結束時間點不包含 (例如 17:00 指 16:59:59 之前)
            inRange =
              currentTotalMinutes >= startTotalMinutes &&
              currentTotalMinutes < endTotalMinutes;
          }
        } else {
          // 跨日時間區間 (例如 20:00 - 03:00)
          // 判斷邏輯：在第一天的區間內 OR 在第二天的區間內
          const isAfterStartOnFirstDay =
            currentTotalMinutes >= startTotalMinutes &&
            currentTotalMinutes < 24 * 60; // Up to 23:59
          let isBeforeEndOnNextDay = currentTotalMinutes >= 0; // From 00:00

          // 如果跨日區間的結束分鐘是 59，則第二天的區間需要包含該分鐘
          if (range.end.minute === 59) {
            isBeforeEndOnNextDay =
              isBeforeEndOnNextDay && currentTotalMinutes <= endTotalMinutes;
          } else {
            isBeforeEndOnNextDay =
              isBeforeEndOnNextDay && currentTotalMinutes < endTotalMinutes;
          }

          inRange = isAfterStartOnFirstDay || isBeforeEndOnNextDay;
        }

        if (inRange) {
          return {
            isFriendly: true,
            discount: range.discount,
            description: range.description,
          };
        }
      }
      return { isFriendly: false, discount: null, description: null };
    };

    // 主要的應用組件
    function App() {
      // 使用 useState 來管理當前時間和選擇的店家
      const [currentTime, setCurrentTime] = React.useState(new Date());
      const [selectedStoreId, setSelectedStoreId] = React.useState(null); // 'sevenEleven' or 'familyMart'

      // 使用 useEffect 來設定定時器，並在組件卸載時清除
      React.useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentTime(new Date()); // 每 1000 毫秒 (1 秒) 更新一次時間
        }, 1000);
        return () => clearInterval(intervalId);
      }, []);

      // 處理店家 LOGO 點擊事件
      const handleLogoClick = (storeId) => {
        setSelectedStoreId(storeId);
      };

      // 讓外部 LOGO 區塊可以切換 React 狀態
      window.setSelectedStoreId = (storeId) => {
        setSelectedStoreId(storeId);
      };

      // 外部 LOGO 區塊渲染函式
      function renderSwitchLogoOuter(storeId) {
        const outer = document.getElementById("switch-logo-outer");
        if (!outer) return;
        if (!storeId) {
          outer.style.display = "none";
          outer.innerHTML = "";
          return;
        }
        let html = "";
        if (storeId === FRIENDLY_TIME_CONFIG.sevenEleven.id) {
          html = `
            <div class="switch-logo-wrapper" onclick="window.setSelectedStoreId('familyMart')">
              <img src="${FRIENDLY_TIME_CONFIG.familyMart.horizontalLogo}" alt="切換至全家" onerror="this.onerror=null; this.src='https://web.archive.org/web/20250904003919/https://placehold.co/180x35/CCCCCC/333333?text=FamilyMart-Horizontal';" />
              <span class="switch-logo-text">切換至全家</span>
            </div>
          `;
        } else {
          html = `
            <div class="switch-logo-wrapper" onclick="window.setSelectedStoreId('sevenEleven')">
              <img src="${FRIENDLY_TIME_CONFIG.sevenEleven.horizontalLogo}" alt="切換至7-ELEVEN" onerror="this.onerror=null; this.src='https://web.archive.org/web/20250904003919/https://placehold.co/180x35/CCCCCC/333333?text=7-ELEVEN-Horizontal';" />
              <span class="switch-logo-text">切換至小七</span>
            </div>
          `;
        }
        outer.innerHTML = html;
        outer.style.display = "";
      }

      // 監控 selectedStoreId 變動時，渲染外部 LOGO 區塊
      React.useEffect(() => {
        renderSwitchLogoOuter(selectedStoreId);
        // 每次選擇店家變動時都 relocate，確保插入點正確
        setTimeout(() => {
          relocateSwitchLogoOuter();
        }, 0);
      }, [selectedStoreId]);

      // 格式化時間為 HH:MM:SS 格式 (24小時制)
      const formattedTime = React.useMemo(() => {
        const hours = String(currentTime.getHours()).padStart(2, "0");
        const minutes = String(currentTime.getMinutes()).padStart(2, "0");
        const seconds = String(currentTime.getSeconds()).padStart(2, "0");
        return `${hours}:${minutes}:${seconds}`;
      }, [currentTime]);

      // 友善時光倒數提示 function
      function getFriendlyTimeNotice() {
        if (!selectedStoreId) return null;
        const storeConfig = FRIENDLY_TIME_CONFIG[selectedStoreId];
        const now = currentTime;
        const nowMinutes = now.getHours() * 60 + now.getMinutes();
        const periods = storeConfig.friendlyHours.map((r) => {
          const start = r.start.hour * 60 + (r.start.minute || 0);
          let end = r.end.hour * 60 + (r.end.minute || 0);
          if (end <= start) end += 1440;
          return { start, end, discount: r.discount };
        });
        const sorted = periods
          .map((p) => ({ ...p, start: p.start, end: p.end }))
          .sort((a, b) => a.start - b.start);
        let inPeriod = null;
        for (const p of sorted) {
          let s = p.start,
            e = p.end;
          if (nowMinutes < s) (s -= 1440), (e -= 1440);
          if (nowMinutes >= s && nowMinutes < e) {
            inPeriod = p;
            break;
          }
        }
        let nextPeriod = null;
        let minDelta = Infinity;
        for (const p of sorted) {
          let s = p.start;
          if (s <= nowMinutes) s += 1440;
          const delta = s - nowMinutes;
          if (delta > 0 && delta < minDelta) {
            minDelta = delta;
            nextPeriod = p;
          }
        }
        let nextChange = null;
        if (inPeriod) {
          let minChange = Infinity;
          for (const p of sorted) {
            let s = p.start;
            if (s <= nowMinutes) s += 1440;
            const delta = s - nowMinutes;
            if (delta > 0 && delta < minChange) {
              minChange = delta;
              nextChange = p;
            }
          }
        }
        function formatDelta(mins) {
          if (mins < 1) return "不到1分鐘";
          const h = Math.floor(mins / 60);
          const m = mins % 60;
          return (h ? h + "小時" : "") + (m ? m + "分" : !h ? "0分" : "");
        }
        if (!inPeriod && nextPeriod) {
          return `距離下次友善時光（${nextPeriod.discount}）還有${formatDelta(
            minDelta
          )}`;
        }
        if (inPeriod) {
          const timeToEnd = inPeriod.end - nowMinutes;
          let msg = `本時段剩餘${formatDelta(timeToEnd)}`;
          if (nextChange && nextChange.discount !== inPeriod.discount) {
            msg += `，再${formatDelta(nextChange.start - nowMinutes)}變成${
              nextChange.discount
            }`;
          }
          return msg;
        }
        return null;
      }

      // 狀態顯示內容
      const renderStatusContent = React.useMemo(() => {
        if (!selectedStoreId) {
          return (
            <p className="status-placeholder">請點擊上方 LOGO 查詢友善時光</p>
          );
        }
        const storeConfig = FRIENDLY_TIME_CONFIG[selectedStoreId];
        if (!storeConfig) {
          return <p className="status-placeholder">查詢錯誤，請重試</p>;
        }
        const result = isFriendlyTime(currentTime, storeConfig);
        return (
          <div style={{ width: "100%", textAlign: "center" }}>
            <h1 className="status-main-text">
              {storeConfig.name}{" "}
              {result.isFriendly ? "現在是友善時光" : "現在不是友善時光"}
            </h1>
            {result.isFriendly && result.discount && (
              <p className="status-discount-text">{result.discount}</p>
            )}
          </div>
        );
      }, [selectedStoreId, currentTime]);

      // 多商品輸入清單
      const [items, setItems] = React.useState([{ price: "" }]);
      const currentDiscountRate = React.useMemo(() => {
        if (!selectedStoreId) return 1;
        const storeConfig = FRIENDLY_TIME_CONFIG[selectedStoreId];
        const result = isFriendlyTime(currentTime, storeConfig);
        if (!result.isFriendly || !result.discount) return 1;
        const match = result.discount.match(/(\d+)(?:\.(\d+))?折/);
        if (match) {
          const num = parseFloat(match[1] + (match[2] ? "." + match[2] : ""));
          if (num <= 10) {
            return num / 10;
          } else {
            return num / 100;
          }
        }
        return 1;
      }, [selectedStoreId, currentTime]);

      // 無條件進位 function
      function alwaysCeil(num) {
        return Math.ceil(num);
      }

      const discountedItems = React.useMemo(
        () =>
          items.map((item) => {
            const p = parseFloat(item.price);
            if (isNaN(p) || p <= 0) return "";
            const raw =
              p * (currentDiscountRate !== 1 ? currentDiscountRate : 1);
            if (
              selectedStoreId === "familyMart" ||
              selectedStoreId === "sevenEleven"
            ) {
              // 全家、小七皆無條件進位
              return alwaysCeil(raw);
            } else {
              return Math.round(raw);
            }
          }),
        [items, currentDiscountRate, selectedStoreId]
      );
      const totalDiscounted = React.useMemo(() => {
        return discountedItems.reduce(
          (sum, val) => sum + (parseInt(val) || 0),
          0
        );
      }, [discountedItems]);
      const cardBackgroundLogo = selectedStoreId
        ? `url(${FRIENDLY_TIME_CONFIG[selectedStoreId].logo})`
        : "none";
      const appCardClasses = `app-card-container ${
        selectedStoreId !== null ? "selected-state" : ""
      }`;

      return (
        <>
          {/* 主卡片容器 */}
          <div
            className={appCardClasses}
            style={{ backgroundImage: cardBackgroundLogo }}
          >
            {/* 右上角時間顯示 */}
            <div className="current-time-display">{formattedTime}</div>

            {selectedStoreId === null && (
              // 初始狀態：顯示兩個大 LOGO
              <div className="logo-container">
                {/* 小七 LOGO */}
                <div
                  className="logo-wrapper"
                  onClick={() =>
                    handleLogoClick(FRIENDLY_TIME_CONFIG.sevenEleven.id)
                  }
                >
                  <img
                    src={FRIENDLY_TIME_CONFIG.sevenEleven.logo}
                    alt="7-ELEVEN Logo"
                    onerror="this.onerror=null; this.src='https://web.archive.org/web/20250904003919/https://placehold.co/250x100/CCCCCC/333333?text=7-ELEVEN';"
                  />
                </div>

                {/* 全家 LOGO */}
                <div
                  className="logo-wrapper"
                  onClick={() =>
                    handleLogoClick(FRIENDLY_TIME_CONFIG.familyMart.id)
                  }
                >
                  <img
                    src={FRIENDLY_TIME_CONFIG.familyMart.logo}
                    alt="FamilyMart Logo"
                    onerror="this.onerror=null; this.src='https://web.archive.org/web/20250904003919/https://placehold.co/250x100/CCCCCC/333333?text=FamilyMart';"
                  />
                </div>
              </div>
            )}
          </div>

          {/* 友善時光狀態與折扣顯示 - 位於主卡片下方，且只有在選取店家後才顯示 */}
          {selectedStoreId !== null && (
            <div className="status-display-outer-container">
              {renderStatusContent} {/* 友善時光倒數提示 */}
              <div
                style={{
                  marginTop: 8,
                  color: "#007bff",
                  fontSize: "1em",
                  fontWeight: 500,
                }}
              >
                {getFriendlyTimeNotice()}
              </div>
              {/* 多商品清單輸入區塊 */}
              <div style={{ marginTop: 20, width: "100%" }}>
                <div
                  style={{
                    display: "flex",
                    fontWeight: "bold",
                    marginBottom: 6,
                  }}
                >
                  <div style={{ flex: 1 }}>原價</div>
                  <div style={{ flex: 1 }}></div>
                  <div style={{ width: 32 }}></div>
                </div>
                {items.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 6,
                    }}
                  >
                    <input
                      type="text"
                      inputMode="decimal"
                      pattern="[0-9]*"
                      value={item.price}
                      onChange={(e) => {
                        const newItems = [...items];
                        newItems[idx].price = e.target.value.replace(
                          /[^\d.]/g,
                          ""
                        );
                        setItems(newItems);
                      }}
                      placeholder="原價"
                      style={{
                        flex: 1,
                        marginRight: 6,
                        padding: "6px 8px",
                        fontSize: "1em",
                        borderRadius: 6,
                        border: "1px solid #ccc",
                      }}
                    />
                    <div
                      style={{
                        flex: 1,
                        color: currentDiscountRate !== 1 ? "#28a745" : "#888",
                        fontWeight: "bold",
                      }}
                    >
                      {item.price
                        ? currentDiscountRate !== 1
                          ? discountedItems[idx] + " 元"
                          : "無折扣"
                        : ""}
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        setItems(items.filter((_, i) => i !== idx))
                      }
                      style={{
                        marginLeft: 4,
                        background: "#eee",
                        border: "none",
                        borderRadius: 4,
                        cursor: "pointer",
                        fontSize: "1.1em",
                        padding: "2px 8px",
                      }}
                      disabled={items.length === 1}
                      title="刪除此商品"
                    >
                      ×
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => setItems([...items, { price: "" }])}
                  style={{
                    marginTop: 8,
                    padding: "6px 16px",
                    fontSize: "1em",
                    borderRadius: 6,
                    border: "1px solid #007bff",
                    background: "#fff",
                    color: "#007bff",
                    cursor: items[items.length - 1].price
                      ? "pointer"
                      : "not-allowed",
                    opacity: items[items.length - 1].price ? 1 : 0.5,
                  }}
                  disabled={!items[items.length - 1].price}
                >
                  新增商品
                </button>
                {/* 總計顯示 */}
                <div
                  style={{
                    marginTop: 16,
                    fontSize: "1.2em",
                    fontWeight: "bold",
                    color: "#28a745",
                  }}
                >
                  {items.some((i) => i.price)
                    ? currentDiscountRate !== 1
                      ? `折扣後總價：${totalDiscounted} 元`
                      : `總價：${totalDiscounted} 元`
                    : ""}
                </div>
              </div>
            </div>
          )}
        </>
      );
    }

    // 將 App 組件渲染到 DOM 中的 #root 元素
    // 使用 window.onload 確保 DOM 完全載入後再渲染 React 應用
    window.onload = function () {
      try {
        ReactDOM.createRoot(document.getElementById("root")).render(<App />);
      } catch (error) {
        console.error("Error rendering React app:", error);
        document.getElementById("root").innerHTML =
          '<p style="color: red; text-align: center; font-size: 1.5em; padding: 20px;">應用程式載入失敗，請檢查瀏覽器主控台錯誤。</p>';
      }
      relocateSwitchLogoOuter();
    };

    window.addEventListener("resize", relocateSwitchLogoOuter);

    // 讓 React 切換 LOGO 時也能同步移動位置
    const origRenderSwitchLogoOuter = window.renderSwitchLogoOuter;
    window.renderSwitchLogoOuter = function (...args) {
      if (typeof origRenderSwitchLogoOuter === "function")
        origRenderSwitchLogoOuter.apply(this, args);
      relocateSwitchLogoOuter();
    };
  </script>
  <script defer="" src="https://web.archive.org/web/20250904003919js_/https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon="{&quot;token&quot;: &quot;16dfb2d198de46de85807697891c50bb&quot;}"></script>
  <script defer="" src="https://web.archive.org/web/20250904003919js_/https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon="{&quot;token&quot;: &quot;7d682c66597940aba756c45220c1f239&quot;}"></script>
  <script type="application/ld+json">
    {
      "@context": "https://web.archive.org/web/20250904003919/https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "全家友善時光幾點開始打折？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "全家友善時光 10:00 - 17:00 及 17:00 - 00:00 提供7折折扣。"
          }
        },
        {
          "@type": "Question",
          "name": "小七友善時光幾點開始打折？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "7-11 友善時光折扣分三段：10:00 - 17:00 65折、19:00 - 19:59 8折、20:00 - 03:00 65折。"
          }
        }
      ]
    }
  </script>


<div id="mdCopyMenu" style="position: absolute; padding: 5px; background: rgb(51, 51, 51); color: rgb(255, 255, 255); border-radius: 5px; font-size: 14px; display: none; z-index: 99999;"><div style="cursor: pointer; padding: 3px;">Copy as MDLink</div><div style="cursor: pointer; padding: 3px;">Copy as Markdown</div></div><div id="give-freely-root-ejkiikneibegknkgimmihdpcbcedgmpo" class="give-freely-root" data-extension-id="ejkiikneibegknkgimmihdpcbcedgmpo" data-extension-name="Volume Booster" style="display: block;"></div><div class="glasp-extension-toaster" style="display: block; width: 320px; margin: unset; padding: unset; border: unset; border-radius: unset; outline: unset; background-color: unset; box-shadow: unset; position: fixed; top: 40px; right: 24px; z-index: 9999;"></div></body><div class="glasp-extension" style="display: block; width: unset; margin: unset; padding: unset; border: unset; border-radius: unset; outline: unset; background-color: unset; box-shadow: unset; position: fixed; bottom: 16px; right: 16px; z-index: 9999;"><div class="glasp-extension" style="font-family: inherit;"></div></div></html>