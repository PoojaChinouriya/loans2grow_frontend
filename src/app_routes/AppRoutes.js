import React from 'react'
import { AddStaff, AdminDashBoard, AdminHome } from '../components/admin_components'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import LoanDetails from '../components/account_components/LoanDetails'
import Disbursement from '../components/account_components/Disbursement'
import ShowDisbursements from '../components/account_components/ShowDisbursements'

function AppRoutes() {
  return (
    <Routes>
        
        <Route path='/admin' element={<AdminDashBoard/>}>
                <Route path='' element={<AdminHome/>} />
                <Route path='add-staff' element={<AddStaff/>} />
        </Route>
        <Route path='' element={<Home/>}/>
        <Route path='/disbursementform' element={<Disbursement/>}/>
        <Route path='/loandetails' element={<LoanDetails/>}/>
        <Route path='/disb' element={<ShowDisbursements/>}/>
    </Routes>
  )
}

export default AppRoutes    