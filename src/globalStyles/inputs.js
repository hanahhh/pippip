import styles from './style.module.scss'

export const HalfInput = ({ content, value, onChange }) => {
    return (
        <input 
            type="text" 
            placeholder={content} 
            className={`${styles["half-input"]} ${styles["input"]}`}
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    )
}

export const FullInput = ({ content, value, onChange }) => {
    return (
        <input 
            type="text" 
            placeholder={content} 
            className={`${styles["full-input"]} ${styles["input"]}`}
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    )
}