import React, { useEffect } from "react"
import sPerfil from "../assets/styles/perfilProfessor.module.css"
import FormacaoCard from "../components/FormacaoCard"
import MarcarAula from "../components/marcarAula"
import DisciplinaDoProfessor from "../components/DisciplinaDoProfessor"
import { useState } from "react"
import store from "../store";

import AnnouncementIcon from '@mui/icons-material/Announcement';

const chamaMarcarAula = () => {
    document.getElementById("marcarAulaContainer").style.visibility = "visible";
}

const PerfilProfessor = () => {
    // Pega a URL atual
    const url = new URL(window.location.href);

    // Pega o valor do parâmetro 'id' da URL
    const idProfessor = url.searchParams.get('id');
    const [professor, setProfessor] = useState();
    const [materias, setMaterias] = useState([]);
    const [formacoes, setFormacoes] = useState([]);
    const [foto, setFoto] = useState([]);
    const [preco, setPreco] = useState([]);
    const [disponibilidades, setDisponibilidade] = useState([]);

    useEffect(() => {
        fetch(`${store.getState().backEndUrl}usuarios/professor/busca?id=` + idProfessor, {
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
                setProfessor(data);
                setMaterias(data.materias);
                setFormacoes(data.formacoes);
                setFoto(data.foto);
                setPreco(data.precoHoraAula);
                setDisponibilidade(data.disponibilidades);
            })
            .catch(error => {
                // Lide com erros
                console.error(error);
            });
    }, [idProfessor]);
    return (
        <>
            <MarcarAula
                nomeProfessor={professor && professor.nome}
                idProfessor={professor && professor.idUsuario}
                emailProfessor={professor && professor.email}
                gmailProfessor={professor && professor.googleEmail}
                materias={materias}
                disponibilidades={disponibilidades}
            />
            <div className={sPerfil.box}>
                <div className={sPerfil.quadrados}>
                    <div className={sPerfil.infosBotoes}>
                        <div className={sPerfil.quadrado}>
                            <div style={{ backgroundImage: `url(${foto})` }} className={sPerfil.fotoNivel}></div>
                            <div className={sPerfil.estrelas}>
                                <h3>{professor && professor.nome}</h3>
                            </div>
                        </div>
                        <div className={sPerfil.quadrado}>
                            <div className={sPerfil.retangulo}>
                                <div className={sPerfil.descricao}>
                                    <i className={sPerfil.descricaoProfessor}>"{professor && professor.descricao}"</i>
                                </div>
                            </div>
                            <div className={sPerfil.buttons}>
                                <button onClick={chamaMarcarAula} className={sPerfil.button}>Solicitar aula - <strong className={sPerfil.precoLabel}>R${preco}</strong></button>
                                <button className={sPerfil.button}>Entrar em contato</button>
                            </div>
                            <div className={sPerfil.disponibilidadeContainer}>
                                <h4>Você pode solicitar aula nesses dias:</h4>
                                {
                                    disponibilidades.length === 0 ? (
                                        <>
                                            <p>Esse professor não cadastrou nenhuma disponibilidade</p>
                                            <AnnouncementIcon fontSize='large' color='warning' />
                                        </>
                                    ) : (
                                        disponibilidades.map((disponibilidade, index) => {
                                            return (
                                                <div className={sPerfil.disponibilidadeConteudo} key={index}>
                                                    <li>
                                                        {disponibilidade.diaDaSemana} - {disponibilidade.horarioInicio} até {disponibilidade.horarioFim}
                                                    </li>
                                                </div>
                                            )
                                        })
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className={sPerfil.retangulo}>
                        <div className={sPerfil.perfilMaterias}>
                            <h4 className={sPerfil.perfilMateriasTitle}>Você pode marcar uma aula de:</h4>
                            {
                                materias.length === 0 ? (
                                    <>
                                        <p>Esse professor não cadastrou nenhuma matéria</p>
                                        <AnnouncementIcon fontSize='large' color='warning' />
                                    </>
                                ) : (
                                    materias.map((disciplina, index) => {
                                        return (
                                            <DisciplinaDoProfessor key={index} disciplina={disciplina.nome} />
                                        )
                                    })
                                )
                            }
                        </div>
                    </div>
                    <div className={sPerfil.retangulo}>
                        <h4>Esse professor já cursou:</h4>
                        {
                            formacoes.length === 0 ? (
                                <>
                                    <p>Esse professor não cadastrou nenhuma formação</p>
                                    <AnnouncementIcon fontSize='large' color='warning' />
                                </>
                            ) : (
                                <div className={sPerfil.formacoes}>
                                    {formacoes.map((formacao, index) => {
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
                                    })}
                                </div>
                            )
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default PerfilProfessor;