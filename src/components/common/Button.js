import styles from './Button.module.scss';

export const Button = ({label, size= 'base' , color}) => {
    // const size = styles[size]
    return (
        <button className={`${styles.button} ${styles[color]} ${styles[size]}`}>{label}</button>
    )
}