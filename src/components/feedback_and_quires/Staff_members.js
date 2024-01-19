import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";


 
 export default function Staff_members() {
  const [users,setUsers] = useState([]);

  async function fetchAllUsers(){
    const result = await axios.get('http://127.0.0.1:8000/app/queries');
    setUsers(result.data);

  }

  useEffect(()=>{
    fetchAllUsers();

  },[]

  )


   return (
    <>
    <center><h1>Records For Staff Members</h1></center>
    <table className="table table-dark ">
      <thead>
        <tr>
          
          <th> first_name</th>
          <th>last_name</th>
          <th>email</th>
          <th>query </th>
          <th>question_date</th>
          <th>answerquery</th>
          {/* <th>actions</th> */}

        </tr>
      </thead>

      <tbody>
        {
          
        users.map(obj=>{
          return(
            <tr>
              <td>{obj.email}</td>
              <td>{obj.first_name}</td>
              <td>{obj.last_name}</td>
              <td>{obj.query}</td>
              
              <td>{obj.question_date}</td>
            
              <td><button className="btn btn-outline-info me-2" type="button"><NavLink className="nav-link " aria-current="page"to={`/answer/${obj.id}`} >ANSWER</NavLink></button></td>

               
          
            </tr>

          );
             
          
        })
        }
      </tbody>

    </table>
    
    </>

   )
 }