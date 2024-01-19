import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {
  const {register, handleSubmit, reset} = useForm();

  const handleregister = async (data) => {
    axios.post(`http://127.0.0.1:8000/v1/register/`, data).then(
        (response)=>{
          alert('Successfully registered')
        }
      ).catch(
        (error)=>{
          console.log(error)
        }
      )
    }

 
  const handleLogin = async (data) => {
      axios.post(`http://127.0.0.1:8000/v1/login/`, data).then(
          (response)=>{
            alert('Successfully LogedIn')
          }
        ).catch(
          (error)=>{
            console.log(error)
          }
        )
      }

    

  const handleLogout =  () => {
    
       axios.post(`http://127.0.0.1:8000/v1/logout/`).then(
          (response)=>{
            alert('Successfully LogedOut')
          }
        ).catch(
          (error)=>{
            console.log(error)
          }
        )
      
        }
  return (
    <div className='container mb-4'>
    <form onSubmit={handleSubmit()}>
      <h2>Login</h2>
      <input type="text" placeholder="Username" {...register('username', {
        required: "This field is required"
      })}  />
      <input type="password" placeholder="Password"  {...register('password', {
        required:"This field is required"
      })} />

      <button onClick={handleregister}>Register</button>



      <button onClick={handleLogin}>Login</button>

      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </form>
    </div>
  );
};

export default Register;