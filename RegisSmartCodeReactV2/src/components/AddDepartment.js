import  './css/pagesinputs.css';
import axios from '../config/index';
import React, { useEffect, useRef, useState } from 'react';


function AddDepartment(){


        
    const [departmentName, setDepartmentName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        try {
            const response = await axios.post('/add-department', {
                department: departmentName
            });
            
            if (response.data.message) {
                setSuccessMessage('Department added successfully');
                setDepartmentName(''); // Clear the input field after successful submission
                setErrorMessage(''); // Clear any existing error messages
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                // Set the error message from the response if it exists
                setErrorMessage(error.response.data.message);
            } else {
                // Set a generic error message if the response does not contain one
                setErrorMessage('An error occurred. Please try again later.');
            }
        }
    };




    
    
    const [Departments, setDepartments] = useState([]);

    const getAllDepartments = () => {
        axios.post("AllItems", {
            table: "department",
        })
        .then((res) => {
            if (res.data) {
                setDepartments(res.data);
                getAllDepartments();
            } else {
                console.log("Error happened");
            }
        })
        .catch((err) => console.log(err));
    };






        
    const deleteItem = (id) => {
        axios
        .delete(`delete-item/${id}`, {
            data: {
            table: 'department',
            },
        })
        .then((response) => {
            if (response.data.message === 'Item deleted successfully') {
                getAllDepartments();
            } else {
            console.error('Failed to delete result:', response.data.message);
            }
        })
        .catch((error) => {
            console.error('Error deleting result:', error);
        });
    };




    useEffect(() => {
        getAllDepartments();

    }, []);




    return(
        <>
            <section className='form-inputs'>
                <div className='container-fluid'>
                    <div className='section-header'>
                        <h1> DEPARTMENT </h1>
                    </div>


                    
                    
                    {successMessage && <div className="success-message">{successMessage}</div>} {/* Display the error message */}

                    {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Display the error message */}





                    <div className='form-inputs-content'>
                    <form onSubmit={handleSubmit}>
                            <h1> Department </h1>


                            <div className='input'>
                                <label> Add Department </label>
                                
                                <input 
                                    placeholder='department' 
                                    type='text' 
                                    required 
                                    name='department_name' 
                                    value={departmentName} 
                                    onChange={e => setDepartmentName(e.target.value)} 
                                />

                            </div>

                            <button type='submit'> Submit </button>
                        </form>
                    </div>

                    <div className='all-data-table'>
                        <h1> Manage Department </h1>

                        <div className='table-content'>
                        <table>
                                <tr>
                                    <th>
                                        <h1> # </h1>
                                    </th>

                                    <th>
                                        <h1> Department </h1>
                                    </th>

                                    <th>
                                        <h1> Creation Date </h1>
                                    </th>

                                    <th>
                                        <h1> Action </h1>
                                    </th>



                                </tr>
                                {Departments && Departments.length > 0 ? (
                                    Departments.map((department) => (
                                    
                                    <tr>
                                    <td> 
                                        <h2> {department.id} </h2> 
                                    </td>
                                    <td>
                                        <h2>  {department.department} </h2>
                                    </td>
                                    <td> 
                                        <h2>  {department.creation_date} </h2>
                                    </td>

                                    <td> 
                                    <button className='delete-record delete' onClick={() => deleteItem(department.id)}>
                                            <i class="las la-trash"></i> Delete 
                                        </button>
                                    </td>
                                </tr>
                                ))
                                ) : (
                                <div>No Departments available.</div> 
                                )}  



                        </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AddDepartment;