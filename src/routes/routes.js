import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Template from "../pages/Template";
import OpenSearch from "../pages/OpenSearch"
import ProfessorDashBoard from "../pages/ProfessorDashBoard"
import GoogleLogin from "../pages/GoogleLogin";
import PerfilAluno from "../pages/PerfilAluno"
import PerfilProfessor from "../pages/PerfilProfessor";
import Layout from "../components/Layout";
import MinhasAulas from "../pages/MinhasAulas"
import EscolherMaterias from "../pages/EscolherMaterias"
import Home from "../pages/Home"
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
                        <Route path="escolher-materias" element={<EscolherMaterias />} />
                    </Route>
                </Routes>
            </SessionChecker>
        </Router>
    );
}

export default Routering;