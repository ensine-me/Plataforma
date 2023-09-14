import React, { useEffect } from "react"
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
    const [foto, setFoto] = useState([]);
    const [preco, setPreco] = useState([]);
    const [disponibilidades, setDisponibilidade] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/usuarios/professor/busca?id=' + idProfessor, {
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
    console.log("Hora aula: " + professor && professor.precoHoraAula);
    if (professor && professor.precoHoraAula === null) {
        professor.precoHoraAula = "Não informado";
    }
    return (
        <>
            <MarcarAula nomeProfessor={professor && professor.nome}
                idProfessor={professor && professor.id}
                emailProfessor={professor && professor.email}
                materias={materias}
            />
            <div className={sPerfil.box}>
                <div className={sPerfil.quadrados}>
                    <div className={sPerfil.infosBotoes}>
                        <div className={sPerfil.quadrado}>
                            <div style={{backgroundImage:`url(${foto})`}} className={sPerfil.fotoNivel}>
                                
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
                            <div className={sPerfil.disponibilidadeContainer}>
                                <h4>Disponibilidade</h4>
                                {disponibilidades.map((disponibilidade, index) => {
                                    return (
                                        <div className={sPerfil.disponibilidadeConteudo}>
                                            <li key={index}>
                                                {disponibilidade.diaDaSemana} - {disponibilidade.horarioInicio} às {disponibilidade.horarioFim}
                                            </li>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className={sPerfil.horaAula}>
                                Hora aula: {professor && professor.precoHoraAula}
                                Hora aula: R${preco}
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
                        <h4>Formações</h4>
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