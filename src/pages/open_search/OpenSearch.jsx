import React from "react";
import "../../style/opensearch.css";
import SideBar from "../../components/sidebar/SideBar";
import Search from "../../components/search/Search";
import CardProfessor from "../../components/carProfessor/CardProfessor"
import CardAula from "../../components/cardAula/CardAula"

function OpenSearch() {
    return(
        <div className="general">
            <SideBar/>
            <div className="content">
                <div className="boxSearch">
                    <Search/>
                </div>
                <div className="boxesProcured">
                    <div className="box">
                        <h1>Professores</h1>
                        <div className="listCards">
                            <div className="contentList">
                                <CardProfessor/>
                                <CardProfessor/>
                                <CardProfessor/>
                                <CardProfessor/>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <h1>Aulas</h1>
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
                </div>
            </div>
        </div>
    )
}

export default OpenSearch;