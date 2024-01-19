import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import axios from 'axios'
// import { useParams } from 'react-router-dom'

function AddLoanDetails() {
    //const {id} = useParams()
    //console.log(id)
 
    const [applications, setapplications ]= useState([])

    const { register,handleSubmit, reset } = useForm()

    function loan_added(){
      alert('Loan Sanctioned')
    }

    function getapplications(){
      axios.get('http://127.0.0.1:8000/v1/all_applications/').then(
        (response) => {
          setapplications(response.data)
        }
      ).catch(
        (error) =>{
          console.log(error)
        }
      )
    }

    function saveData(Data){
      console.log(Data)
      axios.post('http://127.0.0.1:8000/v1/emi/', Data)
      
    }

    

    useEffect(()=>{
      getapplications()
    },[])

  
  return (
    <>
    <div className="container w-50 border border-5 text-center">
      <form  onSubmit={handleSubmit(saveData)} >
        <h1 style={{color:'blue'}}>Add Customer Loan</h1>
        
        <div>
        <label>application ID</label>
          <select className='form-select' {...register('id')}>
          {
            applications.map((application)=>{
              return(
                <option value={application.id}>{application.id}</option>
              )
            })
          }
          
          </select>
        </div>

        <div>
          <label htmlFor="loan_principle" >Principle Amount</label>
          <input className="form-control" type="number" id="loan_principle" {...register('loan_principle')}></input>
        </div>

        <div>
          <label htmlFor="loan_tenure" >Tenure of loan</label>
          <input className="form-control" type="number" step="any" id="loan_tenure" {...register('loan_tenure')}></input>
        </div>

        
        <div>
          <label htmlFor="interest_rate" >  Interest Loan Per annum </label>
          <input className="form-control" step="any" type="number" id="interest_rate" {...register('interest_rate')}></input>
        </div>

        <br/><br/>

        <button type="submit" className="btn btn-success float-start" onClick={()=>{loan_added()}}>Add Loan</button>
        <button className="btn btn-warning float-end" type="button" onClick={()=>{reset()}}>Reset</button>

        <br/><br/>
      </form>
    </div>
    </>
  )
}

export default AddLoanDetails