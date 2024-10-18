import React from 'react'
import { LangIcon } from '../home/homePage'
import PasswordInput from './password'
import { Link } from 'react-router-dom'
import { Bg, Container, FormButton, FormInput, FormWrapper, Logo, SignHeader, SignWrapper } from './signIn'


const ChangePassword = () => {
  return (
    <Container>
        <SignWrapper>
          <SignHeader>
            <Link to="/" style={{textDecoration:'none'}}><Logo>EduManSim</Logo></Link>
            <div className='select-Container'>
              <LangIcon/>
                <select name="" id="" className='select-box'>
                <option className='options' value="English">EN</option>
                <option className='options' value="Russian">RU</option>
                <option className='options' value="Uzbek">UZ</option>
              </select>
              </div>
          </SignHeader>
          <FormWrapper>
            <h1>Change Password</h1>
            <label htmlFor="">New password</label>
            <PasswordInput/>
            <label htmlFor="">Repeat new passworad</label>
            <PasswordInput/>
            <FormButton>Next</FormButton>
          </FormWrapper>
        </SignWrapper>
        <Bg></Bg>
    </Container>
  )
}

export default ChangePassword