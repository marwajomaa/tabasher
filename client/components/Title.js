import React from "react";

const Title = ({
  text,
  fontSz,
  style = {
    fontSize: { fontSz } || 30,
    fontWeight: "bold",
  },
}) => {
  return <h1 style={style}>{text}</h1>;
};

export default Title;
