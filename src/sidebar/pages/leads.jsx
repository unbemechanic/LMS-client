import React, { useState } from 'react'

import styled from 'styled-components'
import './sidebar.css'
import ResetIcon from '../../svg/reset'
import SearchIcon from '../../svg/searchIcon'
import { LeadVerticalTable } from './materials/table'
import { tableStyle, tdata, tdataContainer, theader, trows } from './teacher/salary'
import { teachers } from '../../data/teachers'
import { LeadMenuDots, LeadMenuVerticalDots, LeadMenuVerticalDotsContact } from '../../materials/popper'
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import AccordionTransition from '../../materials/arcadion'
import './sidebar.css'
import AddLeadModal, { AddSectionModal, AddWhereModal } from '../../materials/leads/modal'
import { ArcadionScroll, ButtonWrapper, DetailSec, Filters, FilterWrapper, FirstWrapper, Header, Horizon, Inputs, InputWrapper, SectionHeader, Selects, Typography, Vertical, VerticalContainer } from './styles'


const Leads = () => {
  const [active, setActive] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [where, setWhere] = useState('');
  const [rotate, setRotate] = useState(false);


  const horizontalMenuHandle = (buttonId)=> {
    setActive(buttonId)

  }
  const verticalMenuHangle = (buttonId)=> {
    setActive(buttonId)
    
  }

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }
  const handleChanges = (e) => {
    setSelectValue(e.target.value)
  }
  const handleChanging = (e) => {
    setWhere(e.target.value)
  }
  const handleClick = () => {
    setInputValue("");
    setSelectValue("");
    setWhere("");
    setRotate(true);
    setTimeout(()=> setRotate(false), 1000)
  }
  return (
    <div style={{display:'block', width:'80%',marginLeft:"310px",  boxSizing:'border-box'}}>
      <Filters $leads> {/* navigation */}
        <ButtonWrapper><Horizon onClick={() => horizontalMenuHandle(1)} style={{backgroundColor: active === 1 ? '#2C2669': '#EFEEF8', fill: active === 1 ? '#EFEEF8':'#2C2669'}}/><Vertical className='vertical' onClick={() => verticalMenuHangle(2)} style={{backgroundColor: active === 2 ? '#2C2669': '#EFEEF8', fill: active === 2 ?'#fff': '#2C2669'}}/></ButtonWrapper>
        <FilterWrapper>
          <InputWrapper>
            <SearchIcon />
            <Inputs type='text' placeholder='Search student' value={inputValue} onChange={handleChange}/>
          </InputWrapper>
          <InputWrapper>
            <Selects value={selectValue} onChange={handleChanges}>
              <option value="">Search lead section</option>
              <option value="Elementry">Elementry</option>
              <option value="Secondary">Secondary</option>
            </Selects>
          </InputWrapper>
          <InputWrapper>
            <Selects value={where} onChange={handleChanging}>
              <option value="">From where</option>
              <option value="Telegram">Telegram</option>
              <option value="Whatsapp">Whatsapp</option>
            </Selects>
          </InputWrapper>
          <InputWrapper $reset onClick={handleClick}><ResetIcon className={`reset-icon ${rotate ? 'rotate': ''}`} /> Reset filter</InputWrapper>  
        </FilterWrapper>
        <AddLeadModal/>
      </Filters>
      <div>
        {active === 1 ? <VerticalMenuComponent/>:<HorizontalMenuComponent/>}
      </div>
    </div>
  )
}

export default Leads


const VerticalMenuComponent = () => {
  const leads = teachers;
  return(
    <div style={{width:'95%', marginInline:'auto'}}>
          <table style={tableStyle}>
            <tr style={theader}>
              <th style={{borderRadius:'15px 0 0 0 '}}>Lead name</th>
              <th>Phone number</th>
              <th>From where</th>
              <th>Section</th>
            </tr>
            {leads.map((value)=>{
              return(
                <tr style={tdataContainer} key={value.id}>
                  <td style={trows}>{value.name}</td>
                  <td style={tdata}>{value.phoneNumber}</td>
                  <td style={tdata}>Telegram</td>
                  <td style={{...tdata, display:'flex', alignItems:'center', justifyContent:'space-around', paddingLeft:'30px'}}>Elementary <LeadMenuDots/></td>
                </tr>
              )
            })}
          </table>
    </div>
  )
}

//style

const HorizontalMenuComponent = () => {
  return(
    <VerticalContainer>
      <FirstWrapper>
        <Header>From where</Header>
        <AddWhereModal/>
        <DetailSec>
          <Typography>Telegram</Typography>
          <Typography $n>30</Typography>
          <LeadMenuVerticalDots/>
        </DetailSec>
        <DetailSec>
          <Typography>Walked by</Typography>
          <Typography $n>12</Typography>
          <LeadMenuVerticalDots/>
        </DetailSec>
        <DetailSec>
          <Typography>Friends</Typography>
          <Typography $n>3</Typography>
          <LeadMenuVerticalDots/>
        </DetailSec>
      </FirstWrapper>
      <FirstWrapper $section className='section-scroll'>
        <SectionHeader>
          <Header>Sections</Header>
          <AddSectionModal/>
        </SectionHeader>
        
        <ArcadionScroll className='section-scroll'>
          <AccordionTransition/>
        </ArcadionScroll>
      </FirstWrapper>
    </VerticalContainer>
  )
}