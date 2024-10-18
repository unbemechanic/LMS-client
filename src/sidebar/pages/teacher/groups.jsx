import React from 'react'
import styled from 'styled-components'
import Profile from'../../../assets/register.jpeg'
import { Link } from 'react-router-dom'

//style
export const Container = styled.div`
  background-color: #fff;
  width: 500px;
  height: 400px;
  padding: 20px;
  border-radius: 15px;
  margin-top: 30px;
  position: relative;
  *{
    margin: 0;
  }
  p{
    display: flex;
  }
`
export const Typography = styled.p`
  font-family: "Public Sans";
  color: ${(props)=>props.$ocean ? '#2C2669' :'#6053B9'} ;
  font-family: "Public Sans";
  font-size: ${(props)=>props.$subject ? '24px' : '18px'};
  font-style: normal;
  font-weight: ${(props)=>props.$subject ? '700' : '400'};
  line-height: 16px; /* 114.286% */
  display: flex;
  justify-content: space-between;
  margin: 25px 0;
  margin: ${(props)=>props.$subject ? '30px 0': (props)=>props.$ocean ? '40px 0 30px 0' :''};
`
export const Spans = styled.p`
  color: ${(props)=>props.$student ? '#6053B9':'#a098d5'};
  font-family: "Public Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 114.286% */
  background-color: ${(props)=>props.$student ? '#EFEEF8':''};
  padding: ${(props)=>props.$student ? '10px 15px ':''};
  border-radius: ${(props)=>props.$student ? '4px':''};

`
export const GroupdImg = styled.div`
  background-image: url(${Profile});
  background-size: cover;
  border-radius: 50%;
  width: 58px;
  height: 58px;
  border: 1px solid black;

`
export const Students = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;

`
export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid black;
  padding: 20px 0;
  button{
    border-radius: 6px;
    background: var(--600, linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), #2C2669); 
    color: white;
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    padding: 10px 30px;
  }
`

const TeacherGroups = () => {
  return (
    <Container>
      <GroupdImg></GroupdImg>
      <Typography $ocean>Ocean <Spans>Group name</Spans></Typography>
      <Typography $subject>Subject name <Spans>Course</Spans> </Typography>
      <Typography $date>02.23.2023 <Spans>Start data</Spans></Typography>
      <Students><div style={{display:'flex', gap:'10px'}}><Spans $student>12 student</Spans><Spans $student>2-room</Spans></div> <Spans>Student & room</Spans></Students>
      <Bottom>
        <b>from-to <p>days</p></b>
        <Link to='/teacherInfo'><button>See group</button></Link>
      </Bottom>
    </Container>
  )
}

export default TeacherGroups