import React from "react";
import "../../style/schedules.css"
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

function SchedulesClasses() {
    return(
        <div className="scheduleClasses">
            <div className="boxesSchedules">
                <div className="box">
                    <strong>Fisíca</strong>
                    <span>
                        <AvatarImage/>
                        Rodrigo
                    </span>
                </div>
                <div className="centerBox">
                    <span>Fluidos</span>
                </div>
                <div className="box">
                    <span>
                        Data: 30/04
                    </span>
                    <span>
                        R$20,00
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SchedulesClasses;