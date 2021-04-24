import React from "react";
import Link from "next/link";
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
import Title from "./Title";

const useStyles = makeStyles({
  btn: {
    "& :hover": {
      cursor: "pointer",
      color: "blue",
    },
  },
});

export default function MediaCard({ course, courseDetails }) {
  const classes = useStyles();
  const slicedText = course.description.slice(0, 175) + "...";

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
          <T variant="h5" component="h4" text={slicedText} />
        </CardContent>
      </CardActionArea>
      <CardActions
        style={{
          display: "flex",
          flexDirection: "column",
          background: "#f7f7f7",
        }}
      >
        <Button
          href={courseDetails ? "/#" : `/course/${course.id}`}
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
          {courseDetails ? "شراء مباشر" : "اشترك الان"}
        </Button>
        {courseDetails && (
          <div style={{ textAlign: "right", marginRight: "-120px" }}>
            <Title text="متطلبات الدورة" />
            {course.requirements?.map((item) => (
              <h3>{item}</h3>
            ))}
          </div>
        )}
      </CardActions>
    </Card>
  );
}
