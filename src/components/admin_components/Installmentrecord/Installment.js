import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import {useParams, NavLink } from 'react-router-dom';

function Installment () {
    const [data, setData] = useState([]);
    const {id} = useParams();
    const getInstallment = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/v1/installment/${id}`);
            setData(response.data);
            console.log(response.data)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
   
    const getDefaulter = async () => {
        // try {
            // const response = await axios.post(`http://127.0.0.1:8000/v1/default/`);
            // setData(response.data);
            // console.log(response.data)
            alert('added successfully')
        // } catch (error) {
            // console.error('Error fetching data:', error);
        }
    


    useEffect(() => {
        getInstallment();
    }, []);

    const buttonStyle = {
        backgroundColor: '#3f007f', // Purple color
        borderColor: '#3f007f',
        color: '#ffffff', // White text
      };
    
    

    return (
        <div>
            <h1 className="blockquote text-center"> Installment records</h1>
            <table className="table table-striped table-bordered table-sm table-responsive table table-dark">
                <thead>
                    <tr>
                        <th>Loan</th>
                        <th>Remaining amount</th>
                        <th>Installment no</th>
                        <th>monthly Installment amount</th>
                        <th>Installment expected amount</th>
                        <th>Last Installment paid date</th>
                        <th>Penalty amount</th>
                        <th>status</th>
                        <th>Add to default</th>
                   </tr>
                </thead>
            
                <tbody>
                        {data.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.loan.id}</td>
                            <td>{item.remaining_amount}</td>
                            <td>{item.monthly_installment_amount}</td>
                            <td>{item.installment_expected_amount}</td>
                            <td>{item.installment_paid_date}</td>
                            <td>{item.penalty_amount}</td>
                            <td>{item.status}</td>
                            <td><button class="btn btn-outline-info me-2" type="button" onClick={()=>{getDefaulter()}} style={buttonStyle}>ADD</button></td>

                            
                        
                        </tr>
                    ))}
                </tbody>
            </table>
            <button class="btn btn-outline-info me-2" type="button" style={buttonStyle}><NavLink className="nav-link " aria-current="page"to="/ApplicationStatus" >BACK</NavLink></button>
        </div>
    );
};



export default Installment


