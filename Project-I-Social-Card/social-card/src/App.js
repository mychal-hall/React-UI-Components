import React from "react";
import "./App.css";

import HeaderContainer from "./components/HeaderComponents/HeaderContainer";
import CardContainer from "./components/CardComponents/CardContainer";

const App = () => {
  return (
    <div className="socialCard">
      <HeaderContainer />
      <CardContainer />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
