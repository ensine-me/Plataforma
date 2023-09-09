import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Template from "../pages/Template";
import GoogleLogin from "../GoogleLogin";

const Routering = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Template />}/>
                <Route path="/minhas-aulas" element={''}/>
                <Route path="/minhas-aulas" element={''}/>
                <Route path="/google-login" element={<GoogleLogin/>}/>
            </Routes>
        </Router>
    );
}

export default Routering;