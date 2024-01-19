// upload documnet =>doc image take it from user through form and save them into the database

import {useForm} from 'react-hook-form'
import {useParams} from 'react-router-dom'
import axios from 'axios'

import React, { useEffect, useState } from 'react'

function UploadDoc() {
  const { register, reset, handleSubmit} = useForm()
  const [applications, setApplications] = useState([])

  function saveData(Data){
    console.log(Data)
    Data.aadhaar_card = Data.aadhaar_card[0]
    Data.business_address_proof_or_copy_of_rent_agreement = Data.business_address_proof_or_copy_of_rent_agreement[0]
    Data.business_license = Data.business_license[0]
    Data.business_plan_or_proposal = Data.business_plan_or_proposal[0]
    Data.collateral_document = Data.collateral_document[0]
    Data.electricity_bill = Data.electricity_bill[0]
    Data.gst_certificate = Data.gst_certificate[0]
    Data.msme_certificate = Data.msme_certificate[0]
    Data.pan_card = Data.pan_card[0]
    Data.stamp_duty = Data.stamp_duty[0]
    Data.three_years_itr_with_balance_sheet = Data.three_years_itr_with_balance_sheet[0]
    Data.udyog_aadhaar_registration = Data.udyog_aadhaar_registration[0]
    axios.post(`http://127.0.0.1:8000/v1/doc-upload/`, Data, {headers:{
      'Content-Type': "multipart/form-data"
    }}).then(
      (response)=>{
        alert("Data saved")
      }
    ).catch(
      (error)=>{
        console.log(error)
      }
    ) // To save data in documnet Model
  }

  function getallApplications(){
    axios.get(`http://127.0.0.1:8000/v1/app/`).then(
      (response)=>{
        setApplications(response.data)
      }
    ).catch(
      (error)=>{
        console.log(error)
      }
    ) // To get all application
  }

  useEffect(
    ()=>{
      getallApplications()
    },[]
    )

  return (
    <div className='container w-50 '>
    <form onSubmit={handleSubmit(saveData)}>
      <h1 style={{color:'red'}} > USER DOCUMENT UPLOAD FORM</h1>

      <div>
        <label>application ID</label>
        <select className='form-select' {...register('application')}>
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
        <label>Aadhar</label>
        <input type='file' class="form-control"  {...register('aadhaar_card')}/>
      </div>

      <div>
        <label>pan_card</label>
        <input type='file' class="form-control"  {...register('pan_card')}/>
      </div>

      <div>
        <label>business_address_proof_or_copy_of_rent_agreement</label>
        <input type='file' class="form-control"  {...register('business_address_proof_or_copy_of_rent_agreement')}/>
      </div>

      <div>
        <label>electricity_bill</label>
        <input type='file' class="form-control"  {...register('electricity_bill')}/>
      </div>

      <div>
        <label>msme_certificate</label>
        <input type='file' class="form-control"  {...register('msme_certificate')}/>
      </div>

      <div>
        <label>gst_certificate</label>
        <input type='file' class="form-control"  {...register('gst_certificate')}/>
      </div>

      <div>
        <label>udyog_aadhaar_registration</label>
        <input type='file' class="form-control"  {...register('udyog_aadhaar_registration')}/>
      </div>

      <div>
        <label>business_license</label>
        <input type='file' class="form-control"  {...register('business_license')}/>
      </div>

      <div>
        <label>business_plan_or_proposal</label>
        <input type='file' class="form-control"  {...register('business_plan_or_proposal')}/>
      </div>

      <div>
        <label>three_years_itr_with_balance_sheet</label>
        <input type='file' class="form-control"  {...register('three_years_itr_with_balance_sheet')}/>
      </div>

      <div>
        <label>collateral_document</label>
        <input type='file' class="form-control"  {...register('collateral_document')}/>
      </div>

      <div>
        <label>stamp_duty</label>
        <input type='file' class="form-control" {...register('stamp_duty')}/>
      </div>

      <input type = 'submit' className='btn btn-success col-4'></input>
      <input type = 'reset' className='btn btn-primary col-4 float-end'></input>

      

    </form>
    </div>
  )
}

export default UploadDoc