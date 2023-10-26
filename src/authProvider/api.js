import axios from "axios";

const api = axios.create({
    baseURL: " http://44.217.177.131:8080/usuarios",
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