import axios from 'axios'
import React from 'react'
import { useState } from "react"
import { useParams, useNavigate, NavLink } from 'react-router-dom'
import { useEffect } from 'react'

function DeleteApplication() {
    const{applicationId} = useParams()
    const [application, setApplication] = useState({})
    const nav = useNavigate()

    async function fetchApplicationById() {
        axios.get(`http://localhost:8000/v1/${applicationId}/`).then((response)=>{
            setApplication(response.data)  
        }).catch((error)=>{
            console.log(error)
        })
    }
    async function deleteApplicationById(){
        await axios.delete(`http://localhost:8000/v1/${applicationId}/`).then((response)=>{
            nav('/showapp')
        }).catch((error)=>{
            alert('Error Deleting the resource')
        })
    }

    useEffect(()=>{
        fetchApplicationById()
    },[])

  return (
    <div classname = 'container'>
      <h1>Are you sure you want to delete the application <span className='text-danger'>{application.first_name}</span>???</h1>
      <button type='button' className='btn btn-outline-danger col-sm-5' onClick={()=>{deleteApplicationById()}}>YES</button>
      <NavLink to={'/showapp'} className='btn btn-outline-warning col-sm-5 float-end'>NO</NavLink>
    </div>
  )
}

export default DeleteApplication