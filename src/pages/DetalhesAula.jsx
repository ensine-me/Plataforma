import React from 'react';
import { useState, useEffect } from "react";
import styles from "../assets/styles/DetalhesAula.module.css";
import FormacaoCard from "../components/FormacaoCard";

const DetalhesAula = () => {
    // Pega a URL atual
    const url = new URL(window.location.href);

    // Pega o valor do parâmetro 'id' da URL
    const idAula = url.searchParams.get('id');
    const [aula, setAula] = useState();
    const [participar, setParticipar] = useState(false);
    const [aceitar, setAceitar] = useState(false);

    useEffect(() => {
        // pegando detalhes da aula
        fetch('http://44.217.177.131:8080/aulas/busca-id?id=' + idAula, {
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
                // Faça algo com os dados da resposta
                setAula(data);
            })
            .catch(error => {
                // Lide com erros
                console.error(error);
            });

        // const emailsDosParticipantes = aula.alunos.map((aluno) => {
        //     aluno.email;
        // })

        // if (!JSON.parse(sessionStorage.getItem("usuario")).professor && !emailsDosParticipantes.includes(JSON.parse(sessionStorage.getItem("usuario")).email)) {
        //     setParticipar(true);
        // }

        // if (JSON.parse(sessionStorage.getItem("usuario")).professor && JSON.parse(sessionStorage.getItem("usuario")).email === aula.professor.email && aula.status === "SOLICITADO") {
        //     setAceitar(true);
        // }
    }, [idAula]);

    useEffect(() => {
        if (aula) {
            const alunos = aula.alunos;
            const emailsDosParticipantes = alunos.map(aluno => aluno.email);
            console.log("emails " + emailsDosParticipantes);
    
            if (!JSON.parse(sessionStorage.getItem("usuario")).professor && !emailsDosParticipantes.includes(JSON.parse(sessionStorage.getItem("usuario")).email)) {
                setParticipar(true);
                console.log("participar TRUE");
            }
    
            if (JSON.parse(sessionStorage.getItem("usuario")).professor && JSON.parse(sessionStorage.getItem("usuario")).email === aula.professor.email && aula.status === "SOLICITADO") {
                setAceitar(true);
                console.log("aceitar TRUE");
            }
        }
    }, [aula]);

    function entrarNaAula() {
        if (idAula) {
            fetch(`http://44.217.177.131:8080/aulas/${idAula}/adicionar-aluno?email=${JSON.parse(sessionStorage.getItem("usuario")).email}`, {
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

    function aceitarAula() {
        if (idAula) {
            fetch(`http://44.217.177.131:8080/aulas/${idAula}/mudanca-status?status=AGENDADO`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem("usuario")).token,
                },
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Erro na requisição\n' + response);
                    }
                    alert("Aula aceita com sucesso!");
                    window.location.reload();
                })
                .catch(error => {
                    alert("Erro ao aceitar aula\n" + error)
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
                {participar && <button className={styles.detalhes_aula_botao_participar} onClick={entrarNaAula}>Participar</button>}
                {aceitar && <button className={styles.detalhes_aula_botao_participar} onClick={aceitarAula}>Aceitar</button>}
            </div>

        </div>
    )
}

export default DetalhesAula