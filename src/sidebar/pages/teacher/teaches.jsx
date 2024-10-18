import React, { useState } from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import styled from 'styled-components';
import TeacherTable from '../materials/table';
import AddTeacherModal from './addTeacher';

//profile
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ProfileImage from '../../../assets/profileImg.png'
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';

// import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';
import MenuDots from '../../../materials/popper';
import Groups from './groups';
import Salary from './salary';

//style
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  padding: 10px;
  border-radius: 8px;
  height: 44px;
  box-sizing: border-box;
  color: #BFBAE3;
`
export const Input = styled.input`
  border: none;
  padding: 10px 0;
  color: #BFBAE3;
  font-family: "Public Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  /* width: 280px; */
  &:focus{
    outline: none;
    border: none;
  }
`
export const Buttons = styled.button`
  color: white;
  background: var(--600, linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), #2C2669);
  font-family: "Public Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  padding: ${(props)=>props.$edit ? '10px 15px': '10px 34px'} ;
  display: ${(props)=>props.$edit ? 'flex': ''} ;
  align-items: ${(props)=>props.$edit ? 'center': ''} ;
  margin-right: ${(props)=>props.$edit ? '20px': ''} ;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  height: 44px;
`
const TopSec = styled.div`
  display: flex;
  justify-content: space-between;
  /* width: 100vw; */
  /* background-color: red; */
`
const Container = styled.div`
  /* width: 600px; */
  /* background-color: yellow; */
  position: absolute;
  right: 30px;
  bottom: 30px;
  top: 30px;
  left: 330px;
`




const Teachers = () => {

  return (
    <Container>
      <TopSec>
        <InputContainer><SearchOutlinedIcon/><Input type="text" placeholder='Search teacher...' /></InputContainer>
        <AddTeacherModal/>
      </TopSec>
      <div>
      <TeacherTable />
      </div>
    </Container>
  )
}

export default Teachers

//style 


export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 340px;
  height: 376px;
  border-radius: 26px;
  background: #FFFFFF;
  border: 1px solid var(--200, #CFCBEA);
  padding: 4px;
  box-sizing: border-box;
  height: fit-content;
  padding-bottom: 10px;
  margin-top: ${(props)=>props.$profile ? '50px':''};
`
export const ImgSec = styled.div`
  display: flex;
  background-color: #bfbae3;
  width: 328px;
  min-height: 106px;
  margin-inline: auto;
  border-radius: 26px;
  justify-content: flex-end;
  align-items: center;
  position: relative;

`
export const MenuIcon =styled(MoreHorizIcon)`
  transform: rotate(90deg);
  cursor: pointer;
  color: ${(props)=>props.$leads ? '#BFBAE3': (props)=>props.$vertical ? '#BFBAE3':(props)=>props.$section ? '#BFBAE3': (props)=>props.$group ? '#BFBAE3': 'black'};
  position: ${(props)=>props.$vertical ? 'absolute':(props)=>props.$section ? 'absolute':''};
  right: ${(props)=>props.$vertical ? '15px':''};
  top: ${(props)=>props.$vertical ? '20px':(props)=>props.$section ? '20px':''};
  margin-top: ${(props)=>props.$group ? '5px':''};
`
export const ProfileImg = styled.div`
  border-radius: 50%;
  background-image: url(${ProfileImage});
  height: 88px;
  width: 88px;
  background-size: cover;
  position: absolute;
  left: 20px;
  top: 40px;
  border: 5px solid white;
`
export const PopupBody = styled.div`
  z-index: 1;
  position: relative;
  top: 100px;
`
export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  margin-top: 30px;
  h2{
    color: var(--600, #2C2669);
    font-family: "Public Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 133.333% */
    margin: 10px 0;
  }
  p{
    margin: 7px 0;
    color: var(--400, #A098D5);
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 114.286% */
    display: flex;
    justify-content: space-between;
    b{
      color: black;
      font-weight: 800;
    }
  }

`
export const Status = styled.div`
  display: flex;
  gap: 10px;
  p{
    border-radius: 6px;
    background-color: #A098D5;
    color: white;
    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px;
    padding: 5px 10px;
    margin: 0 0 15px 0;
  }
`

export const ProfileContent = ({data}) => {
  const [open, setOpen] = useState(null);
  const handleOpen = (e) => setOpen(open ?  null : e.currentTarget);
  const toggle = Boolean(open);
  const id = toggle ? 'simple-popper' :  undefined;


  const handleClose =()=> setOpen(false)
  return(
    <ProfileContainer>
      {data.map((value)=>{
        return(
          <div key={value.id}>
        <ImgSec>
        <MenuDots/>
        <ProfileImg><img style={{borderRadius:'50%'}} width={88} height={88} src={value.image}/></ProfileImg>
      </ImgSec>
      <InfoWrapper>
        <h2>{value.name}</h2>
        <Status><p>Teacher</p><p>CEO</p></Status>
        <p>Branch: <b>Location</b></p>
        <p>Phone: <b>{value.phoneNumber}</b></p>
        <p>Telegram: <b>{value.telegramUsername}</b></p>
        <p>Percent: <b>{value.percentage}</b></p>
        <p>Balance: <b>{value.salary} UZS</b></p>
      </InfoWrapper>
          </div>
        )
      })}
    </ProfileContainer>
  )
}