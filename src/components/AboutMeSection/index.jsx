import styles from './AboutMeSection.module.css'

const AboutMeSection = () => {
    return (
        <section className={styles.aboutMeSection}>
            <div>
                <h2>Sobre mim</h2>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ex magna, imperdiet sodales sem quis, sollicitudin lobortis purus. Etiam a ipsum finibus, dictum leo non, ultrices dui. Nunc id felis pharetra, vehicula enim in, suscipit nisi. Mauris eget sapien a velit facilisis ullamcorper feugiat nec orci. Duis ac iaculis turpis, at feugiat orci.</p>
            </div>
        </section>
    )
}

export default AboutMeSection