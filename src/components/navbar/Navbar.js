import React, { useRef, useEffect } from "react"
import { signUpPath, signInPath } from "../../constants"
import { motion } from "framer-motion"
import { slideDown } from "../../constants/animate"
import { LogoIcon, TitleText, TitleNormalText } from "../../globalStyles"
import { contactData } from '../../settings'
import '../../styles/navbar.scss'

const Navbar = () => {
    const navRef = useRef(null);
	const textLogo = useRef(null);
    const changeBackground = () => {
        console.log('scroll')
		const navBar = navRef.current;
		if (navBar?.style) {
			navBar.style.transition = "all 0.25s ease-in-out";
			if (1) {
				navBar.style.backgroundColor = "white";
			} else {
				navBar.style.backgroundColor = "transparent";
			}
		}
	};
    window.addEventListener("scroll", changeBackground);
    return (
        <motion.div 
            className="navbar"
            variants={slideDown}
			initial="hidden"
			animate="show"
			exit="hidden"
            ref={navRef}
        >
            <div className="container">
                <div className="row">
                    <div className="logo">
                        <a
							href={process.env.REACT_APP_BASE_DOMAIN}
							style={{ display: "flex", alignItems: "center" }}
						>
							<LogoIcon />
                            <TitleText content="Pippip" ref={textLogo}/>
						</a>
                    </div>
                    <div className="contact">
                        <ul className="content">
                            {contactData.map((item, index) => {
								return <TitleNormalText key={index} content={Object.values(item)[0]} />;
							})}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
export default Navbar