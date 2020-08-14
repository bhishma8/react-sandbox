import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "red",
  fontSize: "20px"
};
ReactDOM.render(
  <div>
    <h1 style={customStyle}>Hello World ! </h1>
  </div>,
  document.getElementById("root")
);
