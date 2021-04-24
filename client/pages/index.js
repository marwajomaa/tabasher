import Nav from "../components/Nav";
import Hero from "../components/MainHero";
import CoursesList from "../components/CoursesList";
import DigitalCourses from "../components/DigitalCourses";
import Title from "../components/Title";
import ChiefInfo from "../components/ChiefInfo";
import Footer from "../components/Footer";

import styles from "../styles/Home.module.css";

const courses = [
  {
    id: 1,
    title: "اساسيات الطبخ",
    description:
      "الطبخ هو عبارةٌ عن عمليةٍ يتمّ من خلالها دمج الأطعمة، وإضافة البهارات، والتوابل والمنكهات المختلفة إليها بأساليبَ، وطرقٍ مختلفةٍ بهدف جعلها جاهزة للأكل، وقد اختلف مفهوم الطبخ في ال...",
    price: 0,
    image:
      "https://tabasher-dev-storage.fra1.digitaloceanspaces.com/e005fcf3-acf7-4fd9-8122-e8e396a3d7d0.jpg",
    lastUpdate: "",
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
  },
];

export default function Home({ courses }) {
  console.log(courses[0]);
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <Hero />
        <Title text="عن الطبخ" />
        <CoursesList courses={courses} />
        <DigitalCourses />
        <ChiefInfo />
        <Footer />
      </div>
    </>
  );
}
