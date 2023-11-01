import cssPoggers from "../assets/styles/marcarAula.module.css"
import DateTimePickerComponent from "./DateTimePickerComponent"
import MultiTextField from "./MultiTextField"
import BasicTextField from "./BasicTextField"
import CloseIcon from '@mui/icons-material/Close';
import Swal from "sweetalert2"
import { useEffect, useState } from "react"
import dayjs from "dayjs"
import { useSession } from "@supabase/auth-helpers-react"
import store from "../../src/store";

const chamaSwal = () => {
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

const MarcarAula = ({ idProfessor, nomeProfessor, emailProfessor, materias, disponibilidades }) => {
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
    let foi = true;
    if (nomeProfessor != null && emailProfessor != null) {
      const bodyJsonData = {
        "professor": {
          "idUsuario": idProfessor
        },
        "titulo": eventName,
        "descricao": eventDescription,
        "materia": {
          "nome": document.getElementById("selectMateria").value
        },
        "dataHora": dataFormatada,
        "limiteParticipantes": parseInt(document.getElementById("maxParticipantes").value, 10),
        "alunos": [{
          "idUsuario": JSON.parse(sessionStorage.getItem("usuario")).userId
        }],
        "status": "SOLICITADO",
        "duracaoSegundos": "3600"
      }
      
      const response = await fetch(`${store.getState().backEndUrl}aulas`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem("usuario")).token
        },
        body: JSON.stringify(bodyJsonData)
      })
      console.log(bodyJsonData)
      console.log("Response: " + JSON.stringify(response))
      if (!response.ok) {
        foi = false;
        console.log("FOI : " + foi)
      }
      const emailFormatado = "" + emailProfessor + "";
      console.log("Foi 2:" + foi)
      if (!foi) {
        Swal.fire({
          icon: 'error',
          title: 'Aula não foi marcada',
          text: 'Verifique se a aula está sendo marcada dentro da disponibilidade.\n Caso o erro persista, entre em contato com um desenvolvedor.',
          showCancelButton: false,
          showConfirmButton: true,
          confirmButtonText: 'Ok',
          confirmButtonColor: '#FF0000',
        });
      }
      else {     
        const requestIdRandom = 'requestID'+ Math.floor(Math.random() * 100000);
        const event = {
          'summary': eventName,
          'description': eventDescription,
          'attendees': [
            { 'email': emailFormatado }
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
            'createRequest': {
              'requestId': requestIdRandom,
              'conferenceSolutionKey': { 'type': 'hangoutsMeet' },
            },
          }
        }
        await fetch("https://www.googleapis.com/calendar/v3/calendars/primary/events?conferenceDataVersion=1", {     
          method: "POST",                                                                    
          headers: {                                                                         
            'Authorization': 'Bearer ' + session.provider_token
          },
          body: JSON.stringify(event)
        }).then((data) => {
          return data.json();
        }).then((data) => {
          console.log(data);
          console.log("eventId: "+ data.id);
        });
        chamaSwal();
        fechaModal();
      }
    }
  }
  const fechaModal = () => {
    document.getElementById("marcarAulaContainer").style.visibility = "hidden";
  }

  return (
    <>
      <div id="marcarAulaContainer" className={cssPoggers.marcarAulaContainer}>
        <div className={cssPoggers.closeIcon} onClick={fechaModal}><CloseIcon sx={{ color: "#fff" }} /></div>
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
                  <option key={index} value={materia.nome}>{materia.nome}</option>
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
        <div className={cssPoggers.quadradinCinza}>
          <h5>Disponibilidade:</h5>
          {disponibilidades.map((disponibilidade, index) => {
            return (
              <div className={cssPoggers.disponibilidadeCont} key={index}>
                <li>
                  {disponibilidade.diaDaSemana} - {disponibilidade.horarioInicio} às {disponibilidade.horarioFim}
                </li>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
export default MarcarAula;