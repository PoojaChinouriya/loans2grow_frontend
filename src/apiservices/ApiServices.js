import axios from "axios";

const baseUrl = "http://127.0.0.1:8000"

export function addStaffToDB(staff){
    const relUrl = `${baseUrl}/v1/add-staff/`
    return axios.post(relUrl, staff)
}        