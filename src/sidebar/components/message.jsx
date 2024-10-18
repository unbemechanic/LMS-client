import React from 'react'
import { tableStyle, tdata, tdataContainer, theader } from '../pages/teacher/salary'
import { StudentsCommentMenuDots } from '../../materials/popper'

const Sms = () => {
  return (
    <div><table style={tableStyle}>
    <tr style={theader}>
      <th style={{borderRadius:'15px 0 0 0 '}}></th>
      <th>Sms</th>
      <th>Sender</th>
      <th>Date</th>
      <th></th>
    </tr>
          <tr style={tdataContainer}>
          <td style={tdata}>1</td>
          <td style={{...tdata, width:'50%'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptatum corporis adipisci sequi accusamus iusto ullam provident temporibus amet autem laborum dolorem obcaecati doloribus, expedita dicta? Non consectetur suscipit voluptatibus?</td>
          <td style={tdata}>New elementary</td>
          <td style={{...tdata, display:'flex', alignItems:'center', justifyContent:'space-around', paddingLeft:'30px'}}>02.12.2023 | 21:32</td>
        </tr>
  </table></div>
  )
}

export default Sms