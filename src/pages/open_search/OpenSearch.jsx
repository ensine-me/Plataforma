import React from "react";
import "../../style/opensearch.css";
import SideBar from "../../components/SideBar";
import Search from "../../components/search/Search";
import CardProfessor from "../../components/carProfessor/CardProfessor"
import CardAula from "../../components/cardAula/CardAula"
import "../../style/search.css"
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

function OpenSearch() {
    const [professores, setProfessores] = useState([]);

    function searchKeyEnter(event) {
        const inputValue = event.target.value;
        if (inputValue.length === 3) {
            fetch('http://localhost:8080/usuarios/professor/busca/lista?nome=' + inputValue, {
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
                    setProfessores(data);

                    
                })
                .catch(error => {
                    // Lide com erros
                    console.error(error);
                });
        } else if (inputValue.length > 3) {
            fetch('http://localhost:8080/usuarios/professor/busca/lista/letra?nome=' + inputValue, {
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
            <SideBar />
            <div className="contentOpenSearch">
                <div className="boxOpenSearch">
                    <div className="campSearch">
                        <input type="text" onChange={searchKeyEnter} />
                        <SearchIcon fontSize="large" color="success" />
                    </div>
                </div>

                <h1>Professores</h1>
                <div className="boxesProcuredOpenSearch">
                    <div className="boxOpenSearch">
                        <div className="listCardsOpenSearch">
                            <div className="contentListOpenSearch">
                                {professores.map((professor, index) => {
                                    return (
                                        <CardProfessor
                                            key={index}
                                            nome={professor.nome}
                                            materias={professor.materias}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default OpenSearch;