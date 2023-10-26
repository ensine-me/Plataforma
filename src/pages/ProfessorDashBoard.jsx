import React from "react";
import "../assets/styles/professordash.css"
import SideBar from "../components/SideBar";
import CardAula from "../components/CardAula";

function ProfessorDashBoard() {
    return (
        <>
            <SideBar />
            <div className="contentProfessorDashboard">
                <div className="boxesDashProfessorDashboard">
                    <div className="boxProfessorDashboard">
                        <h1>Aulas Pendentes</h1>
                        <div className="contentListProfessorDashboard">
                            <CardAula />
                            <CardAula />
                            <CardAula />
                            <CardAula />
                            <CardAula />
                            <CardAula />
                            <CardAula />
                            <CardAula />
                            <CardAula />
                            <CardAula />
                        </div>
                    </div>
                    <div className="boxProfessorDashboard">
                        <h1>Aulas Marcadas</h1>
                        <div className="contentListProfessorDashboard">
                            <CardAula />
                            <CardAula />
                            <CardAula />
                            <CardAula />
                            <CardAula />
                            <CardAula />
                            <CardAula />
                            <CardAula />
                            <CardAula />
                            <CardAula />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfessorDashBoard;