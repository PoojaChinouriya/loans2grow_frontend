import axios from "axios";

const baseUrl = "http://127.0.0.1:8000"

export function addStaffToDB(staff){
    const relUrl = `${baseUrl}/v1/add-staff/`
    return axios.post(relUrl, staff)
} 

export function sendOTPToCustomer(mobile){
    const url = `http://localhost:8000/v1/enquiry/send_otp/?mobile=${mobile}`
    return axios.get(url)
}

export function addEnquiryToDB(enquiryData){
    const url = `http://localhost:8000/v1/enquiry/`
    return axios.post(url, enquiryData)
}