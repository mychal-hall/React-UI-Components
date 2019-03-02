import React from "react";
import "./Button.css";
import NumberButton from "./NumberButton";

const numberButtons = [
  {
    action: "7"
  },
  {
    action: "8"
  },
  {
    action: "9"
  },
  {
    action: "4"
  },
  {
    action: "5"
  },
  {
    action: "6"
  },
  {
    action: "1"
  },
  {
    action: "2"
  },
  {
    action: "3"
  }
];

function NumberButtons(props) {
  return (
    <div className="numberButtons">
      <h1 className="clearButton">clear</h1>
      {numberButtons.map((action, index) => (
        <NumberButton numberbutton={action} key={index} />
      ))}
      <h1 className="zeroButton">0</h1>
    </div>
  );
}

export default NumberButtons;
