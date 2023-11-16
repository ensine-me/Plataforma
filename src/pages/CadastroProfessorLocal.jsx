import { useState } from 'react';
import * as React from 'react';
// import { Link } from 'react-router-dom';
// import { validarEmail, validarSenha } from 'authProvider/validadores';
import { useNavigate } from 'react-router-dom'

import styles from '../assets/styles/CadastroProfessor.module.css';
import Logo from 'components/logo';
import { Modal } from '@mui/material';
import Box from '@mui/material/Box';
import { useEffect } from 'react';

const CadastroProfessorLocal = () => {

    const [openFormacao, setOpenFormacao] = React.useState(false);
    const [openDisp, setOpenDisp] = React.useState(false);

    const handleOpenFormacao = () => setOpenFormacao(true);
    const handleCloseFormacao = () => setOpenFormacao(false);

    const handleOpenDisp = () => setOpenDisp(true);
    const handleCloseDisp = () => setOpenDisp(false);

    const [form, setForm] = useState([]);
    const [disponibilidade, setDisponibilidade] = useState([]);
    const [formacao, setFormacao] = useState([]);
    const [disponibilidades, setDisponibilidades] = useState([]);
    const [formacoes, setFormacoes] = useState([]);
    const navigate = new useNavigate()

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: '#f8f8f8',
        p: 6,
        borderRadius: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
    };

    const handleSubmit = async () => {
        sessionStorage.setItem('dadosCadastroProfessor', JSON.stringify(form));
        navigate('/escolher-materias?papel=professor&local=true');
    }

    const handleChange = (event) => {
        if (event.target.name === 'precoHoraAula') {
            setForm({ ...form, [event.target.name]: parseFloat(event.target.value) })
        } else {
            setForm({ ...form, [event.target.name]: event.target.value })
        }
    }

    const handleChangeDisponibilidade = (event) => {
        if (event.target.name === 'horarioInicio' || event.target.name === 'horarioFim') {
            setDisponibilidade({ ...disponibilidade, [event.target.name]: event.target.value + ":00.000" })
        } else {
            setDisponibilidade({ ...disponibilidade, [event.target.name]: event.target.value })
        }
    }

    const handleChangeFormacao = (event) => {
        if (event.target.name === 'dtInicio' || event.target.name === 'dtTermino') {
            setFormacao({ ...formacao, [event.target.name]: event.target.value + "T00:00:00" })
        } else {
            setFormacao({ ...formacao, [event.target.name]: event.target.value })
        }
    }

    function cadastrarDisponibilidade() {
        setDisponibilidades([...disponibilidades, disponibilidade]);
        handleCloseDisp();
    }

    function cadastrarFormacao() {
        setFormacoes([...formacoes, formacao]);
        handleCloseFormacao();
    }

    useEffect(() => {
        setForm(f => ({ ...f, disponibilidades: disponibilidades }));
    }, [disponibilidades]);


    useEffect(() => {
        setForm(f => ({ ...f, formacoes: formacoes }));
    }, [formacoes]);

    // useEffect(() => {
    //     console.log(form);
    // }, [form]);

    return (
        <>
            <div className={styles.page}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <Logo />
                        <h2>
                            Cadastro de professor
                        </h2>
                    </div>
                    <div className={styles.form}>
                        <section className={styles.section}>
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

                            <div>
                                <div>
                                    Descrição:
                                </div>
                                <textarea name="descricao" onChange={handleChange} style={{ width: '50%' }}></textarea>
                            </div>
                            <div>
                                <div>
                                    Preço Hora Aula:
                                </div>
                                <input type='number' name="precoHoraAula" onChange={handleChange}></input>
                            </div>
                        </section>
                        <section className={styles.section}>
                            <div>
                                <div>
                                    Formações
                                </div>
                                {
                                    formacoes.length > 0 ?
                                        (
                                            <table className={styles.tabela}>
                                                <thead>
                                                    <tr>
                                                        <th>Instituição</th>
                                                        <th>Nome do curso</th>
                                                        <th>Tipo de formação</th>
                                                        <th>Data de início</th>
                                                        <th>Data de término</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        formacoes.map((formacao, index) => (
                                                            <tr key={index}>
                                                                <td>{formacao.instituicao}</td>
                                                                <td>{formacao.nomeCurso}</td>
                                                                <td>{formacao.tipoFormacao}</td>
                                                                <td>{formacao.dtInicio}</td>
                                                                <td>{formacao.dtTermino}</td>
                                                            </tr>
                                                        ))
                                                    }
                                                </tbody>
                                            </table>
                                        )
                                        :
                                        <></>
                                }
                                <button className={styles.botaoAdicionar} onClick={handleOpenFormacao}>+</button>
                                <Modal
                                    open={openFormacao}
                                    onClose={handleCloseFormacao}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style}>
                                        <h1 className={styles.h1}>Adicionar formação</h1>
                                        <div className={styles.tituloModal}>
                                            Instituição
                                        </div>
                                        <input type='text' name="instituicao" onChange={handleChangeFormacao}></input>
                                        <div className={styles.tituloModal}>
                                            Nome do curso
                                        </div>
                                        <input type='text' name="nomeCurso" onChange={handleChangeFormacao}></input>
                                        <div className={styles.tituloModal}>
                                            Tipo de formação
                                        </div>
                                        <select name="tipoFormacao" id="tipoFormacao" onChange={handleChangeFormacao}>
                                            <option disabled selected>Selecione</option>
                                            <option value="BACHARELADO">Bacharelado</option>
                                            <option value="LICENCIATURA">Licenciatura</option>
                                            <option value="TECNOLOGO">Tecnologo</option>
                                            <option value="SEQUENCIAL">Sequencial</option>
                                            <option value="OUTRO">Outro</option>
                                        </select>
                                        <div className={styles.tituloModal}>
                                            Data de início
                                        </div>
                                        <input type="date" name='dtInicio' onChange={handleChangeFormacao} />
                                        <div className={styles.tituloModal}>
                                            Data de término
                                        </div>
                                        <input type="date" name='dtTermino' onChange={handleChangeFormacao} />
                                        <button className={styles.botaoModal} onClick={cadastrarFormacao}>Adicionar</button>
                                    </Box>
                                </Modal>
                            </div>

                            <div>
                                <div>
                                    Disponibillidades
                                </div>
                                {
                                    disponibilidades.length > 0 ?
                                        (
                                            <table className={styles.tabela}>
                                                <thead>
                                                    <tr>
                                                        <th>Dia da semana</th>
                                                        <th>Horário de início</th>
                                                        <th>Horário de término</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {disponibilidades.map((disponibilidade, index) => (
                                                        <tr key={index}>
                                                            <td>{disponibilidade.diaDaSemana}</td>
                                                            <td>{disponibilidade.horarioInicio}</td>
                                                            <td>{disponibilidade.horarioFim}</td>
                                                        </tr>
                                                    ))
                                                    }
                                                </tbody>
                                            </table>
                                        )
                                        :
                                        <></>
                                }
                                <button className={styles.botaoAdicionar} onClick={handleOpenDisp}>+</button>
                                <Modal
                                    open={openDisp}
                                    onClose={handleCloseDisp}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style}>
                                        <h1 className={styles.h1}>Adicionar Disponibilidade</h1>
                                        <div className={styles.tituloModal}>
                                            Dia da Semana
                                        </div>
                                        <select name="diaDaSemana" id="diaDaSemana" onChange={handleChangeDisponibilidade}>
                                            <option disabled selected>Selecione</option>
                                            <option value="DOMINGO">Domingo</option>
                                            <option value="SEGUNDA">Segunda</option>
                                            <option value="TERCA">Terça</option>
                                            <option value="QUARTA">Quarta</option>
                                            <option value="QUINTA">Quinta</option>
                                            <option value="SEXTA">Sexta</option>
                                            <option value="SABADO">Sábado</option>
                                        </select>
                                        <div className={styles.tituloModal}>
                                            Horário de Início
                                        </div>
                                        <input type="time" name='horarioInicio' onChange={handleChangeDisponibilidade} />
                                        <div className={styles.tituloModal}>
                                            Horário de Término
                                        </div>
                                        <input type="time" name='horarioFim' onChange={handleChangeDisponibilidade} />
                                        <button className={styles.botaoModal} onClick={cadastrarDisponibilidade}>Adicionar</button>
                                    </Box>
                                </Modal>
                            </div>
                        </section>
                    </div>
                    <div className={styles.btn_cadastrar}>
                        <button className={styles.botaoFinalizar} onClick={handleSubmit}>Finalizar cadastro</button>
                    </div>
                    <p>
                        <i>Ao clicar em cadastrar você aceita os nossos <a href='www.google.com'>termos de uso</a> e <a href='www.google.com'>privacidade</a></i>
                    </p>
                </div>
            </div>
        </>
    )
}

export default CadastroProfessorLocal