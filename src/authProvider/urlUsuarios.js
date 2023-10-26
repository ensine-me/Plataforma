import api from "./api";

export default class UrlUsuarios {

    async login(dados) {
        const {data} = await api.post(`/login`, dados);
        if (data) {
            sessionStorage.setItem('nome', data.nome)
            sessionStorage.setItem('email', data.email)
            sessionStorage.setItem('id', data.userId)
            sessionStorage.setItem('token', data.token)

            return true
        }

        return false
    }

    usuarioAutenticado() {
        return sessionStorage.getItem('token') !== undefined ? true : false
    }

    async logout() {
        const email = sessionStorage.getItem('email')

        try{
            const response = await api.delete(`logoff/${email}`)
    
            if (response) {
                sessionStorage.removeItem('nome')
                sessionStorage.removeItem('email')
                sessionStorage.removeItem('id')
                sessionStorage.removeItem('token')

                return true;
            }

            return false;

        }catch(error){
            console.log(error)
        }

    }


    async cadastro(dados) {
        console.log(dados)
        const { data } = await api.post(`/professor/cadastrar`, dados);
        if (data) {
            return true
        }

        return false
    }
}




