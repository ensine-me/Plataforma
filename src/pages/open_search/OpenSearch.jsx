import React from "react";
import "../../style/opensearch.css";
import CardProfessor from "../../components/carProfessor/CardProfessor"
import CardAula from "../../components/CardAula";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

function OpenSearch() {
    const [professores, setProfessores] = useState([]);
    const [aulas, setAulas] = useState([]);

    function searchKeyEnter(event) {
        const inputValue = event.target.value;
        const urlAulas = 'http://localhost:8080/aulas/busca/lista/letra?titulo=' + inputValue;
        const urlProfessores = 'http://localhost:8080/usuarios/professor/busca/lista/letra?nome=' + inputValue;
        if (inputValue.length === 3) {
            fetch(urlProfessores, {
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
                    setProfessores(data);
                })
                .catch(error => {
                    // Lide com erros
                    console.error(error);
                });

            fetch(urlAulas, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem("usuario")).token
                }
            })
                .then((response) => {
                    if (response.status === 200) {
                        response.json().then((data) => {
                            setAulas(data);
                        });
                    }
                });
        } else if (inputValue.length > 3) {
            fetch(urlProfessores, {
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
                    setProfessores(data);

                })
                .catch(error => {
                    // Lide com erros
                    console.error(error);
                });
                
            fetch(urlAulas, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem("usuario")).token
                }
            })
                .then((response) => {
                    if (response.status === 200) {
                        response.json().then((data) => {
                            setAulas(data);
                        });
                    }
                });
        }
    }
    return (
        <>
            <div className="contentOpenSearch">
                <div className="boxOpenSearch">
                    <div className="campSearch">
                        <input type="text" onChange={searchKeyEnter} />
                        <SearchIcon fontSize="large" color="success" />
                    </div>
                </div>
                <h2>Professores</h2>
                <div className="contentListOpenSearch">
                    {
                        professores.length === 0 ? (
                            <p>Nenhum professor encontrado</p>
                        ) : (
                            professores.map((professor, index) => {
                                return (
                                    <CardProfessor
                                        key={index}
                                        nome={professor.nome}
                                        materias={professor.materias}
                                        id={professor.id}
                                        foto={professor.foto}
                                        preco={professor.precoHoraAula}
                                    />
                                )
                            })
                        )
                    }
                </div>
            </div>
            <h2>Aulas</h2>
            <div className="contentListOpenSearch">
                {
                    aulas.length === 0 ? (
                        <p>Nenhuma aula encontrada</p>
                    ) : (
                        aulas.map((aula) => {
                            return (
                                <CardAula
                                    key={aula.id}
                                    disciplina={aula.materia.nome}
                                    alunosCadastrados={aula.alunos.length}
                                    maxAlunos={aula.limiteParticipantes}
                                    assunto={aula.titulo}
                                    data={aula.dataHora.split("T")[0].split("-").reverse().join("/")}
                                    nomeProfessor={aula.professor.nome}
                                    urlFotoProfessor={aula.professor.foto}
                                />
                            )
                        })
                    )
                }
            </div>
        </>

    )
}

export default OpenSearch;