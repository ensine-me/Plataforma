import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useSessionContext } from '@supabase/auth-helpers-react';
import store from '../store';
import { login } from '../functions/login';
import { isVariableInSessionStorage } from 'functions/isVariableInSessionStorage';

const CheckGoogleLogin = () => {
    const navigate = useNavigate(); // user, quando a sessão existir temos um usuario.
    const { isLoading, session } = useSessionContext();


    useEffect(() => {
        //se fez login no Google e não fez no local, verifica se tem conta local. Se tiver, faz login local
        let redirectTo = '';

        if (!isLoading && session && !isVariableInSessionStorage("usuario")) {
            const urlExiste = `${store.getState().backEndUrl}usuarios/existe-por-email?emailUsuario=${session.user.email}`;
            fetch(urlExiste).then((res) => {
                res.json().then(async (responseExisteJson) => {
                    if (responseExisteJson) {
                        const resultLogin = await login(session.user.email, session.user.email);
                        if (resultLogin) {
                            redirectTo = `/inicial-aluno`;
                        } else {
                            alert("Erro ao logar");
                        }
                    } else {
                        redirectTo = `/escolher-papel`;
                    }
                    if (redirectTo !== '') {
                        navigate(redirectTo);
                    }
                })
            });
        }

        if(!isLoading && session && isVariableInSessionStorage("usuario")) {
            navigate("/inicial-aluno");
        }
    });

    return (
        <div>
            <p>
                Checando login...
            </p>
        </div>
    )
}

export default CheckGoogleLogin