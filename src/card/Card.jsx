import styles from './card.module.css';

console.log('styles')

const Card = ({children, title, text, img}) => {
    const colorButton = styles[`button-${title}`]

return <div className={`${styles.card} ${styles[title]}`}>
    <img src={img} alt="" />
    <h1 className={styles.title}>{children}</h1>
    <p className={styles.text}>{text}</p>
    <button className={`${styles.button} ${colorButton}`}>Learn More</button>
</div>
}
export default Card;

// className={`${titlecolor} ${styles.color}`}