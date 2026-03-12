// UI 更新與互動邏輯模組

const UIManager = {
  // 狀態管理
  state: {
    selectedStore: null,
    selectedCategory: null,
    searchResults: [],
    currentMode: 'initial', // 'initial', 'location', 'keyword'
    isLoading: false,
    selectedBrand: null // '7-11' or '全家' or null (顯示全部)
  },

  // 初始化
  init() {
    this.setupEventListeners();
  },

  // 設定事件監聽器
  setupEventListeners() {
    // 店家搜尋按鈕（使用目前位置）
    const locationBtn = document.getElementById('search-by-location');
    if (locationBtn) {
      locationBtn.addEventListener('click', () => this.handleLocationSearch());
    }

    // 關鍵字搜尋輸入
    const searchInput = document.getElementById('store-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => this.handleKeywordInput(e.target.value));
    }

    // 返回初始狀態按鈕
    const backBtn = document.getElementById('back-to-initial');
    if (backBtn) {
      backBtn.addEventListener('click', () => this.resetToInitial());
    }
  },

  // 顯示載入中狀態
  showLoading(message = '載入中...') {
    this.state.isLoading = true;
    const loadingEl = document.getElementById('loading-indicator');
    const loadingText = document.getElementById('loading-text');
    
    if (loadingEl) {
      loadingEl.classList.remove('hidden');
      if (loadingText) loadingText.textContent = message;
    }
  },

  // 隱藏載入中狀態
  hideLoading() {
    this.state.isLoading = false;
    const loadingEl = document.getElementById('loading-indicator');
    if (loadingEl) {
      loadingEl.classList.add('hidden');
    }
  },

  // 顯示錯誤訊息
  showError(message) {
    const errorEl = document.getElementById('error-message');
    const errorText = document.getElementById('error-text');
    
    if (errorEl && errorText) {
      errorText.textContent = message;
      errorEl.classList.remove('hidden');
      
      // 5秒後自動隱藏
      setTimeout(() => {
        errorEl.classList.add('hidden');
      }, 5000);
    } else {
      alert(message);
    }
  },

  // 處理位置搜尋
  async handleLocationSearch() {
    try {
      this.showLoading('正在取得您的位置...');

      const position = await LocationService.getCurrentPosition();

      this.showLoading('搜尋附近店家中...');

      const stores = await API.searchStoresByLocation(position.lat, position.lng);

      // 根據品牌過濾（使用當前選擇的品牌）
      let filteredStores = stores;
      const brandFilter = this.state.selectedBrand;

      if (brandFilter) {
        filteredStores = stores.filter(store => store.type === brandFilter);
        console.log(`🔍 品牌過濾: ${brandFilter}, 過濾前: ${stores.length}, 過濾後: ${filteredStores.length}`);
      }

      // 過濾掉沒有庫存的門市
      filteredStores = filteredStores.filter(store => {
        const hasInventory = store.totalRemainingQty && store.totalRemainingQty > 0;
        if (!hasInventory) {
          console.log(`❌ 過濾無庫存門市: ${store.name} (庫存: ${store.totalRemainingQty || 0})`);
        }
        return hasInventory;
      });

      // 排序並限制顯示前 5 家
      const sortedStores = LocationService.sortStoresByDistance(
        filteredStores,
        position.lat,
        position.lng
      ).slice(0, 5);

      this.state.searchResults = sortedStores;
      this.state.currentMode = 'location';

      this.hideLoading();

      // 檢查是否使用演示數據
      if (sortedStores.length > 0 && sortedStores[0].isMock) {
        this.showError('⚠️ API 暫時無法使用，顯示演示數據供參考');
      }

      this.renderStoreList(sortedStores);

    } catch (error) {
      this.hideLoading();
      this.showError(error.message);
    }
  },

  // 處理關鍵字輸入（防抖處理）
  handleKeywordInput: (() => {
    let timeout;
    return function(keyword) {
      clearTimeout(timeout);
      
      if (keyword.length < 2) {
        this.clearSearchSuggestions();
        return;
      }

      timeout = setTimeout(async () => {
        try {
          const stores = await API.searchStoresByKeyword(keyword);
          this.renderSearchSuggestions(stores);
        } catch (error) {
          console.error('搜尋錯誤:', error);
        }
      }, 300);
    };
  })(),

  // 渲染搜尋建議列表
  renderSearchSuggestions(stores) {
    const datalist = document.getElementById('store-suggestions');
    if (!datalist) return;

    datalist.innerHTML = '';
    
    stores.slice(0, 10).forEach(store => {
      const option = document.createElement('option');
      option.value = `${store.name} - ${store.address}`;
      option.dataset.storeId = store.id;
      option.dataset.storeType = store.type;
      datalist.appendChild(option);
    });
  },

  // 清除搜尋建議
  clearSearchSuggestions() {
    const datalist = document.getElementById('store-suggestions');
    if (datalist) {
      datalist.innerHTML = '';
    }
  },

  // 渲染店家列表 - Friendly Cat 風格
  renderStoreList(stores) {
    const container = document.getElementById('store-list-container');
    if (!container) return;

    if (stores.length === 0) {
      // 顯示品牌特定的無門市提示
      const brandText = this.state.selectedBrand || '附近';
      container.innerHTML = `
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px 25px; border-radius: 12px; text-align: center; box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);">
          <div style="font-size: 1.2em; font-weight: 600;">
            ${this.state.selectedBrand ? `附近的 ${this.state.selectedBrand} 門市目前皆無庫存` : '附近的門市目前皆無庫存'}
          </div>
          <div style="font-size: 0.95em; opacity: 0.9; margin-top: 8px;">
            請稍後再試
          </div>
        </div>
      `;
      // 顯示店家列表容器（即使是空的）
      this.toggleView('store-list');
      return;
    }

    console.log('🎨 UI 收到的門市數量:', stores.length);
    console.log('🎨 第一家門市數據:', stores[0]);
    console.log('🎨 所有門市的 type:', stores.map(s => `${s.name}: ${s.type}`));

    // 非同步載入每個店家的商品資訊
    this.loadStoreCategories(stores);

    // 添加提示文字和門市列表
    const noticeHTML = `
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px 20px; border-radius: 12px; margin-bottom: 20px; text-align: center; box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);">
        <div style="font-size: 1.2em; font-weight: 600;">
          只顯示有庫存的門市
        </div>
      </div>
    `;

    const storesHTML = stores.map(store => {
      // 取得店家 logo (根據店家類型)
      const storeLogo = store.type === '7-11'
        ? 'https://duk.tw/RKUhMo'
        : 'https://play-lh.googleusercontent.com/e3AKbefh3znufeBBSF1anaUZwV7oSkTjNCn67ZdSD18DwE95y7lZY9uHDloXH8fcmg';

      // 使用 API 已經格式化好的距離文字，如果沒有則重新格式化
      const formattedDistance = store.distanceText || this.formatDistance(store.distance);

      // 初始分類顯示（載入中狀態）
      const loadingCategories = `
        <div class="store-category-item">
          <div class="store-category-image" style="background:#f5f5f5;animation:pulse 1.5s infinite"></div>
          <div class="store-category-name">載入中...</div>
        </div>
      `;

      return `
        <div class="store-card" data-store-id="${store.id}" data-store-type="${store.type}" onclick="UIManager.loadStoreProducts('${store.id}', '${store.type}')">
          <!-- 門市頭部 -->
          <div class="store-header">
            <div class="store-title-section">
              <!-- 店家 Logo -->
              <img src="${storeLogo}" alt="${store.type}" class="store-logo"
                   onerror="this.src='https://via.placeholder.com/24/007bff/fff?text=${store.type === '7-11' ? '7' : 'F'}'">

              <!-- 店名 -->
              <h3 class="store-name">${store.name}</h3>

              <!-- Google Maps 圖標 -->
              <svg class="map-link-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                   onclick="event.stopPropagation(); window.open('https://maps.google.com/?q=${encodeURIComponent(store.address)}', '_blank')"
                   title="在 Google Maps 中查看">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                      fill="currentColor"/>
              </svg>
            </div>
          </div>

          <!-- 距離資訊 -->
          <div class="store-distance-section">
            <div class="store-distance">
              距離您: ${formattedDistance}
            </div>
          </div>

          <!-- 商品分類網格 -->
          <div class="store-categories-section">
            <div class="store-categories-grid" id="categories-${store.id}">
              ${loadingCategories}
            </div>
          </div>

          <!-- 隱藏的地址資訊（保留以供其他功能使用） -->
          <p class="store-address" style="display: none;">${store.address}</p>
        </div>
      `;
    }).join('');

    // 組合提示和門市列表
    container.innerHTML = noticeHTML + storesHTML;

    // 隱藏初始 LOGO，顯示店家列表
    this.toggleView('store-list');
  },

  // 格式化距離顯示
  formatDistance(distance) {
    if (!distance && distance !== 0) return '計算中...';

    if (distance < 1000) {
      return `${Math.round(distance)} 公尺`;
    } else {
      return `${(distance / 1000).toFixed(1)} 公里`;
    }
  },

  // 非同步載入店家分類
  async loadStoreCategories(stores) {
    // 為每個店家載入商品分類（限制併發數量以避免API限流）
    const loadPromises = stores.slice(0, 5).map(async (store, index) => {
      // 延遲載入以避免同時請求過多
      await new Promise(resolve => setTimeout(resolve, index * 200));

      try {
        const products = await API.getStoreProducts(store);
        if (products && products.categories) {
          this.updateStoreCategories(store.id, products.categories);
        } else {
          // 如果無法取得真實資料，使用預設分類
          this.updateStoreCategories(store.id, this.getDefaultCategories(store.type));
        }
      } catch (error) {
        console.error(`載入店家 ${store.id} 分類失敗:`, error);
        // 發生錯誤時使用預設分類
        this.updateStoreCategories(store.id, this.getDefaultCategories(store.type));
      }
    });

    // 等待所有載入完成
    await Promise.allSettled(loadPromises);
  },

  // 更新店家的分類顯示
  updateStoreCategories(storeId, categories) {
    const container = document.getElementById(`categories-${storeId}`);
    if (!container) return;

    // 限制顯示前5個分類
    const displayCategories = categories.slice(0, 5);

    container.innerHTML = displayCategories.map(cat => `
      <div class="store-category-item">
        <img src="${cat.imageUrl || `https://via.placeholder.com/56/f5f5f5/666?text=${encodeURIComponent(cat.name)}`}"
             alt="${cat.name}"
             class="store-category-image"
             onerror="this.src='https://via.placeholder.com/56/f5f5f5/666?text=${encodeURIComponent(cat.name)}'">
        <div class="store-category-name">${cat.name}</div>
        <span class="store-category-badge">${cat.totalQty || 0}</span>
      </div>
    `).join('');

    // 添加載入完成的動畫效果
    container.style.animation = 'fadeIn 0.3s ease-in';
  },

  // 取得預設分類（當API失敗時使用）
  getDefaultCategories(storeType) {
    if (storeType === '7-11') {
      return [
        { name: '飯糰', totalQty: 12, imageUrl: null },
        { name: '便當', totalQty: 8, imageUrl: null },
        { name: '沙拉', totalQty: 5, imageUrl: null },
        { name: '飲料', totalQty: 15, imageUrl: null },
        { name: '麵包', totalQty: 7, imageUrl: null }
      ];
    } else {
      return [
        { name: '飯糰', totalQty: 10, imageUrl: null },
        { name: '壽司', totalQty: 6, imageUrl: null },
        { name: '便當', totalQty: 9, imageUrl: null },
        { name: '三明治', totalQty: 8, imageUrl: null },
        { name: '沙拉', totalQty: 4, imageUrl: null }
      ];
    }
  },

  // 載入店家商品
  async loadStoreProducts(storeId, storeType) {
    try {
      this.showLoading('載入商品資訊中...');

      const store = this.state.searchResults.find(s => s.id === storeId);
      if (!store) {
        throw new Error('找不到店家資訊');
      }

      const products = await API.getStoreProducts(store);
      
      this.hideLoading();

      if (!products || products.categories.length === 0) {
        this.showError('此店家目前沒有折扣商品');
        return;
      }

      this.state.selectedStore = store;
      this.renderProductCategories(products);

    } catch (error) {
      this.hideLoading();
      this.showError('載入商品失敗: ' + error.message);
    }
  },

  // 渲染商品分類
  renderProductCategories(products) {
    const container = document.getElementById('product-categories-container');
    if (!container) return;

    const categories = products.categories.filter(cat => cat.totalQty > 0);

    container.innerHTML = `
      <div class="selected-store-info">
        <h2>${products.store.name}</h2>
        <p>${products.store.address}</p>
        ${products.store.distanceText ? `<p class="distance">📍 ${products.store.distanceText}</p>` : ''}
      </div>
      <div class="categories-grid">
        ${categories.map(cat => `
          <div class="category-card" onclick="UIManager.selectCategory('${cat.name}')">
            ${cat.imageUrl ? `<img src="${cat.imageUrl}" alt="${cat.name}" onerror="this.src='https://placehold.co/100x100/CCCCCC/333333?text=${encodeURIComponent(cat.name)}'">` : ''}
            <h3>${cat.name}</h3>
            <span class="qty-badge">${cat.totalQty}</span>
          </div>
        `).join('')}
      </div>
    `;

    this.toggleView('product-categories');
  },

  // 選擇商品分類
  async selectCategory(categoryName) {
    const products = await API.getStoreProducts(this.state.selectedStore);
    const category = products.categories.find(cat => cat.name === categoryName);
    
    if (!category) return;

    this.state.selectedCategory = category;
    this.renderProductItems(category);
  },

  // 渲染商品項目
  renderProductItems(category) {
    const container = document.getElementById('product-items-container');
    if (!container) return;

    // 取得當前折扣
    const discount = this.getCurrentDiscount(this.state.selectedStore.type);

    container.innerHTML = `
      <div class="category-header">
        <button onclick="UIManager.backToCategories()" class="back-btn">← 返回</button>
        <h2>${category.name}</h2>
      </div>
      <div class="items-list">
        ${category.items.map(item => {
          const originalPrice = item.price || 0;
          const discountedPrice = originalPrice * discount.rate;
          
          return `
            <div class="item-card">
              <div class="item-info">
                <h3>${item.name}</h3>
                <p class="item-qty">剩餘: ${item.qty} 個</p>
              </div>
              ${originalPrice > 0 ? `
                <div class="item-price">
                  ${discount.isFriendly ? `
                    <span class="original-price">NT$ ${originalPrice}</span>
                    <span class="discount-price">NT$ ${Math.round(discountedPrice)}</span>
                    <span class="discount-label">${discount.description}</span>
                  ` : `
                    <span class="price">NT$ ${originalPrice}</span>
                  `}
                </div>
              ` : ''}
            </div>
          `;
        }).join('')}
      </div>
    `;

    this.toggleView('product-items');
  },

  // 返回分類列表
  backToCategories() {
    this.state.selectedCategory = null;
    this.loadStoreProducts(this.state.selectedStore.id, this.state.selectedStore.type);
  },

  // 取得當前折扣資訊
  getCurrentDiscount(storeType) {
    const currentTime = new Date();
    const config = FRIENDLY_TIME_CONFIG[storeType === '7-11' ? 'sevenEleven' : 'familyMart'];
    const result = isFriendlyTime(currentTime, config);

    if (!result.isFriendly) {
      return { isFriendly: false, rate: 1, description: '無折扣' };
    }

    // 解析折扣率
    const match = result.discount.match(/(\d+(?:\.\d+)?)折/);
    const rate = match ? parseFloat(match[1]) / 10 : 1;

    return {
      isFriendly: true,
      rate: rate,
      description: result.discount
    };
  },

  // 切換視圖
  toggleView(viewName) {
    // 定義所有視圖容器
    const views = {
      'initial': 'root',  // React 根元素
      'store-list': 'store-list-container',
      'product-categories': 'product-categories-container',
      'product-items': 'product-items-container'
    };

    // 遍歷所有視圖，顯示或隱藏
    Object.entries(views).forEach(([view, elementId]) => {
      const el = document.getElementById(elementId);
      if (el) {
        if (viewName === 'store-list' || viewName === 'product-categories' || viewName === 'product-items') {
          // 顯示店家相關視圖時，隱藏初始界面
          if (view === 'initial') {
            el.style.display = 'none';
          } else {
            el.classList.toggle('hidden', view !== viewName);
          }
        } else {
          // 返回初始狀態時
          if (view === 'initial') {
            el.style.display = 'block';
          } else {
            el.classList.add('hidden');
          }
        }
      }
    });

    // 顯示/隱藏返回按鈕
    const backBtn = document.getElementById('back-to-initial');
    if (backBtn) {
      backBtn.classList.toggle('hidden', viewName === 'initial' || !viewName);
    }
  },

  // 重置到初始狀態
  resetToInitial() {
    console.log('🔄 重置到初始狀態，清除品牌選擇');
    this.state.selectedStore = null;
    this.state.selectedCategory = null;
    this.state.searchResults = [];
    this.state.currentMode = 'initial';
    this.state.selectedBrand = null;

    // 切換回初始視圖
    this.toggleView('initial');

    // 清空所有容器
    const storeListContainer = document.getElementById('store-list-container');
    if (storeListContainer) storeListContainer.innerHTML = '';

    const categoriesContainer = document.getElementById('product-categories-container');
    if (categoriesContainer) categoriesContainer.innerHTML = '';

    const itemsContainer = document.getElementById('product-items-container');
    if (itemsContainer) itemsContainer.innerHTML = '';

    // 清除搜尋輸入
    const searchInput = document.getElementById('store-search-input');
    if (searchInput) searchInput.value = '';

    this.clearSearchSuggestions();
  }
};

// 頁面載入完成後初始化
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => UIManager.init());
} else {
  UIManager.init();
}