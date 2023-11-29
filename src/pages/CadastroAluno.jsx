import { useState } from 'react';
import * as React from 'react';
// import { Link } from 'react-router-dom';
// import { validarEmail, validarSenha } from 'authProvider/validadores';
import { useNavigate } from 'react-router-dom'

import styles from '../assets/styles/CadastroProfessor.module.css';
import Logo from 'components/logo';
import { useEffect } from 'react';

const CadastroAluno = () => {

    const [form, setForm] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = async () => {
        sessionStorage.setItem('dadosCadastroAluno', JSON.stringify(form));
        navigate('/escolher-materias?papel=aluno&local=true');
    }

    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    useEffect(() => {
        console.log(form);
    }, [form]);

    return (
        <>
            <div className={styles.page}>
                <div className={styles.container}>
                    <div>
                        <Logo />
                    </div>
                    <div className={styles.form}>
                        <h2>
                            Cadastro de aluno
                        </h2>

                        <div>
                            <div>
                                Nome completo:
                            </div>
                            <input type='text' name="nome" onChange={handleChange}></input>
                        </div>
                        <div>
                            <div>
                                E-mail:
                            </div>
                            <input type='text' name="email" onChange={handleChange}></input>
                        </div>
                        <div>
                            <div>
                                Senha:
                            </div>
                            <input type='password' name="senha" onChange={handleChange}></input>
                        </div>
                        <div>
                            <div>
                                Data de nascimento:
                            </div>
                            <input type='date' name="dataNasc" onChange={handleChange}></input>
                        </div>


                        <div className={styles.btn_cadastrar}>
                            <button onClick={handleSubmit}>Cadastrar</button>
                        </div>
                    </div>

                    <p>
                        <i>Ao clicar em cadastrar você aceita os nossos <a href='/termos-de-uso'>termos de uso</a> e <a href='politica-de-privacidade'>política de privacidade</a></i>
                    </p>
                </div>
            </div>
        </>
    )
}

export default CadastroAluno
