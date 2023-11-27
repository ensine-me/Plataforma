import React from "react";
import sFormacaoCard from "../assets/styles/formacaoCard.module.css"

const FormacaoCard = ({ dataInicio, dataTermino, instituicao, tipoFormacao, nomeCurso }) => {
    const anoInicio = new Date(dataInicio).getFullYear();
    const anoTermino = new Date(dataTermino).getFullYear();
    return (
        <>
            <div className={sFormacaoCard.card}>
                <div className={sFormacaoCard.instituicao}>
                    <h5>
                        {instituicao}
                    </h5>
                </div>
                <div className={sFormacaoCard.curso}>
                    {nomeCurso}
                </div>
                <div className={sFormacaoCard.tipo}>
                    {tipoFormacao}
                </div>
                <div className={sFormacaoCard.periodo}>
                    {anoInicio} - {anoTermino}
                </div>
            </div>
        </>

    )
}

export default FormacaoCard;