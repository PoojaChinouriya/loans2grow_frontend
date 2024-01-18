import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import App from '../../App'

function ShowApplications() {
    const [Applications, SetApplications] = useState([])
    const [Application, setApplication] = useState({})
    const [statusFilter, setStatusFilter] = useState('all'); // 'generated', 'sanctioned', 'rejected'
    

    useEffect(() =>{
        const fetchLoanApplications = async () => {
            try { 
                const response = await axios.get('http://localhost:8000/v1/application')
                SetApplications(response.data);
            } catch(error){
                console.error('error fetching loan applications:', error)
            }
        };
        fetchLoanApplications();
    }, [])

    const filteredEnquiry = statusFilter === 'all' ? Applications : Applications.filter(app => app.status === statusFilter);

    const handleApplicationClick = (Application) => {
        setApplication(Application)
        console.log("hiiii")
        

    };

    return (
     <div>
        <h1 className='text-primary text-center'>Application Information</h1>
        <div>
        <label>Filter by Status:</label>
        <select onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="generated">generated</option>
          <option value="sanctioned">sanctioned</option>
          <option value="rejected">rejected</option>
        </select>
      </div>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>user</th>
                    <th>addhar_no</th>
                    <th>pan_no</th>
                    <th>type_of_employment</th>
                    <th>business_title</th>
                    <th>business_type</th>
                    <th>business_address</th>
                    <th>gst_registration_no</th>
                    <th>business_license_no</th>
                    <th>expected_average_annual_turnover</th>
                    <th>years_in_current_business</th>
                    <th>colletral</th>
                    <th>status</th>
                    <th>application_timestamp</th>
                    <th>remark</th>
                    <th>credit_score</th>
                    <th colSpan={2} className='text-center'>Actions</th>
                </tr>
            </thead>
            <tbody className='table-info'>
                {
                    filteredEnquiry.map((Application)=>{
                        return(
                            <tr key={Application.id} onClick={()=> handleApplicationClick(Application)}>
                                <td>{Application.id}</td>
                                <td>{Application.user.first_name}</td>
                                <td>{Application.aadhaar_no}</td>
                                <td>{Application.pan_no}</td>
                                <td>{Application.type_of_employment}</td>
                                <td>{Application.business_title}</td>
                                <td>{Application.business_type}</td>
                                <td>{Application.business_address}</td>
                                <td>{Application.gst_registration_no}</td>
                                <td>{Application.business_license_no}</td>
                                <td>{Application.expected_average_annual_turnover}</td>
                                <td>{Application.years_in_current_business}</td>
                                <td>{Application.colletral}</td>
                                <td>{Application.status}</td>
                                <td>{Application.application_timestamp}</td>
                                <td>{Application.remark}</td>
                                <td>{Application.credit_score}</td>
                                <td><NavLink to={`/update/${Application.id}`} className="btn btn-outline-warning">Update</NavLink></td>
                                <td><NavLink to={`/delete/${Application.id}`} className="btn btn-outline-danger">Delete</NavLink></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        {Object.keys(Application).length?(<>
        
                      <div style={{ marginTop: '20px', overflowX: 'auto' }}>
                      <h2>Selected Application Details</h2>
                      <p style={{ color: 'red', padding: '20px', borderRadius: '10px', fontSize: '24px'}}>USER DETAILS</p>
                      <table
                        style={{
                          width: '100%',
                          borderCollapse: 'collapse',
                          border: '1px solid #ddd',
                          borderRadius: '5px',
                        }}
                      >
                        <thead style={{ backgroundColor: '#343a40', color: '#fff' }}>
                            <tr>
                                <th>Label</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>User ID</td>
                                <td>{Application.user.id}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{Application.user.email}</td>
                            </tr>
                            <tr>
                                <td>Date of Birth</td>
                                <td>{Application.user.dob}</td>
                            </tr>
                            <tr>
                                <td>Gender</td>
                                <td>{Application.user.gender}</td>
                            </tr>
                            <tr>
                                <td>Permanent Address</td>
                                <td>{Application.user.permanent_address}</td>
                            </tr>
                            <tr>
                                <td>Current Address</td>
                                <td>{Application.user.current_address}</td>
                            </tr>
                            <tr>
                                <td>Mobile</td>
                                <td>{Application.user.mobile}</td>
                            </tr>
                        </tbody>
                      </table>

                      <p style={{ color: 'red', padding: '20px', borderRadius: '10px', fontSize: '24px'}}>FAMILY DETAILS</p>
                      <table
                        style={{
                          width: '100%',
                          borderCollapse: 'collapse',
                          border: '1px solid #ddd',
                          borderRadius: '5px',
                        }}
                      >
                        <thead style={{ backgroundColor: '#343a40', color: '#fff' }}>
                          <tr>
                            <th>Label</th>
                            <th>Value</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Father Name</td>
                            <td>{Application.user.family.father_name}</td>
                          </tr>
                          <tr>
                            <td>Father Profession</td>
                            <td>{Application.user.family.father_profession}</td>
                          </tr>
                          <tr>
                            <td>Father Income</td>
                            <td>{Application.user.family.father_income}</td>
                          </tr>
                          <tr>
                            <td>Father Contact</td>
                            <td>{Application.user.family.father_contact}</td>
                          </tr>
                          <tr>
                            <td>Mother Name</td>
                            <td>{Application.user.family.mother_name}</td>
                          </tr>
                          <tr>
                            <td>Mother Profession</td>
                            <td>{Application.user.family.mother_profession}</td>
                          </tr>
                          <tr>
                            <td>Mother Income</td>
                            <td>{Application.user.family.mother_income}</td>
                          </tr>
                          <tr>
                            <td>Mother Contact</td>
                            <td>{Application.user.family.mother_contact}</td>
                          </tr>
                          <tr>
                            <td>Marital Status</td>
                            <td>{Application.user.family.marital_status}</td>
                          </tr>
                          <tr>
                            <td>Spouse Name</td>
                            <td>{Application.user.family.spouse_name}</td>
                          </tr>
                          <tr>
                            <td>Spouse Profession</td>
                            <td>{Application.user.family.spouse_profession}</td>
                          </tr>
                          <tr>
                            <td>Spouse Income</td>
                            <td>{Application.user.family?.spouse_income}</td>
                          </tr>
                          <tr>
                            <td>Spouse Contact</td>
                            <td>{Application.user.family.spouse_contact}</td>
                          </tr>
                        </tbody>
                      </table>
                      <p style={{ color: 'red', padding: '20px', borderRadius: '10px', fontSize: '24px'}}>BANK DETAILS</p>
                      <table
                        style={{
                          width: '100%',
                          borderCollapse: 'collapse',
                          border: '1px solid #ddd',
                          borderRadius: '5px',
                        }}
                      >
                        <thead style={{ backgroundColor: '#343a40', color: '#fff' }}>
                          <tr>
                            <th>Label</th>
                            <th>Value</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Bank Name</td>
                            <td>{Application.user.banks.bank_name}</td>
                          </tr>
                          <tr>
                            <td>Account Number</td>
                            <td>{Application.user.banks.account_number}</td>
                          </tr>
                          <tr>
                            <td>IFSC Code</td>
                            <td>{Application.user.banks.ifsc_code}</td>
                          </tr>
                          <tr>
                            <td>Passbook Copy</td>
                            <td>
                              <img
                                src={Application.user.banks.passbook_copy}
                                alt="Passbook Copy"
                                style={{ maxWidth: '100px' }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>Bank Address</td>
                            <td>{Application.user.banks.bank_address}</td>
                          </tr>
                        </tbody>
                      </table>

                      <p style={{ color: 'red', padding: '20px', borderRadius: '10px', fontSize: '24px'}}>DOCUMENT DETAILS</p>
                          <table
                            style={{
                              width: '100%',
                              borderCollapse: 'collapse',
                              border: '1px solid #ddd',
                              borderRadius: '5px',
                            }}
                          >
                            <thead style={{ backgroundColor: '#343a40', color: '#fff' }}>
                              <tr>
                                <th>Field</th>
                                <th>Value</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>ID</td>
                                <td>{Application.documents.id}</td>
                              </tr>
                              <tr>
                                <td>Aadhaar Card</td>
                                <td>
                                  <a
                                    href={Application.documents.aadhaar_card}
                                    download="Aadhaar_Card.pdf"
                                  >
                                    Download Aadhaar Card
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>PAN Card</td>
                                <td>
                                  <a href={Application.documents.pan_card} download="PAN_Card.pdf">
                                    Download PAN Card
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>Business Address Proof</td>
                                <td>
                                  <a
                                    href={
                                        Application.documents
                                        .business_address_proof_or_copy_of_rent_agreement
                                    }
                                    download="Business_Address_Proof.pdf"
                                  >
                                    Download Business Address Proof
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>Electricity Bill</td>
                                <td>
                                  <a href={Application.documents.electricity_bill} download="Electricity_Bill.pdf">
                                    Download Electricity Bill
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>MSME Certificate</td>
                                <td>
                                  <a href={Application.documents.msme_certificate} download="MSME_Certificate.pdf">
                                    Download MSME Certificate
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>GST Certificate</td>
                                <td>
                                  <a href={Application.documents.gst_certificate} download="GST_Certificate.pdf">
                                    Download GST Certificate
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>Udyog Aadhaar Registration</td>
                                <td>
                                  <a
                                    href={Application.documents.udyog_aadhaar_registration}
                                    download="Udyog_Aadhaar_Registration.pdf"
                                  >
                                    Download Udyog Aadhaar Registration
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>Business License</td>
                                <td>
                                  <a href={Application.documents.business_license} download="Business_License.pdf">
                                    Download Business License
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>Business Plan or Proposal</td>
                                <td>
                                  <a
                                    href={Application.documents.business_plan_or_proposal}
                                    download="Business_Plan_or_Proposal.pdf"
                                  >
                                    Download Business Plan or Proposal
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>Three Years ITR with Balance Sheet</td>
                                <td>
                                  <a
                                    href={Application.documents.three_years_itr_with_balance_sheet}
                                    download="Three_Years_ITR_with_Balance_Sheet.pdf"
                                  >
                                    Download Three Years ITR with Balance Sheet
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>Collateral Document</td>
                                <td>
                                  <a
                                    href={Application.documents.collateral_document}
                                    download="Collateral_Document.pdf"
                                  >
                                    Download Collateral Document
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>Stamp Duty</td>
                                <td>
                                  <a href={Application.documents.stamp_duty} download="Stamp_Duty.pdf">
                                    Download Stamp Duty
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>Status</td>
                                <td>{Application.documents.status}</td>
                              </tr>
                              <tr>
                                <td>Response Timestamp</td>
                                <td>{Application.documents.response_timestamp}</td>
                              </tr>
                              <tr>
                                <td>Remark</td>
                                <td>{Application.documents.remark}</td>
                              </tr>
                            </tbody>
                          </table>


                 </div>
        
        </>):(<>
        </>)}
        </div>
  )
}

export default ShowApplications