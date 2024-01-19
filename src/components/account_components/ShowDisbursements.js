import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import {useParams } from 'react-router-dom'

const ShowDisbursements = () => {
        const [data, setData] = useState([])
        
        
        const getShowDisbursement = async () => {
          try {
            
            const response = await axios.get(`http://localhost:8000/v1/disb/`)
            setData(response.data)
            console.log(response.data)

          } catch (error) {
            console.error('Error fetching datas:', error);
            
          }
        }
        useEffect(() => {
          getShowDisbursement();
        }, [])

  return (
    <div className='container'>
      <h1 className='text-primary'>Disbursement List</h1>
      
      <table className="table table-striped table-bordered table-sm table-responsive table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Insurance Doc</th>
            <th>Payment Mode</th>
            <th>Net Disbursed Amount</th>
            <th>Disbursed to Account No</th>
            <th>Receipt Doc</th>
            <th>Status</th>
            <th>Response Timestamp</th>
          </tr>
        </thead>
        <tbody>
        {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.insurance_doc}</td>
              <td>{item.payment_mode}</td>
              <td>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(item.net_disbursed_amount)}</td>
              <td>{item.disbursed_to_account_no}</td>
              <td>{item.receipt_doc}</td>
              <td>{item.status}</td>
              <td>{item.response_timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    
    </div>
  );
};

export default ShowDisbursements
