import React from 'react'
import { addStaffToDB } from '../../apiservices/ApiServices'



function AddStaff() {
 
    function addStaff(staff){
        addStaffToDB(staff).then((response)=>{
            if (response.status===201){
                //navigate
            }
        }).catch(error=>{
            console.log(error)
        })
    }
return (
    <div>AddStaff</div>
      )
}

export default AddStaff