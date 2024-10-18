import React from 'react'
import LanguageIcon from '@mui/icons-material/Language';
import './index.css'
import styled from 'styled-components';
import HomeImg from '..//../assets/home.jpeg'
import CopyrightIcon from '@mui/icons-material/Copyright';
import { Link } from 'react-router-dom';

export const LangIcon = styled(LanguageIcon)`
  color: #2C2669;
  position: absolute;
  top: 20%;
  left: 10%;
  `
  export const LeftSec = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    
  `
  export const HomeWrapper = styled.div`
    background: linear-gradient(0deg, rgba(57, 37, 100, 0.811) 0%, rgba(8, 6, 75, 0.655) 100%), url(${HomeImg}) lightgray 0px -616px / cover no-repeat;
    backdrop-filter: blur(12px);
    background-size: cover;
    background-position: bottom;
    height: 95vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    h1{
      color: var(--Color-7, #FFF);
      text-align: center;
      font-family: "Public Sans";
      font-size: 50px;
      font-style: normal;
      font-weight: 700;
      line-height: 60px; /* 120% */
      width: 60%;
    }
    p{
      color: #fff;
      text-align: center;
      font-family: "Public Sans";
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 30px; /* 150% */
      display: flex;
      align-items: center;
      gap: 5px;
      border-top: 2px solid #fff;
      width: 90%;
      justify-content: center;
      padding: 20px;
      position: fixed;
      bottom: 0;
      margin: 0;
    }
    button{
      display: inline-flex;
      padding: 14px 30px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border-radius: 8px;
      border: none;
      color: var(--600, #2C2669);
      text-align: center;
      font-family: "Public Sans";
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
      cursor: pointer;
      &:hover{
        opacity: 0.8;
      }
    }
  `
  export const LogInButton = styled.button`
    box-shadow: 0px 2px 30px 0px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    background: var(--600, linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), #2C2669);
    color: #fff;
    border: none;
    padding: 13px 25px;
    font-family: "Public Sans";
    &:hover{
      cursor: pointer;
      opacity: 0.8;
    }
  `

const HomeComponent = () => {
  return (
    <div>
        <div className='navbar'> {/* Navbar */}
            <h1>EduManSim</h1>
            <LeftSec>
              <p>(90) 123-44-56</p>
              <div className='selectContainer'>
              <LangIcon/>
                <select name="" id="" className='select-box'>
                <option className='options' value="English">ENG</option>
                <option className='options' value="Russian">RUS</option>
                <option className='options' value="Uzbek">UZB</option>
              </select>
              </div>
              <Link to='/sign-in'><LogInButton>Log In</LogInButton></Link>
            </LeftSec>
        </div>
        <HomeWrapper> {/* home */}
          <h1>A simple management system for education</h1>
          <Link to='/requestDemo'><button>Request demo</button></Link>
          <p><CopyrightIcon/> 2024 edumansim.uz All rights reserved</p>
        </HomeWrapper>
    </div>
  )
}

export default HomeComponent