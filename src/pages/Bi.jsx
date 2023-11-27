import React from "react";
import ApplicationsDashboards from "../components/ApplicationsDashboards";

function Bi() {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            width: "100vw",
        }}>
            <ApplicationsDashboards/>
        </div>
    )
}

export default Bi;
