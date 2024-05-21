import  './css/pagesinputs.css';


import axios from '../config/index';
import React, { useEffect, useRef, useState } from 'react';




function StudentLogs(){


    function getReadableIP(ipData) {
        // If it's a string, try to format it directly
        if (typeof ipData === 'string') {
            return formatIPv6(ipData);
        }
        
        // If it's an object, try to find a property that might hold the IP address string
        if (typeof ipData === 'object' && ipData !== null) {
            // Example: Trying common property names that might hold the IP value
            const possibleKeys = ['hexString', 'value', 'ip'];
            for (let key of possibleKeys) {
                if (ipData[key] && typeof ipData[key] === 'string') {
                    return formatIPv6(ipData[key]);
                }
            }
        }
        
        // If none of the above, return a placeholder or an indication of the issue
        return 'Invalid IP format';
    }
    
    // Basic formatIPv6 function for demonstration; adjust as needed based on actual IP format
    function formatIPv6(hexString) {
        // Example: simplistic approach, actual implementation will depend on the specific format of hexString
        return hexString; // Placeholder for actual formatting logic
    }


    
    const [StudentLogsData, setStudentLogsData] = useState([]);

    const getAllStudentLogs = () => {
        axios.post("AllItems", {
            table: "userlog",
        })
        .then((res) => {
            if (res.data) {
                setStudentLogsData(res.data);
            } else {
                console.log("Error happened");
            }
        })
        .catch((err) => console.log(err));
    };


    useEffect(() => {
        getAllStudentLogs();

    }, []);




    return(
        <>
            <section className='form-inputs'>
                <div className='container-fluid'>
                    <div className='section-header'>
                        <h1> STUDENT LOGS </h1>
                    </div>

                    <div className='all-data-table'>
                        <h1> StudentLogs </h1>

                        <div className='table-content'>
                        <table>
                                <tr>
                                    <th>
                                        <h1> # </h1>
                                    </th>

                                    <th>
                                        <h1> Student Reg no </h1>
                                    </th>

                                    <th>
                                        <h1> IP </h1>
                                    </th>

                                    
                                    <th>
                                        <h1> Login Time </h1>
                                    </th>

                                    
                                    <th>
                                        <h1> Logout Time </h1>
                                    </th>

                                    <th>
                                        <h1> Status </h1>
                                    </th>

                                </tr>





                                {StudentLogsData && StudentLogsData.length > 0 ? (
                                StudentLogsData.map((logs) => (
                                    
                                        <tr>
                                        <td> 
                                            <h2> {logs.id} </h2> 
                                        </td>
                                        <td>
                                            <h2> {logs.student_reg_no}  </h2>
                                        </td>
                                        <td>
                                                <h2> {getReadableIP(logs.user_ip)} </h2>
                                        </td>

                                        <td> 
                                            <h2> {logs.login_time}  </h2>
                                        </td>


                                        <td> 
                                            <h2> {logs.logout}  </h2>
                                        </td>

                                        <td> 
                                            <h2> {logs.status}  </h2>
                                        </td>

                                        
                                    </tr>
                                ))
                                ) : (
                                <div>No Logs available.</div> 
                                )}  





                            
                        </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default StudentLogs;