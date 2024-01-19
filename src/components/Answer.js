import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {set, useForm} from 'react-hook-form';
import { useNavigate,useParams } from 'react-router-dom';
// import { NavLink } from "react-router-dom";


export default function Answer() {
    const {Id} = useParams();
    const {register,setValue,handleSubmit} = useForm();
    const navigate = useNavigate();
    const [query, setQuery] = useState({})
    function fetchQueryById(){
      axios.get(`http://localhost:8000/app/query/${Id}/`).then(
        (response) =>{
          setQuery(response.data)
        }
       ).catch(error =>{
        console.log(error)
       })
    }
      function saveQueryToDB(data) {
        axios.patch(`http://localhost:8000/app/query/${Id}/`,data).then(
          (response)=>{
            alert("Query Updated")
          }
        ).catch(
          (error) =>{
            console.error(error)
          }
        )
      }
    useEffect(()=>{
      fetchQueryById()
    },[])
    // async function fetchUser(){
    //     const result = await axios.get(`http://127.0.0.1:8000/app/query/`);
    //     setValue('answer',result.data.answer);
        

    // }

    // const saveData=data=>{
    //   axios.put(`http://127.0.0.1:8000/app/query/`,data);
      

    // }

    // useEffect(()=>{
    //   fetchUser();
    // },[]
    // )
   
  function ans() {
        alert("query resolved")
  };
  return (
    <>
      <div className='container'>
        <center><h1> <u> This is answer form  </u></h1></center>
        <form onSubmit={handleSubmit(saveQueryToDB)}>
           <p>{query.query}</p>
            <label htmlFor='answer '><h1> answer </h1></label>
            <input type='text' id='answer ' className='form-control' {...register('answer')}/>
            <br/>
            <br/>
            <input type='submit' className='btn btn-outline-success col-6 mt-4' />
            <input type='reset' className='btn btn-outline-warning col-6 mt-4'/>


        </form>

      </div>
    </>
  )
}
