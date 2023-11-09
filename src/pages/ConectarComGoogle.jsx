import React from 'react'
import { useEffect } from 'react'
import store from '../store';
import { useNavigate } from "react-router-dom";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useState } from 'react';

const ConectarComGoogle = () => {
    const navigate = useNavigate();
    const { isLoading, session } = useSessionContext();
    const [wasExecuted, setWasExecuted] = useState(false);

    useEffect(() => {
        if (!isLoading && session && !wasExecuted) {
            setWasExecuted(true);
            const urlConectarComGoogle = `${store.getState().backEndUrl}usuarios/${JSON.parse(sessionStorage.getItem("usuario")).userId}/conectar-com-google?googleEmail=${session.user.email}`;
            console.log("urlConectarComGoogle: " + urlConectarComGoogle);
            fetch(urlConectarComGoogle, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem("usuario")).token
                }
            }).then((response) => {
                console.log("response: " + response);
                if (response.ok) {
                    const usuario = JSON.parse(sessionStorage.getItem("usuario"));
                    usuario.googleEmail = session.user.email;
                    sessionStorage.setItem("usuario", JSON.stringify(usuario));
                    alert("Conta do Google Vinculada com sucesso");
                } else {
                    alert("Erro ao vincular conta do Google");
                }
                navigate("/perfil");
            })
        }

    }, [isLoading, navigate, session, wasExecuted]);

    return (
        <div>Conectando com o Google...</div>
    )
}

export default ConectarComGoogle