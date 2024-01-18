import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'


function GuarantorForm() {

    const {register, handleSubmit, reset} =useForm()
    const nav = useNavigate()

    async function saveGuarantorData(guarantorData){
        console.log(guarantorData)
        await axios.post('http://localhost:8000/v1/guarantor/', guarantorData).then((response)=>{
        
            nav('/show')
        
    }).catch((err)=>{
        console.error(err)
    })  
    }
   

  return (
    <div className='container w-50 border border-5'> 
        <h1 className='text-secondary text-center'>Guarantor Form</h1>
        <form onSubmit={handleSubmit(saveGuarantorData)}></form>
            <div className='col-mb-3'>
                <label htmlFor='idapplication' className='form-label'>Application_id:</label>
                <input type='number' id='idapplication' className='form-control' {...register('Application id')}  />
            </div>
            <div className='col-mb-3'>
                <label htmlFor='idrelation' className='form-label'>relation_with_customer:</label>
                <input first_name='text' id='idrelation' className='form-control' {...register('relation_with_customer')}/>         
            </div>
            <div className='col-mb-3'>
                <label htmlFor='idname' className='form-label'>name:</label>
                <input last_name='text' id='idname' className='form-control'{...register('name')} />
            </div>
            <div className='col-mb-3'>
                <label htmlFor='iddob' className='form-label'>Dob:</label>
                <input type='date' id='iddob' className='form-control'  {...register('dob')}  />
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
                <label htmlFor='idemail' className='form-label'>email:</label>
                <input type='email' id='idemail' className='form-control'  {...register('email_id')} />
            </div>
            
            <div className='col-mb-3'>
                <label htmlFor='idaddress' className='form-label'>address:</label>
                <textarea address='text' id='idaddress' className='form-control' {...register('address')} />         
            </div>
            <div className='col-mb-3'>
                <label htmlFor='idcity' className='form-label'>city:</label>
                <textarea current_address='text' id='idcity' className='form-control' {...register('city')}/>         
            </div>
            <div className='col-mb-3'>
                <label htmlFor='idstate' className='form-label'>state:</label>
                <input type='text' id='idstate' className='form-control'  {...register('state')}  />
            </div>  
            <div className='col-mb-3'>
                <label htmlFor='idcountry' className='form-label'>country:</label>
                <input type='text' id='idcountry' className='form-control'{...register('country')}/>
            </div>
            <div className='col-mb-3'>
                <label htmlFor='idpincode' className='form-label'>pin_code:</label>
                <input type='number' id='idpincode' className='form-control' {...register('pincode')} />
            </div>

            <div className='col-mb-3'>
                <label htmlFor='idmobile' className='form-label'>mobile:</label>
                <input type='number' id='idmobile' className='form-control' {...register('mobile')}/>
            </div>
            <div className='col-mb-3'>
                <label htmlFor='idphoto' className='form-label'>photo:</label>
                <input type='file' id='idphoto' className='form-control' {...register('photo')}/>
            </div>
            <div className='col-mb-3'>
                <label htmlFor='idprofession' className='form-label'>profession:</label>
                <input type='text' id='idprofession' className='form-control' {...register('profession')}/>
            </div>
            <div className='col-mb-3'>
                <label htmlFor='idincomecertificate' className='form-label'>income_certificate:</label>
                <input type='file' id='idincomecertificate' className='form-control' {...register('income_certificate')}/>
            </div>
            <div className='col-mb-3'>
                <label htmlFor='idbankname' className='form-label'>bank_Name:</label>
                <input type='text' id='idbankname' className='form-control' {...register('bank_name')} />
            </div>
            <div className='col-mb-3'>
                <label htmlFor='idcurrentaccno' className='form-label'>current_account_no:</label>
                <input type='number' id='idcurrentaccno' className='form-control'  {...register('currect_acc_no')}  />
            </div>
            <div className='col-mb-3'>
                <label htmlFor='idpassbookcopy' className='form-label'>passbook_copy:</label>
                <input type='file' id='idpassbookcopy' className='form-control' {...register('passbook_copy')} />
            </div>
            <div className='col-mb-3'>
                <label htmlFor='idifsccode' className='form-label'>ifsc_code:</label>
                <input type='number' id='idifsccode' className='form-control' {...register('ifsc_code')} />
            </div>
     

            <button type='sumbit' className='btn btn-outline-success col-sm-5 mt-4'>Submit Form</button>
            <button type='button' onClick={()=>{reset()}} className='btn btn-outline-warning col-sm-5 mt-4 float-end'>Reset form</button>
            
        
    </div>
  )
}

export default GuarantorForm