import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === 'development'
      ? 'http://localhost:5001/api'
      : 'https://chat-app-2u3w.onrender.com',
  withCredentials: true,
});
