
import { useParams } from 'react-router-dom'
import axios from 'axios';
import React,{ useState, useEffect, useId } from 'react';
import Document from './Document'
import UserDetail from './UserDetail'
import Guranter from './Guranter'
import BankDetails from './BankDetails'

function ShowDetails() {
    let {userId} = useParams()
    const access = JSON.parse(window.localStorage.getItem("AccessToken"))
    let[docs, setDocs] = useState([])
    let[users, setUser] = useState([])
    let[guranter, setGuranter] = useState([])
    let[banks, setBanks] = useState([])

    async function showData(){
      await axios.get(`http://127.0.0.1:8000/applications/${userId}/`,
      {headers: {'Accept':'application/json', 'Authorization':`Bearer ${access}`}}
      ).then((response)=>{
        setDocs(response.data.documents)
        setBanks(response.data.user.banks)
        setGuranter(response.data.guarantors)
        setUser(response.data.user)
      }).catch((error)=>{
        alert('server down.....')
      })
    }
  useEffect(()=>{showData()},[])
  
  
  return (
    <div className='container'>
    <div className='row mb-3'>
       <h3 className='text-center mb-1' style={{color:"red"}}>DOCUMENT</h3>
       <Document obj={docs}/>
    </div>
    <div className='row mb-3'>
      <h3 className='text-center mb-1' style={{color:"red"}}>USER</h3>
       <UserDetail obj={users}  id={userId}/>
    </div>
    <div className='row mb-3'>
        <h3 className='text-center mb-1' style={{color:"red"}}>GURANTERS</h3>
       <Guranter obj={guranter}/>
    </div>
    <div className='row mb-3'>
        <h3 className='text-center mb-1' style={{color:"red"}}>BankDetails</h3>
       <BankDetails  obj={banks}/>
    </div>
    </div>
  )
}

export default ShowDetails