import React from 'react'
import styles from '../style/Home.module.css'
import CardProfessorHome from '../components/CardProfessorHome'
import CardAula from '../components/cardAula/CardAula'
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const { isLoading, session } = useSessionContext();
  const navigate = useNavigate();

  //verificando se o usuário está cadastrado no banco
  useEffect(() => {
    // console.log(email)
    if (!isLoading && session) {
      const email = session.user.email;
      const url = `http://localhost:8080/usuarios/existe-por-email?emailUsuario=${email}`;
      fetch(url).then((response) => {
        response.json().then((data) => {
          if (!data) {
            navigate("/escolher-materias");
          }
        })
      })
    }
  }, [isLoading, session, navigate]);

  useEffect(() => {
    console.log("Usuário: " + sessionStorage.getItem("usuario"));
  }, []);

  return (
    <div className={styles.home_container}>
      <h1 className={styles.home_title}>
        Professores recomendados
      </h1>
      <div className={styles.home_professores_recomendados_container}>
        <CardProfessorHome
          urlFoto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFCdBM4y9bciDDNPr1vCnxg6j3ZUw3YfwHt3YG2_ucqg&s'
          nome='Maruse'
          avaliacao={1.5}
          preco={10.50}
          disciplinas={['matematica', 'fisica']}
        />
        <CardProfessorHome
          urlFoto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFCdBM4y9bciDDNPr1vCnxg6j3ZUw3YfwHt3YG2_ucqg&s'
          nome='Maruse'
          avaliacao={1.5}
          preco={10.50}
          disciplinas={['matematica', 'fisica']}
        />
        <CardProfessorHome
          urlFoto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFCdBM4y9bciDDNPr1vCnxg6j3ZUw3YfwHt3YG2_ucqg&s'
          nome='Maruse'
          avaliacao={1.5}
          preco={10.50}
          disciplinas={['matematica', 'fisica']}
        />
        <CardProfessorHome
          urlFoto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFCdBM4y9bciDDNPr1vCnxg6j3ZUw3YfwHt3YG2_ucqg&s'
          nome='Maruse'
          avaliacao={1.5}
          preco={10.50}
          disciplinas={['matematica', 'fisica']}
        />
        <CardProfessorHome
          urlFoto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFCdBM4y9bciDDNPr1vCnxg6j3ZUw3YfwHt3YG2_ucqg&s'
          nome='Maruse'
          avaliacao={1.5}
          preco={10.50}
          disciplinas={['matematica', 'fisica']}
        />
        <CardProfessorHome
          urlFoto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFCdBM4y9bciDDNPr1vCnxg6j3ZUw3YfwHt3YG2_ucqg&s'
          nome='Maruse'
          avaliacao={1.5}
          preco={10.50}
          disciplinas={['matematica', 'fisica']}
        />
        <CardProfessorHome
          urlFoto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFCdBM4y9bciDDNPr1vCnxg6j3ZUw3YfwHt3YG2_ucqg&s'
          nome='Maruse'
          avaliacao={1.5}
          preco={10.50}
          disciplinas={['matematica', 'fisica']}
        />
        <CardProfessorHome
          urlFoto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFCdBM4y9bciDDNPr1vCnxg6j3ZUw3YfwHt3YG2_ucqg&s'
          nome='Maruse'
          avaliacao={1.5}
          preco={10.50}
          disciplinas={['matematica', 'fisica']}
        />
        <CardProfessorHome
          urlFoto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFCdBM4y9bciDDNPr1vCnxg6j3ZUw3YfwHt3YG2_ucqg&s'
          nome='Maruse'
          avaliacao={1.5}
          preco={10.50}
          disciplinas={['matematica', 'fisica']}
        />
      </div>
      <h1 className={styles.home_title}>
        Aulas abertas
      </h1>
      <div className={styles.home_aulas_abertas_container}>
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
  )
}

export default Home