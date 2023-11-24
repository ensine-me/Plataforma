import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PoliticaDePrivacidade from "../pages/PoliticaDePrivacidade";
import OpenSearch from "../pages/OpenSearch";
import ProfessorDashBoard from "pages/ProfessorDashBoard";
import PerfilAluno from "../pages/PerfilAluno"
import PerfilProfessor from "pages/PerfilProfessor";
import EscolherMaterias from "../pages/EscolherMateria";
import PaginaInicialAluno from "../pages/PaginaInicialAluno";
import Layout from "../components/Layout";
import MinhasAulas from "../pages/MinhasAulas"
import PaginaInicialInstitucional from "pages/PaginaInicialInstitucional";
import CadastroAluno from "pages/CadastroAluno"
import CadastroProfessor from "pages/CadastroProfessor"
import DetalhesAula from "../pages/DetalhesAula";
import EscolhaCadastro from "../pages/EscolhaCadastro";
import HomeProfessor from "../pages/homeProfessor"
import Mensagens from "../components/Mensagens";
import CadastroProfessorLocal from "pages/CadastroProfessorLocal";
import Bi from "pages/Bi";
import Login from 'pages/Login';
import NotFoundPage from "pages/NotFoundPage";

import LogOut from "pages/LogOut";
import CheckGoogleLogin from "pages/CheckGoogleLogin";
import ConectarComGoogle from "pages/ConectarComGoogle";
import GoogleLogin from "../GoogleLogin";
import LoginChecker from "components/LoginChecker";
import TermosDeUso from "pages/TermosDeUso";

// import SessionChecker from "../components/SessionChecker";

const Routering = () => {
    return (
        <Router>
            <Routes>
                <Route element={<LoginChecker><Layout /></LoginChecker>}>
                    <Route path="/inicial-aluno" element={<PaginaInicialAluno />} />
                    <Route path="/perfil" element={<PerfilAluno />} />
                    <Route path="/mensagens" element={<Mensagens />} />
                    <Route path="/professor" element={<PerfilProfessor />} />
                    <Route path="/minhas-aulas" element={<MinhasAulas />} />
                    <Route path="/pesquisa-aberta" element={<OpenSearch />} />
                    <Route path="/pesquisa" element={<ProfessorDashBoard />} />
                    <Route path="/aula" element={<DetalhesAula />} />
                    <Route path="/home-professor" element={<HomeProfessor />} />
                    <Route path="/conectar-com-google" element={<ConectarComGoogle />} />
                </Route>
            </Routes>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" index element={<PaginaInicialInstitucional />} />
                <Route path="/cadastro-aluno" element={<CadastroAluno />} />
                <Route path="/cadastro-professor" element={<CadastroProfessor />} />
                <Route path="/bi-pf" element={<Bi />} />
                <Route path="/escolher-materias" element={<EscolherMaterias />} />
                <Route path="/escolher-papel" element={<EscolhaCadastro />} />
                <Route path="/google-login" element={<GoogleLogin />} />
                <Route path="/sign-out" element={<LogOut />} />
                <Route path="/cadastro-professor-local" element={<CadastroProfessorLocal />} />
                <Route path="/check-google-login" element={<CheckGoogleLogin />} />
                <Route path="/politica-de-privacidade" element={<PoliticaDePrivacidade />} />
                <Route path="/termos-de-uso" element={<TermosDeUso />} />
                <Route path="/*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
}

export default Routering;
