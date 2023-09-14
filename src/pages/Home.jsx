import React from 'react'
import styles from '../style/Home.module.css'
import CardProfessorHome from '../components/CardProfessorHome'
import CardAula from '../components/CardAula'
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { login } from '../functions/login';
import { isVariableInSessionStorage } from '../functions/isVariableInSessionStorage';

const Home = () => {
  const { isLoading, session } = useSessionContext();
  const navigate = useNavigate();
  const [disciplinas, setDisciplinas] = useState([]);
  const [professores, setProfessores] = useState([]);
  const [loginOk, setLoginOk] = useState(false);
  const [aulas, setAulas] = useState([]);

  //verificando se o usuário está cadastrado no banco
  useEffect(() => {
    if (!isLoading && session) {
      // console.log("sessão: " + session);
      const email = session.user.email;
      const url = `http://localhost:8080/usuarios/existe-por-email?emailUsuario=${email}`;
      fetch(url).then((response) => {
        response.json().then((data) => {
          if (data) { //checa se estou cadastrado
            if (!isVariableInSessionStorage("usuario")) { //checa se estou logado
              login(session.user.email, session.user.email); //loga!!
            }
            setLoginOk(true);
            // console.log("################LOGIN OK");
          } else {
            navigate("/escolher-materias");
          }
        })
      })
    }
  }, [isLoading, session, navigate]);

  //pegando as disciplinas do usuário logado
  useEffect(() => {
    if (loginOk && isVariableInSessionStorage("usuario")) {
      // console.log("usuário da sessão: " + sessionStorage.getItem("usuario"));
      const url = `http://localhost:8080/usuarios/buscar-por-id?id=${JSON.parse(sessionStorage.getItem("usuario")).userId}`;
      fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem("usuario")).token
        }
      })
        .then((response) => {
          if (response.status === 200) {
            response.json().then((data) => {
              // console.log("data: " + JSON.stringify  (data));
              setDisciplinas(data.materias.map(materia => materia.nome));
            });
          }
        });
    }
  }, [loginOk]);

  //buscando os professores
  useEffect(() => {
    if (loginOk && isVariableInSessionStorage("usuario") && disciplinas.length > 0) {
      let urlProfessores = `http://localhost:8080/usuarios/professores-recomendados?disciplinas=${disciplinas[0]}`;
      for (let i = 1; i < disciplinas.length; i++) {
        urlProfessores += `&disciplinas=${disciplinas[i]}`;
      };
      fetch(urlProfessores, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem("usuario")).token
        }
      })
        .then((response) => {
          // console.log("response: " + response.status);
          // console.log("disciplinas: " + disciplinas);
          if (response.status === 200) {
            response.json().then((data) => {  
              setProfessores(data);
              // console.log(professores);
            });
          }
        });
    }
  }, [disciplinas, loginOk]);

  useEffect(() => {
    if (loginOk && isVariableInSessionStorage("usuario")) {
      const urlAulas = `http://localhost:8080/aulas/privacidade/PUBLICA`;
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
    }
  }, [loginOk]);

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
                  key={professor.id}
                  urlFoto={professor.foto}
                  nome={professor.nome}
                  avaliacao={4.5}
                  preco={professor.precoHoraAula}
                  disciplinas={professor.materias.map(materia => materia.nome)}
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