import whatsappImg from '../../assets/whatsapp-icon.png';
import linkedinImg from '../../assets/linkedin-icon.png';
import githubImg from '../../assets/github-icon.png'
import { user } from '../../data/user'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div>
                    <h2>Contato</h2>
                    <div>
                        <img src={whatsappImg} alt="Whatsapp image" />
                        <img src={linkedinImg} alt="Whatsapp image" />
                        <img src={githubImg} alt="Whatsapp image" />
                    </div>
                </div>
                <p>Todos os direitos reservados - {user}</p>
            </div>
        </footer>
    )
}

export default Footer