import React from 'react';
import axios from 'axios';
import {useForm} from 'react-hook-form';
import { useNavigate} from 'react-router-dom';



export default function Customer_question() {
    const {register,handleSubmit} = useForm();
    const navigate = useNavigate();

    function saveData(data){
        axios.post('http://127.0.0.1:8000/app/queries/',data);
        navigate('/saved_data')

        


    }
  return (
        <div className='container'>
            <center><h1><u>Customer Queries</u></h1></center>
            <form onSubmit={handleSubmit(saveData)}>
                {/* <label htmlFor='id'><b>enter  customer id .</b></label>
                <input type='number' id='id' className='form-control' {...register('id')}/>
                <br/>
                <br/> */}

                <label htmlFor='em'><b>email </b></label>
                <input type='text' id='em' className='form-control'{...register('email')}/>
                <br/>
                <br/>

                <label htmlFor='fn'><b>first_name </b></label>
                <input type='text' id='fn' className='form-control'{...register('first_name')}/>
                <br/>
                <br/>

                <label htmlFor='ln'><b>last_name </b></label>
                <input type='text' id='ln' className='form-control'{...register('last_name')}/>
                <br/>
                <br/>

                <label htmlFor='qu'><b>query </b></label>
                <input type='text' id='qu' className='form-control'{...register('query')}/>
                <br/>
                <br/>



                <label htmlFor='qd'><b>question_date </b></label>
                <input type='text' id='qd' className='form-control'{...register('question_date')}/>
                <br/>
                <br/>


                <input type='submit' value='submit_query' className='btn btn-outline-success col-6 btn-lg'/>
                <input type='reset' value='reset' className='btn btn-outline-warning col-6 btn-lg '/> 
                

            </form>
        </div>
    
)
}