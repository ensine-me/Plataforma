import React from "react";
import sFormacaoCard from "../styles/FormacaoCard.module.css"

const FormacaoCard = ({instituicao, tipo, periodo}) => {
    return (
        <>
        <div className={sFormacaoCard.card}>
            <div className={sFormacaoCard.instituicao}>
                <h5>
                    {instituicao}
                </h5>
            </div>
            <div className={sFormacaoCard.tipo}>
                {tipo}
            </div>
            <div className={sFormacaoCard.periodo}>
                {periodo}
            </div>
        </div>
        </>
        
    )
}

export default FormacaoCard;