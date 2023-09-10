import React from "react";
import "../../style/cardprofessor.css"
import Avatar from '@mui/material/Avatar';
//import Image from "../../img/pessoa-autentica-1024x717.jpg"
import Image from "../images/png/logo-black.png"
import Rating from '@mui/material/Rating';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import DisciplinaDoProfessor from '../DisciplinaDoProfessor';
import { Link } from "react-router-dom";
import { useState } from 'react';


const LevelUser = () => {
    return (
        <Stack direction="row" spacing={1}>
          <Chip 
            label="Nível: 16" 
            color="success"
            variant="outlined"
          />
        </Stack>
      );
}

const RatingUser = () => {
    const [value] = React.useState(3)

    return (
        <div>
            <Rating 
            name="read-only" 
            value={value} 
            readOnly
            size="small"
            />
        </div>
    );
}

const AvatarImage = () => {
    return(
        <div>
            <Avatar
                sx={{ width: 90, height: 90 }} 
                src={Image} 
                variant="rounded"
            />
        </div>
    )
}

function CardProfessor({nome, materias, preco, id}) {
    return(
        <div className="carProfessor">
            <Link to={'/professor?id=' + id}>
                <div className="apresetationUser">
                    <AvatarImage/>
                    <RatingUser/>
                </div>
                <div className="boxesInfoUser">
                    <div className="box">
                        <strong>{nome}</strong>
                        <LevelUser/>
                    </div>
                    <div className="box">
                        {materias.map((disciplina, index) => {
                            return (
                                <DisciplinaDoProfessor key={index} disciplina={disciplina.nome} />
                            )
                        })}
                    </div>
                    <div className="box">
                        <span><b>Hora Aula: R$20,00</b></span>
                    </div>
                </div>
                
            </Link>
        </div>
    )
}

export default CardProfessor;