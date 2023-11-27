import React, { useEffect, useState } from 'react';
import CardAula from '../components/CardAula'
import styles from '../assets/styles/MinhasAulas.module.css';
import store from "../store";

import { useNavigate } from 'react-router-dom';

import HistoryEduIcon from '@mui/icons-material/HistoryEdu';

const MinhasAulas = () => {
  const [solicitado, setSolicitado] = useState([]);
  const [aguardandoPagamento, setAguardandoPagamento] = useState([]);
  const [agendado, setAgendado] = useState([]);
  const [emProgresso, setEmProgresso] = useState([]);
  const [concluida, setConcluida] = useState([]);
  const [cancelado, setCancelado] = useState([]);
  const [rejeitado, setRejeitado] = useState([]);
  const [aguardandoAvaliacao, setAguardandoAvaliacao] = useState([]);


  useEffect(() => {
    const url = JSON.parse(sessionStorage.getItem("usuario")).professor ? `${store.getState().backEndUrl}aulas/professor/${JSON.parse(sessionStorage.getItem("usuario")).userId}` : `${store.getState().backEndUrl}aulas/busca-id-usuario?id=${JSON.parse(sessionStorage.getItem("usuario")).userId}`;
    const headersComToken = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem("usuario")).token
    }

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
        const aulas = data;
        console.log("aulas: ", aulas)
        aulas.forEach(aula => {
          switch (aula.status) {
            case 'SOLICITADO':
              setSolicitado(prevState => { if (!prevState.some(item => item.id === aula.id)) { return [...prevState, aula]; } else { return prevState; } });
              break;
            case 'AGUARDANDO_PAGAMENTO':
              setAguardandoPagamento(prevState => { if (!prevState.some(item => item.id === aula.id)) { return [...prevState, aula]; } else { return prevState; } });
              break;
            case 'AGENDADO':
              setAgendado(prevState => { if (!prevState.some(item => item.id === aula.id)) { return [...prevState, aula]; } else { return prevState; } });
              break;
            case 'EM_PROGRESSO':
              setEmProgresso(prevState => { if (!prevState.some(item => item.id === aula.id)) { return [...prevState, aula]; } else { return prevState; } });
              break;
            case 'CONCLUIDA':
              setConcluida(prevState => { if (!prevState.some(item => item.id === aula.id)) { return [...prevState, aula]; } else { return prevState; } });
              break;
            case 'CANCELADO':
              setCancelado(prevState => { if (!prevState.some(item => item.id === aula.id)) { return [...prevState, aula]; } else { return prevState; } });
              break;
            case 'REJEITADO':
              setRejeitado(prevState => { if (!prevState.some(item => item.id === aula.id)) { return [...prevState, aula]; } else { return prevState; } });
              break;
            default:
              break;
          }
        });
      } else {
        console.error("A API não retornou um array");
      }
    }).catch((error) => {
      console.error("Erro na requisição", error);
    });
  }, []);

  useEffect(() => {
    if (concluida.length === 0) return;

    const headersComToken = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem("usuario")).token
    }

    concluida.forEach(aula => {
      fetch(`${store.getState().backEndUrl}avaliacoes/${JSON.parse(sessionStorage.getItem("usuario")).userId}/${aula.id}`, {
        method: 'GET',
        headers: headersComToken
      }).then((response) => {
        if (response.status === 204) {
          setAguardandoAvaliacao(prevState => [...prevState, aula]);
        }
      });
    });
  }, [concluida]);

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