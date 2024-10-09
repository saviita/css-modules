import styles from './card.module.css';

console.log('styles')
const Card = ({title, text, img}) => {
return <div className={title}>
    <img src={img} alt="" />
    <h1 className={'${}'}>{title}</h1>
    <p className={styles.text}>{text}</p>
    <button>Learn more</button>
</div>
}
export default Card;