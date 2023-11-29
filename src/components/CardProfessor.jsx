import React from "react";
import "../assets/styles/cardprofessor.css"
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import DisciplinaDoProfessor from './DisciplinaDoProfessor';
import { Link } from "react-router-dom";


function CardProfessor({ nome, materias, preco, id, foto, nota }) {

    const notaValue = nota === null || nota === 0 ? 0 : nota;

    return (
        <Link to={'/professor?id=' + id}>
            <div className="carProfessor">
                <div className="apresetationUser">
                    <div>
                        <Avatar
                            sx={{ width: 90, height: 90 }}
                            src={foto}
                            variant="rounded"
                        />
                    </div>
                    <Rating
                        name="avaliacao-professor"
                        value={notaValue}
                        precision={0.5}
                        readOnly
                    />
                </div>
                <div className="boxesInfoUser">
                    <div className="box">
                        <strong>{nome}</strong>
                    </div>
                    <div className="box">
                        {materias.map((disciplina, index) => {
                            return (
                                <DisciplinaDoProfessor key={index} disciplina={disciplina.nome} />
                            )
                        })}
                    </div>
                    <div className="box">
                        <span><b>Hora Aula: R${preco}</b></span>
                    </div>
                </div>
            </div>
        </Link>

    )
}

export default CardProfessor;