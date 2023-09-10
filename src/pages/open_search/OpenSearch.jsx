import React from "react";
import "../../style/opensearch.css";
import SideBar from "../../components/SideBar";
import Search from "../../components/search/Search";
import CardProfessor from "../../components/carProfessor/CardProfessor"
import CardAula from "../../components/cardAula/CardAula"

function OpenSearch() {
    return (
        <>
            <SideBar />
            <div className="contentOpenSearch">
                <div className="boxOpenSearch">
                    <Search />
                </div>
                <div className="boxesProcuredOpenSearch">
                    <div className="boxOpenSearch">
                        <h1>Professores</h1>
                        <div className="listCardsOpenSearch">
                            <div className="contentListOpenSearch">
                                <CardProfessor />
                                <CardProfessor />
                                <CardProfessor />
                                <CardProfessor />
                            </div>
                        </div>
                    </div>
                    <div className="boxOpenSearch">
                        <h1>Aulas</h1>
                        <div className="listCardsOpenSearch">
                            <div className="contentListOpenSearch">
                                <CardAula />
                                <CardAula />
                                <CardAula />
                                <CardAula />
                                <CardAula />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     
    )
}

export default OpenSearch;