import ProjectsList from "../ProjectsList"
import { projects } from "../../data/projects"
import styles from './ProjectSection.module.css'

const ProjectsSection = () => {
    return (
        <section className={styles.projectSection}>
            <div>
                <h2>Projetos</h2>
            </div>
            <div>
                <ProjectsList projects={projects} />
            </div>
        </section>
    )
}

export default ProjectsSection