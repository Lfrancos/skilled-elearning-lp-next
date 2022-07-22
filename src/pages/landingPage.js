import Head from "next/head";
import Image from "next/image";
import { Footer } from "../components/common/Footer";
import { Header } from "../components/common/Header";
import { LearningCard } from "../components/common/CourseCard";
import { Button } from "./../components/common/Button";
import styles from "./landingPage.module.scss";

export default function LandingPage() {
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
      </main>
      <Footer />
    </div>
  );
}
