import React from "react";
import "./style.css";

function DesComp(props) {
    return (
        <div className="des-comp">
            {props.text}
        </div>
    );
}

export default DesComp;