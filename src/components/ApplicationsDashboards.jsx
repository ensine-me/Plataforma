import React, { useState, useEffect } from "react";
import '../assets/styles/contentdash.css';
import {StatusAula, AulasDadas, LucroMensal, LucroMateria, UsuariosMeses} from "./ChartsApplication";
import store from "../store.js";

function ApplicationDash() {

    const [qtdHoje, setQtd] = useState();
    const [qtdSemana, setQtdSemana] = useState(s);
    const [qtdMes, setQtdMes] = useState();

    useEffect(() => {
      fetch(`${store.getState().backEndUrl}aulas/qtd-aulas-hoje`, {
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

              setQtd(data);
              console.log(data);
          })
          .catch(error => {

              console.error(error);
          });

      fetch(`${store.getState().backEndUrl}aulas/qtd-aulas-semana`, {
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

            const qtdsDasSemanas = 0;

            data.forEach((item) => {
              qtdsDasSemanas = qtdsDasSemanas + item.total;
            });

            setQtdSemana(qtdsDasSemanas);
            console.log(qtdsDasSemanas);
          })
          .catch(error => {

              console.error(error);
          });

      fetch(`${store.getState().backEndUrl}aulas/qtd-aulas-mes`, {
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

            const qtdsDosMeses = 0;

            data.forEach((item) => {
              qtdsDosMeses = qtdsDosMeses + item.total;
            });

            setQtdMes(qtdsDosMeses);
            console.log(qtdsDosMeses);
          })
          .catch(error => {

              console.error(error);
          });
    }, [qtdHoje]);

    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
  
    const formattedDate = `${day}/${month}/${year}`;

    return(
      <div className="generalDash">
          <table className="metrics">
            <tr className="boxes">
              <td className="box" style={{width: "40%"}}>
                <div className="cardOnly">
                  <div className="boxOnly">
                    <h3>Aulas de Hoje</h3>
                    <div className="divider"></div>
                      <div>
                        <strong>
                          {formattedDate}: {qtdHoje}
                        </strong>
                      </div>
                    <div className="divider"></div>
                  </div>
                  <div className="boxOnly">
                    <h3>Aulas dessa Semana</h3>
                    <div className="divider"></div>
                      <div>
                        <strong>
                          70
                        </strong>
                      </div>
                    <div className="divider"></div>
                  </div>
                </div>
                <div className="cardOnly">
                  <div className="boxOnly">
                    <h3>Aulas desse Mês</h3>
                    <div className="divider"></div>
                      <div>
                        <strong>
                          Novembro: 300
                        </strong>
                      </div>
                    <div className="divider"></div> 
                  </div>
                  <div className="boxOnly">
                    <h3>Média de Tempo</h3>
                    <div className="divider"></div>
                      <div>
                        <strong>
                          40h
                        </strong>
                      </div>
                    <div className="divider"></div>
                  </div>
                </div>
              </td>
              <td className="box" style={{width: "60%"}}>
                <div className="boxChart" style={{width: "50%"}}>
                  <StatusAula/>
                </div>
                <div className="boxChart" style={{width: "50%"}}>
                  <AulasDadas/>
                </div>
              </td>
            </tr>
            <tr className="boxes">
              <td className="box" style={{width: "100%"}}>
                <div className="boxChart" style={{width: "70%"}}>
                  <LucroMensal/>
                </div>
                <div className="boxChart" style={{width: "70%"}}>
                  <LucroMateria/>
                </div>
              </td>
            </tr>
            <tr className="boxes">
            <td className="box" style={{width: "100%"}}>
                <div className="boxChart" style={{width: "70%"}}>
                  <UsuariosMeses/>
                </div>
              </td>
            </tr>
          </table>
      </div>
    )
}

export default ApplicationDash;
