import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/api', // Make sure your backend is running on this URL
});

api.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers
      ? (config.headers["Authorization"] = `Bearer ${token}`)
      : (config.headers = { Authorization: `Bearer ${token}` });
  }
  return config;
});

// Fetch all products
export const fetchProducts = () => api.get('/products');

// Fetch a specific product by ID
export const fetchProductById = (id) => api.get(`/products/${id}`);

// fetch all cart data
export const fetchCart = () => api.get('/cart');

// Place an order (used in checkout)
export const placeOrder = (orderData) => api.post('/orders', orderData);

export const login = (item) => api.post('/auth/login', item);

export default api;
