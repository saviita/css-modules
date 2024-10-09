import styles from './card.module.css';

console.log('styles')
const Card = ({children, title, text, img}) => {
return <div className={styles.card}>
    <img src={img} alt="" />
    <h1 className={styles.title}>{children}</h1>
    <p className={styles.text}>{text}</p>
    <button className={styles.button}>Learn More</button>
</div>
}
export default Card;