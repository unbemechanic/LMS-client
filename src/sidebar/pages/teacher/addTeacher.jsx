import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Buttons } from './teaches';
import { FormButton, FormInput, FormWrapper } from '../../../pages/registration/signIn';
import PasswordInput from '../../../pages/registration/password';
import styled from 'styled-components';
import '..//sidebar.css'
import CloseIcon from '@mui/icons-material/Close';

//phone
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useState } from 'react';

export const CheckboxSec = styled.div`
    display: flex;
    p{
        margin-right: 30px;
        color: var(--400, #A098D5);
        /* Medium/14px -> 20px */
        font-family: "Public Sans";
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 16px;
    }
`

export const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
};
export const Close = styled.div`
  position: absolute;
    top: 0px;
    right: 0px;
    left: 0;
    background-color: #EFEEF8;
    text-align: end;
    padding: 10px;
`

export default function AddTeacherModal() {
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
      <Buttons onClick={handleOpen}>+ Add teacher</Buttons>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <FormWrapper>
            <Close><CloseIcon fontSize='small' onClick={handleClose} sx={{cursor:'pointer'}}/></Close>
            <h1>Add new teacher</h1>
            <form action="">
            <label htmlFor="">Full name</label>
            <FormInput type="text" name="" id="" placeholder='Enter your name' />
            <label htmlFor="">Telegram username</label>
            <FormInput type="text" name="" id="" placeholder='Enter username' />
            <label htmlFor="">Upload photo</label>
            <FormInput className='file' type="file" id="file-upload" accept="image/" name="file" placeholder='Upload photo' />
            <label htmlFor="">Percent(%)</label>
            <FormInput type="email" name="" id="" placeholder='Enter percentage' />
            <label htmlFor="">Branches</label>
            <CheckboxSec style={{display:'flex'}}>
                <input type="checkbox" placeholder='namangan'/>
                <p>Namangan</p>
                <input type="checkbox" />
                <p>Toshkent</p>
                <input type="checkbox" />
                <p>Andijon</p>
                <input type="checkbox" />
                <p>Farg'ona</p>
            </CheckboxSec>
            <PhoneInput inputClass='phone-number'
                country={'uz'}
                // value={`${phoneNumber.country_code}${phoneNumber.contactno}`}
                // onChange={() => handleChange('+' + phoneNumber)}
                inputStyle={{width:'100%', height:'44px', backgroundColor:'#EFEEF8'}}
            />
            <label style={{marginTop:'20px'}} htmlFor="">Password</label>
            <PasswordInput/>
            <FormButton style={{cursor:'pointer'}}>Add teacher</FormButton>
            </form>
            
          </FormWrapper>
        </Box>
      </Modal>
    </div>
  );
}
