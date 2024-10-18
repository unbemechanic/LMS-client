import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { teachers } from '../../../data/teachers';
import styled from 'styled-components';
import TeacherGroups from './groups';
import Attandance from './attandance';
import Price from './prise';
import History from './history';
import StudentGroups from '../../components/studentGroups';
import Comments from '../../components/comments';
import Sms from '../../components/message';
import Courses from '../management/courses';
import Rooms from '../management/rooms';
import Staff from '../management/staff';
import Branches from '../management/branches';
import GroupsArchive from '../management/groups';
import StudentArchive from '../management/studentArchive';
import StaffArchive from '../management/staffArchive';
import LeadsArchive from '../management/leadsArchive';

const Container = styled.div`
  padding-top: 30px;
`
export const TabContainer = styled.div`
  width: ${(props)=>props.$salary ? '380px' :'567px'};
  border: 2px solid #2C2669;
  height: 44px;
  border-radius: 6px;
  display: grid;
  grid-template-columns: ${(props)=>props.$salary ? '1fr 1fr' :(props)=>props.$student ? '1fr 1fr 1fr 1fr' :'1fr 1fr 1fr'};
  margin-bottom: 50px;
`
export const TabButton = styled.button`
  color: #2C2669;
  background: inherit;
  font-family: "Public Sans";
  font-size: 14px;
  border: 1px solid #2C2669;
  cursor: pointer;
  /* z-index: -1; */
  &:disabled{
    color: white;
    background-color: #2C2669;
  }
`

const GroupInfo = () => {
    const [currentTabs, setCurrentTabs] = useState('Attandance');
    const {id} = useParams();
    const data = teachers.filter((value)=>value.id == id)
    function handleClick(e){
      setCurrentTabs(e.target.name)
    }
    const teacherInfo = [
      {
        name: "Attandance",
        content: <Attandance data={data}/>
      },
      {
        name: "Indivudual prices",
        content: <Price/>
      },
      {
        name: "History",
        content: <History/>
      },
    ]
  return (
    <Container>
        <TabContainer className='tab'>
          {teacherInfo.map((tab, i) =>
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
                {teacherInfo.map((tab, i) => 
                    <div key={i}>
                        {currentTabs === `${tab.name}` && tab.content}
                    </div>
                )}
        </div>
      </Container>
  )
}

export default GroupInfo
export const StudentInfo = () => {
    const [currentTabs, setCurrentTabs] = useState('Groups');
    const {id} = useParams();
    const data = teachers.filter((value)=>value.id == id)
    function handleClick(e){
      setCurrentTabs(e.target.name)
    }
    const teacherInfo = [
      {
        name: "Groups",
        content: <StudentGroups data={data}/>
      },
      {
        name: "Comment",
        content: <Comments/>
      },
      {
        name: "SMS",
        content: <Sms/>
      },
      {
        name: "History",
        content: <History/>
      },
    ]
  return (
    <Container>
        <TabContainer $student className='tab'>
          {teacherInfo.map((tab, i) =>
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
                {teacherInfo.map((tab, i) => 
                    <div key={i}>
                        {currentTabs === `${tab.name}` && tab.content}
                    </div>
                )}
        </div>
      </Container>
  )
}
export const OfficeTab = () => {
    const [currentTabs, setCurrentTabs] = useState('Courses');
    const {id} = useParams();
    const data = teachers.filter((value)=>value.id == id)
    function handleClick(e){
      setCurrentTabs(e.target.name)
    }
    const teacherInfo = [
      {
        name: "Courses",
        content: <Courses data={data}/>
      },
      {
        name: "Rooms",
        content: <Rooms/>
      },
      
    ]
  return (
    <Container>
        <TabContainer $salary className='tab'>
          {teacherInfo.map((tab, i) =>
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
                {teacherInfo.map((tab, i) => 
                    <div key={i}>
                        {currentTabs === `${tab.name}` && tab.content}
                    </div>
                )}
        </div>
      </Container>
  )
}
export const CEOTab = () => {
    const [currentTabs, setCurrentTabs] = useState('Staff');
    const {id} = useParams();
    const data = teachers.filter((value)=>value.id == id)
    function handleClick(e){
      setCurrentTabs(e.target.name)
    }
    const teacherInfo = [
      {
        name: "Staff",
        content: <Staff data={data}/>
      },
      {
        name: "Branches",
        content: <Branches/>
      },
      
    ]
  return (
    <Container>
        <TabContainer $salary className='tab'>
          {teacherInfo.map((tab, i) =>
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
                {teacherInfo.map((tab, i) => 
                    <div key={i}>
                        {currentTabs === `${tab.name}` && tab.content}
                    </div>
                )}
        </div>
      </Container>
  )
}
export const ArchiveTabs = () => {
  const [currentTabs, setCurrentTabs] = useState('Groups');
  const {id} = useParams();
  const data = teachers.filter((value)=>value.id == id)
  function handleClick(e){
    setCurrentTabs(e.target.name)
  }
  const teacherInfo = [
    {
      name: "Groups",
      content: <GroupsArchive data={data}/>
    },
    {
      name: "Students",
      content: <StudentArchive/>
    },
    {
      name: "Staff",
      content: <StaffArchive/>
    },
    {
      name: "Leads",
      content: <LeadsArchive/>
    },
  ]
return (
  <Container>
      <TabContainer $student className='tab'>
        {teacherInfo.map((tab, i) =>
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
              {teacherInfo.map((tab, i) => 
                  <div key={i}>
                      {currentTabs === `${tab.name}` && tab.content}
                  </div>
              )}
      </div>
    </Container>
)
}
