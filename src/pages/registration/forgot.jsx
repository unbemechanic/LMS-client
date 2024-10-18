import React from 'react'
import { LangIcon } from '../home/homePage'
import styled from 'styled-components'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link } from 'react-router-dom'
import { Bg, Container, FormButton, FormInput, FormWrapper, Logo, SignHeader, SignWrapper } from './signIn'

export const BottomSec = styled.div`
  border-top: 1px solid #6053B9;
  margin-top: 30px;
  display: flex;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 700;
  font-family: "Public Sans";
  /* justify-content: space-between; */
  gap: 10px;
  align-items: center;
  padding-top: 20px;
  :first-child{
    font-size: 14px;
  }
`


const ForgotComponent = () => {
  return (
    <Container>
        <SignWrapper $forgot>
          <SignHeader>
            <Link to='/' style={{textDecoration:'none'}}><Logo>EduManSim</Logo></Link>
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
            <h1>Forgot password</h1>
            <label htmlFor="">Email</label>
            <FormInput type="email" name="" id="" placeholder='Enter your email' />
            <Link style={{textDecoration:'none'}} to='/change-password'><FormButton>Next</FormButton></Link>
            <Link style={{textDecoration:'none'}} to='/sign-in'><BottomSec><ArrowBackIosNewIcon/>Back</BottomSec></Link>
          </FormWrapper>
        </SignWrapper>
        <Bg></Bg>
    </Container>
  )
}

export default ForgotComponent