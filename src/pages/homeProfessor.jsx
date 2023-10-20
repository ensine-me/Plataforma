import cssPoggers from "../style/homeProfessor.module.css"
import Swal from "sweetalert2"
import { useEffect, useState } from "react"
import { useSession } from "@supabase/auth-helpers-react"

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



const fechaModal = () => {
    document.getElementById("marcarAulaContainer").style.visibility = "hidden";
}

const homeProfessor = () => {


    return (
        <>
            <div id="homeProfessorContainer" className={cssPoggers.box}>
                <div id="colunaEsquerda" className={cssPoggers.colunaEsquerda}>
                    <div id="objetosAcima" className={cssPoggers.objetosEsquerdaAcima}></div>
                    <div id="objetosAbaixo" className={cssPoggers.objetosEsquerdaAbaixo}></div>
                </div>
                <div id="colunaDireita" className={cssPoggers.colunaDireita}></div>
            </div>
        </>
    )
}
export default homeProfessor;