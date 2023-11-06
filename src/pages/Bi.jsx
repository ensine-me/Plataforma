import React from "react";
import NavBarDash from "../components/NavBarDash";
import ApplicationsDashboards from "../components/ApplicationsDashboards";

function Bi() {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
        }}>
            <NavBarDash/>
            <ApplicationsDashboards/>
        </div>
    )
}

export default Bi;