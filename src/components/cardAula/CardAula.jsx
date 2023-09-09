import React from "react";
import "../../style/cardaula.css"
import GroupIcon from '@mui/icons-material/Group';
import Image from "../../img/pessoa-autentica-1024x717.jpg"
import Avatar from '@mui/material/Avatar';

const AvatarImage = () => {
    return(
        <div>
            <Avatar
                sx={{ width: 34, height: 34 }} 
                src={Image} 
            />
        </div>
    )
}

function CardAula() {
    return(

        <div className="cardAula">
            <div className="boxesAula">
                <div className="box">
                    <strong>Fisíca</strong>
                    <strong><GroupIcon fontSize="large"/>3/5</strong>
                </div>
                <div className="centerBox">
                    <span>Leis de Newton</span>
                </div>
                <div className="box">
                    <span>Data: 15/04</span>
                    <span>
                        <AvatarImage/>
                        <span>
                            Prof.<br/>
                            Isaque
                        </span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CardAula;