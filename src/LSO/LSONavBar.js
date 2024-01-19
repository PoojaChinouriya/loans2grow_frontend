import React from 'react'
import { NavLink } from 'react-router-dom'

function LSONavBar() {
  return (

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <NavLink className="navbar-brand" to="#">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="#">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="#">Features</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="#">Pricing</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link float-end" to="">logout</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default LSONavBar