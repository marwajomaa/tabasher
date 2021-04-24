import React from "react";
import Nav from "../../../components/Nav";
import Card from "../../../components/Card";
import Title from "../../../components/Title";
import Footer from "../../../components/Footer";

import courseStyles from "../../../styles/courseDetails.module.css";

const COURSE = {
  id: 1,
  title: "اساسيات الطبخ",
  description:
    "الطبخ هو عبارةٌ عن عمليةٍ يتمّ من خلالها دمج الأطعمة، وإضافة البهارات، والتوابل والمنكهات المختلفة إليها بأساليبَ، وطرقٍ مختلفةٍ بهدف جعلها جاهزة للأكل، وقد اختلف مفهوم الطبخ في العصر الحديث عن العصور القديمة فلم يعد الطبخ مهماً من أجل سدّ الجوع فقط، بل أصبح يهتم بالتفنّن في تحضير، وتقديم الأطباق المختلفة، والتنافس على إظهارها بأجمل الأشكال، وأغنى المكوّنات. إقرأ المزيد على موضوع.كوم",
  price: 0,
  image:
    "https://tabasher-dev-storage.fra1.digitaloceanspaces.com/e005fcf3-acf7-4fd9-8122-e8e396a3d7d0.jpg",
  lastUpdate: "",
  duration: 100,
  requirements: ["فرن"],
  output: ["الطبخ", "أساسيات", "مياه"],
  topics: [
    {
      section: 1,
      chief: "منال العالم",
      title: "بطاطس بحشوة الجبن",
    },
    {
      section: 2,
      chief: "رمزي المعصب",
      title: "المشروم",
    },
  ],
};

export default function index({ course = COURSE }) {
  return (
    <>
      <Nav />
      <div className={courseStyles.courseContainer}>
        <div className={courseStyles.contentLeft}>
          <Card course={course} courseDetails />
        </div>
        <div className={courseStyles.contentRight}>
          <Title text={course.title} />
          <div className={courseStyles.contentRightTop}>
            <div className={courseStyles.RightTopChild}>
              <h2>اخر تحديث</h2>
            </div>
            <div className={courseStyles.RightTopChild}>
              <h2>مدة الدورة</h2>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "500" }}>
                {course.duration} ساعة
              </h3>
            </div>
          </div>
          <div className={courseStyles.contentRightDescription}>
            <Title text="وصف الدورة" />
            <h2 style={{ color: "#6c757d", marginBottom: "30px" }}>
              {course.description}
            </h2>

            <div style={{ margin: "2rem 0" }}>
              <Title text="ماذا سوف تتعلم؟" />
              {course.output.map((e, i) => {
                if (i === course.output.length - 1) return <span>{e}</span>;
                return <span>{` ${e} ، `}</span>;
              })}
            </div>
            <div>
              <Title text="مواضيع الدورة" />
              {course.topics.map((topic, i) => {
                return (
                  <div className={courseStyles.contentRightTable}>
                    <div>
                      <h3>{topic.section}قسم</h3>
                      <h2>{topic.chief}</h2>
                    </div>
                    <div
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <h2>{topic.title}</h2>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
