import { useState } from 'react'
import styles from './style.module.scss'
import check from '../assets/check_24px.png'

export const ButtonYellow = ({ content, onClick }) => {
    return (
        <button 
            onClick={onClick}
            className={`${styles["button-yellow"]} ${styles["button-margin"]}`  
        }>
            {content}
        </button>
    )
}

export const ButtonRed = ({ content, onClick }) => {
    return (
        <button 
            onClick={onClick}
            className={styles["button-red"]}
        >
            {content}
        </button>
    )
}

export const ButtonYellowForm = ({ content, onClick }) => {
    return (
        <button 
            onClick={onClick}
            className={styles["button-yellow-form"]}
        >
            {content}
        </button>
    )
}

export const ButtonRedForm = ({ content, onClick }) => {
    return (
        <button
            onClick={onClick} 
            className={styles["button-red-form"]}
        >
            {content}
        </button>
    )
}

export const RadioButtonForm = ({isClicked, onClick}) => {
    return (
        <div className={styles["radio"]} onClick={onClick}>
            {isClicked && <img src={check} alt="" className={styles["radio-image"]}/>}
        </div>
        
    )
}