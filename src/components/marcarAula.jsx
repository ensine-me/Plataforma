import cssPoggers from "../style/marcarAula.module.css"
import DateTimePickerComponent from "../components/DateTimePickerComponent"
import MultiTextField from "../components/MultiTextField"
import { createCalendarEvent } from "../GoogleLoginAgenda"
import BasicTextField from "./BasicTextField"
import { chamaSwal } from "../GoogleLoginAgenda"
import Swal from "sweetalert2"

const nomeAula = "Aula de Fisica";
const nomeProf = "Oppenheimer";

                    console.log();

const MarcarAula = () => {
    return (
        <>
            <div id="quadradoCinza" className={cssPoggers.quadradoCinza}>
                <div className={cssPoggers.marcarAulaColuna}>
                    <p className={cssPoggers.paragrafoMarcarAula}>Data de Inicio:</p>
                    <DateTimePickerComponent value={createCalendarEvent.start} onChange={createCalendarEvent.setStart}/>
                    <p className={cssPoggers.paragrafoMarcarAula}>Data de Fim:</p>
                    <DateTimePickerComponent value={createCalendarEvent.start} onChange={createCalendarEvent.setStart}/>
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
                <BasicTextField  onChange={(e) => createCalendarEvent.setEventName(e.target.value)}/>
                    <h4>{nomeProf}</h4>
                    <MultiTextField onChange={(e) => createCalendarEvent.setEventDescription(e.target.value)}/>
                    
                    <button onClick={createCalendarEvent} className={cssPoggers.botaoMarcarAula}>Marcar Aula</button>
                </div>
            </div>
        </> 
    )
}
export default MarcarAula