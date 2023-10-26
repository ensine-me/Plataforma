// como pegar os dados inseridos no session storage pelo login:
// console.log("nome: " + JSON.parse(sessionStorage.getItem("usuario")).nome);
// console.log("userId: " + JSON.parse(sessionStorage.getItem("usuario")).userId);
// console.log("email: " + JSON.parse(sessionStorage.getItem("usuario")).email);
// console.log("token: " + JSON.parse(sessionStorage.getItem("usuario")).token);

export async function login(email, senha) {
    const urlLogin = "http://44.217.177.131:8080/usuarios/login";
    const response = await fetch(urlLogin, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "email": email,
            "senha": senha
        })
    });

    if (response.ok) {
        const data = await response.json();
        // console.log("Login feito com sucesso")
        // console.log("Data: ", data);
        sessionStorage.setItem("usuario", JSON.stringify(data));
        // console.log(sessionStorage.getItem("usuario"));
        return true;
    } else {
        console.log("Erro ao fazer login");
        return false;
    }
}