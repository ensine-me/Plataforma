import cssPoggers from "../style/marcarAula.module.css"
import DateTimePickerComponent from "./DateTimePickerComponent"
import MultiTextField from "./MultiTextField"
import BasicTextField from "./BasicTextField"
import Swal from "sweetalert2"
import { useEffect, useState } from "react"
import dayjs from "dayjs"
import { useSession } from "@supabase/auth-helpers-react"

const chamaSwal = () => {
  // talvez e só talvez, seja necessário dar um none no quadradoCinza que é o nome do campo no css
  // que some com esse componente, tirei isso pq estava dando um erro de resize e como vai ir pra outra tela
  // acredito que nem precise.
  Swal.fire({
    icon: 'success',
    title: 'Aula solicitada',
    text: 'Verifique seu Google Agenda',
    showCancelButton: false,
    showConfirmButton: true,
    confirmButtonText: 'Ver minhas aulas',
    confirmButtonColor: '#28a745',
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        icon: 'info',
        title: 'Redirecionando...',
        timer: 500,
        showConfirmButton: false,
      }).then((result) => {
        window.location.href = "/minhas-aulas";
      });
    }
  });
}

const MarcarAula = ({ idProfessor, nomeProfessor, emailProfessor, materias }) => {
  const [start, setStart] = useState(dayjs()) // marcando o horário de agora apartir do Google
  const [end, setEnd] = useState(dayjs())
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  const session = useSession(); // user, quando a sessão existir temos um usuario. 

  useEffect(() => {
    console.log("start:", start)
    console.log("end:", end)
    console.log("eventName:", eventName)
    console.log("eventDescription:", eventDescription)
  }, [start, end, eventName, eventDescription])
  const startUTC = new Date(start.toISOString());
  startUTC.setUTCHours(startUTC.getUTCHours() - 3);
  const dataFormatada = startUTC.toISOString();
  
  async function createCalendarEvent() {
    if (nomeProfessor != null && emailProfessor != null) {
      const bodyJsonData = {
        "professor": {
          "id": idProfessor
        },
        "titulo": eventName,
        "descricao": eventDescription,
        "materia": {
          "nome": document.getElementById("selectMateria").value
        },
        "dataHora": dataFormatada,
        "limiteParticipantes": parseInt(document.getElementById("maxParticipantes").value, 10),
        "alunos": [{
          "id": JSON.parse(sessionStorage.getItem("usuario")).userId
        }],
        "status": "SOLICITADO",
        "duracaoSegundos": "3600"
      }
      fetch('http://localhost:8080/aulas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
            'Authorization': 'Bearer '+JSON.parse(sessionStorage.getItem("usuario")).token
        },
        body: JSON.stringify(bodyJsonData)
      })
        .then(response => {
          console.log(bodyJsonData)
          if (!response.ok) {
            throw new Error('Erro na requisição');
          }
          return response.json();
        })
        .catch(error => {
          // Lide com erros
          console.error(error);
        });
    }
    const emailFormatado = ""+emailProfessor+"";

    const event = {
      'summary': eventName,
      'description': eventDescription,
      'attendees': [
        { 'email': emailFormatado}
      ],
      'start': {
        'dateTime': start.toISOString(),
        'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone
      },
      'end': {
        'dateTime': end.toISOString(), // Date.toISOString() ->
        'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone
      },
      'conferenceData': {
        'conferenceDataVersion': 1,
        'createRequest': {
          'requestId': 'sample123',
          'conferenceSolutionKey': { 'type': 'hangoutsMeet' },
        },
      }
    }

    await fetch("https://www.googleapis.com/calendar/v3/calendars/primary/events", {
      method: "POST",
      headers: {
        'Authorization': 'Bearer ' + session.provider_token
      },
      body: JSON.stringify(event)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      console.log(data);
    });
    chamaSwal();
    document.getElementById("marcarAulaContainer").style.visibility = "hidden";
  }

  return (
    <>
      <div id="marcarAulaContainer" className={cssPoggers.marcarAulaContainer}>
        <div id="quadradoCinza" className={cssPoggers.quadradoCinza}>
          <div className={cssPoggers.marcarAulaColuna}>
            <p className={cssPoggers.paragrafoMarcarAula}>Data de Inicio:</p>
            <DateTimePickerComponent value={start} onChange={(newValue) => setStart(newValue)} />
            <p className={cssPoggers.paragrafoMarcarAula}>Data de Fim:</p>
            <DateTimePickerComponent value={end} onChange={(newValue) => setEnd(newValue)} />
            <p className={cssPoggers.paragrafoMarcarAula}>Disciplina da aula:</p>
            <select id="selectMateria">
              {materias.map((materia, index) => {
                return (
                  <option value={materia.nome}>{materia.nome}</option>
                )
              })}
            </select>
            <p className={cssPoggers.paragrafoMarcarAula}>Máximo de participantes:</p>
            <select id="maxParticipantes">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className={cssPoggers.marcarAulaColunaDireita}>
            <p className={cssPoggers.paragrafoMarcarAula}>Titulo da aula:</p>
            <BasicTextField onChange={(e) => setEventName(e.target.value)} />
            <h4>{nomeProfessor}</h4>
            <MultiTextField onChange={(e) => setEventDescription(e.target.value)} />
            <button onClick={createCalendarEvent} className={cssPoggers.botaoMarcarAula}>Marcar Aula</button>
          </div>
        </div>
      </div>
    </>
  )
}
export default MarcarAula;