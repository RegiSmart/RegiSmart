import  './css/pagesinputs.css';
import { Link as RouterLink } from 'react-router-dom';
import axios from '../config/index';
import React, { useState, useEffect } from 'react';
import { useLocation,useParams } from 'react-router-dom'; // Import useParams hook



function UpdateCourse(){

    
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const CourseId = queryParams.get('id');


    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const [courseData, setCourseData] = useState({
        course_code: '',
        course_name: '',
        course_unit: '',
        no_of_seats: '',
    });

    useEffect(() => {
        const fetchCourseData = async () => {
            try {
                const response = await axios.post('/get-item', { itemId: CourseId,table: "course" });
                if (response.data.id) {
                    setCourseData({ ...response.data}); // Do not preload password
                } else {
                    setErrorMessage('Course not found or error fetching course data.');
                }
            } catch (error) {
                console.error('Error fetching course data:', error);
                setErrorMessage('Error fetching course data');
            }
        };

        fetchCourseData();
    }, [CourseId]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        const updateData = {
            id: courseData.id,
            course_name: courseData.course_name,
            course_code: courseData.course_code,
            course_unit: courseData.course_unit,
            no_of_seats: courseData.no_of_seats

        };

        try {
            const response = await axios.post('/update-course', updateData);
            if (response.data.message) {
                setSuccessMessage('Course updated successfully');
            } else {
                setErrorMessage('Error updating course');
            }
        } catch (error) {
            console.error('Update error:', error);
            setErrorMessage('An error occurred. Please try again later.');
        }
    };



    return(
        <>
            <section className='form-inputs'>
                <div className='container-fluid'>
                    <div className='section-header'>
                        <h1> Update Course </h1>
                    </div>

                    {successMessage && <div className="success-message">{successMessage}</div>}

                    {errorMessage && <div className="error-message">{errorMessage}</div>}


                    <div className='form-inputs-content'>
                    <form onSubmit={handleUpdate}>
                            <h1> Course </h1>


                            <div className='input'>
                                <label> Course Code</label>
                                <input value={courseData.course_code} onChange={e => setCourseData({ ...courseData, course_code: e.target.value })} placeholder='Course Code' type='text' required name='course_code' />

                            </div>

                            
                            <div className='input'>
                                <label> Course Name</label>

                                <input value={courseData.course_name} onChange={e => setCourseData({ ...courseData, course_name: e.target.value })} placeholder='Course Name' type='text' required name='course_name' />

                            </div>


                            <div className='input'>
                                <label> Course Unit</label>
                                <input value={courseData.course_unit} onChange={e => setCourseData({ ...courseData, course_unit: e.target.value })} placeholder='Course Unit' type='text' required name='course_unit' />

                            </div>

                            <div className='input'>
                                <label> Seat Limit</label>

                                <input value={courseData.no_of_seats} onChange={e => setCourseData({ ...courseData, no_of_seats: e.target.value })} placeholder='Seat Limit' type='number' required name='no_of_seats' />
                            </div>

                            <button type='submit'> Update </button>
                        </form>
                    </div>

                </div>
            </section>
        </>
    )
}

export default UpdateCourse;