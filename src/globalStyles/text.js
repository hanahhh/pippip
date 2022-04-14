import styles from './style.module.scss'
import { smallFooterContent } from '../settings'

export const TitleText = ({ content }) => {
    return (
       <span className={styles["title-text"]}>{content}</span> 
    )
}

export const TitleNormalText = ({ content }) => {
    return (
        <span className={styles["title-text-normal"]}>{content}</span>
    )
}

export const BannerMainText = ({ content }) => {
    return (
        <span className={styles["banner-main-text"]}>{content}</span>
    )
}

export const BannerText = ({ content }) => {
    return (
        <span className={styles["banner-text"]}>{content}</span>
    )
}

export const IconText = ({ content }) => {
    return (
        <span className={styles["icon-text"]}>{content}</span>
    )
}

export const FormTitleText = ({ content }) => {
    return (
        <span className={styles["form-title-text"]}>{content}</span>
    )
}

export const FormInputText = ({ content }) => {
    return (
        <span className={styles["form-input-text"]}>{content}</span>
    )
}

export const FormParagraphText = ({ content, onClick }) => {
    return (
        <span className={styles["form-paragraph-text"]} onClick={onClick}>{content}</span>
    )
}

export const FooterText = ({ content }) => {
    return (
        <span className={styles["footer-text"]}>
            {
                content.map((item, index) => (
                    <a 
                        target="_blank" 
                        href={Object.values(item)[0]}
                        key={index}
                        className={styles["a-text"]}
                    >
                        {`${Object.keys(item)[0]}  |  `}
                    </a>
                ))
            }
            <a href="" className={styles["a-text"]}>{smallFooterContent}</a>
        </span>
    );
}



