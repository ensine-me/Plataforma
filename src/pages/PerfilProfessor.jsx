import React from "react"
import MiniDrawer from "../components/SideBar"
import sPerfil from "../style/perfilProfessor.module.css"
import FormacaoCard from "../components/FormacaoCard"
import MateriaProfessor from "../components/materiaProfessor"
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
    const nome = professor.nome;

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
        })
        .catch(error => {
            // Lide com erros
            console.error(error);
        });
    return (
        <>
            <MarcarAula />
            <MiniDrawer />
            <div className={sPerfil.box}>
                <div className={sPerfil.quadrados}>
                    <div className={sPerfil.infosBotoes}>
                        <div className={sPerfil.quadrado}>
                            <div className={sPerfil.fotoNivel}>
                                fotonivel
                            </div>
                            <div className={sPerfil.estrelas}>
                                <p>{nome}</p>
                                estrelas
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
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
                        Formações
                        <div className={sPerfil.formacoes}>
                            <FormacaoCard
                                instituicao={"Universidade Presbiteriana Mackenzie"}
                                tipo={"Bacharelado em matemática"}
                                periodo={"2010 - 2014"}
                            />
                            <FormacaoCard
                                instituicao={"Faculdade de tecnologia bandeirantes"}
                                tipo={"Bacharelado em Ciência da computação"}
                                periodo={"2015 - 2019"}
                            />
                            <FormacaoCard
                                instituicao={"Instituto de matemática e estatística da Universidade de São Paulo"}
                                tipo={"Licenciatura em matemática"}
                                periodo={"2018 - 2022"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PerfilProfessor;