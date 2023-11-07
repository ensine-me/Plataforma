import axios from "axios";

import store from "../store";

const api = axios.create({
    baseURL: store.getState().backEndUrl + "/usuarios",
});


api.interceptors.request.use(async (config) => {
    try {
        const token = sessionStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    } catch (error) {
        console.log("Erro de Interceptor ", error)
    }
});

export default api;