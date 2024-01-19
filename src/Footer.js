import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
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
          <li><a href="https://api.whatsapp.com/send?phone=7757095140" className="btn btn-success"><i className="bi bi-whatsapp"></i> WhatsApp</a></li>
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
  )
}

export default Footer