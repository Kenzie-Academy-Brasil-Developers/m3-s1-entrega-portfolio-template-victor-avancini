import gitIconImg from '../../assets/git-icon.png';
import styles from './ProjectCard.module.css'

const ProjectCard = ({ project }) => {
    return (
        <div className={styles.projectCard}>
            <div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <a href="#">Saiba mais</a>
            </div>
            <div>
                <img src={gitIconImg} alt="git-icon" />
            </div>
        </div>
    )
}

export default ProjectCard