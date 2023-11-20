import React from 'react'
import styles from '../assets/styles/paginaInicialAluno.module.css'
import CardProfessorHome from '../components/CardProfessorHome'
import CardAula from '../components/CardAula'
import { useEffect, useState } from "react";
import { isVariableInSessionStorage } from '../functions/isVariableInSessionStorage';
import { useNavigate } from "react-router-dom";
import store from "../store";

const Home = () => {
  const [professores, setProfessores] = useState([]);
  const [aulas, setAulas] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if(!isVariableInSessionStorage("usuario") || professores.length !== 0) return;
    const disciplinas = JSON.parse(sessionStorage.getItem("usuario")).disciplinas;

    if(JSON.parse(sessionStorage.getItem("usuario")).professor) {
      navigate("/home-professor");
    } else {
      console.log("não é professor")
      console.log(sessionStorage.getItem("usuario"))
    }

    let urlProfessores = `${store.getState().backEndUrl}usuarios/professores-recomendados?disciplinas=${disciplinas[0].nome}`;
    for (let i = 1; i < disciplinas.length; i++) {
      urlProfessores += `&disciplinas=${disciplinas[i].nome}`;
    };
    urlProfessores = encodeURI(urlProfessores);
    fetch(urlProfessores, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem("usuario")).token
      }
    })
      .then((response) => {
        if (response.status === 200) {
          response.json().then((data) => {
            setProfessores(data);
          });
        }
      });

    const urlAulas = `${store.getState().backEndUrl}aulas/privacidade/PUBLICA`;
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
  });

  return (
    <div className={styles.home_container}>
      <h1 className={styles.home_title}>
        Professores recomendados
      </h1>
      <div className={styles.home_professores_recomendados_container}>
        {
          professores.length === 0 ? (
            <p className={styles.home_nenhum_professor}>Nenhum professor encontrado</p>
          ) : (
            professores.map((professor) => {
              return (
                <CardProfessorHome
                  key={professor.idUsuario}
                  urlFoto={professor.foto}
                  nome={professor.nome}
                  avaliacao={4.5}
                  preco={professor.precoHoraAula}
                  disciplinas={professor.materias.map(materia => materia.nome)}
                  id={professor.idUsuario}
                />
              )
            })
          )
        }
      </div>
      <h1 className={styles.home_title}>
        Aulas abertas
      </h1>
      <div className={styles.home_aulas_abertas_container}>
        {
          aulas.length === 0 ? (
            <p className={styles.home_nenhuma_aula}>Nenhuma aula encontrada</p>
          ) : (
            aulas.map((aula) => {
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
            })
          )
        }
      </div>
    </div>
  )
}

export default Home