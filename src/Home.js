import React from 'react'
import { NavLink } from 'react-router-dom'
import './Home.css'
import Images from './assets/Images/10.jpeg'
import NavBar from './components/Layout/Navbar'


function Home() {
  return (
    <>
    <NavBar/>
    <div>
        <div style= {{ backgroundImage:`url(${Images})`, backgroundSize:"cover" }}>
    <header class="jumbotron">
        <div class="container">
            <h1 class="display-4">Get the Loan and Grow your buisness</h1>
            <p class="lead">We provide flexible loan options to meet your financial needs.</p>
            <NavLink class="btn btn-primary btn-lg" to="#" role="button">Apply Now</NavLink>
        </div>
    </header>
    
    {/* <section class="container my-5">
    <div class="card" style={{width: "18rem;"}}>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="#" class="card-link">Card link</NavLink>
    <NavLink to="#" class="card-link">Another link</NavLink>
  </div>
</div>
    </section> */}
    <div className='container border border-primary text-center mt-5 p-5 ' style={{width:"20%"}}>
    <form >
    <h1 style={{color: ""}}> Enquiry Form </h1>
      <label>
        First Name:
        <input type="text" name="first_name"  className='form-control'/>
      </label>
        <br/>
      <label>
        Last Name:
        <input type="text" name="last_name" className='form-control' />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email"  className='form-control'/>
      </label>
      <br />
      <label>
        Mobile:
        <input type="text" name="mobile" className='form-control' />
      </label>
      <br />
      <label>
        Message:
        <textarea name="message"  className='form-control'/>
      </label>
      <br />
    
      <br/>
      <button type="submit" className='btn btn-success'>Submit</button>
      <button type='reset' className='btn btn-danger '>Reset</button>
    </form>
    </div>
  
    
  


   
    </div>
    </div>
    </>
  )
}

export default Home
