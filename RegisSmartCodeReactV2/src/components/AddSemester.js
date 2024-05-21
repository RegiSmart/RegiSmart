import  './css/pagesinputs.css';
import axios from '../config/index';
import React, { useEffect, useRef, useState } from 'react';



function AddSemester(){


    
    const [semesterName, setSemesterName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        try {
            const response = await axios.post('/add-semester', {
                semester: semesterName
            });
            
            if (response.data.message) {
                setSuccessMessage('Semester added successfully');
                setSemesterName(''); // Clear the input field after successful submission
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




    
    
    const [Semesters, setSemesters] = useState([]);

    const getAllSemesters = () => {
        axios.post("AllItems", {
            table: "semester",
        })
        .then((res) => {
            if (res.data) {
                setSemesters(res.data);
                getAllSemesters();
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
            table: 'semester',
            },
        })
        .then((response) => {
            if (response.data.message === 'Item deleted successfully') {
                getAllSemesters();
            } else {
            console.error('Failed to delete result:', response.data.message);
            }
        })
        .catch((error) => {
            console.error('Error deleting result:', error);
        });
    };




    useEffect(() => {
        getAllSemesters();

    }, []);



    
    return(
        <>
            <section className='form-inputs'>
                <div className='container-fluid'>
                    <div className='section-header'>
                        <h1> SEMESTER </h1>
                    </div>

                    
                    {successMessage && <div className="success-message">{successMessage}</div>} {/* Display the error message */}

                    {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Display the error message */}



                    <div className='form-inputs-content'>
                    <form onSubmit={handleSubmit}>
                            <h1> Semester </h1>


                            <div className='input'>
                                <label> Add Semester </label>

                                <input 
                                    placeholder='semester' 
                                    type='text' 
                                    required 
                                    name='semester_name' 
                                    value={semesterName} 
                                    onChange={e => setSemesterName(e.target.value)} 
                                />


                            </div>

                            <button type='submit'> Submit </button>
                        </form>
                    </div>

                    <div className='all-data-table'>
                        <h1> Manage Semester </h1>

                        <div className='table-content'>
                        <table>
                                <tr>
                                    <th>
                                        <h1> # </h1>
                                    </th>

                                    <th>
                                        <h1> Semester </h1>
                                    </th>

                                    <th>
                                        <h1> Creation Date </h1>
                                    </th>

                                    <th>
                                        <h1> Action </h1>
                                    </th>

                                </tr>

                                
                            
                                {Semesters && Semesters.length > 0 ? (
                                    Semesters.map((semester) => (
                                    
                                    <tr>
                                    <td> 
                                        <h2> {semester.id} </h2> 
                                    </td>
                                    <td>
                                        <h2>  {semester.semester} </h2>
                                    </td>
                                    <td> 
                                        <h2>  {semester.creation_date} </h2>
                                    </td>

                                    <td> 
                                    <button className='delete-record delete' onClick={() => deleteItem(semester.id)}>
                                            <i class="las la-trash"></i> Delete 
                                        </button>
                                    </td>
                                </tr>
                                ))
                                ) : (
                                <div>No Semesters available.</div> 
                                )}  



                        </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AddSemester;