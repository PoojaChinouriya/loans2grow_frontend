import React from 'react'
import LSONavBar from './LSONavBar'
import { Outlet } from 'react-router-dom'

function LSODashBoard() {
  return (
    
    <>
    <LSONavBar/>
    <Outlet/>
    </>
    
  )
}

export default LSODashBoard