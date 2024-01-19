// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { NavLink } from 'react-router-dom/dist'
// // import ApplicationStatus from '../../ApplicationStatus'

// function AdminNavBar() {

  
 
//   return (
    
//     <div  >
//     <h3>REPORTS AND RECORDS</h3>
//     <hr></hr>
//            <h5 className='text-lg'>Reports based on status</h5>
//     <button class="btn btn-outline-primary me-2" type="button"><NavLink className="nav-link " aria-current="page" to="/ApplicationStatus" >All Applications</NavLink></button>
//     <button class="btn btn-outline-secondary me-2" type="button"><NavLink className="nav-link" aria-current="page" to="/status=generated" >Generated</NavLink></button>
//     <button class="btn btn-outline-warning me-2" type="button"><NavLink className="nav-link" aria-current="page" to="/status=document_verified" >Document verified</NavLink></button>
//     <button class="btn btn-outline-success me-2" type="button"><NavLink className="nav-link" aria-current="page" to="/status=sanctioned" >Sanctioned</NavLink></button>
//     <button class="btn btn-outline-danger me-2" type="button"><NavLink className="nav-link" aria-current="page" to="/status=rejected" >Rejected</NavLink></button>
//     <button class="btn btn-outline-dark me-2" type="button"><NavLink className="nav-link" aria-current="page" to="/status=disbursed" >Disbursed</NavLink></button>
//     {/* <button class="btn btn-outline-success me-2" type="button">Main button</button> */}
//     <hr></hr>
    
   
//     </div>
//   )}

// export default AdminNavBar


import React from 'react';
import { NavLink } from 'react-router-dom/dist';


function AdminNavBar() {
  const buttonStyle = { backgroundColor: '#3f007f', borderColor: '#3f007f', color: '#ffffff' }; // Purple color

  return (
    <div >
      <h3 style={{backgroundColor:"#000000", color:"#ffffff"}}>REPORTS AND RECORDS</h3>
      <hr></hr>
      <h5 className="text-lg" style={{backgroundColor:"#000000", color:"#ffffff"}}>Reports based on status</h5>
      <button style={buttonStyle} class="btn btn-outline-primary me-2" type="button">
        <NavLink className="nav-link" aria-current="page" to="/ApplicationStatus">
          All Applications
        </NavLink>
      </button>
      <button style={buttonStyle} class="btn btn-outline-secondary me-2" type="button">
        <NavLink className="nav-link" aria-current="page" to="/status=generated">
          Generated
        </NavLink>
      </button>
      <button style={buttonStyle} class="btn btn-outline-warning me-2" type="button">
        <NavLink className="nav-link" aria-current="page" to="/status=document_verified">
          Document verified
        </NavLink>
      </button>
      <button style={buttonStyle} class="btn btn-outline-success me-2" type="button">
        <NavLink className="nav-link" aria-current="page" to="/status=sanctioned">
          Sanctioned
        </NavLink>
      </button>
      <button style={buttonStyle} class="btn btn-outline-danger me-2" type="button">
        <NavLink className="nav-link" aria-current="page" to="/status=rejected">
          Rejected
        </NavLink>
      </button>
      <button style={buttonStyle} class="btn btn-outline-dark me-2" type="button">
        <NavLink className="nav-link" aria-current="page" to="/status=disbursed">
          Disbursed
        </NavLink>
      </button>
      <hr></hr>
    </div>
  );
}

export default AdminNavBar;
