import React from "react";
import "../styles/opensearch.css";
import CardProfessor from "../components/CardProfessor"
import CardAula from "../components/CardAula"

function OpenSearch() {
    return (
        <>
            <div className="contentOpenSearch">
                <div className="boxesProcuredOpenSearch">
                    <div className="boxOpenSearch">
                        <h1>Professores</h1>
                        <div className="listCardsOpenSearch">
                            <div className="contentListOpenSearch">
                                <CardProfessor />
                                <CardProfessor />
                                <CardProfessor />
                                <CardProfessor />
                            </div>
                        </div>
                    </div>
                    <div className="boxOpenSearch">
                        <h1>Aulas</h1>
                        <div className="listCardsOpenSearch">
                            <div className="contentListOpenSearch">
                                <CardAula
                                    disciplina='Matemática'
                                    alunosCadastrados='3'
                                    maxAlunos='6'
                                    assunto='Gaussianas'
                                    data='14/09/2021'
                                    nomeProfessor='Maruse'
                                    urlFotoProfessor='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFCdBM4y9bciDDNPr1vCnxg6j3ZUw3YfwHt3YG2_ucqg&s'
                                />
                                <CardAula
                                    disciplina='Matemática'
                                    alunosCadastrados='3'
                                    maxAlunos='6'
                                    assunto='Gaussianas'
                                    data='14/09/2021'
                                    nomeProfessor='Maruse'
                                    urlFotoProfessor='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFCdBM4y9bciDDNPr1vCnxg6j3ZUw3YfwHt3YG2_ucqg&s'
                                />
                                <CardAula
                                    disciplina='Matemática'
                                    alunosCadastrados='3'
                                    maxAlunos='6'
                                    assunto='Gaussianas'
                                    data='14/09/2021'
                                    nomeProfessor='Maruse'
                                    urlFotoProfessor='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFCdBM4y9bciDDNPr1vCnxg6j3ZUw3YfwHt3YG2_ucqg&s'
                                />
                                <CardAula
                                    disciplina='Matemática'
                                    alunosCadastrados='3'
                                    maxAlunos='6'
                                    assunto='Gaussianas'
                                    data='14/09/2021'
                                    nomeProfessor='Maruse'
                                    urlFotoProfessor='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFCdBM4y9bciDDNPr1vCnxg6j3ZUw3YfwHt3YG2_ucqg&s'
                                />
                                <CardAula
                                    disciplina='Matemática'
                                    alunosCadastrados='3'
                                    maxAlunos='6'
                                    assunto='Gaussianas'
                                    data='14/09/2021'
                                    nomeProfessor='Maruse'
                                    urlFotoProfessor='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFCdBM4y9bciDDNPr1vCnxg6j3ZUw3YfwHt3YG2_ucqg&s'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default OpenSearch;