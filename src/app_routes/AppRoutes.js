import React from 'react'
import { AddStaff, AdminDashBoard, AdminHome } from '../components/admin_components'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import UploadDoc from '../components/customer_components/UploadDoc'
import Register from '../components/customer_components/Register'
import EmiCalculator from '../components/customer_components/EmiCalculator'



function AppRoutes() {
  return (
    <Routes>
        
        <Route path='/admin' element={<AdminDashBoard/>}>
                <Route path='' element={<AdminHome/>} />
                <Route path='add-staff' element={<AddStaff/>} />
                

        </Route>
        <Route path='' element={<Home/>}/>
        <Route path='/doc-upload' element={<UploadDoc/>} />
        <Route path='/login' element={<Register/>} />
        <Route path='/calculator' element={<EmiCalculator/>} />
       
    </Routes>
  )
}

export default AppRoutes    