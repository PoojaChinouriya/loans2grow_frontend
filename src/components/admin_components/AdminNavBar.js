import React from 'react'
import { NavLink } from 'react-router-dom'

function AdminNavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">Navbar</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            {/* <li className="nav-item active">
                <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
            </li> */}
            <li className="nav-item" style={{ border: '1px solid #ccc', padding: '8px', borderRadius: '5px', backgroundColor: 'lightblue' }}>
                <NavLink  className="nav-link" to="/disbursementform"  >Disbursement</NavLink>
            </li>
            
            <li className="nav-item" style={{ border: '1px solid #ccc', padding: '8px', borderRadius: '5px', backgroundColor: 'pink' }}>
                <NavLink className="nav-link" to="/loandetails" style={{ color: 'black', textDecoration: 'none' }}>LoanDeatils</NavLink>
            </li>
            <li className="nav-item" style={{ border: '1px solid #ccc', padding: '8px', borderRadius: '5px', backgroundColor: 'purple' }}>
                <NavLink className="nav-link" to="/disb" style={{ color: 'black', textDecoration: 'none' }}>ShowDisbursements</NavLink>
            </li>
            </ul>
        </div>
    </nav>
    </div>
  )
}

export default AdminNavBar