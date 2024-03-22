import axios, { type InternalAxiosRequestConfig } from "axios";
import { useAuthStore } from '@/store/auth';

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;

const axiosConfig = () => {
  axios.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = useAuthStore().token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log("config.headers.Authorization", config.headers.Authorization)
    }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};

export { axiosConfig };
