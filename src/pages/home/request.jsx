import React, { useState } from "react";
import { LangIcon, LeftSec, LogInButton } from "./homePage";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import styled from "styled-components";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const Application = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  min-width: 450px;
  border-radius: 20px;
  background-color: #fff;
  gap: 10px;
  padding: 20px;
  /* margin-left: 80px; */
`;
export const Inputs = styled.input`
  display: flex;
  /* height: 58px; */
  padding: 15px 102px 15px 16px;
  align-items: center;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid var(--200, #cfcbea);
  background: var(--100, #efeef8);
  width: 350px;
  margin-bottom: 15px;
  margin-top: 5px;
`;
export const Fonts = styled.div`
  font-family: "Public Sans";
  color: ${(props) =>
    props.$header
      ? "#2c2669"
      : (props) =>
          props.$label
            ? "#6053B9"
            : (props) =>
                props.$contact
                  ? "#6053B9"
                  : (props) =>
                      props.$requestTitle
                        ? "#2C2669"
                        : (props) => (props.$question ? "#2C2669" : "#CFCBEA")};
  font-size: ${(props) =>
    props.$header
      ? "28px"
      : (props) =>
          props.$label
            ? "14px"
            : (props) =>
                props.$requestTitle
                  ? "28px"
                  : (props) => (props.$contact ? "18px" : "18px")};
  font-weight: ${(props) => (props.$contact ? "400" : "700")};
  margin-bottom: ${(props) => (props.$header ? "15px" : "")};
  text-align: ${(props) => (props.$header ? "center" : "")};
  margin-bottom: ${(props) =>
    props.$requestTitle ? "20px" : (props) => (props.$contact ? "20px" : "")};
  display: ${(props) => (props.$contact ? "flex" : "")};
  align-items: ${(props) => (props.$contact ? "center" : "")};
  gap: ${(props) => (props.$contact ? "10px" : "")};
  border-top: ${(props) => (props.$question ? "1px solid #6053B9" : "")};
  padding: ${(props) => (props.$question ? "20px 0px" : "")};
`;
export const Body = styled.div`
  background-color: #efeef8;
  /* height: 100vh; */
  /* padding-bottom: 150px; */
`;
export const MainWrapper = styled.div`
  display: flex;
  align-content: center;
  /* justify-content: space-around; */
  /* grid-template-columns: 1fr 1fr ; */
  gap: 20px;
  max-width: fit-content;
  margin: 20px auto;
  /* mar-bottom: 100px; */
  @media (max-width: 900px) {
    flex-direction: column;
    max-width: fit-content;
    margin-inline: auto;
    gap: 40px;
  }
`;
export const RequestSec = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;
  max-width: 400px;
`;
export const RequestButton = styled.div`
  color: var(--50, var(--Color-7, #fff));
  font-family: "Public Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  display: flex;
  width: fit-content;
  padding: 10px 40px;
  background-color: #2c2669;
  border-radius: 6px;
`;
export const ContactButtons = styled.div`
  background-color: #bfbae3;
  border-radius: 6px;
  color: #2c2669;
  padding: 5px;
  padding-bottom: 3px;
`;
const RequestDemoComponent = () => {
  const [name, setName] = useState();
  const [surname, setSurName] = useState();
  const [number, setNumber] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const token = localStorage.getItem("token")
    console.log("token is ",token)

  const SubmitUser = async (e) => {
    e.preventDefault();
    if (name !== "") {
      try {
        const response = await axios.post("https://api-lms.inomjonov.site/add-sign-up", {
          name, surname, number, email, password
        })
        if(response.email){
          console.log('user exists')
        }else{
          console.log("response is ",response)
        setName('');
        setSurName('')
        setNumber('')
        setEmail('')
        setPassword('')
        navigate('/sign-in')
        }
       
      } catch (error) {
        console.log('Submitting error "frontend"', error)
      }
    }else{
        alert('Enter your information');
    }
  };
  return (
    <Body>
      <div className="navbar">
        {" "}
        {/* Navbar */}
        <Link style={{ textDecoration: "none" }} to="/">
          <h1>EduManSim</h1>
        </Link>
        <LeftSec>
          <p>(90) 123-44-56</p>
          <div className="selectContainer">
            <LangIcon />
            <select name="" id="" className="select-box">
              <option className="options" value="English">
                ENG
              </option>
              <option className="options" value="Russian">
                RUS
              </option>
              <option className="options" value="Uzbek">
                UZB
              </option>
            </select>
          </div>
          <Link to="/sign-in">
            <LogInButton>Log in</LogInButton>
          </Link>
        </LeftSec>
      </div>
      <MainWrapper>
        {" "}
        {/* body */}
        <Application>
          {" "}
          {/* application sec */}
          <Fonts $header>Fill out an aplication</Fonts>
          <form onSubmit={SubmitUser}>
            <Fonts $label>Name</Fonts>
            <Inputs
              type="text"
              placeholder="Enter your name"
              className="input"
              name="name"
              onChange={(e) => {setName(e.target.value); console.log('name is clicked')}}
              value={name}
            />
            <Fonts $label htmlFor="">
              Surname
            </Fonts>
            <Inputs
              type="text"
              placeholder="Enter your surname"
              className="input"
              name="surname"
              onChange={(e) => setSurName(e.target.value)}
              value={surname}
            />
            <Fonts $label >
              Number
            </Fonts>
            <Inputs
              type="number"
              placeholder="Enter your number"
              className="input"
              name="number"
              onChange={(e)=> setNumber(e.target.value)}
              value={number}
            />
            <Fonts $label >
              Email
            </Fonts>
            <Inputs
              type="email"
              placeholder="Enter your email"
              className="input"
              name="email"
              onChange={(e)=> setEmail(e.target.value)}
              value={email}
            />
            <Fonts $label htmlFor="">
              Password
            </Fonts>
            <Inputs
              type="password"
              placeholder="Create your password"
              className="input"
              name="password"
              onChange={(e)=> setPassword(e.target.value)}
              value={password}
            />
            <button type="submit" className="send">Send</button>
          </form>
          <div className="bottom">
            <Fonts $label>Have you already singed up?</Fonts>
            <button>Log in</button>
          </div>
        </Application>
        <RequestSec>
          <Fonts $requestTitle>Request demo</Fonts>
          <Fonts $contact>
            If you wand to know ore about Options opportunities. fill out the
            application and enjoy 14 days for free
          </Fonts>
          <Fonts $question>Contact us if you have any questions</Fonts>
          <Fonts $contact>
            <ContactButtons>
              <PhoneIcon />
            </ContactButtons>
            (99) 999-99-99
          </Fonts>
          <Fonts $contact>
            <ContactButtons>
              <MailIcon />
            </ContactButtons>
            edu@gmail.com
          </Fonts>
          <RequestButton>Request demo</RequestButton>
        </RequestSec>
      </MainWrapper>
    </Body>
  );
};

export default RequestDemoComponent;
