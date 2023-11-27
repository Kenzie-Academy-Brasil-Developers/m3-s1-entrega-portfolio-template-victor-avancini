import TechCard from "../TechCard/TechCard";
import styles from './TechList.module.css'


const TechList = ({ technologies }) => {
    return (
        <div className={styles.techList}>
            {technologies.map((tech, id) => (
                <TechCard key={id} technology={tech}/>
            ))}
        </div>
    );
};

export default TechList