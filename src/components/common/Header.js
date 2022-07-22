import Image from 'next/image';
import { Button } from './Button';
import styles from './Header.module.scss';

export const Header = () => {
    return (
        <header className={styles.container}>
            <Image src='/assets/logo-dark.svg' width='102px' height="30px" alt='elearning logo'  />
            <Button label="Get Started" size="medium" color="blue" />
        </header>
    )
}