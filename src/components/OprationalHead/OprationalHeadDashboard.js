import React, { useState } from 'react';
import Application from './Application';

function OprationalHeadDashboard() {
  let[apps, setApps] = useState(false)

  function fetchApp(){
    if(apps==true){
      setApps(false)
    }else{
      setApps(true)
    }
   }

  return (
    <div class='container'>
        <button onClick={fetchApp} type='button' class='btn btn-info mt-4'>APPLICATIONS</button>
        {apps ? <Application/> : null }
    </div>
    
  )
}

export default OprationalHeadDashboard