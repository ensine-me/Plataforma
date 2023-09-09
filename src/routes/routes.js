import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Template from "../pages/Template";
import PerfilAluno from "../pages/PerfilAluno"
import PerfilProfessor from "../pages/PerfilProfessor";

const Routering = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Template />}/>
                <Route path="/perfil" element={<PerfilAluno />}/>
                <Route path="/professor" element={<PerfilProfessor />}/>
                <Route path="/minhas-aulas" element={''}/>
            </Routes>
        </Router>
    );
}

export default Routering;