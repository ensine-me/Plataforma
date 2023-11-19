
import React from 'react';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { isVariableInSessionStorage } from 'functions/isVariableInSessionStorage';
import { useSessionContext } from '@supabase/auth-helpers-react';

import { login } from "../functions/login";

import styles from '../assets/styles/notFound.module.css'
import Logo from 'components/logo';

const NotFoundPage = () => {
    const navigate = useNavigate();
    const { isLoading, session } = useSessionContext();
    const [form, setForm] = useState([]);

    const Voltar = async (event) => {
        login(form.email, form.senha).then((result) => {
            if (result) {
                //se fez login local e não fez no Google, ve se tem conta Google. Se tiver, faz login no Google
                if (isVariableInSessionStorage("usuario") && !isLoading && !session) {
                    if (JSON.parse(sessionStorage.getItem("usuario")).googleEmail) {
                        navigate("/google-login");
                    }
                }
                navigate("/inicial-aluno");
            } else {
                navigate("/");
            }
        })
    }


    return (
        <div className={styles.notFoundContainer}>
            <div className={styles.notFoundLogoContainer}>
                <Logo />
            </div>
            <h1>[404]</h1>
            <h2>Página Não Encontrada</h2>
            <p>Infelizmente, a página que você está procurando não existe ou foi movida.</p>
            <button className={styles.botaoVoltar} onClick={Voltar}>Voltar para a página principal</button>
        </div>
    );
}

export default NotFoundPage;
