import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Customer_question from '../Customer_question';


function Faq() {
    const [faqs, setFaqs] = useState([]);
    const fetchFaq = async () => {
        try {
          const response = await axios.get('http://127.0.0.1:8000/app/faq/');;
          setFaqs(response.data);
        } catch (error) {
          console.error('Error fetching Faq:', error);
        }
     }
    
    useEffect(() => {
        ;
       
        fetchFaq();
       }, []);
    
    return (
        <div className="bank-faq">
        <h2 class="text-warning">Frequently Asked Questions</h2>
        
        <br></br>
        <ul>
            {faqs.map((faq, index) => (
            <li key={index}>
                <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
            </li>
        
            ))}
        </ul>
        <NavLink to={Customer_question}><button className='btn btn-outline-danger col-3 mt-3'>Quries</button></NavLink> 

        </div>

    )
}

export default Faq



