import React from 'react'
import { FormTitleText, FormParagraphText, HalfInput, FullInput, ButtonYellowForm } from '../../../globalStyles'
import './formstyle.scss'

const SignUpForm = () => {
  return (
    <div className="signUp">
        <div className="formUp">
            <FormTitleText content="Đăng ký làm cộng tác viên Pippip" />
            <div className="button-half-size">
                <div className="left">
                    <HalfInput content="Tên của bạn (bắt buộc)" />
                </div>
                <div className="right">
                    <HalfInput content="Số điện thoại (bắt buộc)" />
                </div>
            </div>
            <div className="button-full-size">
                <FullInput content="Email (không bắt buộc)" />
                <FullInput content="Mật khẩu đăng nhập (bắt buộc)" />
                <FullInput content="Nhập lại mật khẩu (bắt buộc)" />
            </div>
            <FormParagraphText content="Khi bấm đăng ký tài khoản, bạn được coi là đã đồng ý với Điều khoản sử dụng dịch vụ" />
        </div>
        <div className="formDown">
            <div className="register">
                <FormParagraphText content="Bạn đã có tài khoản?" />
                <FormParagraphText content="ĐĂNG NHẬP HỆ THỐNG"/>
            </div>
            <ButtonYellowForm content="đăng ký" />
        </div>
    </div>
  )
}

export default SignUpForm