import axios from "axios";
import store from "../store";

const apiAulas = axios.create({
    baseURL: store.getState().backEndUrl + "/aulas",
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