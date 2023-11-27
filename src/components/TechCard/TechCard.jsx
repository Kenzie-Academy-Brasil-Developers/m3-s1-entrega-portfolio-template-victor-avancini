import styles from './TechCard.module.css'

const TechCard = ({ technology }) => {
    return (
        <div className={styles.techCard}>
            <img src={technology.img} alt="technology.name"/>
            <p>{technology.name}</p>
        </div>
    )
}

export default TechCard