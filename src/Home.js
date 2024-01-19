import React from 'react'
import { NavLink } from 'react-router-dom'
import './Home.css'
import Images from './assets/Images/back5.jpg'


function Home() {
  return (
    <div>
        <div style= {{ backgroundImage:`url(${Images})`, backgroundSize:"cover" }}>
    <header class="jumbotron">
        <div class="container">
            <h1 class="display-4" style={{color:'#ffffff'}}>Get the Loan and Grow your buisness</h1>
            <p class="lead" style={{color:'#ffffff'}}>We provide flexible loan options to meet your financial needs.</p>
            <NavLink class="btn btn-primary btn-lg" to="#" role="button">Apply Now</NavLink>
        </div>
    </header>
    
   
    <div className='container border border-primary text-center mt-5 p-5 ' style={{width:"20%"}}>
    <form >
    <h1 style={{color: '#ffffff'}}> Enquiry Form </h1>
      <label style={{color: '#ffffff'}}>
        First Name:
        <input type="text" name="first_name"  className='form-control'/>
      </label>
        <br/>
      <label style={{color:'#ffffff'}}>
        Last Name:
        <input type="text" name="last_name" className='form-control' />
      </label>
      <br />
      <label style={{color:'#ffffff'}}>
        Email:
        <input type="email" name="email"  className='form-control'/>
      </label>
      <br />
      <label style={{color:'#ffffff'}}>
        Mobile:
        <input type="text" name="mobile" className='form-control' />
      </label>
      <br />
      <label style={{color:'#ffffff'}}>
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
