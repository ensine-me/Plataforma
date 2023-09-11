import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Template from "../pages/Template";
import OpenSearch from "../pages/open_search/OpenSearch"
import ProfessorDashBoard from "../pages/professorDashBoard/ProfessorDashBoard"
import GoogleLogin from "../GoogleLogin";
import PerfilAluno from "../pages/PerfilAluno"
import PerfilProfessor from "../pages/PerfilProfessor";
import EscolherMaterias from "../components/EscolherMateria";
import Home from "../pages/Home";
import Layout from "../components/Layout";
import MinhasAulas from "../pages/MinhasAulas"
import SessionChecker from "../components/SessionChecker";

const Routering = () => {
    return (
        <Router>
            <SessionChecker>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="marcar-aula" element={<Template />} />
                        <Route path="perfil" element={<PerfilAluno />} />
                        <Route path="professor" element={<PerfilProfessor />} />
                        <Route path="minhas-aulas" element={<MinhasAulas />} />
                        <Route path="pesquisa-aberta" element={<OpenSearch />} />
                        <Route path="pesquisa" element={<ProfessorDashBoard />} />
                        <Route path="google-login" element={<GoogleLogin />} />
                    </Route>
                    <Route path="escolher-materias" element={<EscolherMaterias />} />
                </Routes>
            </SessionChecker>
        </Router>
    );
}

export default Routering;
