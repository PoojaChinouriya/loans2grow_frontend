import React from 'react'
import { useParams , useNavigate, NavLink} from 'react-router-dom'
import { useEffect, useState} from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'

function DocumentsToLSO() {
    const {register, handleSubmit, reset, setValue} = useForm()
    const nav = useNavigate()
    const { id } = useParams('id');
    const baseUrl = "http://localhost:8000"
    const [data, setData] = useState({})

    // async function getUserfromDB(){
    //     await axios.get(`http://127.0.0.1:8000/v1/app-doc/${id}`).then

    //     ((response)=>{setValue('remark',response.data.remark),
    //                     setValue('status', response.data.status)}).catch
    //                     ((error)=>{console.log(error)
    //                     alert('There is an error')})
    // }

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/v1/documents-to-LSO/${id}`);
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // useEffect(() => {
    //     getUserfromDB();
    // }, []);

    function saveData(Data){
        axios.patch(`${baseUrl}/v1/doc_verification_lso/${id}/`, Data).then(
            (response)=>{
                alert('document updated')
                console.log(response)
                //nav(`/lso/loan_details/`)
            }
        ).catch(
            (error)=>{
                console.log(error) 
            }
        )
    }
    
    
  return (
    <>
    
            <h1 style={{textAlign:'center'}}> Data(Document verification by LSO) </h1>

            <div> 
                <label style={{color:'red'}}><h1>Aadhar Card</h1></label>
                <img src={`${baseUrl+data.aadhaar_card }`} width="800" height="500" />
            </div>

            <div>
                <label style={{color:'red'}}><h1>Pan Card</h1></label>
                <img src={`${baseUrl+data.pan_card }`}/>
            </div>

            <div>
                <label style={{color:'red'}}><h1>business_address_proof_or_copy_of_rent_agreement</h1></label>
                <img src={`${baseUrl+data.business_address_proof_or_copy_of_rent_agreement }`}/>
            </div>
            
            <div>
                <label style={{color:'red'}}><h1>electricity_bill</h1></label>
                <img src={`${baseUrl+data.electricity_bill }`}/>
            </div>

            <div>
                <label style={{color:'red'}}><h1>msme_certificate</h1></label>
                <img src={`${baseUrl+data.msme_certificate }`}/>
            </div>

            <div>
                <label style={{color:'red'}}><h1>electricity_bill</h1></label>
                <img src={`${baseUrl+data.electricity_bill }`}/>
            </div>

            <div>
                <label style={{color:'red'}}><h1>gst_certificate</h1></label>
                <img src={`${baseUrl+data.gst_certificate}`}/>
            </div>

            <div>
                <label style={{color:'red'}}><h1>electricity_bill</h1></label>
                <img src={`${baseUrl+data.electricity_bill }`}/>
            </div>

            <div>
                <label style={{color:'red'}}><h1>udyog_aadhaar_registration</h1></label>
                <img src={`${baseUrl+data.udyog_aadhaar_registration }`}/>
            </div>

            <div>
                <label style={{color:'red'}}><h1>business_license</h1></label>
                <img src={`${baseUrl+data.business_license }`}/>
            </div>

            <div>
                <label style={{color:'red'}}><h1>business_plan_or_proposal</h1></label>
                <img src={`${baseUrl+data.business_plan_or_proposal}`}/>
            </div>

            <div>
                <label style={{color:'red'}}><h1>three_years_itr_with_balance_sheet</h1></label>
                <img src={`${baseUrl+data.three_years_itr_with_balance_sheet }`}/>
            </div>

            <div>
                <label style={{color:'red'}}><h1>collateral_document</h1></label>
                <img src={`${baseUrl+data.collateral_document }`}/>
            </div>

            <div > 
                <label style={{color:'red'}}><h1>stamp_duty</h1></label>
                <img src={`${baseUrl+data.stamp_duty }`}/>
            </div>

            <div className='container w-50 mt-5 p-2 border border-4'>
                <form onSubmit={handleSubmit(saveData)}>
                    <h1  style={{color:'blue', textAlign:'center'}}> 
                        Application Remark and Status on Documents by  LSO </h1>

                    <select class="form-select" aria-label="Default select example" {...register('status')}>
                        <option value="done">done</option>
                        <option value="rejected">rejected</option>
                    </select>

                    <br/><br/><br/>

                    <label>
                        <input className='form-control' type="text" placeholder='Enter Your Remark' id='remark' {...register('remark')}/>
                    </label>

                    

                   <center><button className='btn btn-primary'>Submit</button></center>
                   <br/>
                </form>
            </div>
    </>
       
)};

export default DocumentsToLSO  