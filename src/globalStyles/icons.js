import styles from './style.module.scss'
import logo from '../assets/pippip-logo.png'
import formImage from '../assets/money.png'
import { IconText } from './text'

export const MainIcon = ({ content }) => {
    return (
        <div className={styles["wrapper-icon"]}>
            <div className={styles["wrapper-img-icon"]}>
                <img src={content.link} alt="" className={styles["img-icon"]}/>
            </div>
            <IconText content={content.name} />
        </div>
    )
}

export const LogoIcon = () => {
    return (
        <img src={logo} alt="logo-pippip" className={styles["logo-icon"]}/>
    )
}

export const FormImage = () => {
    return (
        <img src={formImage} alt="image-pippip" className={styles["form-image"]}/>
    )
}