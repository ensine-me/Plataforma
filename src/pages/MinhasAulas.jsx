import React, { useEffect, useState } from 'react';
import CardAula from '../components/CardAula'
import styles from '../assets/styles/MinhasAulas.module.css';

const MinhasAulas = () => {
  const [aulas, setAulas] = useState([]);

  useEffect(() => {
    const url = `http://44.217.177.131:8080/aulas/busca-id-usuario?id=${JSON.parse(sessionStorage.getItem("usuario")).userId}`;
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

  return (
    <div className={styles.minhas_aulas_container}>
      <h1 className={styles.minhas_aulas_titulo}>Minhas Aulas</h1>
      <div className={styles.minhas_aulas_aulas_container}>
        {aulas.length === 0 ? (
          <p className={styles.minhas_aulas_nenhuma_aula}>Você não tem nenhuma aula marcada</p>
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