import React from "react";
import NavBar from "../components/NavBarDash";
import ApplicationsDashboards from "../components/ApplicationsDashboards";

function Bi() {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            width: "100vw",
        }}>
            <NavBar/>
            <ApplicationsDashboards/>
        </div>
    )
}

export default Bi;
