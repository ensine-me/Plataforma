import React from "react";
import "../../style/cardprofessor.css"
import Avatar from '@mui/material/Avatar';
//import Image from "../../img/pessoa-autentica-1024x717.jpg"
import Image from "../images/png/logo-black.png"
import Rating from '@mui/material/Rating';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const MattersUser = () => {
    return (
        <Stack direction="row" spacing={1}>
          <Chip label="Matemática" />
          <Chip label="Fisíca"/>
        </Stack>
      );
}

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

function CardProfessor() {
    
    return(
        <div className="carProfessor">
            <div className="apresetationUser">
                <AvatarImage/>
                <RatingUser/>
            </div>
            <div className="boxesInfoUser">
                <div className="box">
                    <strong>Mauru César</strong>
                    <LevelUser/>
                </div>
                <div className="box">
                    <MattersUser/>
                </div>
                <div className="box">
                    <span><b>Hora Aula: R$20,00</b></span>
                </div>
            </div>
        </div>
    )
}

export default CardProfessor;