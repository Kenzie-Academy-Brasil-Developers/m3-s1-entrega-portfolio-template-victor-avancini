import TechList from "../TechList"
import { technologies } from "../../data/technologies"
import styles from './TechSection.module.css'

const TechSection = () => {
    return (
        <section className={styles.techSection}>
            <div>
                <h2>Tecnologias</h2>
            </div>
            <div>
                <TechList technologies={technologies}/>
            </div>
        </section>
    )
}

export default TechSection