import React from "react";
import "./Button.css";

import ActionButtons from "./ActionButtons";
import NumberButtons from "./NumberButtons";

function Buttons() {
    return(
        <div className="buttonContainer">
            <NumberButtons />
            <ActionButtons />
        </div>
    )
}

export default Buttons;