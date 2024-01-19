import React from 'react'
import { NavLink } from 'react-router-dom';

function Guranter(props) {
  const rec = props.obj
  let le = rec.length
  return (
    <div className='container'>
         <div className='row'>
    
    { le ? 

         <div class="table-responsive">
           <table className='table table-striped table-info'>
              
               {rec.map((obj)=>{

                return(
                  < thead>
                  <tr>
                  <th>APPLICATION</th>
                  <td>{obj.application}</td>
               </tr>
               <tr>
                  <th>RELATION WITH CUSTOMER</th>
                  <td>{obj.relation_with_customer}</td>
                          
               </tr>
               <tr>
                  <th>NAME</th>
                  <td>{obj.name}</td>
                  </tr>
               <tr>
                  <th>DOB</th>
                  <td>{obj.dob}</td>
                  </tr>
               <tr>
                  <th>GENDER</th>
                  <td >{obj.gender}</td>
                  </tr>
               <tr>
                  <th>EMAIL</th>
                  <td>{obj.email}</td>
                  </tr>
               <tr>
                  <th>ADDRESS</th>
                  <td>{obj.address}</td>
                         
                  </tr>
               <tr>
                  <th>CITY</th>
                  <td>{obj.city}</td>
                  </tr>
               <tr>
                  <th>STATE</th>
                  <td>{obj.state}</td>
                         
                  </tr>
               <tr>
                  <th>COUNTRY</th>
                  <td>{obj.country}</td>
                          
                  </tr>
               <tr>
                  <th>PINCODE</th>
                  <td>{obj.pin_code}</td>
                          
                  </tr>
               <tr>
                  <th>MOBILE</th>
                  <td>{obj.mobile}</td>
                         
                  </tr>
               <tr>
                  <th>PHOTO</th>
                  <td><img src={obj.photo} height={100} width={250} ></img></td>
                  </tr>
               <tr>
                  <th>PROFESSION</th>
                  <td>{obj.profession}</td>
                  </tr>
               <tr>
                  <th>INCOME CERTIFICATE</th>
                  <td><NavLink to={obj.income_certificate}>{obj.income_certificate}</NavLink></td>
                          
                  </tr>
               <tr>
                  <th>BANK NAME</th>
                  <td>{obj.bank_name}</td>
                          
                  </tr>
               <tr>
                  <th>CURRENT ACCOUNT NO</th>
                  <td>{obj.current_account_no}</td>
                  </tr>
               <tr>
                  <th>PASSBOOK COPY</th>
                  <td><NavLink to={obj.passbook_copy}>{obj.passbook_copy}</NavLink></td>
                          
                  </tr>
               <tr>
                  <th>IFSC CODE</th>
                  <td>{obj.ifsc_code}</td>
              </tr>
              </thead>
                )
               })}
              
             
           </table>
       </div>  : <h4 className='text-center' style={{color:"red"}}>No records to display</h4>}
    </div>
    </div>)}
  
  
export default Guranter