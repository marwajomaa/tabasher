import React, { useState, useEffect } from "react";
import { UserContext } from "../../context/userContext";
import Nav from "../../components/Nav";
import CoursesList from "../../components/CoursesList";
import Footer from "../../components/Footer";

import styles from "../../styles/Home.module.css";

export default function Home({ courses }) {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    setToken(token);
  }, []);

  return (
    <UserContext.Provider value={{ token }}>
      <Nav />
      <div className={styles.container}>
        <h1>📒 الدورات المسجلة</h1>
        <CoursesList courses={courses} />
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export const getServerSideProps = async (context) => {
  const res = await fetch(
    "https://api.tabasher.dev/api/services/app/Curriculums/GetAll"
  );

  const data = await res.json();
  const result = await data.result;
  const lastCourse = await result[result.length - 1];

  const courses = await [lastCourse];

  return {
    props: {
      courses: courses || null,
    },
  };
};
