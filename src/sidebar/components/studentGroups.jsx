import React from 'react'

import { Bottom,
    GroupdImg,
    Spans,
    Students,
    Typography,Container } from '../pages/teacher/groups';
import { Link } from 'react-router-dom';
import { IndividualPageIcon } from '../../materials/popper';
import { tableStyle, tdata, tdataContainer, theader, trows } from '../pages/teacher/salary';

const StudentGroups = () => {
  return (
    <div>
        <Container style={{ height: "fit-content" }}>
      <IndividualPageIcon/>
        <GroupdImg></GroupdImg>
        <Typography $ocean>
          Ocean <Spans>Group name</Spans>
        </Typography>
        <Typography $subject>
          Subject name <Spans>Course</Spans>{" "}
        </Typography>
        <Typography $date>
          John <Spans>Teacher name</Spans>
        </Typography>
        <Typography $date>
          02.23.2023 <Spans>Start data</Spans>
        </Typography>
        <Students>
          <div style={{ display: "flex", gap: "10px" }}>
            <Spans $student>12 student</Spans>
            <Spans $student>2-room</Spans>
          </div>{" "}
          <Spans>Student & room</Spans>
        </Students>
        <Bottom>
          <b>
            from-to <p>days</p>
          </b>
            <button>223.000 UZS</button>
        </Bottom>
      </Container>
      <table style={tableStyle}>
            <tr style={theader}>
              <th style={{borderRadius:'15px 0 0 0 '}}></th>
              <th>Date</th>
              <th>Amount</th>
              <th>Groups</th>
              <th>Receiver</th>
              <th></th>
            </tr>
                  <tr style={tdataContainer}>
                  <td style={tdata}>1</td>
                  <td style={tdata}>01.09.2023</td>
                  <td style={tdata}>New elementary</td>
                  <td style={{...tdata, display:'flex', alignItems:'center', justifyContent:'space-around', paddingLeft:'30px'}}>IT Bootcampt</td>
                  <td style={tdata}>Rumi</td>
                </tr>
          </table>
    </div>
  )
}

export default StudentGroups