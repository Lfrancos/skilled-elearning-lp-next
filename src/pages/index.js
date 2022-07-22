import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Footer } from "../components/common/Footer";
import { Header } from "../components/common/Header";
// import { LearningCard } from "../components/common/LearningCard";
import { Button } from "./../components/common/Button";
import styles from "./landingPage.module.scss";
import { CourseCard } from "../components/common/CourseCard";

export default function Home() {
  const [courses, setCourses] = useState([
    {
      name: "Animation",
      description:
        "Learn the latest animation techniques to create stunning motion design and captivate your audience.",
      icon: "/assets/icon-animation.svg",
    },

    {
      name: "Design",
      description:
        "Create beautiful, usable interfaces to help shape the future of how the web looks.",
      icon: "/assets/icon-design.svg",
    },

    {
      name: "Photography",
      description:
        "Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.",
      icon: "/assets/icon-photography.svg",
    },

    {
      name: "Crypto",
      description:
        "All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.",
      icon: "/assets/icon-crypto.svg",
    },

    {
      name: "Business",
      description:
        "A step-by-step playbook to help you start, scale, and sustain your business without outside investment.",
      icon: "/assets/icon-business.svg",
    },
  ]);

  return (
    <div>
      <Head>
        <title>Landing page</title>
        <meta
          name="landing page elearning"
          content="the best elearning platform created, here you will be able to learn about animation "
        />
      </Head>
      <Header />
      <main>
        <h1>Maximize skill, minimize budget</h1>
        <p>
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </p>
        <Button label="Get Started" size="large" color="orangeGradient" />
        <div className={styles.imageContainer}>
          <div className={styles.image}>
            <Image
              src="/assets/image-hero-mobile@2x.png"
              width="300"
              height="300"
              alt="content"
            />
          </div>
        </div>
        <div className={styles.grid}>
          <div className={styles.card}>
            <p>Check out our most popular courses!</p>
          </div>
          {courses.map((course) => {
            return (
              <CourseCard
                key={course.name}
                icon={course.icon}
                name={course.name}
                description={course.description}
              />
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}
