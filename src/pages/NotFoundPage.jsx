
import React from 'react';

import { useNavigate } from 'react-router-dom';

import styles from '../assets/styles/notFound.module.css'
import Logo from 'components/logo';

const NotFoundPage = () => {
    const navigate = useNavigate();

    const Voltar = async (event) => {
        navigate('/');
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
