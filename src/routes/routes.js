import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Template from "../pages/Template";
import OpenSearch from "../pages/OpenSearch";
import ProfessorDashBoard from "pages/ProfessorDashBoard";
import GoogleLogin from "../GoogleLogin";
import PerfilAluno from "../pages/PerfilAluno"
import PerfilProfessor from "pages/PerfilProfessor";
import EscolherMaterias from "../components/EscolherMateria";
import PaginaInicialAluno from "../pages/PaginaInicialAluno";
import Layout from "../components/Layout";
import MinhasAulas from "../pages/MinhasAulas"
import SessionChecker from "../components/SessionChecker";
import Login from 'pages/Login';
import PaginaInicialInstitucional from "pages/PaginaInicialInstitucional";
import Cadastro from "pages/EscolhaCadastro";
import CadastroAluno from "pages/CadastroAluno"
import CadastroProfessor from "pages/CadastroProfessor"

const Routering = () => {
    return (
        <Router>
            <SessionChecker>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="/inicial-aluno" element={<PaginaInicialAluno />} />
                        <Route path="marcar-aula" element={<Template />} />
                        <Route path="perfil" element={<PerfilAluno />} />
                        <Route path="professor" element={<PerfilProfessor />} />
                        <Route path="minhas-aulas" element={<MinhasAulas />} />
                        <Route path="pesquisa-aberta" element={<OpenSearch />} />
                        <Route path="pesquisa" element={<ProfessorDashBoard />} />
                    </Route>
                </Routes>
            </SessionChecker>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" index element={<PaginaInicialInstitucional />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/cadastro/alunocad" element={<CadastroAluno />} />
                <Route path="/cadastro/professorcad" element={<CadastroProfessor />} />
                <Route path="escolher-materias" element={<EscolherMaterias />} />
                <Route path="google-login" element={<GoogleLogin />} />
            </Routes>
        </Router>
    );
}

export default Routering;
