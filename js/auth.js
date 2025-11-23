// Firebase 認證模組

import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { 
  getAuth, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged
} from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';
import { 
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  getDocs
} from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyA3i_YLXpXuHNrmrHULrqnsIj5Z919aCfw",
  authDomain: "friendly-cat-for-you.firebaseapp.com",
  databaseURL: "https://friendly-cat-for-you-default-rtdb.firebaseio.com",
  projectId: "friendly-cat-for-you",
  storageBucket: "friendly-cat-for-you.firebasestorage.app",
  messagingSenderId: "614210455616",
  appId: "1:614210455616:web:cedabfd68dca95ae4337a5",
  measurementId: "G-3V3740GPG7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

const AuthService = {
  currentUser: null,
  authStateCallbacks: [],

  init() {
    onAuthStateChanged(auth, (user) => {
      this.currentUser = user;
      this.authStateCallbacks.forEach(callback => callback(user));
      
      if (user) {
        console.log('使用者已登入:', user.email);
      } else {
        console.log('使用者未登入');
      }
    });
  },

  onAuthStateChanged(callback) {
    this.authStateCallbacks.push(callback);
    if (this.currentUser !== null) {
      callback(this.currentUser);
    }
  },

  async signUpWithEmail(email, password, displayName) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        displayName: displayName || email.split('@')[0],
        createdAt: new Date().toISOString(),
        favorites: []
      });
      
      return { success: true, user };
    } catch (error) {
      console.error('註冊錯誤:', error);
      return { success: false, error: this.getErrorMessage(error.code) };
    }
  },

  async signInWithEmail(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return { success: true, user: userCredential.user };
    } catch (error) {
      console.error('登入錯誤:', error);
      return { success: false, error: this.getErrorMessage(error.code) };
    }
  },

  async signInWithGoogle() {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      if (!userDoc.exists()) {
        await setDoc(doc(db, 'users', user.uid), {
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          createdAt: new Date().toISOString(),
          favorites: []
        });
      }
      
      return { success: true, user };
    } catch (error) {
      console.error('Google 登入錯誤:', error);
      return { success: false, error: this.getErrorMessage(error.code) };
    }
  },

  async signOut() {
    try {
      await signOut(auth);
      return { success: true };
    } catch (error) {
      console.error('登出錯誤:', error);
      return { success: false, error: error.message };
    }
  },

  async addFavoriteStore(storeData) {
    if (!this.currentUser) {
      return { success: false, error: '請先登入' };
    }

    try {
      const favoriteId = `${storeData.type}_${storeData.id}`;
      const favoriteRef = doc(db, 'users', this.currentUser.uid, 'favorites', favoriteId);
      
      await setDoc(favoriteRef, {
        ...storeData,
        addedAt: new Date().toISOString()
      });
      
      return { success: true };
    } catch (error) {
      console.error('新增收藏錯誤:', error);
      return { success: false, error: error.message };
    }
  },

  async removeFavoriteStore(storeType, storeId) {
    if (!this.currentUser) {
      return { success: false, error: '請先登入' };
    }

    try {
      const favoriteId = `${storeType}_${storeId}`;
      await deleteDoc(doc(db, 'users', this.currentUser.uid, 'favorites', favoriteId));
      return { success: true };
    } catch (error) {
      console.error('移除收藏錯誤:', error);
      return { success: false, error: error.message };
    }
  },

  async getFavoriteStores() {
    if (!this.currentUser) {
      return { success: false, error: '請先登入', favorites: [] };
    }

    try {
      const favoritesRef = collection(db, 'users', this.currentUser.uid, 'favorites');
      const querySnapshot = await getDocs(favoritesRef);
      
      const favorites = [];
      querySnapshot.forEach((doc) => {
        favorites.push({ id: doc.id, ...doc.data() });
      });
      
      return { success: true, favorites };
    } catch (error) {
      console.error('取得收藏錯誤:', error);
      return { success: false, error: error.message, favorites: [] };
    }
  },

  async isFavorite(storeType, storeId) {
    if (!this.currentUser) return false;

    try {
      const favoriteId = `${storeType}_${storeId}`;
      const favoriteDoc = await getDoc(doc(db, 'users', this.currentUser.uid, 'favorites', favoriteId));
      return favoriteDoc.exists();
    } catch (error) {
      console.error('檢查收藏錯誤:', error);
      return false;
    }
  },

  getErrorMessage(errorCode) {
    const errorMessages = {
      'auth/email-already-in-use': '此 Email 已被使用',
      'auth/invalid-email': 'Email 格式不正確',
      'auth/operation-not-allowed': '操作未被允許',
      'auth/weak-password': '密碼強度不足（至少 6 個字元）',
      'auth/user-disabled': '此帳號已被停用',
      'auth/user-not-found': '找不到此使用者',
      'auth/wrong-password': '密碼錯誤',
      'auth/too-many-requests': '嘗試次數過多，請稍後再試',
      'auth/popup-closed-by-user': '登入視窗已關閉',
      'auth/cancelled-popup-request': '登入請求已取消'
    };

    return errorMessages[errorCode] || '發生未知錯誤';
  },

  getCurrentUser() {
    return this.currentUser;
  },

  isSignedIn() {
    return this.currentUser !== null;
  }
};

window.AuthService = AuthService;

export default AuthService;