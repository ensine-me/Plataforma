import React, { useEffect, useState } from 'react';
import CardAula from '../components/CardAula'
import styles from '../assets/styles/MinhasAulas.module.css';
import store from "../store";

import { useNavigate } from 'react-router-dom';

import HistoryEduIcon from '@mui/icons-material/HistoryEdu';

const MinhasAulas = () => {
  const [aulas, setAulas] = useState([]);

  useEffect(() => {
    const url = JSON.parse(sessionStorage.getItem("usuario")).professor ? `${store.getState().backEndUrl}aulas/professor/${JSON.parse(sessionStorage.getItem("usuario")).userId}` : `${store.getState().backEndUrl}aulas/busca-id-usuario?id=${JSON.parse(sessionStorage.getItem("usuario")).userId}`;
    const headersComToken = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem("usuario")).token
    }

    // console.log("url: " + url);
    // console.log("headers: " + headersComToken);
    fetch(url, {
      method: 'GET',
      headers: headersComToken
    }).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Erro na requisição');
      }
    }).then((data) => {
      if (Array.isArray(data)) {
        setAulas(data);
      } else {
        console.error("A API não retornou um array");
      }
    }).catch((error) => {
      console.error("Erro na requisição", error);
    });
  }, []);

  const navigate = useNavigate();
  const Voltar = () => {
    navigate('/inicial-aluno');
  }

  return (
    <div className={styles.minhas_aulas_container}>
      <h1 className={styles.minhas_aulas_titulo}><HistoryEduIcon /> Suas Aulas marcadas</h1>
      <div className={styles.minhas_aulas_aulas_container}>
        {aulas.length === 0 ? (
          <>
            <div>
              <p className={styles.minhas_aulas_nenhuma_aula}>Suas aulas já aprovadas por um professor aparecem aqui. <br/>
                Volte para a página inicial e converse com um de nossos professores recomendados caso deseje solicitar uma aula.</p>
              <button className={styles.botaoVoltar} onClick={Voltar}>Página inicial</button>
            </div>
          </>
        )
          :
          (aulas.map((aula) => {
            return (
              <CardAula
                key={aula.id}
                id={aula.id}
                disciplina={aula.materia.nome}
                alunosCadastrados={aula.alunos.length}
                maxAlunos={aula.limiteParticipantes}
                assunto={aula.titulo}
                data={aula.dataHora.split("T")[0].split("-").reverse().join("/")}
                nomeProfessor={aula.professor.nome}
                urlFotoProfessor={aula.professor.foto}
              />
            )
          }
          ))}
      </div>
    </div>
  )
}

export default MinhasAulas