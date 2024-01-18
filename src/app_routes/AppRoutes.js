import React from 'react'
import { AddStaff, AdminDashBoard, AdminHome } from '../components/admin_components'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import ApplicationForm from '../components/LoanRepresentative/ApplicationForm'
import ShowApplications from '../components/LoanRepresentative/ShowApplications'
import { GuarantorForm } from '../components/LoanRepresentative'
import ShowGuarantor from '../components/LoanRepresentative/ShowGuarantor'
import DeleteApplication from '../components/LoanRepresentative/DeleteApplication'
import UpdateApplication from '../components/LoanRepresentative/UpdateApplication'
import Enquiry from '../components/LoanRepresentative/Enquiry'


function AppRoutes() {
  return (
    <Routes>
        
        <Route path='/admin' element={<AdminDashBoard/>}>
                <Route path='' element={<AdminHome/>} />
                <Route path='add-staff' element={<AddStaff/>} />
                
        </Route>
        <Route path='' element={<Home/>}/>
        <Route path='/applicationform' element={<ApplicationForm/>}/>
        <Route path='/showapp' element={<ShowApplications/>} />
        <Route path='/delete/:ApplicationId' element={<DeleteApplication/>} />
        <Route path='/update/:ApplicationId' element={<UpdateApplication/>} />
        <Route path='/guarantorform' element={<GuarantorForm/>}/>
        <Route path='/showgua' element={<ShowGuarantor/>} />
        <Route path='/enq' element={<Enquiry/>} />
     
        
        
    </Routes>
  )
}

export default AppRoutes    