import React, { useState, useEffect } from 'react'
import axios from 'axios'


function ShowGuarantor() {
    const [Guarantors, SetGuarantor] = useState([])

    async function getallGuarantor(){
        const response = await axios.get('http://localhost:8000/v1/guarantor/')
        if(response.status===200){
            SetGuarantor(response.data)
            console.log(response.data)
            console.log('Data is initialized successfully!!!')
        }
        else{
            console.error('There is an error!!!')
        }
    }
    useEffect(()=>{
        getallGuarantor()
    },[])
  return (
    <div>
        <h1 className='text-primary text-center'>Guarantor's Information</h1>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>application</th>
                    <th>relation_with_customer</th>
                    <th>name</th>
                    <th>dob</th>
                    <th>gender</th>
                    <th>email</th>
                    <th>address</th>
                    <th>city</th>
                    <th>state</th>
                    <th>country</th>
                    <th>pin_code</th>
                    <th>mobile</th>
                    <th>photo</th>
                    <th>profession</th>
                    <th>income_certificate</th>
                    <th>bank_name</th>
                    <th>current_account_no</th>
                    <th>passbook_copy</th>
                    <th>ifsc_code</th>
                    
                </tr>
            </thead>
            <tbody className='table-info'>
                {
                     Guarantors.map((Guarantor)=>{
                        return(
                            <tr key={Guarantor.application}>
                                <td>{Guarantor.application}</td>
                                <td>{Guarantor.relation_with_customer}</td>
                                <td>{Guarantor.name}</td>
                                <td>{Guarantor.dob}</td>
                                <td>{Guarantor.gender}</td>
                                <td>{Guarantor.email}</td>
                                <td>{Guarantor.address}</td>
                                <td>{Guarantor.city}</td>
                                <td>{Guarantor.state}</td>
                                <td>{Guarantor.country}</td>
                                <td>{Guarantor.pin_code}</td>
                                <td>{Guarantor.mobile}</td>
                                <td>{Guarantor.photo}</td>
                                <td>{Guarantor.profession}</td>
                                <td>{Guarantor.income_certificate}</td>
                                <td>{Guarantor.bank_name}</td>
                                <td>{Guarantor.current_account_no}</td>
                                <td>{Guarantor.passbook_copy}</td>
                                <td>{Guarantor.ifsc_code}</td>
                                
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    </div>
  )
}

export default ShowGuarantor