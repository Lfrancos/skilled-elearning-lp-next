import Image from "next/image";
import { Button } from "./Button";
import styles from './CourseCard.module.scss';

export const CourseCard = ({ name, description, icon }) => {
  return (
    <div className={`${styles.container} ${styles[name.toLowerCase()]}`}>
      <Image src={icon} alt={icon} width="56" height="56" />
      <h2>{name}</h2>
      <p>{description}</p>
      <Button label="Get Started" />
    </div>
  );
};
