import React from "react";
import "../../style/professordash.css"
import SideBar from "../../components/sidebar/SideBar";
import Search from "../../components/search/Search";
import CardAula from "../../components/cardAula/CardAula";
import SchedulesClasses from "../../components/scheduleClasses/SchedulesClasses";

function ProfessorDashBoard(params) {
    return(
        <div className="general">
            <SideBar/>
            <div className="content">
                <div className="boxSearch">
                    <Search/>
                </div>
                <div className="boxesDash">
                    <div className="boxe">
                        <h1>Aulas Pendentes</h1>
                        <div className="listCards">
                            <div className="contentList">
                                <CardAula/>
                                <CardAula/>
                                <CardAula/>
                                <CardAula/>
                                <CardAula/>
                            </div>
                        </div>
                    </div>
                    <div className="boxe">
                        <h1>Aulas Marcadas</h1>
                        <div className="listCards">
                            <div className="contentList">
                                <SchedulesClasses/>
                                <SchedulesClasses/>
                                <SchedulesClasses/>
                                <SchedulesClasses/>
                                <SchedulesClasses/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfessorDashBoard;