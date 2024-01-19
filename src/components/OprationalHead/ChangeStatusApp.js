import React, {useEffect} from 'react'
import {useForm} from "react-hook-form"
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'


function ChangeStatusApp() {
   const{register,handleSubmit, setValue }= useForm()

    const {userId}= useParams()
    const access = JSON.parse(window.localStorage.getItem("AccessToken"))
    async function showData(){
    await axios.get(`http://127.0.0.1:8000/applications/${userId}/`,
       {headers: {'Accept':'application/json', 'Authorization':`Bearer ${access}`}}
    ).then((response)=>{
        console.log(response.data)
      setValue("aadhaar_no",response.data.aadhaar_no)
      setValue("pan_no", response.data.pan_no)
      setValue('type_of_employment',response.data.type_of_employment )
      setValue("business_title", response.data.business_title)
      setValue("business_type",response.data.business_type)
      setValue("business_address", response.data.business_address)
      setValue("gst_registration_no", response.data.gst_registration_no)
      setValue("business_license_no", response.data.business_license_no)
      setValue("expected_average_annual_turnover", response.data.expected_average_annual_turnover)
      setValue("years_in_current_business", response.data.years_in_current_business)
      setValue("colletral",response.data.colletral)
      setValue("application_timestamp",new Date(response.data.application_timestamp).toLocaleString())
      setValue("credit_score",response.data.credit_score)
      setValue("user",response.data.user.id)
      console.log(response.data)
    }).catch((error)=>{
      alert('server down.....')
    })
  }
useEffect(()=>{showData()},[])
   function saveData(data){
    axios.patch(`http://127.0.0.1:8000/applications/${userId}/`,data,
    {headers: {'Accept':'application/json', 'Authorization':`Bearer ${access}`}}
    )
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
   }
  
  return (
    <div className='container'>
      <h2 class="mb-4">Application Form</h2>
      <form onSubmit={handleSubmit(saveData)}>

      <label>Aadhar No:</label>
            <input type='number' className='form-control' readOnly {...register('aadhaar_no' )}/>
      <label>Pan No:</label>
            <input type='text' className='form-control' readOnly {...register('pan_no')}/>
            <div class="form-group">
      <label for="employeeType">Type of Employment</label>
      <select class="form-control" id="employeeType" name="employeeType" disabled {...register('type_of_employment')}>
        <option value="" selected disabled>Select employment type</option>
        <option value="self_employed">Self Employed</option>
        <option value="salaried">Salaried</option>
        
      </select>
    </div>
    <label>Bussiness Title:</label>
            <input type='text' className='form-control' readOnly {...register('business_title')}/>
            <div class="form-group">
      <label for="businessType">Business Type</label>
      <select class="form-control" id="employeeType" name="employeeType" disabled  {...register('business_type')}>
        <option value="" selected disabled>Select business type</option>
        <option value="manufacturing">Manufacturing</option>
        <option value="trading">Trading</option>
        <option value="service">Service</option>
        
      </select>
    </div> 
   
            <label>Bussiness Address:</label>
            <input type='text' className='form-control' readOnly {...register('business_address')}/>
            <label>GST Registration No:</label>
            <input type='text' className='form-control' readOnly {...register('gst_registration_no')}/>
            <label>Business License No:</label>
            <input type='text' className='form-control' readOnly {...register('business_license_no')}/>
            <label>Annual Turnover:</label>
            <input type='number' className='form-control' readOnly {...register('expected_average_annual_turnover')}/>
            <label>Years in Current Business:</label>
            <input type='number' className='form-control' readOnly {...register('years_in_current_business')}/>
            <label>Collateral:</label>
            <input type='text' className='form-control' readOnly {...register('colletral')}/>
            <div class="form-group">
      <label for="status">Status</label>
      <select class="form-control" id="status" name="status" {...register('status')}>
        <option value="" selected disabled>Select status</option>
        <option value="generated">Generated</option>
        <option value="document_verified">Document Verified</option>
        <option value="sanctioned">Sanctioned</option>
        <option value="disbursed">Disbursed</option>
        <option value="rejected">Rejected</option>
       
      </select>
    </div>
            <label>Application Timestamp:</label>
            <input type='date-local' className='form-control' {...register('application_timestamp')} readOnly />
            <label>Remark:</label>
            <input type='text' className='form-control' {...register('remark')} />
            <label>Credit Score:</label>
            <input type='number' className='form-control' readOnly {...register('credit_score')}/>
            <label>User:</label>
            <input type="number" className='form-control' readOnly {...register('user')} />

            <input type='submit' value="Change Status of  Application" className='btn btn-outline-success col-6'/>
      </form>


    
    </div>
  )
}

export default ChangeStatusApp;