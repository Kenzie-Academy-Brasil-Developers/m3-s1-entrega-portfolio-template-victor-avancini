import ProjectCard from "../ProjectCard"
import styles from './ProjectList.module.css'

const ProjectsList = ({ projects }) => {
    return (
        <div className={styles.projectList}>
            {projects.map((project, id) => (
                <ProjectCard key={id} project={project}/>
            ))}
        </div>
    );
};

export default ProjectsList