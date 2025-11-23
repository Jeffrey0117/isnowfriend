// 地理位置服務模組

const LocationService = {
  // 當前位置快取
  currentPosition: null,
  
  // 取得用戶當前位置
  async getCurrentPosition() {
    // 如果已有快取位置，直接返回
    if (this.currentPosition) {
      return this.currentPosition;
    }

    // 檢查瀏覽器是否支援 Geolocation API
    if (!navigator.geolocation) {
      throw new Error('您的瀏覽器不支援地理位置功能');
    }

    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.currentPosition = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            accuracy: position.coords.accuracy,
            timestamp: Date.now()
          };
          resolve(this.currentPosition);
        },
        (error) => {
          let errorMessage = '無法取得位置資訊';
          
          switch (error.code) {
            case error.PERMISSION_DENIED:
              errorMessage = '您拒絕了位置權限請求，請在瀏覽器設定中允許位置存取';
              break;
            case error.POSITION_UNAVAILABLE:
              errorMessage = '位置資訊暫時無法取得，請稍後再試';
              break;
            case error.TIMEOUT:
              errorMessage = '取得位置逾時，請檢查網路連線';
              break;
          }
          
          reject(new Error(errorMessage));
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 300000 // 5分鐘內的快取位置可接受
        }
      );
    });
  },

  // 清除位置快取（當用戶想重新取得位置時）
  clearCache() {
    this.currentPosition = null;
  },

  // 檢查位置權限狀態（如果瀏覽器支援）
  async checkPermission() {
    if (!navigator.permissions) {
      return 'unknown';
    }

    try {
      const result = await navigator.permissions.query({ name: 'geolocation' });
      return result.state; // 'granted', 'denied', 'prompt'
    } catch (error) {
      return 'unknown';
    }
  },

  // 計算兩點之間的距離（公尺）
  calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371e3; // 地球半徑（公尺）
    const φ1 = lat1 * Math.PI / 180;
    const φ2 = lat2 * Math.PI / 180;
    const Δφ = (lat2 - lat1) * Math.PI / 180;
    const Δλ = (lon2 - lon1) * Math.PI / 180;

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) *
      Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return Math.round(R * c);
  },

  // 格式化距離顯示
  formatDistance(meters) {
    if (meters < 1000) {
      return `${meters} 公尺`;
    } else {
      const km = (meters / 1000).toFixed(1);
      return `${km} 公里`;
    }
  },

  // 將地址轉換為經緯度（使用瀏覽器的 Geocoding，如果可用）
  async geocodeAddress(address) {
    // 注意：瀏覽器原生不支援 geocoding
    // 這個功能需要使用第三方服務（如 Google Maps Geocoding API）
    // 或者讓用戶直接使用關鍵字搜尋店家
    throw new Error('地址轉換功能需要第三方服務支援');
  },

  // 監聽位置變化（如果用戶移動）
  watchPosition(callback, errorCallback) {
    if (!navigator.geolocation) {
      errorCallback(new Error('瀏覽器不支援地理位置功能'));
      return null;
    }

    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const newPosition = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          accuracy: position.coords.accuracy,
          timestamp: Date.now()
        };
        
        // 更新快取
        this.currentPosition = newPosition;
        
        // 執行回調
        callback(newPosition);
      },
      (error) => {
        errorCallback(error);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 30000
      }
    );

    return watchId;
  },

  // 停止監聽位置變化
  clearWatch(watchId) {
    if (watchId !== null) {
      navigator.geolocation.clearWatch(watchId);
    }
  },

  // 檢查兩個位置是否在指定範圍內
  isWithinRadius(lat1, lon1, lat2, lon2, radiusMeters) {
    const distance = this.calculateDistance(lat1, lon1, lat2, lon2);
    return distance <= radiusMeters;
  },

  // 取得位置精確度等級
  getAccuracyLevel(accuracy) {
    if (accuracy < 50) return 'high';
    if (accuracy < 100) return 'medium';
    return 'low';
  },

  // 排序店家列表（依距離）
  sortStoresByDistance(stores, userLat, userLng) {
    return stores.map(store => {
      // 如果 API 已經提供了距離資訊，直接使用
      if (store.distance !== undefined && store.distance !== null && store.distanceText) {
        return store;
      }

      // 否則重新計算距離
      const distance = this.calculateDistance(
        userLat,
        userLng,
        store.location.lat,
        store.location.lng
      );
      return {
        ...store,
        distance: distance,
        distanceText: this.formatDistance(distance)
      };
    }).sort((a, b) => a.distance - b.distance);
  }
};