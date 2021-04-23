import React from "react";
import styles from "../styles/Home.module.css";

function MainHero() {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroTitle}>
        <h1>الطبخ</h1>
        <h3>نفس</h3>
      </div>
    </div>
  );
}

export default MainHero;
