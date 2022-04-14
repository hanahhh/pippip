import React from 'react'
import { BannerMainText, BannerText, ButtonYellow, ButtonRed, MainIcon } from '../../globalStyles'
import { homeServices } from '../../constants'
import '../../styles/banner.scss'
import { motion } from "framer-motion"
import { fadeInTime } from '../../constants'
import { useNavigate, useLocation } from "react-router-dom"

const Banner = () => {
  const navigate = useNavigate()
  const pathname = `${useLocation().pathname.split("/")[1]}`
  return (
    <motion.div 
      className="banner"
      key="banner"
			variants={fadeInTime}
			initial="hidden"
			animate="show"
			exit="hidden"
    >
      
        <div className='center'><BannerMainText content="ĐẶT XE PIPPIP" /></div>
        <div className='center'><BannerText content="Kiếm thêm thu nhập cùng Pippip" /></div>
        <div className="iconsContainer">
            {homeServices.map((item, index) => (
                <MainIcon content={item} key={index} />
            ))}
        </div>
    </motion.div>
  )
}

export default Banner