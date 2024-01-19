// import React from 'react'
// import axios from 'axios'
// import { useEffect, useState } from 'react'

// function AdminHome() {
//   const [applications, setApplications] = useState([])
//   function fetchAllApplications(){
//     axios.get('http://localhost:8000/v1/reports/').then(
//       (response) => {
//         setApplications(response.data)
//       }
//     ).catch(
//       (error) =>{
//         console.log(error)
//       }
//     )
//   }

//   function fetchApplicationUsingDates(){
//     const sd = document.getElementById('startDate').value
//     const ed = document.getElementById('endDate').value
    
//     if(sd && ed){
//       axios.get(`http://localhost:8000/v1/reports/?start_date=${sd}&end_date=${ed}`).then(
//       (response) => {
//         setApplications(response.data)
//         console.log(response.data)
//         alert("Generated")
//       }
//     ).catch(
//       (error) =>{
//         console.log(error)
//       }
//     )

//     }else{
//       alert("Please select  appropriate date")
//     }
//   }


//   function DownloadApplicationUsingDates(){
//     const sd = document.getElementById('startDate').value
//     const ed = document.getElementById('endDate').value
    
//     if(sd && ed){
//       axios.get(`http://localhost:8000/v1/reportxl/?start_date=${sd}&end_date=${ed}`).then(
//       (response) => {
//         setApplications(response.data)
//         console.log(response.data)
//         alert("Downloaded")
//       }
//     ).catch(
//       (error) =>{
//         console.log(error)
//       }
//     )

//     }else{
//       alert("Please select  appropriate date")
//     }
//   }


//   useEffect(()=>{
//     fetchAllApplications()
//   },[])
  

//   return (
//     <div>
//        <h5>Reports based on timelines</h5>
//     <form id="myForm" className='form-control '>
//       {/* Start Date input */}
//       <label htmlFor="startDate">Start Date:</label>
//       <input type="date" id="startDate" name="startDate" required />

//       <br />

//       {/* End Date input */}
//       <label htmlFor="endDate">End Date:</label>
//       <input type="date" id="endDate" name="endDate" required />

//       <br />


//       {/* Submit button */}
//       <button class="btn btn-outline-primary me-2" type="button" onClick={()=>{fetchApplicationUsingDates()}}>Generate Report</button>
//       <button class="btn btn-outline-primary me-2" type="button" onClick={()=>{DownloadApplicationUsingDates()}}>Download Report</button>
    
//     </form>

//     <hr></hr>
//     <table className="table table-striped table-bordered table-sm table-responsive table table-dark">
//               <thead>
//                       <tr>
//                           <th>ID</th>
//                           <th>aadhaar no</th>
//                           <th>pan no</th>
//                           <th>type of employment</th>
//                           <th>business title</th>
//                           <th>business type</th>
//                           <th>business address</th>
//                           <th>business license no</th>
//                           <th>expected average annual turnover</th>
//                           <th>years in current business</th>
//                           <th>colletral</th>
//                           <th>status</th>
//                           <th>application timestamp</th>
//                           <th>remark</th>
//                           <th>credit score</th>
//                           <th>user</th>
                          
  
                          
//                       </tr>
//                   </thead>
                  
//                   <tbody>
//                       {applications.map(item => (
//                           <tr key={item.id}>
//                               <td>{item.id}</td>
//                               <td>{item.aadhaar_no}</td>
//                               <td>{item.pan_no}</td>
//                               <td>{item.type_of_employment}</td>
//                               <td>{item.business_title}</td>
//                               <td>{item.business_type}</td>
//                               <td>{item.business_address}</td>
//                               <td>{item.business_license_no}</td>
//                               <td>{item.expected_average_annual_turnover}</td>
//                               <td>{item.years_in_current_business}</td>
//                               <td>{item.colletral}</td>
//                               <td>{item.status}</td>
//                               <td>{item.application_timestamp}</td>
//                               <td>{item.remark}</td>
//                               <td>{item.credit_score}</td>
//                               <td>{item.user}</td>
                                  
                          
//                           </tr>
//                       ))}
//                   </tbody>
//               </table>




//     </div>
    
//   )
// }

// export default AdminHome

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminHome() {
  const [applications, setApplications] = useState([]);

  function fetchAllApplications() {
    axios
      .get('http://localhost:8000/v1/reports/')
      .then((response) => {
        setApplications(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function fetchApplicationUsingDates() {
    const sd = document.getElementById('startDate').value;
    const ed = document.getElementById('endDate').value;

    if (sd && ed) {
      axios
        .get(`http://localhost:8000/v1/reports/?start_date=${sd}&end_date=${ed}`)
        .then((response) => {
          setApplications(response.data);
          console.log(response.data);
          alert('Generated');
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert('Please select an appropriate date');
    }
  }

  function DownloadApplicationUsingDates() {
    const sd = document.getElementById('startDate').value;
    const ed = document.getElementById('endDate').value;

    if (sd && ed) {
      axios
        .get(`http://localhost:8000/v1/reportxl/?start_date=${sd}&end_date=${ed}`)
        .then((response) => {
          setApplications(response.data);
          console.log(response.data);
          alert('Downloaded');
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert('Please select an appropriate date');
    }
  }

  useEffect(() => {
    fetchAllApplications();
  }, []);

  const buttonStyle = {
    backgroundColor: '#3f007f', // Purple color
    borderColor: '#3f007f',
    color: '#ffffff', // White text
  };

  return (
    <div style={{ backgroundColor: '#121212', color: '#ffffff', padding: '20px' }}>
      <h5 style={{ color: '#ffffff' }}>Reports based on timelines</h5>
      <form id="myForm" className="form-control " style={{backgroundColor:'#000000'}}>
        <label htmlFor="startDate" style={{ color: '#ffffff' }}>
          Start Date:
        </label>
        <input type="date" id="startDate" name="startDate" required style={{ backgroundColor: '#000000', color: '#ffffff' }} />
        <br />
        <label htmlFor="endDate" style={{ color: '#ffffff' }}>
          End Date:
        </label>
        <input type="date" id="endDate" name="endDate" required style={{ backgroundColor: '#000000', color: '#ffffff' }} />
        <br />
        <button className="btn btn-outline-primary me-2" type="button" onClick={() => fetchApplicationUsingDates()} style={buttonStyle}>
          Generate Report
        </button>
        <button className="btn btn-outline-primary me-2" type="button" onClick={() => DownloadApplicationUsingDates()} style={buttonStyle}>
          Download Report
        </button>
      </form>
      <hr></hr>
    
<table style={{ backgroundColor: '#3f007f', color: '#ffffff' }} className="table table-striped table-bordered table-sm table-responsive table table-dark">
      <thead >
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
                      {applications.map(item => (
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
    </div>
  );
}

export default AdminHome;
