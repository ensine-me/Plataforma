import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBar from "../Search";
import MiniDrawer from "../teste";

const Routering = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={MiniDrawer}/>
                <Route path="../Search" element={SearchBar} />
            </Routes>
        </Router>
    );
}

export default Routering;
