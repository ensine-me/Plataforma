import { React } from 'react';
import { Link } from 'react-router-dom';

import sUsuariocad from '../assets/styles/cadastroUsuario.module.css';
import sCadastro from "../assets/styles/cadastro.module.css"

import Logo from 'components/logo';

import googleLogo from 'assets/img/icons/googleLogo.png'

const HandleSubmit = async () => {
    window.location.href = "http://localhost:3000"
}

const Alunocad = () => {
    return (
        <>
            <div className={sUsuariocad.page}>
                <div className={sUsuariocad.card}>
                    <div className={[sCadastro.menuLogoContainer, sUsuariocad.me].join(' ')}>
                        <Logo/>
                    </div>
                    <div className={sUsuariocad.formulario}>
                        <p>
                            Cadastro de aluno
                        </p>
                        <div className={sUsuariocad.titleLabel}>
                            <div className={sUsuariocad.inputNames}>
                                Nome
                            </div>
                        </div>
                        <input className={sUsuariocad.input} placeholder='Jurandir Macedo' type='text'></input>
                        <div className={sUsuariocad.titleLabel1}>
                            <div className={sUsuariocad.inputNames}>
                                Email
                            </div>
                        </div>
                        <input className={sUsuariocad.input} placeholder='email@email.com' type='text'></input>
                        <div className={sUsuariocad.titleLabel1}>
                            <div className={sUsuariocad.inputNames}>
                                Senha
                            </div>
                        </div>
                        <input className={sUsuariocad.input} placeholder='*******' type='text'></input>
                    </div>
                    <div className={sUsuariocad.buttons}>
                        <div className={sUsuariocad.button} onClick="">
                            Cadastrar
                        </div>
                        <div onClick={HandleSubmit} className={sUsuariocad.googleButtonContainer}>
                            <div className={sUsuariocad.googleButton}>
                                <img src={googleLogo}></img>
                                Cadastrar com o google
                            </div>
                        </div>
                    </div>
                    <p className={sUsuariocad.paragrafo}>
                        <i>Ao clicar em cadastrar você aceita os nossos
                            <a>termos de uso</a> e <a>privacidade</a></i>
                    </p>
                    <div className={sUsuariocad.titleLabel2}>
                        Já tem uma conta?
                    </div>
                    <div className={sUsuariocad.titleLabel3}>
                        <Link to="../login">
                            Faça login
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Alunocad
