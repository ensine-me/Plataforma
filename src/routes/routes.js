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
// import CadastroAluno from "pages/CadastroAluno"
import CadastroProfessor from "pages/CadastroProfessor"
import LogOut from "pages/LogOut";
import DetalhesAula from "../pages/DetalhesAula";
import EscolhaCadastro from "../pages/EscolhaCadastro";
import HomeProfessor from "../pages/homeProfessor"
import Mensagens from "../components/Mensagens";
import Bi from "pages/Bi";

const Routering = () => {
    return (
        <Router>
            <Routes>
                <Route element={<SessionChecker><Layout /></SessionChecker>}>
                    <Route path="/inicial-aluno" element={<PaginaInicialAluno />} />
                    <Route path="perfil" element={<PerfilAluno />} />
                    <Route path="mensagens" element={<Mensagens />} />
                    <Route path="professor" element={<PerfilProfessor />} />
                    <Route path="minhas-aulas" element={<MinhasAulas />} />
                    <Route path="pesquisa-aberta" element={<OpenSearch />} />
                    <Route path="pesquisa" element={<ProfessorDashBoard />} />
                    <Route path="aula" element={<DetalhesAula />} />
                    <Route path="home-professor" element={<HomeProfessor />} />
                </Route>
            </Routes>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" index element={<PaginaInicialInstitucional />} />
                <Route path="/cadastro" element={<Cadastro />} />
                {/* <Route path="/cadastro/alunocad" element={<CadastroAluno />} /> */}
                <Route path="/cadastro-professor" element={<CadastroProfessor />} />
                <Route path="escolher-materias" element={<EscolherMaterias />} />
                <Route path="escolher-papel" element={<EscolhaCadastro />} />
                <Route path="google-login" element={<GoogleLogin />} />
                <Route path="sign-out" element={<LogOut />} />
                <Route path="bi-pf" element={<Bi />} />
            </Routes>
        </Router>
    );
}

export default Routering;
