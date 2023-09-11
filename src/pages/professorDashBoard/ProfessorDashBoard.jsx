import React from "react";
import "../../style/professordash.css"
import SideBar from "../../components/SideBar";
import Search from "../../components/search/Search";
import CardAula from "../../components/cardAula/CardAula";

function ProfessorDashBoard() {
    return (
        <>
            <SideBar />
            <div className="contentProfessorDashboard">
                <div className="boxSearchProfessorDashboard">
                    <Search />
                </div>
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