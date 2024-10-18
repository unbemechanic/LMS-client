import React from 'react'
import { AddNewEmployeeModal } from '../../../materials/leads/modal'
import { tableStyle, tdata, tdataContainer, theader } from '../budget'
import { CeoStaffMenuDots } from '../../../materials/popper'

const Staff = () => {
  return (
    <div>
         <AddNewEmployeeModal/>
      <table style={{...tableStyle, borderRadius:'15px', width:'98%'}}>
        <tr style={{...theader}}>
          <th style={{ borderRadius: "15px 0 0 0 " }}></th>
          <th style={{textAlign:'start'}}>Full name</th>
          <th style={{ ...tdata,textAlign:'start' }}>Phone number</th>
          <th style={{ ...tdata,textAlign:'start' }}>Role</th>
          <th style={{ borderRadius: " 0 15px 0 0 " }}></th>
        </tr>
        <tr style={tdataContainer}>
          <td style={{...tdata, width:'80px'}}>1</td>
          <td style={{ ...tdata,textAlign:'start' }}>
            Ceo Demo
          </td>
          <td>(99) 999 00 76</td>
          <td>Teacher</td>
          <td
            style={{
              ...tdata,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: "30px",
            }}
          >
            <CeoStaffMenuDots/>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default Staff