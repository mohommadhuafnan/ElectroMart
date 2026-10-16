import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// Request interceptor to attach JWT if present
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('electromart_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle unauthorized / token expiration
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('electromart_token');
    }
    return Promise.reject(error);
  }
);

export default api;
