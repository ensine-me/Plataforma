import cssPoggers from "../style/marcarAula.module.css"
import DateTimePickerComponent from "./DateTimePickerComponent"
import MultiTextField from "./MultiTextField"
import BasicTextField from "./BasicTextField"
import Swal from "sweetalert2"
import { useEffect, useState } from "react"
import dayjs from "dayjs"
import { useSession } from "@supabase/auth-helpers-react"

const nomeProf = "Oppenheimer";

const chamaSwal = () => {
  // talvez e só talvez, seja necessário dar um none no quadradoCinza que é o nome do campo no css
  // que some com esse componente, tirei isso pq estava dando um erro de resize e como vai ir pra outra tela
  // acredito que nem precise.
  Swal.fire({
    icon: 'success',
    title: 'Aula aceita',
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
        timer: 2000,
        showConfirmButton: false,
        onClose: () => {
          // Redireciona para a página certa aqui!!!!
          window.location.href = 'sua_pagina_de_aulas.html';
        }
      });
    }
  });
}

const MarcarAula = () => {
  const [start, setStart] = useState(dayjs('2023-09-09T21:30'))
  const [end, setEnd] = useState(dayjs('2023-09-09T21:30'))
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const session = useSession(); // user, quando a sessão existir temos um usuario. 
  useEffect(() => {
    console.log("start:", start)
    console.log("end:", end)
    console.log("eventName:", eventName)
    console.log("eventDescription:", eventDescription)
  }, [start, end, eventName, eventDescription])



  async function createCalendarEvent() {

    const event = {
      'summary': eventName,
      'description': eventDescription,
      'attendees': [
        { 'email': 'jvsalss@gmail.com' }
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
    document.getElementById("marcarAulaContainer").style.display = "none";
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
            <p className={cssPoggers.paragrafoMarcarAula}>Aula Privada:</p>
            <select>
              <option value="1">Privado</option>
              <option value="2">Público</option>
            </select>
            <p className={cssPoggers.paragrafoMarcarAula}>Máximo de participantes:</p>
            <select>
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
            <h4>{nomeProf}</h4>
            <MultiTextField onChange={(e) => setEventDescription(e.target.value)} />
            <button onClick={createCalendarEvent} className={cssPoggers.botaoMarcarAula}>Marcar Aula</button>
          </div>
        </div>
      </div>
    </>
  )
}
export default MarcarAula;