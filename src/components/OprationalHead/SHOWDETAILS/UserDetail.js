
import React from 'react'

function UserDetail(props) {
  const obj = props.obj
  const Id = props.id
  
  return (
    <div className='container'>
    <div className='row'>
          <div class="table-responsive">
            <table className='table table-striped table-info' >
                < thead>
                <tr>
                    <th>APPLICATION</th>
                    <td>{Id}</td>
                </tr>
                <tr>
                    <th>USER</th>
                    <td>{obj.id}</td>
                </tr>
                <tr>
                    <th>FIRST NAME</th>
                    <td>{obj.first_name}</td>
                </tr>
                <tr>
                    <th>LAST NAME</th>
                    <td>{obj.last_name}</td>
                </tr>
                <tr>
                    <th>DOB</th>
                    <td>{obj.dob}</td>
                </tr>
                <tr>
                    <th>GENDER</th>
                    <td>{obj.gender}</td>
                </tr>
                <tr>
                    <th>EMAIL</th>
                    <td>{obj.email}</td>
                </tr>
                <tr>
                    <th>PERMANENT ADRESS</th>
                    <td >{obj.permanent_address}</td>
                </tr>
                <tr>
                    <th>CURRENT ADRESS</th>
                    <td>{obj.current_address}</td>
                </tr>
                <tr>
                    <th>MOBILE</th>
                    <td>{obj.mobile}</td>
                </tr>
                <tr>
                    <th>PHOTO</th>
                    <td><img to={obj.photo}></img></td>
                </tr>
                <tr>
                    <th>SIGNATURE</th>
                    <td><img to={obj.signature}></img></td>
                </tr>
                <tr>
                    <th>ROLE</th>
                    <td>{obj.role}</td>
                </tr>
                </thead>
            </table>
        </div>
    </div>
</div>
  )
}

export default UserDetail