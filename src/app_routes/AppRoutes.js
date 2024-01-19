import React from 'react'
import { AddStaff, AdminDashBoard, AdminHome } from '../components/admin_components'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import OprationalHeadDashboard from '../components/OprationalHead/OprationalHeadDashboard'
import Document from '../components/OprationalHead/SHOWDETAILS/Document'
import ShowDetails from '../components/OprationalHead/SHOWDETAILS/ShowDetails'
import ChangeStatusApp from '../components/OprationalHead/ChangeStatusApp'
import Login from '../components/Login'

function AppRoutes() {
  return (
    <Routes>
        <Route path='/oper-head/' element={<OprationalHeadDashboard/>}/>
        <Route path='/login/' element={<Login/>}></Route>
        <Route path='/application_create/:userId/' element={<ChangeStatusApp/>}/>
        <Route path='documents/' element={<Document/>}/>
        <Route path='/admin' element={<AdminDashBoard/>}>
                <Route path='' element={<AdminHome/>} />
                <Route path='add-staff' element={<AddStaff/>} />
        </Route>
        <Route path='' element={<Home/>}/>
        <Route path='/show-detail/:userId/' element={<ShowDetails/>}></Route>
        
    </Routes>
  )
}

export default AppRoutes    