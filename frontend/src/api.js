import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/api', // Make sure your backend is running on this URL
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Get token from localStorage

    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Attach token to the Authorization header
    }

    return config;
  },
  (error) => {
    return Promise.reject(error); // Handle request error
  }
);

// // Fetch all products
// export const fetchProducts = () => axiosInstance.get('/products');

export const fetchProducts = async () => {
  return await axiosInstance.get('/products'); // No need to attach token manually
};

// Fetch a specific product by ID
export const fetchProductById = (id) => axiosInstance.get(`/products/${id}`);

// fetch all cart data
export const fetchCart = () => axiosInstance.get('/cart');

export const postCart  = async(data)=> await axiosInstance.post('/cart',data);

// Place an order (used in checkout)
export const placeOrder = (orderData) => axiosInstance.post('/orders', orderData);

export const login = (item) => axiosInstance.post('/auth/login', item);




