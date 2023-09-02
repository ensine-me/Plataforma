import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Template from "../pages/Template";

const Routering = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Template />}/>
                <Route path="/minhas-aulas" element={''}/>
                <Route path="/minhas-aulas" element={''}/>
            </Routes>
        </Router>
    );
}

export default Routering;