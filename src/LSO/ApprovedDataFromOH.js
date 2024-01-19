import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';



const ApprovedDataFromOH = () => {

       
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/v1/verified-oh');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        
        
        <div className='table-responsive'>
            <h1> Data(Remark:Apporoved by OH, Status:verified) </h1>
            <table className='table table-hover table-dark'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>aadhaar_no</th>
                        <th>pan_no</th>
                        <th>type_of_employment</th>
                        <th>business_title</th>
                        <th>business_type</th>
                        <th>business_address</th>
                        <th>business_license_no</th>
                        <th>expected_average_annual_turnover</th>
                        <th>years_in_current_business</th>
                        <th>colletral</th>
                        <th>status</th>
                         <th>application_timestamp</th>
                        <th>remark</th>
                        <th>credit_score</th>
                        <th>user</th>
                        <th>Document Verification</th>            
                    </tr>
                </thead>
                <tbody className="table-group-divider"> 
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
                            <td><NavLink to={`/lso/documents-to-lso/${item.id}`} className='btn btn-primary'>Verify</NavLink></td>
                            
                        
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ApprovedDataFromOH;
