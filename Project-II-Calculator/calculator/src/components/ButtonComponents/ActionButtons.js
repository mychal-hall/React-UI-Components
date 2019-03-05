import React from "react";
import "./Button.css";
import ActionButton from "./ActionButton";

const actionButtons = [
  {
    action: "÷"
  },
  {
    action: "x"
  },
  {
    action: "-"
  },
  {
    action: "+"
  },
  {
    action: "="
  }
];

function ActionButtons(props) {
  return (
    <div className="actionButtons">
      {actionButtons.map((action, index) => (
        <ActionButton actionbutton={action} key={index} />
      ))}
    </div>
  );
}

export default ActionButtons;
