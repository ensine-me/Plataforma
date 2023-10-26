import axios from "axios";

const apiAulas = axios.create({
    baseURL: " http://localhost:8080/aulas",
});


apiAulas.interceptors.request.use(async (config) => {
    try {
        const token = sessionStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    } catch (error) {
        console.log("ERRo de Interceptor ", error)
    }
});

export default apiAulas;