import { useState } from 'react';
import { Link } from '../../node_modules/react-router-dom/dist/index';
import styles from '../assets/styles/login.module.css'
import googleLogo from 'assets/img/icons/googleLogo.png'
import { login } from "../functions/login";
import { useNavigate } from 'react-router-dom'
import { useSessionContext } from '@supabase/auth-helpers-react';
import { isVariableInSessionStorage } from 'functions/isVariableInSessionStorage';
// import { validarEmail, validarSenha } from 'authProvider/validadores';

import Logo from 'components/logo';

<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>

const Login = () => {
    const navigate = useNavigate();
    const { isLoading, session } = useSessionContext();

    const [form, setForm] = useState([]);

    const entrar = async (event) => {
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
                alert("Login mal sucedido! Confira as credenciais utilizadas")
            }
        })
    }

    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }


    return (
        <>
            <div className={styles.page}>
                <div className={styles.card}>
                    <div className={styles.menuLogoContainer}>
                        <Logo />
                    </div>
                    <div className={styles.formulario}>
                        <div className={styles.titleLabel}>
                            Email
                        </div>
                        <input className={styles.input} placeholder='email@email.com' type='email' name="email" id="iptEmail" onChange={handleChange} />
                        <div className={styles.titleLabel1}>
                            Senha
                        </div>
                        <input className={styles.input} placeholder='*******' type='password' name="senha" id="iptSenha" onChange={handleChange} />
                    </div>
                    <div className={styles.buttons} >
                        <button className={styles.button} onClick={entrar}>
                            Entrar
                        </button>
                        <Link to="/google-login">
                            <div className={styles.googleButtonContainer}>
                                <div className={styles.googleButton}>
                                    <img src={googleLogo} alt='Logo do Google' />
                                    Entrar com o Google
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className={styles.titleLabel2}>
                        Ainda não tem conta?
                    </div>
                    <Link to="/escolher-papel?local=true">
                        <div className={styles.titleLabel3}>
                            Cadastre-se
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Login;