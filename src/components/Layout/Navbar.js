import React from 'react'
import { NavLink } from 'react-router-dom'


function NavBar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="#">Loans<span style={{color:'red'}}>2</span>Grow</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav me-auto">
        <NavLink className="nav-link" aria-current="page" to="" >Home</NavLink>
    
        <NavLink className="nav-link" aria-current="page" to="/login">login</NavLink>
        <NavLink className="nav-link" aria-current="page" to="/calculator">EMI Calculator</NavLink>
        <NavLink className="nav-link" aria-current="page" to="">Contact</NavLink>
        <NavLink className="nav-link" aria-current="page" to="/doc-upload">Document</NavLink>

        </div>
        <div className='navbar-nav'>
        <NavLink className="nav-link"  to="/admin/">Admin</NavLink>
        </div>
    </div>
  </div>
</nav>


    </div>
    
  )
}

export default NavBar