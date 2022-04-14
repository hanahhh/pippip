import React from 'react'
import { footerContent, smallFooterContent } from "../../settings"
import { motion } from "framer-motion"
import { fadeInTime3Sec } from '../../constants'
import { FooterText } from '../../globalStyles'
import '../../styles/footer.scss'
const Footer = () => {
  return (
    <motion.div 
        className='footer'
        variants={fadeInTime3Sec} 
        initial="hidden" 
        animate="show"
    >
        <FooterText content={footerContent} />
    </motion.div>
  )
}

export default Footer