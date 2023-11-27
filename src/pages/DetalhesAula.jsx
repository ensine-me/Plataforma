import React from 'react';
import { useState, useEffect } from "react";
import styles from "../assets/styles/DetalhesAula.module.css";
import FormacaoCard from "../components/FormacaoCard";
import store from "../store";
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import { Modal } from '@mui/material';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Swal from "sweetalert2";

const DetalhesAula = () => {
    const insigniasEnum = {
        BONS_EXEMPLOS: 0,
        DIVERTIDO: 1,
        DOMINA_ASSUNTO: 2,
        EXPLICACAO_COMPLETA: 3,
        PACIENTE: 4,
        RESPOSTAS_OBJETIVAS: 5,
        EXEMPLOS_RUINS: 6,
        GROSSEIRO: 7,
        NAO_DOMINA_ASSUNTO: 8,
        RESPOSTAS_RASAS: 9,
        IMPACIENTE: 10,
        FUGIU_ASSUNTO: 11,
    };

    const insigniasDisplayNames = [
        "Bons exemplos",
        "Divertido",
        "Domina o assunto",
        "Explicação completa",
        "Paciente",
        "Respostas objetivas",
        "Exemplos ruins",
        "Grosseiro",
        "Não domina o assunto",
        "Respostas rasas",
        "Impaciente",
        "Fugiu do assunto"
    ];

    // Pega a URL atual
    const url = new URL(window.location.href);

    // Pega o valor do parâmetro 'id' da URL
    const idAula = url.searchParams.get('id');

    const [aula, setAula] = useState();

    // botões
    const [participar, setParticipar] = useState(false);
    const [aceitar, setAceitar] = useState(false);
    const [cancelar, setCancelar] = useState(false);
    const [iniciar, setIniciar] = useState(false);
    const [concluir, setConcluir] = useState(false);
    const [avaliar, setAvaliar] = useState(false);
    const [reportar, setReportar] = useState(false);
    const [rejeitar, setRejeitar] = useState(false);

    // variáveis de controle do modal de avaliação
    const [openModalAvaliacao, setOpenModalAvaliacao] = useState(false);
    const handleOpenModalAvaliacao = () => setOpenModalAvaliacao(true);
    const handleCloseModalAvaliacao = () => setOpenModalAvaliacao(false);

    // variáveis de controle do modal de report
    const [openModalReport, setOpenModalReport] = useState(false);
    const handleOpenModalReport = () => setOpenModalReport(true);
    const handleCloseModalReport = () => setOpenModalReport(false);

    // estilo do modal de avaliação
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80vw',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        overflowY: 'scroll',
        maxHeight: '80vh'
    };

    //lógica do modal de avaliação
    const [ratingValue, setRatingValue] = useState(0);

    const [insignias, setInsignias] = useState([]);
    const handleInsigniaChange = (e) => {
        const insigniaId = parseInt(e.target.id, 10);

        if (e.target.checked) {
            setInsignias(prevInsignias => [...prevInsignias, insigniaId]);
        } else {
            setInsignias(prevInsignias => prevInsignias.filter(id => id !== insigniaId));
        }

        // desabilita a insígnia oposta
        let insigniaOpostaId;
        if (insigniaId <= 5) {
            insigniaOpostaId = insigniaId + 6;
        } else {
            insigniaOpostaId = insigniaId - 6;
        }
        const insigniaOposta = document.getElementById(insigniaOpostaId.toString());
        if (insigniaOposta) {
            insigniaOposta.disabled = e.target.checked;
        }

        console.log("insignias: " + insignias);
    };

    const handleSubmitAvaliacao = async (e) => {
        e.preventDefault();

        const body = {
            nota: ratingValue,
            insignias: insignias,
        };

        console.log("body: " + JSON.stringify(body));

        fetch(`${store.getState().backEndUrl}avaliacoes/${JSON.parse(sessionStorage.getItem("usuario")).userId}/${idAula}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem("usuario")).token
            },
            body: JSON.stringify(body),
        }).then(response => {
            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: `Avaliação enviada com sucesso!`,
                    showCancelButton: false,
                    showConfirmButton: true,
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#28a745',
                }).then(() => {
                    window.location.reload();
                });
            }
        }
        );
    };

    const handleSubmitReport = async (e) => {
        e.preventDefault();

        const body = {
            aluno: {
                idUsuario: JSON.parse(sessionStorage.getItem("usuario")).userId
            },
            aula: {
                id: idAula
            },
            acontecimento: document.getElementById("acontecimentoSelect").value,
            descricao: document.getElementById("descricao").value,
        };

        console.log("body: " + JSON.stringify(body));

        fetch(`${store.getState().backEndUrl}aulas/report`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem("usuario")).token
            },
            body: JSON.stringify(body),
        }).then(response => {
            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: `Aula reportada com sucesso!`,
                    text: `Nosso time irá avaliar o report e tomar as medidas necessárias.`,
                    showCancelButton: false,
                    showConfirmButton: true,
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#28a745',
                }).then(() => {
                    window.location.reload();
                });
            }
        });
    };

    // pegando os detalhes da aula
    useEffect(() => {
        // pegando detalhes da aula
        fetch(`${store.getState().backEndUrl}aulas/busca-id?id=` + idAula, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem("usuario")).token
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro na requisição');
                }
                return response.json();
            })
            .then(data => {
                setAula(data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [idAula]);

    // lógica dos botões
    useEffect(() => {
        if (aula) {
            console.log("aula " + JSON.stringify(aula));
            const alunos = aula.alunos;
            const emailsDosParticipantes = alunos.map(aluno => aluno.email);
            console.log("emails " + emailsDosParticipantes);

            //se eu sou professor e a aula é minha
            if (JSON.parse(sessionStorage.getItem("usuario")).professor && JSON.parse(sessionStorage.getItem("usuario")).email === aula.professor.email) {
                if (aula.status === "SOLICITADO") {
                    setAceitar(true);
                    console.log("aceitar TRUE");
                }

                if (aula.status === "AGENDADO") {
                    setIniciar(true);
                    console.log("iniciar TRUE");
                }

                if (aula.status === "AGENDADO") {
                    setCancelar(true);
                    console.log("cancelar TRUE");
                }

                if (aula.status === "SOLICITADO") {
                    setRejeitar(true);
                    console.log("rejeitar TRUE");
                }

                if (aula.status === "EM_PROGRESSO") {
                    setConcluir(true);
                    console.log("concluir TRUE");
                }
            } else { // se sou aluno
                //se estou participando da aula
                if (emailsDosParticipantes.includes(JSON.parse(sessionStorage.getItem("usuario")).email)) {
                    if (aula.status === "SOLICITADO" || aula.status === "AGENDADO") {
                        setCancelar(true);
                        console.log("cancelar TRUE");
                    }

                    if (aula.status === "CONCLUIDA") {
                        setReportar(true);
                        fetch(`${store.getState().backEndUrl}avaliacoes/${JSON.parse(sessionStorage.getItem("usuario")).userId}/${idAula}`, {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem("usuario")).token
                            },
                        }).then(response => {
                            if (response.status === 204) {
                                setAvaliar(true);
                            }
                        });
                    }
                } else {
                    setParticipar(true);
                    console.log("participar TRUE");
                }
            }

            //se sou qualquer um
            if (emailsDosParticipantes.includes(JSON.parse(sessionStorage.getItem("usuario")).email) && (aula.status === "SOLICITADO" || aula.status === "AGENDADO")) {
                setCancelar(true);
                console.log("cancelar TRUE");
            }
        }
    }, [aula, idAula]);

    function entrarNaAula() {
        if (idAula) {
            fetch(`${store.getState().backEndUrl}aulas/${idAula}/adicionar-aluno?email=${JSON.parse(sessionStorage.getItem("usuario")).email}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem("usuario")).token
                },
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Erro na requisição\n' + response);
                    }
                    alert("Você entrou na aula com sucesso!");
                    window.location.reload();
                })
                .catch(error => {
                    alert("Erro ao entrar na aula\n" + error)
                });
        }
    }

    function mudarStatus(novoStatus) {
        if (idAula) {
            fetch(`${store.getState().backEndUrl}aulas/${idAula}/mudanca-status?status=${novoStatus}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem("usuario")).token,
                },
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Erro na requisição\n' + response);
                    } else {
                        Swal.fire({
                            icon: 'success',
                            title: `Status da aula mudado para ${novoStatus}`,
                            showCancelButton: false,
                            showConfirmButton: true,
                            confirmButtonText: 'Ok',
                            confirmButtonColor: '#28a745',
                        }).then((result) => {
                            window.location.reload();
                        });
                    }
                })
                .catch(error => {
                    alert("Erro ao mudar status da aula\n" + error)
                });
        }
    }

    function finalizarAula() {
        if (idAula) {
            fetch(`${store.getState().backEndUrl}aulas/finalizar-aula?id=${idAula}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem("usuario")).token,
                },
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Erro na requisição\n' + response);
                    } else {
                        Swal.fire({
                            icon: 'success',
                            title: `Aula finalizada com sucesso!`,
                            showCancelButton: false,
                            showConfirmButton: true,
                            confirmButtonText: 'Ok',
                            confirmButtonColor: '#28a745',
                        }).then(() => {
                            window.location.reload();
                        })
                    }
                })
                .catch(error => {
                    alert("Erro ao finalizar aula\n" + JSON.stringify(error));
                });
        }
    }

    return (
        <div className={styles.detalhes_aula_container}>
            <div className={styles.detalhes_aula_titulo}>
                <h1>{aula && aula.titulo}</h1>
            </div>
            <div className={styles.detalhes_aula_info}>
                <div className={styles.detalhes_aula_info_gerais}>
                    <h2>Detalhes</h2>
                    <div>
                        <p><b>Disciplina: </b>{aula && aula.materia.nome}</p>
                    </div>
                    ------------------
                    <div>
                        <p><b>Descrição: </b>{aula && aula.descricao}</p>
                    </div>
                    ------------------
                    <div>
                        <p><b>Data: </b>{aula && aula.dataHora.split('T')[0]}</p>
                        <p><b>Horário: </b>{aula && aula.dataHora.split('T')[1]}</p>
                        <p><b>Duração: </b>{aula && (aula.duracaoSegundos / 60)} minutos</p>
                    </div>
                    ------------------
                    <div><p><b>Participantes: </b></p>
                        {
                            aula && aula.alunos.map((aluno, index) => {
                                return (
                                    <p key={index}>{aluno.email}</p>
                                )
                            })
                        }
                    </div>
                    ------------------
                    <div>
                        <p><b>Preço: </b>{aula && aula.preco}</p>
                        <p><b>Vagas restantes: </b>{aula && (aula.limiteParticipantes - aula.alunos.length)}</p>
                        <p><b>Status: </b>{aula && aula.status}</p>
                        <p><b>Privacidade: </b>{aula && aula.privacidade}</p>
                    </div>
                </div>
                <div className={styles.detalhes_aula_info_professor}>
                    <h2>Professor</h2>
                    {/* <p><b>Professor: </b> {aula && JSON.stringify(aula.professor)}</p> */}

                    <h3>{aula && aula.professor.nome}</h3>
                    <div className={styles.detalhes_aula_info_professor_foto}
                        style={{
                            backgroundImage: aula && aula.professor && aula.professor.foto ? `url(${aula.professor.foto})` : ''
                        }}
                    >
                    </div>
                    <div></div>
                    <div>
                        <h4>Formações</h4>
                        <div className={styles.detalhes_aula_formacoes_cards_container}>
                            {
                                aula && aula.professor.formacoes.map((formacao, index) => {
                                    return (
                                        <FormacaoCard
                                            key={index}
                                            instituicao={formacao.instituicao}
                                            nomeCurso={formacao.nomeCurso}
                                            tipoFormacao={formacao.tipoFormacao}
                                            dataInicio={formacao.dtInicio}
                                            dataTermino={formacao.dtTermino}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.detalhes_aula_botao_participar_container}>
                {participar && <button className={styles.detalhes_aula_botao} onClick={() => entrarNaAula()}>Participar</button>}
                {aceitar && <button className={styles.detalhes_aula_botao} onClick={() => mudarStatus("AGENDADO")}>Aceitar</button>}
                {iniciar && <button className={styles.detalhes_aula_botao} onClick={() => mudarStatus("EM_PROGRESSO")}>Iniciar</button>}
                {concluir && <button className={styles.detalhes_aula_botao} onClick={finalizarAula}>Concluir</button>}
                {avaliar && <button className={styles.detalhes_aula_botao} onClick={handleOpenModalAvaliacao}>Avaliar</button>}
                {cancelar && <button className={`${styles.detalhes_aula_botao} ${styles.detalhes_aula_botao_vermelho}`} onClick={() => mudarStatus("CANCELADO")}>Cancelar</button>}
                {rejeitar && <button className={`${styles.detalhes_aula_botao} ${styles.detalhes_aula_botao_vermelho}`} onClick={() => mudarStatus("REJEITADO")}>Rejeitar</button>}
                {reportar && <button className={`${styles.detalhes_aula_botao} ${styles.detalhes_aula_botao_vermelho}`} onClick={handleOpenModalReport}><ReportProblemIcon />Reportar</button>}
            </div>

            <Modal
                open={openModalAvaliacao}
                onClose={handleCloseModalAvaliacao}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form onSubmit={handleSubmitAvaliacao}>

                        <h2>
                            Avaliar
                        </h2>

                        <h3>Nota</h3>
                        <Rating
                            precision={0.5}
                            value={ratingValue}
                            onChange={(event, newValue) => {
                                setRatingValue(newValue);
                            }}
                        />

                        <h2>Insígnias positivas</h2>
                        {Object.values(insigniasEnum).slice(0, 6).map((insignia) => (
                            <div style={{ display: 'flex' }}>
                                <label htmlFor={insignia.toString()}>
                                    <input
                                        key={insignia}
                                        type="checkbox"
                                        id={insignia.toString()}
                                        checked={insignias.includes(insignia)}
                                        onChange={handleInsigniaChange}
                                        style={{ width: 'auto' }}
                                    />
                                    {insigniasDisplayNames[insignia]}
                                </label>
                            </div>
                        ))}

                        <h2>Insígnias negativas</h2>
                        {Object.values(insigniasEnum).slice(6).map((insignia) => (
                            <div>
                                <label htmlFor={insignia.toString()}>
                                    <input
                                        key={insignia}
                                        type="checkbox"
                                        id={insignia.toString()}
                                        checked={insignias.includes(insignia)}
                                        onChange={handleInsigniaChange}
                                        style={{ width: 'auto' }}
                                    />
                                    {insigniasDisplayNames[insignia]}
                                </label>
                            </div>
                        ))}
                        <button type="submit">Enviar avaliação</button>
                    </form>
                </Box>
            </Modal>

            <Modal
                open={openModalReport}
                onClose={handleCloseModalReport}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h2>
                        Reportar aula
                    </h2>
                    <form onSubmit={handleSubmitReport} style={{ display: 'flex', flexDirection: 'column' }}>
                        <label>
                            Selecione um acontecimento:<br />
                            <select name="acontecimento" id="acontecimentoSelect">
                                <option value="0">Professor não compareceu para a aula</option>
                                <option value="0">Professor se atrasou para a aula</option>
                                <option value="0">Aula não foi do assunto combinado</option>
                                <option value="0">Outros</option>
                            </select>
                        </label>
                        <label>
                            Descrição:<br />
                            <textarea name="descricao" id="descricao" cols="30" rows="10"></textarea>
                        </label>
                        <button type="submit">Enviar report</button>
                    </form>
                </Box>
            </Modal>

        </div>
    )
}

export default DetalhesAula