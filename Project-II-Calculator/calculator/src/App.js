import React from "react";
import "./App.css";

import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ActionButtons from "./components/ButtonComponents/ActionButtons";

const App = () => {
  return (
    <div className="container">
      <CalculatorDisplay />
      <ActionButtons />
    </div>
  );
};

export default App;
