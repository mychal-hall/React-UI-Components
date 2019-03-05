import React from "react";
import "./Button.css";

const NumberButton = props => (
  <div className="numberButton">
    <h1>{props.numberbutton.action}</h1>
  </div>
);

export default NumberButton;
