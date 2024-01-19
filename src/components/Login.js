import React,{useState} from 'react'
import {useForm} from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'


function Login() {
  
    let {register,handleSubmit} = useForm()
    
    let navi = useNavigate()
    
     function saveData(data){
            axios.post('http://127.0.0.1:8000/api/token/',data).then((response)=>{
                console.log(response.data.access, '----accesstoken----')
                console.log(response.data.refresh, '----reftreshtoken----')
               
                window.localStorage.setItem('AccessToken',JSON.stringify(response.data.access))
                window.localStorage.setItem('RefreshToken',JSON.stringify(response.data.refresh))
                window.localStorage.setItem('isLoggedIn',JSON.stringify(true))
                
               window.location.href = "http://localhost:3000/oper-head/"
            }).catch((error)=>{
              console.log(error)
            })
      }

      
  return (
    <div className='container'>
    <form onSubmit={handleSubmit(saveData)}> 
        <label htmlFor='a'><b>EMAIL ADRESS</b></label>
        <input id='a' type='email' className='form-control' {...register('email')}/>
        <br/><br/>
        <label htmlFor='b'><b>PASSWORD</b></label>
        <input id='b' type='password' className='form-control' {...register('password')}/>
        <br/><br/>
        <input type='submit' value='Login' className='btn btn-outline-success col-6'/>
        <button type='button' className='btn btn-outline-warning col-6 float-end'>RESET</button>
       
    </form>
    <h3 id='h1'></h3>
</div>
  )
}


export default Login