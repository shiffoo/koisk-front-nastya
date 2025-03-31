import axios from 'axios';

// ✅ Прокси на /business и /client обрабатывается через Vite (vite.config.js)
const API = axios.create({
  baseURL: '', // Vite проксирует на http://83.219.243.82:8080
});


// ─── 📦 БИЗНЕСОВЫЙ МИКРОСЕРВИС ──────────────────────────────
export const getRecommendations = () => API.get('/business/recommend');
export const getBusinessPage = () => API.get('/business/page');
export const getServiceByCategory = (categoryId) =>
  API.get(`/business/service/${categoryId}`);
export const getProductDetails = (productId) =>
  API.get(`/business/detailproduct/${productId}`);


// ─── ❤️ ИЗБРАННОЕ (КЛИЕНТСКИЙ МИКРОСЕРВИС) ───────────────────
export const getFavorites = ({ userId, type }) =>
  API.get('/client/favorites/list', { params: { userId, type } });

export const addToFavorites = ({ userId, resourceId, type }) =>
  API.post('/client/favorites/add', { userId, resourceId, type });

export const removeFromFavorites = ({ userId, resourceId, type }) =>
  API.delete('/client/favorites/remove', {
    data: { userId, resourceId, type },
  });


// ─── 🛒 КОРЗИНА (КЛИЕНТСКИЙ МИКРОСЕРВИС) ─────────────────────
export const getBasket = () => API.get('/client/basket');

export const addToBasket = (productId) =>
  API.post('/client/basket/add', { productId });

export const removeFromBasket = (productId) =>
  API.post('/client/basket/remove', { productId });

export const addMultipleToBasket = (items) =>
  API.post('/client/basket/addmultiple', items);
