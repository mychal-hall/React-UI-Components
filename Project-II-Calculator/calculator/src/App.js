import React from "react";
import "./App.css";

import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import Buttons from "./components/ButtonComponents/Buttons"

const App = () => {
  return (
    <div className="container">
      <CalculatorDisplay />
      <Buttons />
    </div>
  );
};

export default App;
