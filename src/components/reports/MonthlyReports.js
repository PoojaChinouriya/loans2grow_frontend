import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom'




function MonthlyReports() {
    const [data, setData] = useState([]);
const sd = document.getElementById("startDate").value
const ed = document.getElementById("endDate").value

const fetchData = async () => {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/v1/reports/start_date=${sd}&end_date=${ed}`);
        setData(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    fetchData();
}

       
  return (
 
     <>
       <hr></hr>
       <button type="button" className="btn btn-primary "><h3> Reports</h3></button>
              <table className="table table-striped table-bordered table-sm table-responsive table table-dark">
              <thead>
                      <tr>
                          <th>ID</th>
                          <th>aadhaar no</th>
                          <th>pan no</th>
                          <th>type of employment</th>
                          <th>business title</th>
                          <th>business type</th>
                          <th>business address</th>
                          <th>business license no</th>
                          <th>expected average annual turnover</th>
                          <th>years in current business</th>
                          <th>colletral</th>
                          <th>status</th>
                          <th>application timestamp</th>
                          <th>remark</th>
                          <th>redit score</th>
                          <th>user</th>
                          
  
                          
                      </tr>
                  </thead>
                  
                  <tbody>
                      {data.map(item => (
                          <tr key={item.id}>
                              <td>{item.id}</td>
                              <td>{item.aadhaar_no}</td>
                              <td>{item.pan_no}</td>
                              <td>{item.type_of_employment}</td>
                              <td>{item.business_title}</td>
                              <td>{item.business_type}</td>
                              <td>{item.business_address}</td>
                              <td>{item.business_license_no}</td>
                              <td>{item.expected_average_annual_turnover}</td>
                              <td>{item.years_in_current_business}</td>
                              <td>{item.colletral}</td>
                              <td>{item.status}</td>
                              <td>{item.application_timestamp}</td>
                              <td>{item.remark}</td>
                              <td>{item.credit_score}</td>
                              <td>{item.user}</td>
                              
                          
                          </tr>
                      ))}
                  </tbody>
              </table>
              <button class="btn btn-outline-warning me-2" type="button"><NavLink className="nav-link " aria-current="page" to="/admin" >Click here to excel file </NavLink></button>
              <button class="btn btn-outline-info me-2" type="button"><NavLink className="nav-link " aria-current="page" to="/admin" >BACK</NavLink></button>
          
          </>
    
  )
}

export default MonthlyReports