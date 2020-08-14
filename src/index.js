import React from "react";
import ReactDOM from "react-dom";
const name = "Ishan";
const number = 7;
ReactDOM.render(
  <div>
    <h1>Hello {name} </h1>
    <p>Your lucky number is {number} </p>
  </div>,
  document.getElementById("root")
);
