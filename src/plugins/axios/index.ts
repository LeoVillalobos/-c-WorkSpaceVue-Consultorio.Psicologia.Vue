import axios, { type InternalAxiosRequestConfig } from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;

const axiosConfig = () => {
  axios.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      console.log("url", config);
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};

export { axiosConfig };
