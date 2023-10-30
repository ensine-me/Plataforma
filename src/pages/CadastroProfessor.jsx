import { useState } from 'react';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { validarEmail, validarSenha } from 'authProvider/validadores';

import sUsuariocad from '../assets/styles/cadastroUsuario.module.css';
import sCadastro from "../assets/styles/cadastro.module.css"
import { useNavigate } from 'react-router-dom'

import Logo from 'components/logo';
import googleLogo from 'assets/img/icons/googleLogo.png'
import { Modal } from '@mui/material';
import Box from '@mui/material/Box';
import { useEffect } from 'react';

const Professorcad = () => {

    const [openFormacao, setOpenFormacao] = React.useState(false);
    const [openDisp, setOpenDisp] = React.useState(false);

    const handleOpenFormacao = () => setOpenFormacao(true);
    const handleCloseFormacao = () => setOpenFormacao(false);

    const handleOpenDisp = () => setOpenDisp(true);
    const handleCloseDisp = () => setOpenDisp(false);

    const [loading, setLoading] = useState()
    const [form, setForm] = useState([]);
    const [disponibilidade, setDisponibilidade] = useState([]);
    const [formacao, setFormacao] = useState([]);
    const [disponibilidades, setDisponibilidades] = useState([]);
    const navigate = new useNavigate()

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
    };

    const HandleSubmit = async () => {
        window.location.href = "http://localhost:3000"

        /*
        event.preventDefault();
        const professor = {
            nome: form.nome,
            email: form.email,
            senha: form.senha,
            materias: []
        }

        try {
            setLoading(false)
            const response = await apiUsuarios.cadastro(professor)

            if (response === true) {
                navigate("/login")
                //ir para dash
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

    const handleChangeDisponibilidade = (event) => {
        if(event.target.name === 'horarioInicio' || event.target.name === 'horarioFim') {
            setDisponibilidade({ ...disponibilidade, [event.target.name]: event.target.value + ":00.000" })
        } else {
            setDisponibilidade({ ...disponibilidade, [event.target.name]: event.target.value })
        }
    }

    function cadastrarDisponibilidade() {
        setDisponibilidades([...disponibilidades, disponibilidade]);
        handleCloseDisp();
    }

    useEffect(() => {
        console.log("form: " + JSON.stringify(form))
    }, [form]);

    useEffect(() => {
        console.log("disponibilidade: " + JSON.stringify(disponibilidade))
    }, [disponibilidade]);

    useEffect(() => {
        console.log("disponibilidades: " + JSON.stringify(disponibilidades))
    }, [disponibilidades]);

    const validarInput = () => {
        return validarEmail(form.email) && validarSenha(form.senha)
    }

    return (
        <>
            <div className={sUsuariocad.page}>
                <div className={sUsuariocad.card}>
                    <div className={[sCadastro.menuLogoContainer, sUsuariocad.me].join(' ')}>
                        <Logo />
                    </div>
                    <div className={sUsuariocad.formulario}>
                        <p>
                            Cadastro de professor
                        </p>
                        <div className={sUsuariocad.titleLabel}>
                            <div className={sUsuariocad.inputNames}>
                                Descrição
                            </div>
                        </div>
                        {/* <input className={sUsuariocad.input} placeholder='Descreva seu perfil como professor' type='text' name="descricao" onChange={handleChange}></input> */}
                        <textarea name="descricao" onChange={handleChange} style={{ width: '100%' }}></textarea>
                        <div className={sUsuariocad.titleLabel1}>
                            <div className={sUsuariocad.inputNames}>
                                Preço Hora Aula
                            </div>
                        </div>
                        <input className={sUsuariocad.input} type='number' name="precoHoraAula" onChange={handleChange}></input>
                        <div className={sUsuariocad.titleLabel1}>
                            <div className={sUsuariocad.inputNames}>
                                Formações
                            </div>
                        </div>
                        <button onClick={handleOpenFormacao} className={sUsuariocad.button}>Nova formação</button>
                        <Modal
                            open={openFormacao}
                            onClose={handleCloseFormacao}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <h1>Cadastro de Formação</h1>
                                <div className={sUsuariocad.inputNames}>
                                    Instituição
                                </div>
                                <input className={sUsuariocad.input} type='text' name="instituicao" onChange={handleChange}></input>
                                <div className={sUsuariocad.inputNames}>
                                    Nome do curso
                                </div>
                                <input className={sUsuariocad.input} type='text' name="nomeCurso" onChange={handleChange}></input>
                                <div className={sUsuariocad.inputNames}>
                                    Tipo de formação
                                </div>
                                <select name="tipoFormacao" id="tipoFormacao" onChange={handleChange}>
                                    <option value="BACHARELADO">Bacharelado</option>
                                    <option value="LICENCIATURA">Licenciatura</option>
                                    <option value="TECNOLOGO">Tecnologo</option>
                                    <option value="SEQUENCIAL">Sequencial</option>
                                </select>
                            </Box>
                        </Modal>

                        <div className={sUsuariocad.titleLabel1}>
                            <div className={sUsuariocad.inputNames}>
                                Disponibillidade
                            </div>
                        </div>
                        <button onClick={handleOpenDisp} className={sUsuariocad.button}>Nova Disponibilidade</button>
                        <Modal
                            open={openDisp}
                            onClose={handleCloseDisp}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <h1>Nova Disponibilidade</h1>
                                <select name="diaDaSemana" id="diaDaSemana" onChange={handleChangeDisponibilidade}>
                                    <option value="">Dia da semana</option>
                                    <option value="DOMINGO">Domingo</option>
                                    <option value="SEGUNDA">Segunda</option>
                                    <option value="TERCA">Terça</option>
                                    <option value="QUARTA">Quarta</option>
                                    <option value="QUINTA">Quinta</option>
                                    <option value="SEXTA">Sexta</option>
                                    <option value="SABADO">Sábado</option>
                                </select>
                                <div className={sUsuariocad.inputNames}>
                                    Horário de Início
                                </div>
                                <input type="time" name='horarioInicio' onChange={handleChangeDisponibilidade} />
                                <div className={sUsuariocad.inputNames}>
                                    Horário de Término
                                </div>
                                <input type="time" name='horarioFim' onChange={handleChangeDisponibilidade} />
                                <button onClick={cadastrarDisponibilidade}>Cadastrar disponibilidade</button>
                            </Box>
                        </Modal>
                    </div>

                    <div className={sUsuariocad.buttons}>
                        <div className={sUsuariocad.button} onClick={HandleSubmit} disabled={loading === true || !validarInput()}>
                            Cadastrar
                        </div>
                        <div className={sUsuariocad.googleButtonContainer} onClick="">
                            <div className={sUsuariocad.googleButton} onClick={HandleSubmit} >
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

export default Professorcad
