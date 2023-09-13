// como pegar os dados inseridos no session storage pelo login:
// console.log("nome: " + JSON.parse(sessionStorage.getItem("usuario")).nome);
// console.log("userId: " + JSON.parse(sessionStorage.getItem("usuario")).userId);
// console.log("email: " + JSON.parse(sessionStorage.getItem("usuario")).email);
// console.log("token: " + JSON.parse(sessionStorage.getItem("usuario")).token);

export function login(email, senha) {
    const urlLogin = "http://localhost:8080/usuarios/login";
    fetch(urlLogin, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "email": email,
            "senha": senha
        })
    }).then((response) => {
        if (response.ok) {
            response.json().then((data) => {
                // console.log("Login feito com sucesso")
                // console.log("Data: ", data);
                sessionStorage.setItem("usuario", JSON.stringify(data));
                return true;
            })
        } else {
            console.log("Erro ao fazer login");
            return false;
        }
    })
}