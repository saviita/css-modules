import styles from './card.modules.css';

const Card = ({title, text, img}) => {

return <div>
    <img src={img} alt="" />
    <h1 className={'${}'}>{title}</h1>
    <p>{text}</p>
    <button>Learn more</button>
</div>
}
export default Card