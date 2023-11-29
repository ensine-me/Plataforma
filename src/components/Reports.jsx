import React, { useState, useEffect } from "react";
import '../assets/styles/reports.css';
import store from "../store.js";

function Reports(){

    const [reportsData, setReportsData] = useState([]);

    useEffect(() => {
        fetch(`${store.getState().backEndUrl}aulas/report`, {
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

            setReportsData(data);
            console.log(data);
        })
        .catch(error => {
            console.error("Aulas HOJEEEEE" + error);
        });
    }, []);

    return(
        <div className="general">
            <h1>Denúncias</h1>
            <div className="reports">
                {reportsData.map((report, index) => (
                    <div className="card" key={index}>
                        <p className="titulo">Aula: {report.aula.nome} Acontecimento: {report.acontecimento}</p>
                        <span>{report.descricao} Teste</span>
                        <div className="data"><p>Data: {report.dataHora}</p><p>Aluno: {report.aluno.nome}</p></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Reports;
