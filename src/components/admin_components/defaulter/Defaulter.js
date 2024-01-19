import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import {useParams, NavLink } from 'react-router-dom';

const Defaulter = () => {
    const [data, setData] = useState([]);
    const {id} = useParams();
    const addDefaulter = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/v1/default/');
            setData(response.data);
            console.log(response.data)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        

        addDefaulter();
    }, []);
    

    return (
        <div>
            <h1 className="blockquote text-center"> Defaulter info</h1>
            <table className="table table-striped table-bordered table-sm table-responsive table table-dark">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Default amount</th>
                        <th>Pending since</th>
                        <th>Add</th>
                    
                   </tr>
                </thead>
            
                <tbody>
                        {data.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.default_item}</td>
                            <td>{item.pending_since_date}</td>
                            <td><button class="btn btn-outline-info me-2" type="submit"><NavLink className="nav-link " aria-current="page" to={`/defaulter/${item.id}`} >ADD</NavLink></button></td>

                            
                        
                        </tr>
                    ))}
                </tbody>
            </table>
            <button class="btn btn-outline-info me-2" type="button"><NavLink className="nav-link " aria-current="page"to ="/installment" >BACK</NavLink></button>
        </div>
    );
};



export default Defaulter


