import React from "react";
import "../assets/styles/opensearch.css";
import CardProfessor from "../components/CardProfessor"
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import store from "../store";

function OpenSearch() {
    const [professores, setProfessores] = useState([]);

    function searchKeyEnter(event) {
        const inputValue = event.target.value;
        if (inputValue.length === 3) {
            fetch(`${store.getState().backEndUrl}usuarios/professor/busca/lista?nome=` + inputValue, {
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
        } else if (inputValue.length > 3) {
            fetch(`${store.getState().backEndUrl}usuarios/professor/busca/lista/letra?nome=` + inputValue, {
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
                <div className="contentListOpenSearch">
                    {professores.length === 0 ? (
                        <>
                            <p>Nenhum professor encontrado</p>
                        </>
                    ) : (
                        professores.map((professor, index) => {
                            return (
                                <CardProfessor
                                    key={index}
                                    nome={professor.nome}
                                    materias={professor.materias}
                                    id={professor.idUsuario}
                                    foto={professor.foto}
                                    preco={professor.precoHoraAula}
                                    nota={professor.nota}
                                />
                            )
                        })
                    )
                    }
                </div >
            </div >
        </>
    )
}

export default OpenSearch;