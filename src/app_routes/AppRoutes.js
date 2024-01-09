import React from 'react'
import { AddStaff, AdminDashBoard, AdminHome } from '../components/admin_components'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'

function AppRoutes() {
  return (
    <Routes>
        
        <Route path='/admin' element={<AdminDashBoard/>}>
                <Route path='' element={<AdminHome/>} />
                <Route path='add-staff' element={<AddStaff/>} />
        </Route>
        <Route path='' element={<Home/>}/>
    </Routes>
  )
}

export default AppRoutes    