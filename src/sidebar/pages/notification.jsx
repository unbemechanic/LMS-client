import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { NotificationAdd, NotificationContainer, NotificationTable, NotificationTableRow, TableRows } from './styles';
import { AddNewNotificationModal } from '../../materials/leads/modal';

const Notification = () => {
  return (
    <NotificationContainer style={{marginLeft:'330px', paddingTop:'20px'}}>
      <h1 style={{display:'flex',alignItems:'center', display:'inline-block'}}><NotificationsIcon fontSize='large' sx={{color:'#2C2669'}}/>All Messages</h1>
      <AddNewNotificationModal  />
      <NotificationTable>
        <NotificationTableRow style={{color:'#949393ce'}}>
          <th>Notification</th>
          <th>Sender</th>
          <th>Content type</th>
          <th>People type</th>
          <th>Time</th>
        </NotificationTableRow>
        <NotificationTableRow style={{color:'#278ee1'}}>
          <TableRows>
            Tution fee payment is processed, please make payment!!!
          </TableRows>
          <TableRows>
            <AlternateEmailIcon/> Suzan from UserGuiding 
          </TableRows>
          <TableRows>
            Tution fee
          </TableRows>
          <TableRows>
            Users
          </TableRows>
          <TableRows>September 10</TableRows>
        </NotificationTableRow>
      </NotificationTable>
    </NotificationContainer>
  )
}

export default Notification