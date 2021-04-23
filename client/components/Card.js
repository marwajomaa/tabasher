import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@material-ui/core";

import T from "./Typography";

const useStyles = makeStyles({
  btn: {
    "& :hover": {
      cursor: "pointer",
      color: "blue",
    },
  },
});

export default function MediaCard({ course }) {
  const classes = useStyles();

  return (
    <Card
      style={{
        width: "100%",
        minWidth: 350,
        borderRadius: 15,
        marginTop: 30,
        margin: "0 auto",
      }}
    >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={course.image}
          title={course.title}
          component="img"
          alt="Contemplative Reptile"
          height="300"
        />
        <CardContent style={{ background: "#f7f7f7" }}>
          <T variant="h4" component="h2" text={course.title} />
          <T
            variant="h5"
            component="h2"
            text={course.price}
            color="textSecondary"
          />
          <T variant="h5" component="h4" text={course.description} />
        </CardContent>
      </CardActionArea>
      <CardActions style={{ background: "#f7f7f7", padding: "20px 0" }}>
        <button
          className={classes.btn}
          style={{
            margin: "0 auto",
            textAlign: "center",
            width: "90%",
            height: "60px",
            border: "1px solid #000",
            borderRadius: "5px",
            background: "#fff",
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          اشترك الان
        </button>
      </CardActions>
    </Card>
  );
}
