import portfolioImg from '../../assets/portfolio.png';
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.container}>
            <img src={portfolioImg} alt="portfolio-img" />
            <ul className={styles.menu}>
                <li>Sobre</li>
                <li>Stack</li>
                <li>Projetos</li>
            </ul>
            <button>Contato</button>
        </header>
    );
};

export default Header