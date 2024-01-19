import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';


function Application() {
  const access = JSON.parse(window.localStorage.getItem("AccessToken"))
  console.log('access', access)
  let[rec,setRec] = useState([])
  async function showData(){
    await axios.get('http://127.0.0.1:8000/applications/',
    {headers: {'Accept':'application/json', 'Authorization':`Bearer ${access}`}}

    ).then((response)=>{
      setRec(response.data)
      console.log(response.data)
    }).catch((error)=>{
      window.location.href = 'http://localhost:3000/login/'
      alert('server down.....')
    })
  }
useEffect(()=>{showData()},[])

  return (
    <div className='container'>
        <div className='row'>
              <div class="table-responsive">
                <table className='table table-striped'>
                    < thead>
                    <tr>
                        <th>APPLICATION</th>
                        <th>USER</th>
                        <th>ADHAAR NO</th>
                        <th>PAN NO</th>
                        <th>EMPLOYEMENT TYPE</th>
                        <th>BUSINESS TITLE</th>
                        <th>BUSINESS TYPE</th>
                        <th>BUSINESS ADDRESS</th>
                        <th>GST REG NO</th>
                        <th>BUSINESS LICENSE NO</th>
                        <th>EXPECTED AVG ANNUAL TURNOVER</th>
                        <th>YEARS OF CURRENT BUSINESS</th>
                        <th>COLLATERAL</th>
                        <th>STATUS</th>
                        <th>APPLICATION TIMESTAMP</th>
                        <th>REMARK</th>
                        <th>CREDIT SCORE</th>
                        <th colSpan={2} className='text-center'>ACTION</th>
                    </tr>
                    </thead>
                    <tbody>
                    {rec.map((obj)=>{
                            return (
                              <tr>
                                <td>{obj.id}</td>
                                <td>{obj.user.id}</td>
                                <td>{obj.aadhaar_no}</td>
                                <td>{obj.pan_no}</td>
                                <td>{obj.type_of_employment}</td>
                                <td >{obj.business_title}</td>
                                <td>{obj.business_type}</td>
                                <td>{obj.business_address}</td>
                                <td>{obj.gst_registration_no}</td>
                                <td>{obj.business_license_no}</td>
                                <td>{obj.expected_average_annual_turnover}</td>
                                <td>{obj.years_in_current_business}</td>
                                <td>{obj.colletral}</td>
                                <td>{obj.status}</td>
                                <td>{new Date(obj.application_timestamp).toLocaleString()}</td>
                                <td>{obj.remark}</td>
                                <td>{obj.credit_score}</td>
                                <td><NavLink className='btn btn-outline-warning btn-sm' to={`/show-detail/${obj.id}/`}>ShowDetails</NavLink></td>
                                <td><NavLink className='btn btn-outline-warning btn-sm' to={`/application_create/${obj.id}/`}>ChangeStatus</NavLink></td>
                              </tr>)}
                    )}
                    </tbody>
                </table>
            </div>
        </div>
  </div>
)}
export default Application