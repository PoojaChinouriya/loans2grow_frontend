import React from 'react'

function ApprovedDataFromLSO() {

    const [data, setData] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/v1/verified-doc-by-lso/');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

  return (          
            <div className='table-responsive'>
                <h1> Data(Remark:Verified by LSO, Status:done) </h1>
                <table className='table table-hover table-dark'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>aadhaar_no</th>
                            <th>pan_no</th>
                            <th>status</th>
                             <th>application_timestamp</th>
                            <th>remark</th>
                            <th>credit_score</th>
                            <th>user</th>
                            <th>Action</th>            
                        </tr>
                    </thead>
                    <tbody className="table-group-divider"> 
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.aadhaar_no}</td>
                                <td>{item.pan_no}</td>
                                <td>{item.status}</td>
                                <td>{item.application_timestamp}</td>
                                <td>{item.remark}</td>
                                <td>{item.credit_score}</td>
                                <td>{item.user}</td>
                                <td>Add Loan</td>
                                
                            
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };
    

export default ApprovedDataFromLSO