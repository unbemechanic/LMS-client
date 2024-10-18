import React, { useState } from 'react'
import { Filters, FilterWrapper, FirstWrapper, GroupImg,  InputWrapper,  Selects } from './styles'
import ResetIcon from './../../svg/reset';
import  { AddNewGroupModal, AddNewStudentModal } from './../../materials/leads/modal';
import { tableStyle, tdata, tdataContainer, theader, trows } from './teacher/salary';
import { teachers } from './../../data/teachers';
import {  useNavigate } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Input, InputContainer } from './teacher/teaches';
import { StudentsMenuDots } from '../../materials/popper';



const Students = () => {
  //navigation
  const navigate = useNavigate();

  const groupsFake = teachers;
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [where, setWhere] = useState('');
  const [course, setCourse] = useState('');
  const [rotate, setRotate] = useState(false);

  const handleRowClick = (name) => {
    navigate(`/students/${name}`);
  };

  const handleChanges = (e) => {
    setSelectValue(e.target.value)
  }
  const handleChanging = (e) => {
    setWhere(e.target.value)
  }
  const handleCourse = (e) => {
    setCourse(e.target.value)
  }
  const handleClick = () => {
    setInputValue("");
    setSelectValue("");
    setWhere("");
    setCourse("")
    setRotate(true);
    setTimeout(()=> setRotate(false), 1000)
  }
  return (
    <div style={{display:'block', width:'80%',marginLeft:"310px",  boxSizing:'border-box'}}>
    <Filters> {/* navigation */}
      <FilterWrapper $student>
      <InputContainer><SearchOutlinedIcon/><Input type="text" placeholder='Search student...' value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/></InputContainer>
        <InputWrapper>
          <Selects value={selectValue} onChange={handleChanges}>
            <option value="">Finance status</option>
            <option value="Elementry">Elementry</option>
            <option value="Secondary">Secondary</option>
          </Selects>
        </InputWrapper>
        <InputWrapper>
          <Selects value={where} onChange={handleChanging}>
            <option value="">Teachers</option>
            <option value="Telegram">Telegram</option>
            <option value="Whatsapp">Whatsapp</option>
          </Selects>
        </InputWrapper>
        <InputWrapper>
          <Selects value={course} onChange={handleCourse}>
            <option value="">Courses</option>
            <option value="Telegram">Telegram</option>
            <option value="Whatsapp">Whatsapp</option>
          </Selects>
        </InputWrapper>
        <InputWrapper $reset onClick={handleClick}><ResetIcon className={`reset-icon ${rotate ? 'rotate': ''}`} /> Reset filter</InputWrapper>  
      </FilterWrapper>
      <AddNewStudentModal/>
    </Filters>
    <div style={{width:'95%', marginInline:'auto'}}>
          <table style={tableStyle}>
            <tr style={theader}>
              <th style={{borderRadius:'15px 0 0 0 '}}>Full Name</th>
              <th>Phone Number</th>
              <th>Groups</th>
              <th>Course</th>
              <th>Teacher</th>
              <th></th>
            </tr>
            {groupsFake.map((value, index)=>{
              return(
                  <tr style={tdataContainer} key={value.name} onClick={handleRowClick}>
                  <td style={trows}><div style={{width:'30px'}}>{index + 1}</div><GroupImg>{value.name.slice(0,1)}</GroupImg><div>{value.name}</div> </td>
                  <td style={tdata}>{value.phoneNumber}</td>
                  <td style={tdata}>New elementary</td>
                  <td style={{...tdata, display:'flex', alignItems:'center', justifyContent:'space-around', paddingLeft:'30px'}}>IT Bootcampt</td>
                  <td style={tdata}>Rumi</td>
                  <td style={{...tdata, width:'50px'}}><div style={{width:'100%', height:'100%', alignContent:'center'}} onClick={(e) => e.stopPropagation()}><StudentsMenuDots /></div></td>
                </tr>
              )
            })}
          </table>
    </div>
  </div>
  )
}

export default Students