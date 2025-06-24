import axios from "axios";
import cookie from "react-cookies";

const BASE_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/";

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 10000,
});

instance.interceptors.request.use(
    (config) => {
        const token = cookie.load("access_token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

instance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            cookie.remove("access_token");
        }
        return Promise.reject(error);
    }
);

export default instance;
