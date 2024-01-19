import React from 'react'
import { NavLink } from 'react-router-dom'
import './Home.css'
import Images from './assets/Images/10.jpeg'


function Home() {
  return (
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
  
    <footer className="footer">

<div>
      <h3>Frequently Asked Questions</h3>
   <ul>
          <li><NavLink to="/faq">How to apply for a loan?</NavLink></li>
          <li><NavLink to="/faq">What are the eligibility criteria?</NavLink></li>
          <li><NavLink to="/faq">How is the interest rate calculated?</NavLink></li>
          <li><NavLink to="/faq">What are the documents required for a business loan?</NavLink></li>
   </ul>
</div>

<div>
      <h3>Terms and Conditions</h3>
   <ul>
          <li><NavLink to="/terms">Loan Terms</NavLink></li>
          <li><NavLink to="/terms">Privacy Policy</NavLink></li>
          <li><NavLink to="/terms">Refund Policy</NavLink></li>
          <li><NavLink to="/terms">Customer Care</NavLink></li>
    </ul>
</div>

<div >
      <h3>Social Media Links</h3>
    <ul className="social-icons">
          <li><a href="https://www.facebook.com" className="btn btn-primary"><i className="bi bi-facebook"></i> Facebook</a></li>
          <br/>
          <li><a href="https://api.whatsapp.com/send?phone=0123456789" className="btn btn-success"><i className="bi bi-whatsapp"></i> WhatsApp</a></li>
    </ul>
</div>

<div className="footer-section">
      <h3>Reach Us</h3>
    <p>
          123 Loan Street, 
          <br />
          Maharashtra, India
          <br />
          Phone: (555) 123-4567
          <br />
          Email: loansgrow@gmail.com
    </p>
</div>

</footer>
  


   
    </div>
    </div>
  )
}

export default Home
