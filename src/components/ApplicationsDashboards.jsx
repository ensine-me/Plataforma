import React, { useState, useEffect } from "react";
import '../assets/styles/contentdash.css';
import {AulasDadas, LucroMensal , UsuariosMeses} from "./ChartsApplication";

function ApplicationDash() {

    const [data, setData] = useState(null);
    const [firstData, setFirstData] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:8080/aulas/qtd-aulas-hoje', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ` + JSON.parse(sessionStorage.getItem("usuario")).token,
            },
          });
  
          if (!response.ok) {
            console.error(`Error: ${response.status} - ${response.statusText}`);
            throw new Error('Erro ao buscar dados');
          }

          const jsonData = await response.json();

          if (Array.isArray(jsonData) && jsonData.length > 0) {
            setFirstData(jsonData[0]);
          }
  
          setData(jsonData);
        } catch (error) {
          console.error('Houve um erro ao buscar os dados:', error);
        }
      };
  
      fetchData();
    }, [firstData]);

    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
  
    const formattedDate = `${day}/${month}/${year}`;

    return(
        <div className="generalDash">
            <div className="boxesDash">
                <div className="box">
                    <div className="card">
                        <h2>Aulas de Hoje</h2>
                        <div>
                            <strong>
                                {formattedDate}: 
                                {data && data.map((item, index) => (
                                    <span key={index}>
                                        {item[0]}
                                    </span>
                                ))}
                            </strong> 
                        </div>
                    </div>
                    <div className="card_dash">
                        <AulasDadas />
                    </div>
                    <div className="card_dash">
                        <UsuariosMeses />
                    </div>
                </div>
                <div className="box">
                    <div className="card_dash">
                        <LucroMensal  />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApplicationDash;