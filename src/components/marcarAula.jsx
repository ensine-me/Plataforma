import cssPoggers from "../style/marcarAula.module.css"
import DateTimePickerComponent from "../components/DateTimePickerComponent"
import MultiTextField from "../components/MultiTextField"
import { GoogleLoginAgenda, createCalendarEvent } from "../GoogleLoginAgenda"
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
                    <DateTimePickerComponent value={createCalendarEvent.start} onChange={(value) => createCalendarEvent.setStart(value)}/> 
                    <p className={cssPoggers.paragrafoMarcarAula}>Data de Fim:</p>
                    <DateTimePickerComponent value={createCalendarEvent.end} onChange={(value) => createCalendarEvent.setEnd(value)}/> 
                    <p className={cssPoggers.paragrafoMarcarAula}>Aula Privada:</p>
                    <select>
                        <option id="1" value="1">Privado</option>
                        <option id="2" value="2">Público</option>
                    </select>
                    <p className={cssPoggers.paragrafoMarcarAula}>Máximo de participantes:</p>
                    <select>
                        <option id="3" value="1">1</option>
                        <option id="4" value="2">2</option>
                        <option id="5" value="3">3</option>
                        <option id="6" value="4">4</option>
                        <option id="7" value="5">5</option>
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