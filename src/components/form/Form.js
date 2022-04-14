import React from 'react'
import SignInForm from './form-container/SignInForm'
import SignUpForm from './form-container/SignUpForm'
import '../../styles/form.scss'
import { motion } from "framer-motion"
import { slideFromBottom1 } from '../../constants'

const Form = ({ type }) => {
  return (
    <motion.div 
      className="form"
      key="form"
			variants={slideFromBottom1}
			initial="hidden"
			animate="show"
			exit="hidden"
    >
      <div className="formContainer">
        {type===1 && <SignUpForm />}
        {type===2 && <SignInForm />}
      </div>
    </motion.div>
  )
}

export default Form