import React from 'react'
import { NavLink } from 'react-router-dom'

function AdminNavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <NavLink className="navbar-brand" to="/">Navbar</NavLink>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarNav">
             <ul className="navbar-nav">
             <li className="nav-item ative">
                 <NavLink className="nav-link" to="/applicationform"> Application Form <span className="sr-only"></span></NavLink>
             </li>
             
             <li className="nav-item ative">
                 <NavLink className="nav-link" to="/showapp">Show Applications <span className="sr-only"></span></NavLink>
             </li>
             <li className="nav-item ative">
                 <NavLink className="nav-link" to="/guarantorform"> Guarantor Form <span className="sr-only"></span></NavLink>
             </li>
             <li className="nav-item ative">
                 <NavLink className="nav-link" to="/showgua">Show Guarantors <span className="sr-only"></span></NavLink>
             </li>
             <li className="nav-item ative">
                 <NavLink className="nav-link" to="/enq">Enquiry <span className="sr-only"></span></NavLink>
             </li>
             </ul>
      
         </div>
      </nav>
    </div>
  )
}

export default AdminNavBar