import React from "react";
import "./Card.css";

function CardContent() {
  return (
    <div className="cardContent">
      <h1 className="getStarted">Get started with React</h1>
      <p className="cardSummary">
        React makes it painless to create interactive UIs. Design simple views
        for each state in you application.
      </p>
      <p className="reactLink">
        <a href="https://reactjs.org/">reactjs.org</a>
      </p>
    </div>
  );
}

export default CardContent;
