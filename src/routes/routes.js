import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Template from "../pages/Template";
import GoogleLoginAgenda from "../GoogleLoginAgenda";

const Routering = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Template />}/>
                <Route path="/minhas-aulas" element={''}/>
                <Route path="/minhas-aulas" element={''}/>
                <Route path="/google-login" element={<GoogleLoginAgenda/>}/>
            </Routes>
        </Router>
    );
}

export default Routering;