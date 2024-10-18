import React, { useState } from "react";
import { LangIcon } from "../home/homePage";
import PasswordInput from "./password";
import styled from "styled-components";
import Gb from "..//..//assets/register.jpeg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import "..//..//index.css";
import { FormControlLabel } from "@mui/material";

//style
export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 30px;
  height: 93dvh;
  width: 95%;
  margin: 30px auto;
  max-width: 1400px;
`;
export const Logo = styled.div`
  color: var(--Color-7, #fff);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 114.286% */
  border-radius: 36.221px;
  background: var(
    --600,
    linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%),
    #2c2669
  );
  width: fit-content;
  padding: 10px 50px;
`;
export const SignWrapper = styled.div`
  background-color: white;
  border-radius: 15px;
  padding: 30px;
  min-width: ${(props) => (props.$forgot ? "470px" : "470px")};
`;
export const SignHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  h1 {
    color: var(--600, #2c2669);

    /* Bold/30px -> 40px */
    font-family: "Public Sans";
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px; /* 133.333% */
  }
  label {
    color: var(--500, #6053b9);
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px; /* 114.286% */
    padding-bottom: 5px;
  }
`;
export const FormInput = styled.input`
  display: flex;
  padding: 8px 102px 8px 16px;
  align-items: center;
  border-radius: 3px;
  border: 1px solid #cfcbea;
  margin-bottom: 20px;
  height: 50px;
  background-color: #efeef8;
  color: #161617;
  box-sizing: border-box;
  width: 100%;
  &:active {
    /* outline: none; */
    border: 1px solid #4c36d8;
  }
  &:hover {
    border: 1.5px solid black;
  }
  margin-top: ${(props) => (props.$photo ? "10px" : "")};
`;
export const FormButton = styled.button`
  display: flex;
  padding: 10px 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: white;
  background-color: #2c2669;
  border-radius: 6px;
  border: none;
  font-size: 18px;
  font-family: "Public Sans";
  font-weight: 400;
  height: 50px;
  width: 100%;
  cursor: pointer;
`;
export const BottomSec = styled.div`
  border-top: 1px solid #6053b9;
  margin-top: 30px;
  display: flex;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 700;
  font-family: "Public Sans";
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  :nth-child(2) {
    margin-left: 5px;
    border-left: 2px solid black;
    line-height: 13px;
    padding-left: 5px;
    margin-right: 50px;
    color: #6053b9;
  }
  :nth-child(3) {
    color: #6053b9;
  }
`;
export const Bg = styled.div`
  background-image: url(${Gb});
  /* height: 100vh; */
  width: 100%;
  background-size: cover;
  border-radius: 15px;
  background-position: center;
`;
// sign in component
const SignInComponent = () => {
  

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const SubmitLogIn = async (e) => {
    e.preventDefault();
    if (email !== "") {
      try {
        const response = await fetch("https://api-lms.inomjonov.site/add-sign-in", {
         method: 'POST',
         headers:{
          "Content-Type":"application/json"
         },
         body: JSON.stringify({email, password})
        });
        const data = response.json()
        const accessToken = data.token
        console.log(accessToken, ' this is access token')
        if (response.ok) {
          navigate("/teacher/profile");
          console.log('Submitting log in data is successful "frontend"');
          localStorage.setItem('token', accessToken)
        } else {
          alert("Incorrect email or password");
          console.log('log in error, "Front"')
        }
      } catch (error) {
        console.error('login error cought "frontend 155 line"', error);
        if (error.response && error.response.status === 403) {
          alert("Incorrect email or password.");
        } else {
          alert("An error occurred. Please try again.");
        }
      }
    }
  };

  return (
    <div>
      <Container>
        <SignWrapper>
          <SignHeader>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Logo>EduManSim</Logo>
            </Link>
            <div className="select-Container">
              <LangIcon />
              <select name="" id="" className="select-box">
                <option className="options" value="English">
                  EN
                </option>
                <option className="options" value="Russian">
                  RU
                </option>
                <option className="options" value="Uzbek">
                  UZ
                </option>
              </select>
            </div>
          </SignHeader>
          <FormWrapper onSubmit={SubmitLogIn}>
            <h1>Sign In</h1>
              <label htmlFor="">Email</label>
              <FormInput
                type="text"
                placeholder="Enter your email"
                name="email"
                onChange={(e) => {setEmail(e.target.value)}}
                value={email}
                required
              />
              <label htmlFor="">Passworad</label>
              <div sx={{ display: "flex", flexWrap: "wrap" }}>
                <div>
                  <div className="cover" style={{ border: "none" }}>
                    <OutlinedInput onChange={(e)=> setPassword(e.target.value)}
                    value={password}
                    name="password"
                    required
                      placeholder="Enter your password"
                      className="inputPassword"
                      type={showPassword ? "text" : "password"}
                      endAdornment={
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      }
                    />
                  </div>
                </div>
              </div>
              {/* <input type="password" onChange={(e)=> {setPassword(e.target.value); console.log("password clicked")}} name="password" /> */}
              <FormButton type="submit">Next</FormButton>
            <BottomSec>
              <p>Don't have an account?</p>
              <Link style={{ textDecoration: "none" }} to="/requestDemo">
                <b>Fill out an application</b>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/forgot">
                <b>Forgot password?</b>
              </Link>
            </BottomSec>
          </FormWrapper>
        </SignWrapper>
        <Bg></Bg>
      </Container>
    </div>
  );
};

export default SignInComponent;
