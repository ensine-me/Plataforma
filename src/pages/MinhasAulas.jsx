import React, { useEffect, useState } from 'react';
import CardAula from '../components/CardAula'
import styles from '../style/MinhasAulas.module.css';

const MinhasAulas = () => {
  const [aulas, setAulas] = useState([]);

  useEffect(() => {
    const url = `http://localhost:8080/aulas/busca-id-usuario?id=${JSON.parse(sessionStorage.getItem("usuario")).userId}`;
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
      response.json().then((data) => {
        setAulas(data);
        console.log("Aulas encontradas" + data);
      })
    })
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
                disciplina={aula.materia.nome}
                alunosCadastrados={aula.alunos.length}
                maxAlunos={aula.limiteParticipantes}
                assunto={aula.titulo}
                data={aula.dataHora.split("T")[0]}
                nomeProfessor={aula.professor.nome}
                urlFotoProfessor='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsCorUM2rzb77_a8FOOOBD-7UW6BdQR2Mhw40LOuc&s'
              />
            )
          }
          ))}
      </div>
    </div>
  )
}

export default MinhasAulas