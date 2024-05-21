import  './css/pagesinputs.css';
import { Link as RouterLink } from 'react-router-dom';


import axios from '../config/index';
import React, { useEffect, useRef, useState } from 'react';



function AddCourse(){



    
    const [courseName, setCourseName] = useState('');
    const [courseCode, setCourseCode] = useState('');
    const [courseUnit, setCourseUnit] = useState('');
    const [seatNumber, setSeatNumber] = useState('');

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        try {
            const response = await axios.post('/add-course', {
                course_name: courseName,
                course_code: courseCode,
                course_unit: courseUnit,
                no_of_seats: seatNumber

            });
            
            if (response.data.message) {
                setSuccessMessage('Course added successfully');
                setCourseName(''); // Clear the input field after successful submission
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
    
    const [Courses, setCourses] = useState([]);

    const getAllCourses = () => {
        axios.post("AllItems", {
            table: "course",
        })
        .then((res) => {
            if (res.data) {
                setCourses(res.data);
                getAllCourses();
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
            table: 'course',
            },
        })
        .then((response) => {
            if (response.data.message === 'Item deleted successfully') {
                getAllCourses();
            } else {
            console.error('Failed to delete result:', response.data.message);
            }
        })
        .catch((error) => {
            console.error('Error deleting result:', error);
        });
    };




    useEffect(() => {
        getAllCourses();

    }, []);





    return(
        <>
            <section className='form-inputs'>
                <div className='container-fluid'>
                    <div className='section-header'>
                        <h1> Manage Courses </h1>
                    </div>

                    
                    
                    {successMessage && <div className="success-message">{successMessage}</div>} {/* Display the error message */}

                    {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Display the error message */}




                    <div className='form-inputs-content'>
                    <form onSubmit={handleSubmit}>
                            <h1> Course </h1>


                            <div className='input'>
                                <label> Course Code</label>

                                    
                                <input 
                                    placeholder='Course Code' 
                                    type='text' 
                                    required 
                                    name='course_code' 
                                    value={courseCode} 
                                    onChange={e => setCourseCode(e.target.value)} 
                                />



                            </div>

                            
                            <div className='input'>
                                <label> Course Name</label>

                                <input 
                                    placeholder='Course Name' 
                                    type='text' 
                                    required 
                                    name='course_name' 
                                    value={courseName} 
                                    onChange={e => setCourseName(e.target.value)} 
                                />



                            </div>


                            <div className='input'>
                                <label> Course Unit</label>
                                
                                <input 
                                    placeholder='Course Unit' 
                                    type='text' 
                                    required 
                                    name='course_unit' 
                                    value={courseUnit} 
                                    onChange={e => setCourseUnit(e.target.value)} 
                                />



                            </div>

                            <div className='input'>
                                <label> Seat Limit</label>
                                
                                <input 
                                    placeholder='Seat Limit' 
                                    type='number' 
                                    required 
                                    name='seat_limit' 
                                    value={seatNumber} 
                                    onChange={e => setSeatNumber(e.target.value)} 
                                />



                            </div>

                            <button type='submit'> Submit </button>
                        </form>
                    </div>

                    <div className='all-data-table'>
                        <h1> Manage Course </h1>

                        <div className='table-content'>
                        <table>
                                <tr>
                                    <th>
                                        <h1> # </h1>
                                    </th>

                                    <th>
                                        <h1> Course Code </h1>
                                    </th>

                                    <th>
                                        <h1> Course Name </h1>
                                    </th>

                                    <th>
                                        <h1> Course Unit </h1>
                                    </th>

                                    <th>
                                        <h1> Seat Limit </h1>
                                    </th>

                                    <th>
                                        <h1> Creation Date</h1>
                                    </th>


                                    <th>
                                        <h1> Updation Date</h1>
                                    </th>

                                    <th>
                                        <h1> Students Enrolled </h1>
                                    </th>


                                    <th>
                                        <h1> Action </h1>
                                    </th>

                                </tr>


                                {Courses && Courses.length > 0 ? (
                                    Courses.map((course) => (
                                    
                                        <tr>
                                        <td> 
                                            <h2> {course.id} </h2> 
                                        </td>
                                        <td>
                                            <h2>{course.course_code} </h2>
                                        </td>
        
        
                                        <td>
                                            <h2> {course.course_name}  </h2>
                                        </td>
        
                                        <td>
                                            <h2> {course.course_unit} </h2>
                                        </td>
        
                                        <td>
                                            <h2>{course.no_of_seats} </h2>
                                        </td>
        
                                        <td> 
                                            <h2> {course.creation_date} </h2>
                                        </td>


                                        
                                        <td> 
                                            <h2> {course.updation_date} </h2>
                                        </td>

                                        
                                        <td> 
                                            <h2> {course.no_of_student} </h2>
                                        </td>
        
                                        <td> 
                                            <div>
                                            <RouterLink to={`/update-course?id=${course.id}`}>
                                                <i class="las la-edit"></i>
                                                Edit
                                            </RouterLink>
        
                                            <button className='delete-record delete' onClick={() => deleteItem(course.id)}>
                                                <i class="las la-trash"></i> Delete 
                                            </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                                ) : (
                                <div>No Courses available.</div> 
                                )}  


                        </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AddCourse;