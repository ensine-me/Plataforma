import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Template from "../pages/Template";
import OpenSearch from "../pages/open_search/OpenSearch"
import ProfessorDashBoard from "../pages/professorDashBoard/ProfessorDashBoard"

const Routering = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Template />}/>
                <Route path="/minhas-aulas" element={''}/>
                <Route path="/minhas-aulas" element={''}/>
                <Route path="/pesquisa" element={<OpenSearch/>}/>
                <Route path="/pesquisa" element={<ProfessorDashBoard/>}/>
            </Routes>
        </Router>
    );
}

export default Routering;