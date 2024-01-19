import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { addEnquiryToDB, sendOTPToCustomer } from '../../apiservices/ApiServices';

const EnquiryForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmitGenerateOTP = () => {
        const mobile = document.getElementById('mobile').value
        if(mobile.length){
        sendOTPToCustomer(mobile).then(
            (response) =>{
                if(response.status===200){
                    alert("OTP sent successfully")
                }
            }
        ).catch((error)=>{    
            console.log(error)
        })}else{
            alert('please enter mobile number first')
        }
    };

    const addEnquiryData =  (data) => {
        console.log(data)
        addEnquiryToDB(data).then(
            (response)=>{
                if(response.status === 201){
                    alert("Enquiry Added Successfully")
                }
            }
        ).catch(error=>{
            console.log(error)
        })
    };

    return (
        
            <form onSubmit={handleSubmit(addEnquiryData)}>
                <h1 className='text-center text-primary'>Make an Enquiry</h1>
                <div className='mb-4 row'>
                    <label htmlFor='firstname' className='col-sm-4 col-form-label'>First Name</label>
                    <div className='col-sm-8'>
                        <input type='text' className='form-control' id='firstname' {...register('first_name',{
                            required:"This field is required"
                        })}/>
                    </div>
                </div>
                <div className='mb-4 row'>
                    <label htmlFor='lastname' className='col-sm-4 col-form-label'>Last Name</label>
                    <div className='col-sm-8'>
                        <input type='text' className='form-control' id='lastname' {...register('last_name',{
                            required:"This field is required"
                        })} />
                    </div>
                </div>
                <div className='mb-4 row'>
                    <label htmlFor='email' className='col-sm-4 col-form-label'>Email</label>
                    <div className='col-sm-8'>
                        <input type='text' className='form-control' id='email' {...register('email',{
                            required:"This field is required"
                        })} />
                    </div>
                </div>
                <div className='mb-4 row'>
                    <label htmlFor='message' className='col-sm-4 col-form-label'>Message</label>
                    <div className='col-sm-8'>
                        <textarea type='text' className='form-control' id='message' {...register('message',{
                            required:"This field is required"
                        })} />
                    </div>
                </div>
                <div className='mb-4 row'>
                    <label htmlFor='mobile' className='col-sm-4 col-form-label'>Mobile</label>
                    <div className='col-sm-8'>
                        <input type='text' className='form-control' id='mobile'  {...register('mobile',{
                            required:"This field is required"
                        })}/>
                    </div>
                </div>
                <div className='mb-4 row'>
                    <label htmlFor='otp' className='col-sm-4 col-form-label'>OTP</label>
                    <div className='col-sm-8'>
                        <input type='text' className='form-control' id='otp'  {...register('otp',{
                            required:"This field is required"
                        })}/>
                    </div>
                </div>
                <button type='button' className='btn btn-outline-primary col-sm-5' onClick={()=>{onSubmitGenerateOTP()}}>Send OTP</button>
                <button type='submit' className='btn btn-outline-success col-sm-5 float-end'>submit</button>
            </form>
        
    );
};


export default EnquiryForm;
