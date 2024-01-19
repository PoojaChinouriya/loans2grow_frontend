import React from 'react'
import { NavLink } from 'react-router-dom'

function BankDetails(props) {
    const rec = props.obj
  
  return (
    <div className='container'>
         <div className='row'>
    
    { (rec!==null) ? 
         <div class="table-responsive">
           <table className='table table-striped table-info '>
               < thead>
               <tr>
                   <th>USER</th>
                   <th>BANK NAME</th>
                   <th>ACCOUNT NO</th>
                   <th>PASSBOOK COPY</th>
                   <th>IFSC CODE</th>
                   <th>BANK ADRESS</th>
               </tr>
               </thead>
               <tbody>
               {rec.map((obj)=>{
                       return (
                         <tr>
                           <td>{obj.user}</td>
                           <td>{obj.bank_name}</td>
                           <td>{obj.account_number}</td>
                           <td><NavLink to={obj.passbook_copy}>{obj.passbook_copy}</NavLink></td>
                           <td>{obj.ifsc_code}</td>
                           <td>{obj.bank_address}</td>
                         </tr>)
               })}
               </tbody>
           </table>
       </div>  : <h4 className='text-center' style={{color:"red"}}>No records to to display</h4>}
    </div>
    </div>
  )
}

export default BankDetails