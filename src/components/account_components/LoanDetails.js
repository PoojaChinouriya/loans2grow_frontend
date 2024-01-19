import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LoanApplications = () => {
            const [applications, setApplications] = useState([])
            const [selectedApplication, setSelectedApplication] = useState(null);

            useEffect(() => {
              const fetchLoanApplications = async () => {
                try {
                  const response = await axios.get('http://localhost:8000/v1/aproval')
                  setApplications(response.data);
                } catch (error) {
                  console.error('Error fetching loan applications:', error)
                }
              };

              fetchLoanApplications();
            }, [])

            const handleApplicationClick = (application) => {
              setSelectedApplication(application)
            };

            // useEffect(() => {
            //   const fetchLoanApplications = async () => {
            //     try {
            //       const response = await axios.get('http://localhost:8000/v1/aproval')
            //       setApplications(response.data)
            //     } catch (error) {
            //       console.error('Error fetching loan applications:', error)
            //     }
            //   }

            //   fetchLoanApplications();
            // }, [])

            return (
              <div>
                <h1 className=' text-primary text-center'>Approved Loans Details</h1>
                <table className='table table-dark'>
                  <thead>
                    <tr>
                      <th>Application ID</th>
                      <th>User ID</th>
                      <th>User Name</th>
                      <th>Email</th>
                      <th>Aadhaar No</th>
                      <th>PAN No</th>
                      <th>Type of Employment</th>
                      <th>Business Title</th>
                      <th>Business Type</th>
                      <th>Business Address</th>
                      <th>GST Registration No</th>
                      <th>Business License No</th>
                      <th>Expected Average Annual Turnover</th>
                      <th>Years in Current Business</th>
                      <th>Collateral</th>
                      <th>Status</th>
                      <th>Application Timestamp</th>
                      <th>Remark</th>
                      <th>Credit Score</th>
                    </tr>
                  </thead>
                  <tbody className='table-info'>
                    {applications.map(application => (
                      <tr key={application.id} onClick={() => handleApplicationClick(application)}>
                        <td>{application.id}</td>
                        <td>{application.user.id}</td>
                        <td>{application.user.username}</td>
                        <td>{application.user.email}</td>
                        <td>{application.aadhaar_no}</td>
                        <td>{application.pan_no}</td>
                        <td>{application.type_of_employment}</td>
                        <td>{application.business_title}</td>
                        <td>{application.business_type}</td>
                        <td>{application.business_address}</td>
                        <td>{application.gst_registration_no}</td>
                        <td>{application.business_license_no}</td>
                        <td>{application.expected_average_annual_turnover}</td>
                        <td>{application.years_in_current_business}</td>
                        <td>{application.colletral}</td>
                        <td>{application.status}</td>
                        <td>{application.application_timestamp}</td>
                        <td>{application.remark}</td>
                        <td>{application.credit_score}</td>
                      
                      </tr>
                    ))}
                  </tbody>
                </table>
                {selectedApplication && (
                      <div style={{ marginTop: '20px', overflowX: 'auto' }}>
                      <h2>Selected Application Details</h2>
            
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
                              <td>{selectedApplication.user.id}</td>
                          </tr>
                          <tr>
                              <td>Email</td>
                              <td>{selectedApplication.user.email}</td>
                          </tr>
                          <tr>
                              <td>Date of Birth</td>
                              <td>{selectedApplication.user.dob}</td>
                          </tr>
                          <tr>
                              <td>Gender</td>
                              <td>{selectedApplication.user.gender}</td>
                          </tr>
                          <tr>
                              <td>Permanent Address</td>
                              <td>{selectedApplication.user.permanent_address}</td>
                          </tr>
                          <tr>
                              <td>Current Address</td>
                              <td>{selectedApplication.user.current_address}</td>
                          </tr>
                          <tr>
                              <td>Mobile</td>
                              <td>{selectedApplication.user.mobile}</td>
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
                            <td>{selectedApplication.user.family?.father_name}</td>
                          </tr>
                          <tr>
                            <td>Father Profession</td>
                            <td>{selectedApplication.user.family?.father_profession}</td>
                          </tr>
                          <tr>
                            <td>Father Income</td>
                            <td>{selectedApplication.user.family?.father_income}</td>
                          </tr>
                          <tr>
                            <td>Father Contact</td>
                            <td>{selectedApplication.user.family?.father_contact}</td>
                          </tr>
                          <tr>
                            <td>Mother Name</td>
                            <td>{selectedApplication.user.family?.mother_name}</td>
                          </tr>
                          <tr>
                            <td>Mother Profession</td>
                            <td>{selectedApplication.user.family?.mother_profession}</td>
                          </tr>
                          <tr>
                            <td>Mother Income</td>
                            <td>{selectedApplication.user.family?.mother_income}</td>
                          </tr>
                          <tr>
                            <td>Mother Contact</td>
                            <td>{selectedApplication.user.family?.mother_contact}</td>
                          </tr>
                          <tr>
                            <td>Marital Status</td>
                            <td>{selectedApplication.user.family?.marital_status}</td>
                          </tr>
                          <tr>
                            <td>Spouse Name</td>
                            <td>{selectedApplication.user.family?.spouse_name}</td>
                          </tr>
                          <tr>
                            <td>Spouse Profession</td>
                            <td>{selectedApplication.user.family?.spouse_profession}</td>
                          </tr>
                          <tr>
                            <td>Spouse Income</td>
                            <td>{selectedApplication.user.family?.spouse_income}</td>
                          </tr>
                          <tr>
                            <td>Spouse Contact</td>
                            <td>{selectedApplication.user.family?.spouse_contact}</td>
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
                            <td>{selectedApplication.user.banks[0]?.bank_name}</td>
                          </tr>
                          <tr>
                            <td>Account Number</td>
                            <td>{selectedApplication.user.banks[0]?.account_number}</td>
                          </tr>
                          <tr>
                            <td>IFSC Code</td>
                            <td>{selectedApplication.user.banks[0]?.ifsc_code}</td>
                          </tr>
                          <tr>
                            <td>Passbook Copy</td>
                            <td>
                              <img
                                src={selectedApplication.user.banks[0]?.passbook_copy}
                                alt="Passbook Copy"
                                style={{ maxWidth: '100px' }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>Bank Address</td>
                            <td>{selectedApplication.user.banks[0]?.bank_address}</td>
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
                                <td>{selectedApplication.documents.id}</td>
                              </tr>
                              <tr>
                                <td>Aadhaar Card</td>
                                <td>
                                  <a
                                    href={selectedApplication.documents.aadhaar_card}
                                    download="Aadhaar_Card.pdf"
                                  >
                                    Download Aadhaar Card
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>PAN Card</td>
                                <td>
                                  <a href={selectedApplication.documents.pan_card} download="PAN_Card.pdf">
                                    Download PAN Card
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>Business Address Proof</td>
                                <td>
                                  <a
                                    href={
                                      selectedApplication.documents
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
                                  <a href={selectedApplication.documents.electricity_bill} download="Electricity_Bill.pdf">
                                    Download Electricity Bill
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>MSME Certificate</td>
                                <td>
                                  <a href={selectedApplication.documents.msme_certificate} download="MSME_Certificate.pdf">
                                    Download MSME Certificate
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>GST Certificate</td>
                                <td>
                                  <a href={selectedApplication.documents.gst_certificate} download="GST_Certificate.pdf">
                                    Download GST Certificate
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>Udyog Aadhaar Registration</td>
                                <td>
                                  <a
                                    href={selectedApplication.documents.udyog_aadhaar_registration}
                                    download="Udyog_Aadhaar_Registration.pdf"
                                  >
                                    Download Udyog Aadhaar Registration
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>Business License</td>
                                <td>
                                  <a href={selectedApplication.documents.business_license} download="Business_License.pdf">
                                    Download Business License
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>Business Plan or Proposal</td>
                                <td>
                                  <a
                                    href={selectedApplication.documents.business_plan_or_proposal}
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
                                    href={selectedApplication.documents.three_years_itr_with_balance_sheet}
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
                                    href={selectedApplication.documents.collateral_document}
                                    download="Collateral_Document.pdf"
                                  >
                                    Download Collateral Document
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>Stamp Duty</td>
                                <td>
                                  <a href={selectedApplication.documents.stamp_duty} download="Stamp_Duty.pdf">
                                    Download Stamp Duty
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>Status</td>
                                <td>{selectedApplication.documents.status}</td>
                              </tr>
                              <tr>
                                <td>Response Timestamp</td>
                                <td>{selectedApplication.documents.response_timestamp}</td>
                              </tr>
                              <tr>
                                <td>Remark</td>
                                <td>{selectedApplication.documents.remark}</td>
                              </tr>
                            </tbody>
                          </table>

                            <p style={{ color: 'red', padding: '10px', borderRadius: '8px', fontSize: '24px'}}>LOAN DETAILS:</p>
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
                                  <td>{selectedApplication.Loans.id}</td>
                                </tr>
                                <tr>
                                  <td>Loan Principal Amount</td>
                                  <td>{selectedApplication.Loans.loan_principal_amount}</td>
                                </tr>
                                <tr>
                                  <td>Loan Tenure</td>
                                  <td>{selectedApplication.Loans.loan_tenure}</td>
                                </tr>
                                <tr>
                                  <td>Interest Rate</td>
                                  <td>{selectedApplication.Loans.interest_rate}</td>
                                </tr>
                                <tr>
                                  <td>Total Amount and Processing Fees</td>
                                  <td>{selectedApplication.Loans.total_amount_and_processing_fees}</td>
                                </tr>
                                <tr>
                                  <td>Installment</td>
                                  <td>{selectedApplication.Loans.installment}</td>
                                </tr>
                                <tr>
                                  <td>Maturity Date</td>
                                  <td>{selectedApplication.Loans.maturity_date}</td>
                                </tr>
                                <tr>
                                  <td>Sanction Letter</td>
                                  <td>
                                    <a
                                      href={selectedApplication.Loans.sanction_letter}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      View Sanction Letter
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Status</td>
                                  <td>{selectedApplication.Loans.status}</td>
                                </tr>
                                <tr>
                                  <td>Response Timestamp</td>
                                  <td>{selectedApplication.Loans.response_timestamp}</td>
                                </tr>
                                <tr>
                                  <td>Remark</td>
                                  <td>{selectedApplication.Loans.remark}</td>
                                </tr>
                              </tbody>
                            </table>
                 </div>
      

    
    )}
  
</div>
)
}

export default LoanApplications
