import React from 'react';
import { NavLink } from 'react-router-dom';


function Document(props) {
  const obj = props.obj
  return (
    <div className='container'>
        <div className='row'>
          {(obj!==null) ?
              <div class="table-responsive">
                <table className='table table-striped table-info'>
                    < thead>
                    <tr>
                        <th>APPLICATION</th>
                        <td>{obj.application}</td>
                    </tr>
                    <tr>
                        <th>ADHAAR CARD</th>
                        <td><NavLink to={obj.aadhaar_card}>{obj.aadhaar_card}</NavLink></td>
                    </tr>
                    <tr>
                        <th>PAN CARD</th>
                        <td><iframe src={`${obj.pan_card}`} height={100} width={250}></iframe></td>
                    </tr>
                    <tr>
                        <th>BUSINESS ADRESS PROOF OR COPY OF RENT AGREEMENT</th>
                        <td><NavLink to={obj.business_address_proof_or_copy_of_rent_agreement}>{obj.business_address_proof_or_copy_of_rent_agreement}</NavLink></td>
                    </tr>
                    <tr>
                        <th>ELECTRICITY BILL</th>
                        <td ><NavLink to={obj.electricity_bill}>{obj.electricity_bill}</NavLink></td>
                    </tr>
                    <tr>
                        <th>MSME CERTIFICATE</th>
                        <td><NavLink to={obj.msme_certificate}>{obj.msme_certificate}</NavLink></td>
                    </tr>
                    <tr>
                        <th>GST CERTIFICATE</th>
                        <td><NavLink to={obj.gst_certificate}>{obj.gst_certificate}</NavLink></td>
                    </tr>
                    <tr>
                        <th>UDYOG ADHAAR REGISTRATION</th>
                        <td><NavLink to={obj.udyog_aadhaar_registration}>{obj.udyog_aadhaar_registration}</NavLink></td>
                    </tr>
                    <tr>
                        <th>BUSINESS LICENSE</th>
                        <td><NavLink to={obj.business_license}>{obj.business_license}</NavLink></td>
                    </tr>
                    <tr>
                        <th>BUSINESS PLAN OR PROPOSAL</th>
                        <td><NavLink to={obj.business_plan_or_proposal}>{obj.business_plan_or_proposal}</NavLink></td>
                    </tr>
                    <tr>
                        <th>ITR(3 YEARS) WITH BALANCE SHEET</th>
                        <td><NavLink to={obj.three_years_itr_with_balance_sheet}>{obj.three_years_itr_with_balance_sheet}</NavLink></td>
                    </tr>
                    <tr>
                        <th>COLLATERAL DOCUMENT</th>
                        <td><NavLink to={obj.collateral_document}>{obj.collateral_document}</NavLink></td>
                    </tr>
                    <tr>
                        <th>STAMP DUTY</th>
                        <td><NavLink to={obj.stamp_duty}>{obj.stamp_duty}</NavLink></td>
                    </tr>
                    <tr>
                        <th>STATUS</th>
                        <td>{obj.status}</td>
                    </tr>
                    <tr>
                        <th>RESPONSE TIMESTAMP</th>
                        <td>{new Date(obj.response_timestamp).toLocaleString()}</td>
                    </tr>
                    <tr>
                        <th>REMARK</th>
                        <td>{obj.remark}</td>
                    </tr>
                    </thead>
                </table>
            </div>:<h4 className='text-center' style={{color:"red"}}>Customer not submit documents</h4>}
        </div>
  </div>
)}
export default Document;