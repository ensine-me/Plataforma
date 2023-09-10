import React from "react";
import sMateriaProfessor from '../styles/MateriaProfessor.module.css'

const MateriaProfessor = ({materia}) => {
    return (
        <>
            <div className={sMateriaProfessor.container}>
                {materia}
            </div>
        </>
        
    )
}

export default MateriaProfessor;