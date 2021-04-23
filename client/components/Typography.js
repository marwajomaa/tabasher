import React from "react";
import { Typography } from "@material-ui/core";

export default function T({ variant, component, text, ...props }) {
  return (
    <>
      <Typography
        gutterBottom
        variant={variant}
        component={component}
        align="right"
      >
        {text}
      </Typography>
    </>
  );
}
