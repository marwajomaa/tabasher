import React, { useEffect, useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import Nav from "../../../components/Nav";
import Card from "../../../components/Card";
import Title from "../../../components/Title";
import Footer from "../../../components/Footer";

import courseStyles from "../../../styles/courseDetails.module.css";

export default function index({ course }) {
  const { token } = useAuth();
  const url = token ? "/" : "/user/register";

  const courseSections = () =>
    course.sections.map((section, i) => {
      return (
        <div className={courseStyles.contentRightTable} key={section.id}>
          <div>
            <h3>
              <span style={{ fontSize: "1.1rem" }}>{i + 1}</span>
              <span style={{ fontSize: "1.4rem" }}>قسم</span>
            </h3>
            <h2>{section.name}</h2>
          </div>
          {section.lectures.map((lecture) => (
            <div
              key={lecture.name}
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <h2>{lecture.name}</h2>
            </div>
          ))}
        </div>
      );
    });
  const courseDetails = (
    <div className={courseStyles.courseContainer}>
      <div className={courseStyles.contentLeft}>
        <Card course={course} courseDetails url={url} />
      </div>
      <div className={courseStyles.contentRight}>
        <Title text={course.name} />
        <div className={courseStyles.contentRightTop}>
          <div className={courseStyles.RightTopChild}>
            <h2>اخر تحديث</h2>
          </div>
          <div className={courseStyles.RightTopChild}>
            <h2>مدة الدورة</h2>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "500",
                direction: "rtl",
              }}
            >
              <span style={{ fontWeight: "900", marginLeft: "5px" }}>
                {course.totalHours}
              </span>
              <span style={{ fontWeight: "900" }}>ساعة</span>
            </h3>
          </div>
        </div>
        <div className={courseStyles.contentRightDescription}>
          <Title text="وصف الدورة" />
          <div
            style={{
              maxWidth: "700px",
              overflow: "hidden",
              fontSize: "1.1rem",
            }}
          >
            <h2 style={{ color: "#6c757d", marginBottom: "30px" }}>
              {course.description}
            </h2>
          </div>

          <div style={{ margin: "2rem 0" }}>
            <Title text="ماذا سوف تتعلم؟" />
            {JSON.parse(course.lessonsLearned).map((lesson, i, array) => {
              if (i === array.length - 1) return <span>{lesson.value}</span>;
              return <span> {lesson.value} ، </span>;
            })}
          </div>
          <div>
            <Title text="مواضيع الدورة" />
            {courseSections()}
          </div>
        </div>
      </div>
    </div>
  );

  const courseView = (
    <div className={courseStyles.courseContainer}>
      <div className={courseStyles.contentLeft}>
        <iframe
          src={"https://www.youtube.com/embed/LzeiQIiBRe8"}
          className={courseStyles.iframe}
        />
      </div>
      <div className={courseStyles.contentRightView}>
        <Title text={course.name} />
        {courseSections()}
      </div>
    </div>
  );
  return (
    <>
      <Nav />
      {token ? courseView : courseDetails}
      <Footer />
    </>
  );
}

export const getServerSideProps = async (context) => {
  const code = context.params.code;
  console.log(code);
  const res = await fetch(
    `https://api.tabasher.dev/api/services/app/Curriculums/GetCourseCurriculumByCode?code=${code}`
  );

  const data = await res.json();
  const course = await data.result;

  return {
    props: {
      course: course || null,
    },
  };
};
