import React, { useState } from 'react'
import { Buttons, ImgSec, InfoWrapper, ProfileContainer, ProfileImg, Status } from './teacher/teaches';
import EditProfile from '../../svg/editProfile';
import styled from 'styled-components';
import { Box, Modal } from '@mui/material';
import { FormButton, FormInput, FormWrapper } from '../../pages/registration/signIn';
import CloseIcon from '@mui/icons-material/Close';
import PhoneInput from 'react-phone-input-2';
import PasswordInput from '../../pages/registration/password';
import { style } from './teacher/addTeacher';


const Button = styled.button`
    background-color: #2C2669;
    border-radius: 6px;
    border: none;
    color: #fff;
    font-family: "Public Sans";
    font-size: 12px;
    padding: 10px 12px;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-right: 20px;
`
const Close = styled.div`
  position: absolute;
    top: 0px;
    right: 0px;
    left: 0;
    background-color: #EFEEF8;
    text-align: end;
    padding: 10px;
`


const ProfileComponent = () => {
  return (
    <div style={{paddingTop:'10px', paddingLeft:'350px'}}>
        <ProfileContainer $profile>
          <div >
        <ImgSec>
        <ProfileImg></ProfileImg>
      <EditProfileModal/>
      </ImgSec>
      <InfoWrapper>
        <h2>Name</h2>
        <Status><p>Teacher</p><p>CEO</p></Status>
        <p>Phone: <b>Number</b></p>
        <p>Telegram: <b>username</b></p>
      </InfoWrapper>
          </div>
    </ProfileContainer>
    </div>
    
  )
}

export default ProfileComponent

 function EditProfileModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const initialValues ={
    contactno:'',
    country_code:'',
    firstName:'',
    lastName:'',
    email:'',
  }
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleChange = (e) =>{
    setPhoneNumber({...phoneNumber, [e.target.name]: e.target.value});
  }

  return (
    <div>
      <Buttons $edit onClick={handleOpen}><EditProfile/>Edit Profile</Buttons>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FormWrapper>
              <Close><CloseIcon fontSize='small' onClick={handleClose} sx={{cursor:'pointer'}}/></Close>
              <h1>Edit Profile</h1>
              <form action="">
              <label htmlFor="">Full name</label>
              <FormInput type="text" name="" id="" placeholder='Enter your name' />
              <label htmlFor="">Upload photo</label>
              <FormInput className='file' type="file" id="file-upload" accept="image/" name="file" placeholder='Upload photo' />
              <label htmlFor="">Telegram username</label>
              <FormInput type="text" name="" id="" placeholder='Enter username' />
              <PhoneInput inputClass='phone-number'
                  country={'uz'}
                  // value={`${phoneNumber.country_code}${phoneNumber.contactno}`}
                  // onChange={() => handleChange('+' + phoneNumber)}
                  inputStyle={{width:'100%', height:'44px', backgroundColor:'#EFEEF8'}}
              />
              <label style={{marginTop:'20px'}} htmlFor="">Edit password</label>
              <PasswordInput/>
              <FormButton style={{cursor:'pointer'}}>Update profile</FormButton>
              </form>
            </FormWrapper>
        </Box>
      </Modal>
    </div>
  );
}