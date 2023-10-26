import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OpenSearch from "../pages/OpenSearch";
import ProfessorDashBoard from "pages/ProfessorDashBoard";
import GoogleLogin from "../GoogleLogin";
import PerfilAluno from "../pages/PerfilAluno"
import PerfilProfessor from "pages/PerfilProfessor";
import EscolherMaterias from "../pages/EscolherMateria";
import PaginaInicialAluno from "../pages/PaginaInicialAluno";
import Layout from "../components/Layout";
import MinhasAulas from "../pages/MinhasAulas"
import SessionChecker from "../components/SessionChecker";
import Login from 'pages/Login';
import PaginaInicialInstitucional from "pages/PaginaInicialInstitucional";
import Cadastro from "pages/EscolhaCadastro";
import CadastroAluno from "pages/CadastroAluno"
import CadastroProfessor from "pages/CadastroProfessor"
import LogOut from "pages/LogOut";

const Routering = () => {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/inicial-aluno" element={<SessionChecker><PaginaInicialAluno /></SessionChecker>} />
                    <Route path="perfil" element={<SessionChecker><PerfilAluno /></SessionChecker>} />
                    <Route path="professor" element={<SessionChecker><PerfilProfessor /></SessionChecker>} />
                    <Route path="minhas-aulas" element={<SessionChecker><MinhasAulas /></SessionChecker>} />
                    <Route path="pesquisa-aberta" element={<SessionChecker><OpenSearch /></SessionChecker>} />
                    <Route path="pesquisa" element={<SessionChecker><ProfessorDashBoard /></SessionChecker>} />
                </Route>
            </Routes>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" index element={<PaginaInicialInstitucional />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/cadastro/alunocad" element={<CadastroAluno />} />
                <Route path="/cadastro/professorcad" element={<CadastroProfessor />} />
                <Route path="escolher-materias" element={<EscolherMaterias />} />
                <Route path="google-login" element={<GoogleLogin />} />
                <Route path="sign-out" element={<LogOut />} />
            </Routes>
        </Router>
    );
}

export default Routering;
