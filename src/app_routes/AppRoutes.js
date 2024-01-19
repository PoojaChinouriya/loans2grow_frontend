import React from 'react'
import { AddStaff, AdminDashBoard, AdminHome } from '../components/admin_components'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import { ApprovedDataFromOH, LSODashBoard } from '../LSO'
import DocumentsToLSO from '../LSO/DocumentsToLSO'
import AddLoanDetails from '../LSO/AddLoanDetails'

function AppRoutes() {
  return (
    <Routes>     
        <Route path='/admin' element={<AdminDashBoard/>}>
                <Route path='' element={<AdminHome/>} />
                <Route path='add-staff' element={<AddStaff/>} />
        </Route>
        
        <Route path='' element={<Home/>}/>
        <Route path='/lso' element={<LSODashBoard/>}>
          <Route path='loan-application-by-oh' element={<ApprovedDataFromOH/>}/>
          <Route path='documents-to-lso/:id' element={<DocumentsToLSO/>}/>
          <Route path='loan_details/' element={<AddLoanDetails/>}/>
        </Route>
    </Routes>
  )
}

export default AppRoutes    