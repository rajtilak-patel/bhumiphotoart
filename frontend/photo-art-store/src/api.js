import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/api', // Make sure your backend is running on this URL
});

// Fetch all products
export const fetchProducts = () => api.get('/products');

// Fetch a specific product by ID
export const fetchProductById = (id) => api.get(`/products/${id}`);

// fetch all cart data
export const fetchCart = () => api.get('/cart');

// Place an order (used in checkout)
export const placeOrder = (orderData) => api.post('/orders', orderData);

export default api;
