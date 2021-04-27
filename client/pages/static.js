import React, { useState, useEffect } from "react";
import { UserContext } from "../context/userContext";
import Nav from "../components/Nav";
import Hero from "../components/MainHero";
import CoursesList from "../components/CoursesList";
import DigitalCourses from "../components/DigitalCourses";
import Title from "../components/Title";
import ChiefInfo from "../components/ChiefInfo";
import Footer from "../components/Footer";

import styles from "../styles/Home.module.css";

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
        <Hero />
        <Title text="عن الطبخ" />
        <CoursesList courses={courses} />
        <DigitalCourses />
        <ChiefInfo />
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export const getStaticProps = async (context) => {
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
