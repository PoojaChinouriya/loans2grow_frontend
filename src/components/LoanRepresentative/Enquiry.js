import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom'

function Enquiry() {
  const [enquries, setEnquries] = useState([]);
  const [statusFilter, setStatusFilter] = useState('all'); // 'all', 'pending', 'done', 'rejected'

  async function getAllEnquiry() {
    try {
      const response = await axios.get('http://localhost:8000/v1/enquiries/');
      if (response.status === 200) {
        setEnquries(response.data);
        console.log(response.data);
        console.log('Data is initialized successfully!!!');
      } else {
        console.error('There is an error!!!');
      }
    } catch (error) {
      console.error('Error fetching applications:', error);
    }
  }

  useEffect(() => {
    getAllEnquiry();
  }, []);

  const filteredEnquiry = statusFilter === 'all' ? enquries : enquries.filter(app => app.status === statusFilter);

  const handleSubmitClick = () => {
    alert('enquiry submitted in database!');
  };

  const handleStatusUpdate = async (enquiryId, newStatus) => {
    try {
      
      const response = await axios.put(`http://localhost:8000/v1/enquiries/${enquiryId}`, {
        status: newStatus,
      });

      if (response.status === 200) {
        
        console.log('Status updated successfully!');
      } else {
        console.error('Error updating status:', response.data);
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  return (
    <div>
      <h1 className='text-primary text-center'>Enquiry Information</h1>
      <div>
        <label>Filter by Status:</label>
        <select onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="done">Done</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>
      <table className='table table-dark'>
        <thead>
            <tr>
                <th>first_name</th>
                <th>last_name</th>
                <th>email</th>
                <th>mobile</th>
                <th>message</th>
                <th>enquiry_date</th>
                <th>status</th>
                <th>response_timestamp</th> 
                <th className='text-center'>ACTION</th>   
            </tr>
        </thead>
        
        <tbody className='table-info'>
          {filteredEnquiry.map((enquries) => (
          <tr key={enquries.first_name}>
            
                <td>{enquries.first_name}</td>
                <td>{enquries.last_name}</td>
                <td>{enquries.email}</td>
                <td>{enquries.mobile}</td>
                <td>{enquries.message}</td>
                <td>{enquries.enquiry_date}</td>
                <td><select
                  onChange={(e) => handleStatusUpdate(enquries.enquiry_id, e.target.value)}
                  value={enquries.status}
                >
                  <option value='pending'>pending</option>
                  <option value='done'>done</option>
                  <option value='rejected'>rejected</option>
                </select></td>
                
                <td>{enquries.response_timestamp}</td>
                <td><NavLink className="btn btn-outline-success" onClick={handleSubmitClick}>Submit</NavLink></td>
            
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Enquiry;