import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'


function Disbursement() {
        const {register, handleSubmit, reset, setValue} = useForm()

        function fetchLoanDetails () {
          const id = document.getElementById('idloan').value
          axios.get(`http://localhost:8000/v1/dis/${id}`).then( 
            response => {
              setValue('net_disbursed_amount', response.data.net_disbursed_amount)
              
            }
          )
         
        }
            const onSubmit = async (data) => {
              
              console.log(data)
            }
        
        return (
          <div className='container'>
            <h1 className='text-primary text-center'>Disbursement Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='col-mb-3'>
                    <label htmlFor='idloan' className='form-label'>Loan</label>
                    <input type='number' id='idloan' className='form-control' {...register('loan')} onChange={()=>{fetchLoanDetails()}} />
                </div>
                <div className='col-mb-3'>
                    <label htmlFor='idinsurance_doc' className='form-label'>Insurance Doc</label>
                    <input type='file' id='idinsurance_doc' className='form-control' {...register('insurance_doc')} />
                </div>
                <div className='col-mb-3'>
                    <label htmlFor='idpayment_mode' className='form-label'>Payment Mode</label>
                    <select id='idpayment_mode' className='form-control' {...register('payment_mode')}>
                      <option value='select'>Select</option>
                      <option value='neft'>NEFT</option>
                      <option value='rtgs'>RTGS</option>
                      <option value='imps'>IMPS</option>
                    </select>
                </div>
                <div className='col-mb-3'>
                    <label htmlFor='net_disbursed_amount' className='form-label'>Net Disbursed Amount</label>
                    <input type='number' id='net_disbursed_amount' className='form-control' {...register('net_disbursed_amount')}   />
                </div>
                <div className='col-mb-3'>
                    <label htmlFor='disbursed_to_account_no' className='form-label'>Disbursed to Account No</label>
                    <input type='text' id='iddisbursed_to_account_no' className='form-control' {...register('disbursed_to_account_no')}  />
                </div>
                <div className='col-mb-3'>
                    <label htmlFor='receipt_doc' className='form-label'>Receipt Doc</label>
                    <input type='file' id='idreceipt_doc' className='form-control' {...register('receipt_doc')} />
                </div>
                <div className='col-mb-3'>
                    <label htmlFor='status' className='form-label'>Status</label>
                    <select id='idstatus' className='form-control' {...register('status')}>
                      <option value='select'>Select</option>
                      <option value='pending'>Pending</option>
                      <option value='disbursed'>Disbursed</option>
                    </select>
                </div>
                <button type='submit' className='btn btn-primary col-sm-5 mt-4'><NavLink className="nav-link" to="/disb">Submit</NavLink></button>
                <button type='button' onClick={()=>{reset()}} className='btn btn-outline-danger col-sm-5 mt-4 float-end'>Reset</button>
                <div className='text-right mt-3'>
                  <Link to="/loandetails" >
                        <button type='button' className=' btn btn-dark ms-2 float-end' >Show Details</button>
                  </Link>
                </div>
            </form>
          </div>
        )
}

export default Disbursement

