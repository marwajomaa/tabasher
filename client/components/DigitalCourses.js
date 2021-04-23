import React from "react";
import Title from "../components/Title";

import styles from "../styles/Home.module.css";

export default function DigitalCourses() {
  return (
    <div className={styles.digitalCourseSection}>
      <Title text="المنتجات الرقمية" />
      <div>
        <h2>!لا يوجد دورات فعالة الان</h2>
      </div>
    </div>
  );
}
