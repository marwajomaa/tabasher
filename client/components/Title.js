import React from "react";

const Title = ({
  text,
  fontSize,
  style = {
    textAlign: "center",
    fontSize: { fontSize } || 30,
    fontWeight: "bold",
  },
}) => {
  return <h1 style={style}>{text}</h1>;
};

export default Title;
