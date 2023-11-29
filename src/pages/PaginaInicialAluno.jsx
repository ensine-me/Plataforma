import React from 'react'
import styles from '../assets/styles/paginaInicialAluno.module.css'
import CardProfessorHome from '../components/CardProfessorHome'
import CardAula from '../components/CardAula'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSessionContext } from '@supabase/auth-helpers-react';
import { loginFirebase } from 'functions/login';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import StarIcon from '@mui/icons-material/Star';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import store from "../store";
import Swal from "sweetalert2";

const Home = () => {
  const [professores, setProfessores] = useState([]);
  const [aulas, setAulas] = useState([]);

  const { isLoading, session } = useSessionContext();
  if (!isLoading && session) {
    loginFirebase(session.user.email, session.user.email)
  }

  const navigate = useNavigate();

  console.log("usuário: ", sessionStorage.getItem("usuario"));

  if (JSON.parse(sessionStorage.getItem("usuario")).googleEmail) {
    console.log("true");
  } else {
    console.log("false");
  }

  useEffect(() => {
    const disciplinas = JSON.parse(sessionStorage.getItem("usuario")).disciplinas;

    if (JSON.parse(sessionStorage.getItem("usuario")).professor) {
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

    const urlAvalPendentes = `${store.getState().backEndUrl}avaliacoes/visualizada/aluno/${JSON.parse(sessionStorage.getItem("usuario")).userId}`;
    fetch(urlAvalPendentes, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem("usuario")).token
      }
    })
      .then((response) => {
        if (response.status === 200) {
          Swal.fire({
            icon: 'info',
            title: 'Você possui aulas aguardando sua avaliação',
            showCancelButton: true,
            showConfirmButton: true,
            confirmButtonText: 'Ver minhas aulas',
            cancelButtonText: 'Fechar',
            confirmButtonColor: '#28a745',
        }).then((result) => {
            // Redirecione ou adicione ação do botão "Ver minhas aulas" aqui
            if (result.isConfirmed) {
                navigate("/minhas-aulas");
            }
        });
        } else {
          console.log("response das visualizadas: " + response.status);
        }
      });
  }, [navigate]);

  return (
    <div className={styles.home_container}>
      <h1 className={styles.home_title}>
        <AutoAwesomeIcon /> Professores recomendados
      </h1>
      <i className={styles.home_subtitulo}>Professores que lecionam matérias que mais combinam com você</i>
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
                  avaliacao={professor.nota}
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
        <StarIcon /> Professores favoritos
      </h1>
      <i className={styles.home_subtitulo}>Professores mais bem avaliados da Ensine.me</i>
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
                  avaliacao={professor.nota}
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
        <MeetingRoomIcon /> Aulas abertas
      </h1>
      <i className={styles.home_subtitulo}>Aulas que você pode entrar agora</i>
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