import React, { useState } from 'react'
import { FormTitleText, FormParagraphText, HalfInput, FullInput, ButtonYellowForm, RadioButtonForm, FormImage } from '../../../globalStyles'
import { useNavigate } from 'react-router-dom'
import { signUpPath } from '../../../constants'
import './formstyle.scss'

const SignInForm = () => {
  const navigate = useNavigate()

  const [isClicked, setIsClicked] = useState(true)
  const[userName, setUserName]  = useState()
  const[phoneNumber, setPhoneNumber] = useState()
  const[userData, setUserData] = useState({})
  
  const handleLogin = () => {
    setUserData({
      ...userData, 
      userName: {userName}, 
      phoneNumber: {phoneNumber}
    })
  }

  return (
    <div className="signIn">
      <div className="formUp">
        <FormTitleText content="Cộng tác viên đăng nhập hệ thống" />
        <div className="input">
          <FullInput content="Tên đăng nhập" value={userName} onChange={setUserName}/>
          <FullInput content="Số điện thoại" value={phoneNumber} onChange={setPhoneNumber}/>
        </div>
        
        <div className="checkBox">
          <RadioButtonForm isClicked={isClicked} onClick={() => setIsClicked(!isClicked)}/>
          <FormParagraphText content="Ghi nhớ đăng nhập" />
        </div>
      </div>
      <div className="formMid">
        <FormImage />
        <img src="../../../assets/money.png" alt="" className='image-form'/>
      </div>
      <div className="formDown">
        <div className="login">
          <FormParagraphText content="Kiếm thêm thu nhập cùng Pippip?" />
          <FormParagraphText content="ĐĂNG KÝ TÀI KHOẢN NGAY" onClick={() => {navigate(`${signUpPath.split("/")[1]}`); console.log("hi")}}/>
        </div>
        <ButtonYellowForm content="ĐĂNG NHẬP" className="login" onClick={handleLogin}/>
      </div>
    </div>
  )
}

export default SignInForm