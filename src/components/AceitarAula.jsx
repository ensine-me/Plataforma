import sMarcarAula from "../styles/marcarAula.module.css"
import DateTimePickerComponent from "../components/DateTimePickerComponent"
import MultiTextField from "../components/MultiTextField"
import Swal from "sweetalert2"
const nomeAula = "Aula de biologia";
const nomeProf = "Elvis Presley";

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

const AceitarAula = () => {
    return (
        <>
            <div className={sMarcarAula.quadradoCinza}>
                <div className={sMarcarAula.marcarAulaColuna}>
                    <p className={sMarcarAula.paragrafoMarcarAula}>Data de Inicio:</p>
                    <DateTimePickerComponent />
                    <p className={sMarcarAula.paragrafoMarcarAula}>Data de Fim:</p>
                    <DateTimePickerComponent />
                    <p className={sMarcarAula.paragrafoMarcarAula}>Aula Privada:</p>
                    <select>
                        <option value="1">Privado</option>
                        <option value="2">Público</option>
                    </select>
                    <p className={sMarcarAula.paragrafoMarcarAula}>Máximo de participantes:</p>
                    <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className={sMarcarAula.marcarAulaColunaDireita}>
                    <h3>{nomeAula}</h3>
                    <h4>{nomeProf}</h4>
                    <p className={sMarcarAula.paragrafoMarcarAula}>Assunto:</p>
                    <MultiTextField/>
                    <button onClick={chamaSwal} className={sMarcarAula.botaoMarcarAula}>Aceitar Aula</button>
                </div>
            </div>
        </>
    )
}
export default AceitarAula