import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Leads from './pages/leads'
import Groups from './pages/groups/groups'
import Teachers from './pages/teacher/teaches'
import Sidebar from './pages/sidebar'
import Budget from './pages/budget'
import Students from './pages/students'
import Notification from './pages/notification'

const App = () => {
  return (
    <BrowserRouter>
        <Sidebar>
        <Routes>
            <Route path='/leads' element={<Leads/>}/>
            <Route path='/groups' element={<Groups/>}/>
            <Route path='/teachers' element={<Teachers/>}/>
            <Route path='/budgets' element={<Budget/>}/>
            <Route path='/students' element={<Students/>}/>
            <Route path='/notification' element={<Notification/>}/>
        </Routes>
        </Sidebar>
    </BrowserRouter>
  )
}

export default App