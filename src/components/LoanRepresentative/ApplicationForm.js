import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'


function ApplicationForm() {

    const {register, handleSubmit, reset} =useForm()
    const nav = useNavigate()

    async function saveUserData(userData){
        console.log(userData)
        await axios.post('http://localhost:8000/v1/application/', userData).then((response)=>{
        
            nav('/show')
        
    }).catch((err)=>{
        console.error(err)
    })  
    }

  return (
    <div className='container w-50 border border-5'> 
        <h1 className='text-secondary text-center'>User Data</h1>
        <form onSubmit={handleSubmit(saveUserData)}></form>
            <div className='col-mb-3'>
                <label htmlFor='iduser' className='form-label'>id:</label>
                <input type='number' id='iduser' className='form-control' {...register('userid')} />
            </div>
            <div className='col-mb-3'>
                <label htmlFor='idfirst_name' className='form-label'>first_name:</label>
                <input first_name='text' id='idfirst_name' className='form-control'{...register('first_name')}/>         
            </div>
            <div className='col-mb-3'>
                <label htmlFor='idlast_name' className='form-label'>last_name:</label>
                <input last_name='text' id='idlast_name' className='form-control'{...register('last_name')} />
            </div>
            <div className='col-mb-3'>
                <label htmlFor='idemail' className='form-label'>email:</label>
                <input type='email' id='idemail' className='form-control' {...register('email_id')}/>
            </div>
            <div className='col-mb-3'>
                <label htmlFor='gender' className='form-label'>gender:</label>
                <select {...register('gender')} >
                    <option value="maile">male</option>
                    <option value="female">female</option>
                    <option value="transgender">transgender</option>
                </select>
            </div>
            <div className='col-mb-3'>
                <label htmlFor='idmobile' className='form-label'>mobile:</label>
                <input mobile='number' id='idmobile' className='form-control' {...register('mobile')} />
            </div>
            <div className='col-mb-3'>
                <label htmlFor='iddob' className='form-label'>Dob:</label>
                <input type='date' id='iddob' className='form-control' {...register('dob')} />
            </div>
            <div className='col-mb-3'>
                <label htmlFor='idpermanent_address' className='form-label'>Permanent_address:</label>
                <textarea permanent_address='text' id='idpermanent_address' className='form-control' {...register('permanent_address')}/>         
            </div>
            <div className='col-mb-3'>
                <label htmlFor='idcurrent_address' className='form-label'>Current_address:</label>
                <textarea current_address='text' id='idcurrent_address' className='form-control' {...register('current_address')}/>         
            </div>
            <div className='col-mb-3'>
                <label htmlFor='idrole' className='form-label'>role:</label>
                <select {...register('role')}>
                    <option value="customer">Customer</option>
                    <option value="loan_representative">Loan_Representative</option>
                    <option value="operational_head">Operational_Head</option>
                    <option value="loan_sanctioning_officer">Loan_Sanctioning_Officer</option>
                    <option value="admin">Admin</option>
                    <option value="account_head">Account_Head</option>
                </select>
            </div>
        <h1 className='text-secondary text-center'>Application Form</h1> 
            <div className='col-mb-3'>
                <label htmlFor='idaadhaarno' className='form-label'>aadhaar_no:</label>
                <input type='number' id='idaadhaarno' className='form-control' {...register('aadhaar_no')} />
            </div>  
            <div className='col-mb-3'>
                <label htmlFor='idpan_no' className='form-label'>pan_no:</label>
                <input type='number' id='idpan_no' className='form-control' {...register('pan_np')} />
            </div>
            <div className='col-mb-3'>
                <label htmlFor='idtypeofemployment' className='form-label'>type_of_employment:</label>
                <input type='text' id='idtypeofemployment' className='form-control' {...register('type_of_employment')} />
            </div>
            <div className='col-mb-3'>
                <label htmlFor='idbusinesstittle' className='form-label'>business_tittle:</label>
                <input type='text' id='idbusinesstittle' className='form-control' {...register('business_tittle')} />
            </div>
            <div className='col-mb-3'>
                <label htmlFor='idbusinesstype' className='form-label'>business_type:</label>
                <input type='text' id='idbusinesstype' className='form-control'{...register('business_type')} />
            </div>
            <div className='col-mb-3'>
                <label htmlFor='idbusinessaddress' className='form-label'>business_address:</label>
                <input type='text' id='idbusinessaddress' className='form-control'{...register('business_address')}/>
            </div>
            <div className='col-mb-3'>
                <label htmlFor='idgstregno' className='form-label'>gst_registration_no:</label>
                <input type='varchar' id='idgstregno' className='form-control' {...register('gst_registration_no')} />
            </div>
            <div className='col-mb-3'>
                <label htmlFor='idexp_avg_annual_turnover' className='form-label'>expected_average_annual_turnover:</label>
                <input type='number' id='idexp_avg_annual_turnover' className='form-control' {...register('expected_average_annual_turnover')}/>
            </div>
            <div className='col-mb-3'>
                <label htmlFor='idyears_current_bussiness' className='form-label'>years_in_current_business:</label>
                <input type='number' id='idyears_current_bussiness' className='form-control' {...register('years_in_current_business')} />
            </div>
            <div className='col-mb-3'>
                <label htmlFor='idcolletral' className='form-label'>colletral:</label>
                <input type='text' id='idcolletral' className='form-control' {...register('colletral')} />
            </div>
            <div className='col-mb-3'>
                <label htmlFor='idstatus' className='form-label'>status:</label>
                <input type='text' id='idstatus' className='form-control' {...register('status')} />
            </div>
            <div className='col-mb-3'>
                <label htmlFor='idapplication_timespan' className='form-label'>application_timestamp:</label>
                <input type='datetime' id='idapplication_timespan' className='form-control' {...register('application_timestamp')} />
            </div>
            <div className='col-mb-3'>
                <label htmlFor='id_business_license_no' className='form-label'>business_license_no:</label>
                <input type='varchar' id='id_business_license_no' className='form-control' {...register('business_license_no')} />
            </div>
            <div className='col-mb-3'>
                <label htmlFor='idremark' className='form-label'>remark:</label>
                <input type='text' id='idremark' className='form-control'{...register('remark')} />
            </div>
            <div className='col-mb-3'>
                <label htmlFor='idcredit_score' className='form-label'>credit_score:</label>
                <input type='number' id='idcredit_score' className='form-control' {...register('credit_score')} />
            </div>
     

            <button type='sumbit' className='btn btn-outline-success col-sm-5 mt-4'>Submit Form</button>
            <button type='button' onClick={()=>{reset()}} className='btn btn-outline-warning col-sm-5 mt-4 float-end'>Reset form</button>
        
    </div>
  )
}

export default ApplicationForm