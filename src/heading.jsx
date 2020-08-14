import React from "react";
function Heading() {
  const date = new Date();
  const n = date.getHours();
  var text;
  var customStyle;
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
  return <h1 style={customStyle}>{text} </h1>;
}

export default Heading;
