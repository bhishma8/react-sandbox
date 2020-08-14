import React from "react";
import ReactDOM from "react-dom";
const date = new Date();
const n = date.getHours();
let text;
let customStyle;
if (n > 0 && n < 12) {
  text = "Good morning";
  customStyle = {
    color: "red"
  };
} else if (n > 12 && n < 18) {
  text = "Good afternoon";
  customStyle = {
    color: "green"
  };
} else {
  text = "Good evening";
  customStyle = {
    color: "blue"
  };
}

ReactDOM.render(
  <div>
    <h1 style={customStyle}>{text} </h1>
  </div>,
  document.getElementById("root")
);
