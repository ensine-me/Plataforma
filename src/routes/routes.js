import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Template from "../pages/Template";
import GoogleLoginAgendaCopy from "../GoogleLoginAgendaCopy";

const Routering = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Template />}/>
                <Route path="/minhas-aulas" element={''}/>
                <Route path="/minhas-aulas" element={''}/>
                <Route path="/google-login" element={<GoogleLoginAgendaCopy/>}/>
            </Routes>
        </Router>
    );
}

export default Routering;