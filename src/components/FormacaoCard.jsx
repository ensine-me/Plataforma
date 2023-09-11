import React from "react";
import sFormacaoCard from "../style/formacaoCard.module.css"

const FormacaoCard = ({ dataInicio, dataTermino, instituicao, tipoFormacao, nomeCurso }) => {
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
                    {dataInicio} - {dataTermino}
                </div>
            </div>
        </>

    )
}

export default FormacaoCard;