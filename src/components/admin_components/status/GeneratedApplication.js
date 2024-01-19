import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const GeneratedApplication = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/v1/applicationview?status=generated');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const buttonStyle = {
        backgroundColor: '#3f007f', // Purple color
        borderColor: '#3f007f',
        color: '#ffffff', // White text
      };
    
    

    return (
        <div>
            <h1 className="blockquote text-center">Generated Applications</h1>
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
                        <th>credit score</th>
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
            <button class="btn btn-outline-info me-2" type="button" style={buttonStyle}><NavLink className="nav-link " aria-current="page" to="/admin" >BACK</NavLink></button>
        </div>
    );
};



export default GeneratedApplication