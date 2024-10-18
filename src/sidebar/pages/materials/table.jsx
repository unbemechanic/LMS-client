import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../sidebar.css';
import ProfImg from '..//..//..//assets/profileImg.png'
import Imgs from '../../../assets/home.jpeg'
import './material.css'
import { teachers } from '../../../data/teachers';
import { Navigate, useNavigate } from 'react-router-dom';


const Img = styled(ProfImg)`
    border-radius: 50%;
    width: 100px;
    height: 100px;
`

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#FAFAFB',
    color: '#A098D5',
    fontSize: 12,
    

  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#fffs',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const tableStyle = {
  width: '100%',
  innerHeight: '500px',
  backgroundColor:'white',
  borderRadius: '15px 0 0 0',
  marginTop:'50px',
  borderCollapse:'collapse'

}
const theader  = {
  height:'50px',
  backgroundColor: '#FAFAFB',
  width:'100%',
  // borderBottom:'1px solid black',
  boxShadow: '0px -1px 0px 0px #EDF2F7 inset',
  color:'#A098D5',
  fontSize:'12px',
  fontWeight:'600'
}
const trows = {
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
  fontWeight:'700'
}
const tdata = {
  // display:'flex',
  justifyContent:'center',
  // backgroundColor:'red',
  textAlign:'center',
  color:'#6053B9',
  fontWeight:'500',
  fontSize:'14px',
  fontFamily:'Public Sans'
}
const tdataContainer = {
  boxShadow: '0px -1px 0px 0px #EDF2F7 inset',
  cursor:'pointer' 
}

export default function TeacherTable() {
  const history = useNavigate();

  function handleclick(id){
    history(`/teacher/${id}`)
    // window.location.href = teacherData.dataset.href
  };
  const teacherData = teachers;
  return (
    <table style={tableStyle}>
      <tr style={theader}>
        <th style={{borderRadius:'15px 0 0 0 '}}>Full name</th>
        <th>Phone number</th>
        <th>Groups</th>
        <th>Percentage</th>
      </tr>
      {teacherData.map((value)=>{
        return(
      
          <tr  key={value.id} style={tdataContainer} onClick={() => handleclick(value.id)}>
          <td style={trows}><img width={40} height={40} style={{borderRadius:'50%'}} src={value.image}/> {value.name}</td>
          <td style={tdata}>{value.phoneNumber}</td>
          <td style={tdata}>{value.group}</td>
          <td style={tdata}>{value.percentage}</td>
        </tr>)
})}
      
    </table>
  );
}
const salary = [
   {salary:'21 538.46 UZS', 
    group: "IT Bootcamp",
    name: 'Qurbonsaid Rayimov',
    data: '06.06.2024 <br/> 08.06.2024'},
   {salary: '21 538.46 UZS', 
    group: 'IT Bootcamp', 
    name: 'Qurbonsaid Rayimov',
    data: '06.06.2024 <br/> 08.06.2024'},
  {salary: '21 538.46 UZS',
     group: 'IT Bootcamp', 
     name: 'Qurbonsaid Rayimov', data: '06.06.2024 <br/> 08.06.2024'},
  {salary: '21 538.46 UZS',
     group: 'IT Bootcamp', 
     name: 'Qurbonsaid Rayimov', 
     data: '06.06.2024 <br/> 08.06.2024'},
  {salary: '21 538.46 UZS',
     group: 'IT Bootcamp', 
     name: 'Qurbonsaid Rayimov', 
     data: '06.06.2024 <br/> 08.06.2024'},
];

export function TeacherSalaryTable() {
  return (
    <TableContainer component={Paper} sx={{ marginTop:'100px', borderTopLeftRadius: '16px'}}>
      <Table sx={{ minWidth: 700}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{borderTopLeftRadius: '16px'}}>Teacher salary</StyledTableCell>
            <StyledTableCell align="right">Group</StyledTableCell>
            <StyledTableCell align="right">Students</StyledTableCell>
            <StyledTableCell align="right">Attend date <br/> Payment data</StyledTableCell>
            {/* <StyledTableCell sx={{borderTopRightRadius: '10px'}} align="right">Protein&nbsp;(g)</StyledTableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {salary.map((salary) => (
            <StyledTableRow key={salary.name}>
              <StyledTableCell component="th" scope="row">
                 {salary.name}
              </StyledTableCell>
              <StyledTableCell align="right">{salary.number}</StyledTableCell>
              <StyledTableCell align="right">{salary.groups}</StyledTableCell>
              <StyledTableCell align="right">{salary.percent}</StyledTableCell>
              {/* <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export function LeadVerticalTable() {
  return (
    <TableContainer component={Paper} sx={{ marginTop:'80px', borderTopLeftRadius: '16px', width:'95%', marginInline:'auto'}}>
      <Table sx={{ minWidth: 700}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{borderTopLeftRadius: '16px'}}>Teacher salary</StyledTableCell>
            <StyledTableCell align="right">Group</StyledTableCell>
            <StyledTableCell align="right">Students</StyledTableCell>
            <StyledTableCell align="right">Attend date <br/> Payment data</StyledTableCell>
            {/* <StyledTableCell sx={{borderTopRightRadius: '10px'}} align="right">Protein&nbsp;(g)</StyledTableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {salary.map((salary) => (
            <StyledTableRow key={salary.name}>
              <StyledTableCell component="th" scope="row">
                 {salary.name}
              </StyledTableCell>
              <StyledTableCell align="right">{salary.number}</StyledTableCell>
              <StyledTableCell align="right">{salary.groups}</StyledTableCell>
              <StyledTableCell align="right">{salary.percent}</StyledTableCell>
              {/* <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
