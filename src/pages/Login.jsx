import { useState } from 'react';
import { Link } from '../../node_modules/react-router-dom/dist/index';
import styles from '../assets/styles/login.module.css'
import googleLogo from 'assets/img/icons/googleLogo.png'
import { validarEmail, validarSenha } from 'authProvider/validadores';

import {useNavigate} from 'react-router-dom'

import Logo from 'components/atoms/logo';
import UrlUsuarios from 'authProvider/urlUsuarios';

<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>

const apiUsuarios = new UrlUsuarios();

const Login = () => {
    
    const [loading, setLoading] = useState()
    const [form, setForm] = useState([]);
    const navigate = new useNavigate()

    const HandleSubmit = async (event) => {
        window.location.href = "http://localhost:3000"

        /*
        event.preventDefault();

        try {
            setLoading(false)
            const response = await apiUsuarios.login(form)

            if (response === true) {
                alert("usuario logado com sucesso")
                navigate("/dashboardOne")
            }
            setLoading(true)
        } catch (error) {
            console.log(error)
        }
        */
    }

    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const validarInput = () => {
        return validarEmail(form.email) && validarSenha(form.senha)
    }

    //alert("form valid ? ", validarInput())


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
                        <button className={styles.button} onClick={HandleSubmit} disabled={loading === true || !validarInput()}>
                            Login
                        </button>
                            <div className={styles.googleButtonContainer}>
                                <div className={styles.googleButton} onClick={HandleSubmit}>
                                    <img src={googleLogo} />
                                    Login com google
                                </div>
                            </div>
                    </div>
                    <div className={styles.titleLabel2}>
                        Ainda não tem conta?
                    </div>
                    <Link to="../cadastro">
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