import React from "react";
import "./Button.css";

const ActionButton = props => (
  <div className="actionButton">
    <h1>{props.actionbutton.action}</h1>
  </div>
);

export default ActionButton;
