import React, { useState } from 'react'
import { ProfileContent } from './teaches';
import Groups from './groups';
import Salary from './salary';
import { useParams } from 'react-router-dom';
import { teachers } from '../../../data/teachers';
import styled from 'styled-components';
import TeacherGroups from './groups';

const Container = styled.div`
  padding: 30px;
  padding-left: 30px;
  margin-left: 310px;
`
export const TabContainer = styled.div`
  width: ${(props)=>props.$salary ? '380px' :'567px'};
  border: 2px solid #2C2669;
  height: 44px;
  border-radius: 6px;
  display: grid;
  grid-template-columns: ${(props)=>props.$salary ? '1fr 1fr' :'1fr 1fr 1fr'};
  margin-bottom: ${(props)=> props.$budget ? '':'50px'};
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

const TeacherInfo = () => {
    const [currentTabs, setCurrentTabs] = useState('Profile');
    const {id} = useParams();
    const data = teachers.filter((value)=>value.id == id)
    function handleClick(e){
      setCurrentTabs(e.target.name)
    }
    const teacherInfo = [
      {
        name: "Profile",
        content: <ProfileContent data={data}/>
      },
      {
        name: "Groups",
        content: <TeacherGroups/>
      },
      {
        name: "Salary",
        content: <Salary/>
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

export default TeacherInfo