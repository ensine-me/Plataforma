import React, { useEffect } from "react"
import MiniDrawer from "../components/SideBar"
import sPerfil from "../style/perfilProfessor.module.css"
import FormacaoCard from "../components/FormacaoCard"
import MarcarAula from "../components/marcarAula"
import DisciplinaDoProfessor from "../components/DisciplinaDoProfessor"
import { useState } from "react"

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

    useEffect(() => {
        fetch('http://localhost:8080/usuarios/professor/busca?id=' + idProfessor, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtcmJlYXN0MUBlbWFpbC5jb20iLCJpYXQiOjE2OTM2MTkyMzgsImV4cCI6MTY5NzIxOTIzOH0.Pu3oSmnC6iTZZ_-NQXezwwj4IiG6rle59zOdbwucfEXAgHy-N77JjNZomOdWPO7hflO0V7IopaDUNRrprn-qtw'
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
            })
            .catch(error => {
                // Lide com erros
                console.error(error);
            }); 
    }, [idProfessor]);
    return (
        <>
            <MarcarAula nomeProfessor={professor && professor.nome}
                idProfessor={professor && professor.id}
                emailProfessor={professor && professor.email}
                materias={materias}
            />
            <MiniDrawer />
            <div className={sPerfil.box}>
                <div className={sPerfil.quadrados}>
                    <div className={sPerfil.infosBotoes}>
                        <div className={sPerfil.quadrado}>
                            <div className={sPerfil.fotoNivel}>
                                fotonivel
                            </div>
                            <div className={sPerfil.estrelas}>
                                <h3>{professor && professor.nome}</h3>
                            </div>
                        </div>
                        <div className={sPerfil.quadrado}>
                            <div className={sPerfil.buttons}>
                                <button onClick={chamaMarcarAula} className={sPerfil.button}>Solicitar aula</button>
                                <button className={sPerfil.button}>Entrar em contato</button>
                            </div>
                            <div className={sPerfil.horaAula}>
                                Hora aula: R$15,00
                            </div>
                        </div>
                    </div>
                    <div className={sPerfil.retangulo}>
                        <div className={sPerfil.descricao}>
                            <h4>Descrição</h4>
                            {professor && professor.descricao}
                        </div>
                        <div className={sPerfil.perfilMaterias}>
                            {materias.map((disciplina, index) => {
                                return (
                                    <DisciplinaDoProfessor key={index} disciplina={disciplina.nome} />
                                )
                            })}
                        </div>
                    </div>
                    <div className={sPerfil.divisor}></div>
                    <div className={sPerfil.retangulo}>
                        <h5>Formações</h5>
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default PerfilProfessor;