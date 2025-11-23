// API 調用模組 - 整合 7-11 與全家便利商店 API

const API = {
  // 7-11 API 配置
  sevenEleven: {
    baseUrl: 'https://lovefood.openpoint.com.tw/LoveFood/api/',
    mid_v: 'W0_DiF4DlgU5OeQoRswrRcaaNHMWOL7K3ra3385ocZcv-bBOWySZvoUtH6j-7pjiccl0C5h30uRUNbJXsABCKMqiekSb7tdiBNdVq8Ro5jgk6sgvhZla5iV0H3-8dZfASc7AhEm85679LIK3hxN7Sam6D0LAnYK9Lb0DZhn7xeTeksB4IsBx4Msr_VI',
    endpoints: {
      getToken: 'Auth/FrontendAuth/AccessToken',
      getStoreByAddress: 'Master/FrontendStore/GetStoreByAddress',
      getNearbyStoreList: 'Search/FrontendStoreItemStock/GetNearbyStoreList',
      getStoreDetail: 'Search/FrontendStoreItemStock/GetStoreDetail'
    }
  },

  // 全家 API 配置
  familyMart: {
    baseUrl: 'https://stamp.family.com.tw/api/maps',
    storeQueryUrl: 'https://family.map.com.tw/famiport/api/dropdownlist/Select_StoreName',
    // 使用 Friendly Cat 提供的静态门市数据
    storesJsonUrl: 'https://alan-cheng.github.io/Friendly-Cat/assets/family_mart_stores.json',
    endpoints: {
      mapClassificationInfo: '/MapClassificationInfo',
      mapProductInfo: '/MapProductInfo'
    }
  },

  // 全家门市数据缓存
  familyMartStoresCache: null,

  // Token 快取
  token711: null,
  tokenExpiry: null,

  // 分類資料快取（包含圖片 URL）
  foodCategoriesCache: null,

  // 取得 7-11 Access Token（使用 Friendly Cat 的方式）
  async get711Token() {
    if (this.token711 && this.tokenExpiry && Date.now() < this.tokenExpiry) {
      return this.token711;
    }

    try {
      // 使用 GET 参数传递 mid_v
      const url = `${this.sevenEleven.baseUrl}${this.sevenEleven.endpoints.getToken}?mid_v=${this.sevenEleven.mid_v}`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({})
      });

      const data = await response.json();
      // Friendly Cat API 返回格式：{"element":"JWT_TOKEN","isSuccess":true}
      if (data && data.isSuccess && data.element) {
        this.token711 = data.element;
        this.tokenExpiry = Date.now() + 3600000; // 1小時後過期
        sessionStorage.setItem('711Token', data.element);
        return data.element;
      }
      throw new Error('取得 7-11 Token 失敗');
    } catch (error) {
      console.error('7-11 Token Error:', error);
      throw error;
    }
  },

  // 取得 7-11 商品分類列表（包含圖片 URL）
  async get711FoodCategories() {
    if (this.foodCategoriesCache) {
      return this.foodCategoriesCache;
    }

    try {
      const token = await this.get711Token();
      const url = `${this.sevenEleven.baseUrl}Master/FrontendItemCategory/GetList?token=${token}`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({})
      });

      const data = await response.json();
      if (data && data.isSuccess && data.element) {
        this.foodCategoriesCache = data.element;
        return data.element;
      }
      return [];
    } catch (error) {
      console.error('取得分類列表錯誤:', error);
      return [];
    }
  },

  // 根據 NodeID 查找分類圖片 URL
  getCategoryImageUrl(nodeID) {
    if (!this.foodCategoriesCache) return null;

    for (let category of this.foodCategoriesCache) {
      // 檢查主分類的 Children
      if (category.Children && Array.isArray(category.Children)) {
        const subCategory = category.Children.find(child => child.ID === nodeID);
        if (subCategory) {
          return category.ImageUrl; // 返回主分類的圖片
        }
      }
    }
    return null;
  },

  // 7-11 搜尋店家（使用地址）
  async search711ByAddress(address) {
    try {
      const token = await this.get711Token();
      const url = this.sevenEleven.baseUrl + this.sevenEleven.endpoints.getStoreByAddress;
      const response = await fetch(`${url}?token=${token}&keyword=${encodeURIComponent(address)}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const data = await response.json();
      return data && Array.isArray(data) ? data : [];
    } catch (error) {
      console.error('7-11 搜尋店家錯誤:', error);
      return [];
    }
  },

  // 7-11 搜尋附近店家（使用經緯度）
  async search711ByLocation(lat, lng, radius = 1000) {
    try {
      // 先取得分類資料（包含圖片 URL）
      await this.get711FoodCategories();

      const token = await this.get711Token();
      const url = this.sevenEleven.baseUrl + this.sevenEleven.endpoints.getNearbyStoreList;
      const response = await fetch(`${url}?token=${token}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          CurrentLocation: {
            Latitude: lat,
            Longitude: lng
          },
          SearchLocation: {
            Latitude: lat,
            Longitude: lng
          }
        })
      });

      const data = await response.json();

      // 處理新的 API 響應格式
      if (data && data.isSuccess && data.element && data.element.StoreStockItemList) {
        console.log('🔍 API 返回的門市數量:', data.element.StoreStockItemList.length);
        console.log('🔍 第一家門市原始數據:', data.element.StoreStockItemList[0]);

        // 映射門市數據到統一格式
        return data.element.StoreStockItemList.map(store => {
          // 格式化距離文本（使用 API 返回的 Distance）
          let distanceText = '';
          if (store.Distance) {
            if (store.Distance < 1000) {
              distanceText = `${Math.round(store.Distance)} 公尺`;
            } else {
              distanceText = `${(store.Distance / 1000).toFixed(1)} 公里`;
            }
          }

          console.log(`🔍 ${store.StoreName}: Distance=${store.Distance}, distanceText=${distanceText}`);

          // 映射分類數據
          const categories = [];
          if (store.CategoryStockItems && Array.isArray(store.CategoryStockItems)) {
            store.CategoryStockItems.forEach(category => {
              // 從快取中查找對應的圖片 URL
              const imageUrl = this.getCategoryImageUrl(category.NodeID);

              categories.push({
                categoryId: category.NodeID,
                categoryName: category.Name,
                qty: category.RemainingQty || 0,
                imageUrl: imageUrl || `https://via.placeholder.com/100/f5f5f5/666?text=${encodeURIComponent(category.Name)}`
              });
            });
          }

          return {
            // 基本資訊
            id: store.StoreNo,
            storeNo: store.StoreNo,
            name: store.StoreName,
            address: store.Address || '',
            distance: store.Distance || 0,  // 使用 API 返回的距離（公尺）
            distanceText: distanceText,
            isOperating: store.IsOperateTime || false,
            totalRemainingQty: store.RemainingQty || 0,

            // 位置資訊
            location: {
              lat: store.Latitude || lat,
              lng: store.Longitude || lng
            },

            // 分類資訊
            categories: categories,

            // 保留原始數據
            raw: store
          };
        });
      }

      // 如果響應格式不符合預期，返回空陣列
      return [];
    } catch (error) {
      console.error('7-11 位置搜尋錯誤:', error);
      return [];
    }
  },

  // 7-11 取得店家詳細資訊
  async get711StoreDetail(storeNo) {
    try {
      const token = await this.get711Token();
      const url = this.sevenEleven.baseUrl + this.sevenEleven.endpoints.getStoreDetail;
      const response = await fetch(`${url}?token=${token}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          storeNo: storeNo,
          CurrentLocation: {
            Latitude: 25.0375197,
            Longitude: 121.5636704
          }
        })
      });

      const data = await response.json();
      return data || null;
    } catch (error) {
      console.error('7-11 店家詳情錯誤:', error);
      return null;
    }
  },

  // 全家搜尋店家（使用關鍵字）
  async searchFamilyMartByKeyword(keyword) {
    try {
      const response = await fetch(`${this.familyMart.storeQueryUrl}?StoreName=${encodeURIComponent(keyword)}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const data = await response.json();
      return data && Array.isArray(data) ? data : [];
    } catch (error) {
      console.error('全家搜尋錯誤:', error);
      return [];
    }
  },

  // 获取全家门市数据（使用静态 JSON）
  async getFamilyMartStores() {
    if (this.familyMartStoresCache) {
      return this.familyMartStoresCache;
    }

    try {
      const response = await fetch(this.familyMart.storesJsonUrl);
      const stores = await response.json();
      this.familyMartStoresCache = stores;
      return stores;
    } catch (error) {
      console.error('載入全家門市資料錯誤:', error);
      return [];
    }
  },

  // 全家搜尋附近店家（使用經緯度，从静态 JSON 过滤）
  async searchFamilyMartByLocation(lat, lng, radiusKm = 1) {
    try {
      const allStores = await this.getFamilyMartStores();

      // 过滤出半径范围内的门市
      const nearbyStores = allStores.filter(store => {
        const storeLat = parseFloat(store.py_wgs84);
        const storeLng = parseFloat(store.px_wgs84);
        const distance = this.calculateDistance(lat, lng, storeLat, storeLng);
        return distance <= radiusKm * 1000; // 转换为公尺
      });

      return nearbyStores;
    } catch (error) {
      console.error('全家位置搜尋錯誤:', error);
      return [];
    }
  },

  // 全家取得店家商品資訊
  async getFamilyMartStoreProducts(storeId, lat, lng) {
    try {
      const url = this.familyMart.baseUrl + this.familyMart.endpoints.mapProductInfo;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          store_id: storeId,
          lat: lat,
          lon: lng
        })
      });

      const data = await response.json();
      return data || null;
    } catch (error) {
      console.error('全家商品查詢錯誤:', error);
      return null;
    }
  },

  // 統一搜尋介面（整合兩家店）
  async searchStoresByLocation(lat, lng) {
    const [stores711, storesFM] = await Promise.all([
      this.search711ByLocation(lat, lng).catch(() => []),
      this.searchFamilyMartByLocation(lat, lng).catch(() => [])
    ]);

    const unified711 = stores711.map(store => {
      // 檢查是否為新格式（已處理的數據）- 只檢查 categories 字段
      if (store.categories && Array.isArray(store.categories)) {
        console.log(`🔄 統一格式 - ${store.name}: distance=${store.distance}, distanceText=${store.distanceText}`);

        // 新格式：直接使用已映射的數據
        return {
          id: store.id,
          name: store.name,
          type: '7-11',
          address: store.address || '',
          location: store.location || {
            lat: lat,
            lng: lng
          },
          distance: store.distance,
          distanceText: store.distanceText,
          storeNo: store.storeNo,
          isOperating: store.isOperating,
          totalRemainingQty: store.totalRemainingQty,
          categories: store.categories,
          raw: store.raw || store
        };
      } else {
        // 舊格式：兼容原有數據結構
        const distance = store.Distance || this.calculateDistance(lat, lng, parseFloat(store.Latitude || store.lat), parseFloat(store.Longitude || store.lng));
        let distanceText = '';
        if (distance < 1000) {
          distanceText = `${Math.round(distance)}公尺`;
        } else {
          distanceText = `${(distance / 1000).toFixed(1)}公里`;
        }

        return {
          id: store.StoreNo || store.POIID,
          name: store.StoreName || `7-11${store.POIName}門市`,
          type: '7-11',
          address: store.Address || store.address,
          location: {
            lat: parseFloat(store.Latitude || store.lat),
            lng: parseFloat(store.Longitude || store.lng)
          },
          distance: distance,
          distanceText: distanceText,
          storeNo: store.StoreNo || store.POIID,
          raw: store
        };
      }
    });

    const unifiedFM = storesFM.map(store => {
      const distance = this.calculateDistance(lat, lng, parseFloat(store.py_wgs84 || store.lat || store.py), parseFloat(store.px_wgs84 || store.lon || store.px));

      // 格式化距離文本
      let distanceText = '';
      if (distance < 1000) {
        distanceText = `${Math.round(distance)} 公尺`;
      } else {
        distanceText = `${(distance / 1000).toFixed(1)} 公里`;
      }

      return {
        id: store.pkeynew || store.store_id || store.pkey,
        name: store.Name || store.store_name || store.NAME,
        type: '全家',
        address: store.addr || store.address,
        location: {
          lat: parseFloat(store.py_wgs84 || store.lat || store.py),
          lng: parseFloat(store.px_wgs84 || store.lon || store.px)
        },
        distance: distance,
        distanceText: distanceText,
        storeId: store.pkeynew || store.store_id || store.pkey,
        phone: store.Tel || store.phone,
        raw: store
      };
    });

    let allStores = [...unified711, ...unifiedFM].sort((a, b) => a.distance - b.distance);

    // 如果 API 都失敗，返回演示數據
    if (allStores.length === 0) {
      console.warn('⚠️ API 無法使用，返回演示數據');
      allStores = this.getMockStores(lat, lng);
    }

    return allStores;
  },

  // 獲取演示店家數據（當 API 失效時使用）
  getMockStores(lat, lng) {
    const mockData = [
      {
        id: 'demo-711-1',
        name: '7-ELEVEN 信義門市',
        type: '7-11',
        address: '台北市信義區信義路五段7號',
        location: {
          lat: lat + 0.001,
          lng: lng + 0.001
        },
        phone: '02-2345-6789',
        isMock: true
      },
      {
        id: 'demo-711-2',
        name: '7-ELEVEN 市政門市',
        type: '7-11',
        address: '台北市信義區市府路45號',
        location: {
          lat: lat + 0.002,
          lng: lng - 0.001
        },
        phone: '02-2345-6790',
        isMock: true
      },
      {
        id: 'demo-family-1',
        name: '全家 信義店',
        type: '全家',
        address: '台北市信義區松仁路123號',
        location: {
          lat: lat - 0.001,
          lng: lng + 0.002
        },
        phone: '02-2345-6791',
        isMock: true
      },
      {
        id: 'demo-family-2',
        name: '全家 世貿店',
        type: '全家',
        address: '台北市信義區信義路五段5號',
        location: {
          lat: lat + 0.003,
          lng: lng + 0.001
        },
        phone: '02-2345-6792',
        isMock: true
      },
      {
        id: 'demo-711-3',
        name: '7-ELEVEN 松仁門市',
        type: '7-11',
        address: '台北市信義區松仁路28號',
        location: {
          lat: lat - 0.002,
          lng: lng - 0.002
        },
        phone: '02-2345-6793',
        isMock: true
      }
    ].map(store => {
      const distance = this.calculateDistance(lat, lng, store.location.lat, store.location.lng);

      // 格式化距離文本
      let distanceText = '';
      if (distance < 1000) {
        distanceText = `${Math.round(distance)} 公尺`;
      } else {
        distanceText = `${(distance / 1000).toFixed(1)} 公里`;
      }

      return {
        ...store,
        distance: distance,
        distanceText: distanceText
      };
    }).sort((a, b) => a.distance - b.distance);

    return mockData;
  },

  // 統一搜尋介面（使用關鍵字）
  async searchStoresByKeyword(keyword) {
    const [stores711, storesFM] = await Promise.all([
      this.search711ByAddress(keyword),
      this.searchFamilyMartByKeyword(keyword)
    ]);

    const unified711 = stores711.map(store => ({
      id: store.StoreNo || store.POIID,
      name: store.StoreName || `7-11${store.POIName}門市`,
      type: '7-11',
      address: store.Address || store.address,
      location: {
        lat: parseFloat(store.Latitude || store.lat),
        lng: parseFloat(store.Longitude || store.lng)
      },
      storeNo: store.StoreNo || store.POIID,
      raw: store
    }));

    const unifiedFM = storesFM.map(store => ({
      id: store.store_id || store.pkey,
      name: store.store_name || store.NAME,
      type: '全家',
      address: store.address || store.addr,
      location: {
        lat: parseFloat(store.lat || store.py),
        lng: parseFloat(store.lon || store.px)
      },
      storeId: store.store_id || store.pkey,
      raw: store
    }));

    return [...unified711, ...unifiedFM];
  },

  // 取得店家商品（統一介面）
  async getStoreProducts(store) {
    if (store.type === '7-11') {
      // 檢查是否已有分類數據（來自新的 API 響應格式）
      if (store.categories && store.categories.length > 0) {
        // 將分類數據轉換為 UI 需要的格式
        const categories = store.categories.map(cat => ({
          name: cat.categoryName,
          imageUrl: cat.imageUrl || '',
          totalQty: cat.qty,
          items: [{
            name: cat.categoryName,
            qty: cat.qty,
            price: 0  // 價格需要從詳細 API 獲取
          }]
        }));

        return {
          store: store,
          categories: categories
        };
      }

      // 如果沒有分類數據，嘗試從詳細 API 獲取（兼容舊邏輯）
      const detail = await this.get711StoreDetail(store.storeNo);
      if (!detail) return null;

      const categories = [];
      if (detail.CategoryStockItems && Array.isArray(detail.CategoryStockItems)) {
        detail.CategoryStockItems.forEach(cat => {
          const items = [];
          if (cat.Children && Array.isArray(cat.Children)) {
            cat.Children.forEach(child => {
              if (child.StockItems && Array.isArray(child.StockItems)) {
                child.StockItems.forEach(item => {
                  items.push({
                    name: item.ItemName,
                    qty: item.RemainingQty || 0,
                    price: item.Price || 0
                  });
                });
              }
            });
          }
          if (items.length > 0) {
            categories.push({
              name: cat.Name,
              imageUrl: cat.ImageUrl || '',
              totalQty: items.reduce((sum, item) => sum + item.qty, 0),
              items: items
            });
          }
        });
      }

      return {
        store: store,
        categories: categories
      };
    } else if (store.type === '全家') {
      const products = await this.getFamilyMartStoreProducts(
        store.storeId,
        store.location.lat,
        store.location.lng
      );
      if (!products) return null;

      const categories = [];
      if (Array.isArray(products)) {
        products.forEach(cat => {
          const items = [];
          if (cat.products && Array.isArray(cat.products)) {
            cat.products.forEach(p => {
              items.push({
                name: p.name,
                qty: p.qty || 0,
                price: 0
              });
            });
          }
          if (items.length > 0) {
            categories.push({
              name: cat.category_name || cat.name,
              imageUrl: cat.image_url || cat.url || '',
              totalQty: items.reduce((sum, item) => sum + item.qty, 0),
              items: items
            });
          }
        });
      }

      return {
        store: store,
        categories: categories
      };
    }
    return null;
  },

  // 計算兩點距離（公尺）
  calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371e3;
    const φ1 = lat1 * Math.PI / 180;
    const φ2 = lat2 * Math.PI / 180;
    const Δφ = (lat2 - lat1) * Math.PI / 180;
    const Δλ = (lon2 - lon1) * Math.PI / 180;

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) *
      Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return Math.round(R * c);
  }
};