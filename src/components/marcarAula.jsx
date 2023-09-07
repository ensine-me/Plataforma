import cssPoggers from "../style/marcarAula.module.css"
import DateTimePickerComponent from "../components/DateTimePickerComponent"
import MultiTextField from "../components/MultiTextField"
import GoogleLoginAgenda from "../GoogleLoginAgenda"
import BasicTextField from "./BasicTextField"
import Swal from "sweetalert2"

const nomeAula = "Aula de Fisica";
const nomeProf = "Oppenheimer";
const chamaSwal = () => {
    document.getElementById("quadradoCinza").style.display = "none";
    Swal.fire({
        icon: 'success',
        title: 'Aula aceita',
        text: 'Verifique seu Google Agenda',
        showCancelButton: false,
        showConfirmButton: true,
        confirmButtonText: 'Ver minhas aulas',
        confirmButtonColor: '#28a745',
    }).then((result) => {
        // Redirecione ou adicione ação do botão "Ver minhas aulas" aqui
        if (result.isConfirmed) {
            // Você pode redirecionar o usuário para a página de suas aulas ou executar alguma outra ação
            // Neste exemplo, apenas exibimos uma mensagem
            Swal.fire({
                icon: 'info',
                title: 'Redirecionando...',
                timer: 2000, // Tempo em milissegundos
                showConfirmButton: false,
                onClose: () => {
                    // Redirecionar o usuário após 2 segundos
                    window.location.href = 'sua_pagina_de_aulas.html';
                }
            });
        }
    });
  }

const MarcarAula = () => {
    return (
        <>
            <div id="quadradoCinza" className={cssPoggers.quadradoCinza}>
                <div className={cssPoggers.marcarAulaColuna}>
                    <p className={cssPoggers.paragrafoMarcarAula}>Data de Inicio:</p>
                    <DateTimePickerComponent onChange={GoogleLoginAgenda.setStart} value={GoogleLoginAgenda.start}/>
                    <p className={cssPoggers.paragrafoMarcarAula}>Data de Fim:</p>
                    <DateTimePickerComponent onChange={GoogleLoginAgenda.setEnd} value={GoogleLoginAgenda.end}/>
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
                <BasicTextField  onChange={(e) => GoogleLoginAgenda.setEventName(e.target.value)}/>
                    <h4>{nomeProf}</h4>
                    <MultiTextField onChange={(e) => GoogleLoginAgenda.setEventDescription(e.target.value)}/>
                    
                    <button onClick={chamaSwal} className={cssPoggers.botaoMarcarAula}>Marcar Aula</button>
                </div>
            </div>
        </> 
    )
}
export default MarcarAula