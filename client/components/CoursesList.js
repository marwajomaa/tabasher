import { Grid } from "@material-ui/core";
import Course from "./Course";
import Title from "./Title";
import styles from "../styles/Home.module.css";

export default function CoursesList({ courses }) {
  return (
    <div className={styles.coursesSection}>
      <Grid container spacing={4} className={styles.coursesWrapper}>
        {courses.map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </Grid>
    </div>
  );
}
