import React from 'react'
import { AddStaff, AdminDashBoard, AdminHome } from '../components/admin_components'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import ApplicationStatus from '../ApplicationStatus'
import SanctionedApplication from '../components/admin_components/status/SanctionedApplication'
import DisbursedApplication from '../components/admin_components/status/DisbursedApplication'
import GeneratedApplication from '../components/admin_components/status/GeneratedApplication'
import DocumentVerifiedApplication from '../components/admin_components/status/DocumentVerifiedApplication'
import RejectedApplication from '../components/admin_components/status/RejectedApplication'
import MonthlyJanReports from '../components/reports/MonthlyReports'
import Installment from '../components/admin_components/Installmentrecord/Installment'
import Defaulter from '../components/admin_components/defaulter/Defaulter'

function AppRoutes() {
  return (
    <Routes>
    <Route path='/admin' element={<AdminDashBoard/>}>
        <Route path='' element={<AdminHome/>} />
                
                <Route path='add-staff' element={<AddStaff/>} />
        </Route>
        <Route path='' element={<Home/>}/>
        <Route path='/ApplicationStatus' element={<ApplicationStatus/>}/>
        <Route path='/status=generated' element={<GeneratedApplication/>}/>
        <Route path='/status=document_verified' element={<DocumentVerifiedApplication/>}/>
        <Route path='/status=sanctioned' element={<SanctionedApplication/>}/>
        <Route path='/status=rejected' element={<RejectedApplication/>}/>
        <Route path='/status=disbursed' element={<DisbursedApplication/>}/>
        <Route path='/monthlyjanreport' element={<MonthlyJanReports/>}/>
        <Route path='/installment/:id' element={<Installment/>}/>
        <Route path='/default/:id' element={<Defaulter/>}/>
        
        
        
        

    </Routes>
  )
}

export default AppRoutes    