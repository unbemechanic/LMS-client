import React, { useState } from 'react'
import { ArcadionScroll, ButtonWrapper, DetailSec, Filters, FilterWrapper, FirstWrapper, GroupImg, Header, Horizon, Inputs, InputWrapper, SectionHeader, Selects, Typography, Vertical, VerticalContainer } from '../styles'
import ResetIcon from '../../../svg/reset';
import AddLeadModal, { AddNewGroupModal } from '../../../materials/leads/modal';
import { tableStyle, tdata, tdataContainer, theader, trows } from '../teacher/salary';
import { teachers } from '../../../data/teachers';
import {  useNavigate } from 'react-router-dom';


const Group = () => {
  //navigation
  const navigate = useNavigate();

  const handleRowClick = (name) => {
    navigate(`/groups/${name}`);
  };

  const groupsFake = teachers;
  const [selectValue, setSelectValue] = useState("");
  const [where, setWhere] = useState('');
  const [course, setCourse] = useState('');
  const [rotate, setRotate] = useState(false);

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
    // setInputValue("");
    setSelectValue("");
    setWhere("");
    setCourse("")
    setRotate(true);
    setTimeout(()=> setRotate(false), 1000)
  }
  return (
    <div style={{display:'block', width:'80%',marginLeft:"310px",  boxSizing:'border-box'}}>
    <Filters> {/* navigation */}
      <FilterWrapper>
        <InputWrapper>
          <Selects value={selectValue} onChange={handleChanges}>
            <option value="">Group status</option>
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
      <AddNewGroupModal/>
    </Filters>
    <div style={{width:'95%', marginInline:'auto'}}>
          <table style={tableStyle}>
            <tr style={theader}>
              <th style={{borderRadius:'15px 0 0 0 '}}>Group name</th>
              <th>Course</th>
              <th>Teacher</th>
              <th>Days</th>
              <th>Room</th>
              <th>Student</th>
            </tr>
            {groupsFake.map((value, index)=>{
              return(
                  <tr style={tdataContainer} key={value.name} onClick={handleRowClick}>
                  <td style={trows}><div style={{width:'30px'}}>{index + 1}</div><GroupImg>{value.name.slice(0,1)}</GroupImg><div>{value.name}</div> </td>
                  <td style={tdata}>{value.phoneNumber}</td>
                  <td style={tdata}>Telegram</td>
                  <td style={{...tdata, display:'flex', alignItems:'center', justifyContent:'space-around', paddingLeft:'30px'}}>Elementary</td>
                  <td style={tdata}>Telegram</td>
                  <td style={tdata}>Telegram</td>
                </tr>
              )
            })}
          </table>
    </div>
  </div>
  )
}

export default Group