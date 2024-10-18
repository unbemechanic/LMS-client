import React from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import HomeComponent from './pages/home/homePage'
import RequestDemoComponent from './pages/home/request'
import SignInComponent from './pages/registration/signIn'
import ForgotComponent from './pages/registration/forgot'
import ChangePassword from './pages/registration/changePassword'
import Sidebar from './sidebar/pages/sidebar'
import AddTeacher from './sidebar/pages/teacher/addTeacher'
import TeacherInfo from './sidebar/pages/teacher/teacherInfo'
import Teachers, { ProfileContent } from './sidebar/pages/teacher/teaches'
import Leads from './sidebar/pages/leads'
import ProfileComponent from './sidebar/pages/profile'
import Group from './sidebar/pages/groups/groups'
import Students from './sidebar/pages/students'
import Budget from './sidebar/pages/budget'
import Notification from './sidebar/pages/notification'
import IndividualGroups from './sidebar/pages/groups/individualGroups'
import IndividualStudent from './sidebar/components/studentIndiv'
import Office from './sidebar/pages/management/office'
import CEO from './sidebar/pages/management/ceo'
import Archive from './sidebar/pages/management/archive'



const RoutesComponent = () => {

  return (
    <BrowserRouter>
    <SidebarWrapper/>
    <Routes>
     <Route path='/' element={<HomeComponent/>}/>
     <Route path='/requestDemo' element={<RequestDemoComponent/>}/>
     <Route path='/sign-in' element={<SignInComponent/>}/>
     <Route path='/forgot' element={<ForgotComponent/>}/>
     <Route path='/change-password' element={<ChangePassword/>}/>
     {/* <Route path='/side' element={<Sidebar/>}/> */}
     <Route path='/teacher/:id' element={<TeacherInfo/>}/>
     <Route path='/leads' element={<Leads/>}/>
     <Route path='/teacher' element={<Teachers/>}/>
     <Route path='/teacher/profile' element={<ProfileComponent/>}/>
     <Route path='/groups' element={<Group/>}/>
     <Route path='/students' element={<Students/>}/>
     <Route path='/students/:id' element={<IndividualStudent/>}/>
     <Route path='/budget' element={<Budget/>}/>
     <Route path='/notifications' element={<Notification/>}/>
     <Route path='/groups/:id' element={<IndividualGroups/>}/>
     <Route path='/management/office' element={<Office/>}/>
     <Route path='/management/ceo' element={<CEO/>}/>
     <Route path='/management/archive' element={<Archive/>}/>

    </Routes>   
    </BrowserRouter>
  )
}

export default RoutesComponent

const SidebarWrapper = () => {
  const location = useLocation();
  const SidebarInactive = location.pathname !== '/' && location.pathname !== '/requestDemo' && location.pathname !== '/sign-in' && location.pathname !== '/forgot' && location.pathname !== '/change-password';
  return SidebarInactive ? <Sidebar /> : null;
};
