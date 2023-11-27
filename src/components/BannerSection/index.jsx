import bannerImg from '../../assets/banner-img.png';
import styles from './BannerSection.module.css'
import { username } from '../../data/user';

const BannerSection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textBanner}>
                <p className={styles.username}>{username}</p>
                <h1>Bem vindo ao meu portfólio</h1>
                <p>Uma frase interessante sobre mim</p>
                <button>Saiba mais</button>
            </div>
            <div>
                <img src={bannerImg} alt="banner-img" />
            </div>
        </div>
    )
}

export default BannerSection