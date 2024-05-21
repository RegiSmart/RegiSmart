import  './css/pagesinputs.css';
import { Link as RouterLink } from 'react-router-dom';

import axios from '../config/index';
import React, { useEffect, useRef, useState } from 'react';


function AllStudents(){


    
    
    const [Students, setStudents] = useState([]);

    const getAllStudents = () => {
        axios.post("AllStudents", {
            table: "student",
        })
        .then((res) => {
            if (res.data) {
                setStudents(res.data);
            } else {
                console.log("Error happened");
            }
        })
        .catch((err) => console.log(err));
    };


    useEffect(() => {
        getAllStudents();

    }, []);


    
    const deleteItem = (id) => {
        axios
        .delete(`delete-student/${id}`, {
            data: {
            table: 'student',
            },
        })
        .then((response) => {
            if (response.data.message === 'Item deleted successfully') {
                getAllStudents();
            } else {
            console.error('Failed to delete result:', response.data.message);
            }
        })
        .catch((error) => {
            console.error('Error deleting result:', error);
        });
    };



    return(
        <>
            <section className='form-inputs'>
                <div className='container-fluid'>

                    <div className='all-data-table'>
                        <h1> Manage Students </h1>

                        <div className='table-content'>
                        <table>
                                <tr>
                                    <th>
                                        <h1> Reg No</h1>
                                    </th>

                                    <th>
                                        <h1> Student Name </h1>
                                    </th>

                                    <th>
                                        <h1> Pincode </h1>
                                    </th>

                                    <th>
                                        <h1> Reg Date </h1>
                                    </th>


                                    <th>
                                        <h1> Action </h1>
                                    </th>

                                </tr>




                                {Students && Students.length > 0 ? (
                                Students.map((student) => (
                                    <tr>

                                        <td>
                                            <h2> {student.student_reg_no} </h2>
                                        </td>


                                        <td>
                                            <h2>  {student.student_name}  </h2>
                                        </td>

                                        <td>
                                            <h2>  {student.pincode}  </h2>
                                        </td>

                                        <td> 
                                            <h2>{student.creation_date} </h2>
                                        </td>

                                        <td> 
                                            <div>
                                            <RouterLink to={`/update-student?id=${student.student_reg_no}`}>
                                                <i class="las la-edit"></i>
                                                Edit
                                            </RouterLink>

                                            <button className='delete-record delete' onClick={() => deleteItem(student.student_reg_no)}>
                                                <i class="las la-trash"></i> Delete 
                                            </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                                ) : (
                                <div>No Students available.</div> 
                                )}  


                        </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AllStudents;