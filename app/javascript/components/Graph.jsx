import React from "react";
import WatchData from "./WatchData";


const Graph = () => {

    return (
        <div style={{display: "flex", border: "2px solid black", height: "250px", width: "250px"}}>
            <div style={{display: "flex", flexDirection: "row"}}>
                <WatchData/>
            </div>
        </div>
    )
}

export default Graph;