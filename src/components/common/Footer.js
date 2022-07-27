import Image from "next/image";
import { Button } from "./Button";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.container}>

      <div className={styles.containerFlex}>
        <Image
          src="/assets/logo-light.svg"
          width="102px"
          height="30px"
          alt="elearning logo"
        />
        <Button label="Get Started" size="medium" color="blueGradient" />
      </div>
    </footer>
  );
};
