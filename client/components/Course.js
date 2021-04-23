import React from "react";
import Card from "./Card";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  gridItem: {
    maxWidth: 500,
  },
});

const Course = ({ course }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6}>
      <div style={{ width: "70%", margin: "0 auto" }}>
        <Card course={course} />
      </div>
    </Grid>
  );
};

export default Course;
