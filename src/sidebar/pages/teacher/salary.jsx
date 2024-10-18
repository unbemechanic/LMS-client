import React, { useState } from 'react'
import { TabButton, TabContainer } from './teacherInfo';
import { teachers } from '../../../data/teachers';
import { colors } from '@mui/material';

const Salary = () => {
    const [currentTabs, setCurrentTabs] = useState('Income');
  function handleClick(e){
    setCurrentTabs(e.target.name)
  }
  const teacherSalary = [
    {
      name: "Income",
      content: <Income/>
    },
    {
      name: "Expenses",
      content: <Expence/>
    }
  ]
  return (
    <div>
        <TabContainer $salary className='tab'>
          {teacherSalary.map((tab, i) =>
              <TabButton className='buttons'
                  key={i}
                  name={tab.name}
                  disabled={currentTabs === `${tab.name}`}
                  onClick={handleClick}
              >
              {tab.name}
              </TabButton>)}  
        </TabContainer>
        <div className="teacher-content">
                {teacherSalary.map((tab, i) => 
                    <div key={i}>
                        {currentTabs === `${tab.name}` && tab.content}
                    </div>
                )}
        </div>
    </div>
  )
}

export default Salary

export const tableStyle = {
  width: '100%',
  innerHeight: '500px',
  backgroundColor:'white',
  borderRadius: '15px 0 0 0',
  marginTop:'50px',
  borderCollapse:'collapse',
}
export const theader  = {
  height:'50px',
  backgroundColor: '#FAFAFB',
  width:'100%',
  // borderBottom:'1px solid black',
  boxShadow: '0px -1px 0px 0px #EDF2F7 inset',
  fontFamily:'Public Sans',
  color:'#A098D5',
  fontSize:'12px'
}
export const trows = {
  innerHeight: 50,
  // backgroundColor:'red',
  outerHeight:'50px',
  display:'flex',
  alignItems:'center',
  height:'50px',
  gap:'20px',
  paddingLeft:'20px',
  color:'#2C2669',
  fontSize:'14px',
  fontWeight:'700',
  boxShadow:'0px -1px 0px 0px #EDF2F7 inset',
  textAlign:'center'
}
export const tdata = {
  // display:'flex',
  justifyContent:'center',
  // backgroundColor:'red',
  textAlign:'center',
  color:'#6053B9',
  fontSize:'14px',
  fontFamily:'Public Sans',
  fontWeight:'400',
  height:'50px',
  boxShadow:'0px -1px 0px 0px #EDF2F7 inset',
}
export const tdataContainer = {
  boxShadow: '0px -1px 0px 0px #EDF2F7 inset',
  cursor:'pointer',
  color:'#6053b9',
  fontFamily: "Public Sans",
  fontSize:'14px',
  fontWeight:'700'
}

const Income = () => {
  const data = teachers;
  return(
    <div>
      <table style={tableStyle}>
        <tr style={theader}>
          <th style={{borderRadius:'15px 0 0 0 '}}>Teacher income</th>
          <th>Group</th>
          <th>Student</th>
          <th>Attend data <br/> Payment data</th>
        </tr>
        {data.map((value)=>{
          return(
            <tr style={tdataContainer} key={value.id}>
              <td style={trows}>{value.salary}</td>
              <td style={tdata}>{value.group}</td>
              <td style={tdata}>{value.name}</td>
              <td style={tdata}>06.06.2024 <br/> 08.06.2024</td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}
const Expence = () => {
  const data = teachers;
  return(
    <div>
      <table style={tableStyle}>
        <tr style={theader}>
          <th style={{borderRadius:'15px 0 0 0 '}}>Amount</th>
          <th>Category</th>
          <th>Description</th>
          <th>Data</th>
        </tr>
        <tr>
          <td style={trows}>250 000 UZS</td>
          <td style={tdata}>Salary</td>
          <td style={tdata}>Lorem impsum dolar</td>
          <td style={tdata}>06.06.2024</td>
        </tr>
        <tr>
          <td style={trows}>250 000 UZS</td>
          <td style={tdata}>Salary</td>
          <td style={tdata}>Lorem impsum dolar</td>
          <td style={tdata}>06.06.2024</td>
        </tr>
        <tr>
          <td style={trows}>250 000 UZS</td>
          <td style={tdata}>Salary</td>
          <td style={tdata}>Lorem impsum dolar</td>
          <td style={tdata}>06.06.2024</td>
        </tr>
      </table>
    </div>
  )
}
