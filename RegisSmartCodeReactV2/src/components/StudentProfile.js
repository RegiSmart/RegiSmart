import  './css/pagesinputs.css';
import { Link as RouterLink } from 'react-router-dom';
import UserImg from './images/users/user.webp';


import axios from '../config/index';
import React, { useEffect, useRef, useState } from 'react';





function StudentProfile(){


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // for smoothly scrolling
        });
    };




        const [studentRegNoData, setStudentRegNoData] = useState('');
        const [studentData, setStudentData] = useState({
            student_name: '',
            student_reg_no: '',
            pincode: '',
            img : null,
        });
        const [errorMessage, setErrorMessage] = useState('');
        const [successMessage, setSuccessMessage] = useState('');

        const imageInputRef = useRef(); // Use ref for file input to reset after submission
        const [imageSrc, setImageSrc] = useState(UserImg);




        useEffect(() => {
            const fetchStudentData = async (studentRegNo) => {
                try {
                    const response = await axios.post('/get-student', { itemId: studentRegNo });
                    if (response.data && response.data.student_reg_no) {
                        setStudentData({
                            student_name: response.data.student_name,
                            student_reg_no: response.data.student_reg_no,
                            pincode: response.data.pincode,
                            student_photo: response.data.student_photo,

                        });
                        // Optionally, set the student photo if available
                        if (response.data.photo) setImageSrc(response.data.photo);
                    } else {
                        setErrorMessage('Student data not found. Please log in again.');
                        scrollToTop();

                    }
                } catch (error) {
                    console.error('Error fetching student data:', error);
                    setErrorMessage('An error occurred fetching student data.');
                    scrollToTop();

                }
            };
    
            const fetchSessionData = async () => {
                try {
                    const sessionResponse = await axios.get('/session-student');
                    if (sessionResponse.data && sessionResponse.data.valid) {
                        fetchStudentData(sessionResponse.data.studentRegNo);
                    } else {
                        setErrorMessage('Session data not found. Please log in again.');
                        scrollToTop();

                    }
                } catch (error) {
                    console.error('Error fetching session data:', error);
                    setErrorMessage('An error occurred fetching session data.');
                    scrollToTop();

                }
            };
    
            fetchSessionData();
        }, []);
    
        const handleImageChange = (e) => {
            if (e.target.files && e.target.files[0]) {
                const file = e.target.files[0];
                setImageSrc(URL.createObjectURL(file));
            }
        };
    
        const handleSubmit = async (e) => {
            e.preventDefault();
            const formData = new FormData();
            formData.append('student_name', studentData.student_name);
            // Ensure this ID exists and is correct for your backend logic
            formData.append('student_reg_no', studentData.student_reg_no); 
            if (imageInputRef.current && imageInputRef.current.files[0]) {
                formData.append('img', imageInputRef.current.files[0]);
            }
    
            try {
                const response = await axios.post('/update-student-info', formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });
                if (response.data && response.data.message) {
                    setSuccessMessage('Student profile updated successfully');
                    scrollToTop();
                    // Assuming the response includes updated student data:
                    if (response.data.photo) {
                        setImageSrc(response.data.photo);
                    }
                } else {
                    setErrorMessage('Failed to update student profile.');
                    scrollToTop();

                }
            } catch (error) {
                console.error('An error occurred during the profile update:', error);
                setErrorMessage('An error occurred during the profile update. Please try again later.');
                scrollToTop();

            }
        };



    return(
        <>
            <section className='form-inputs'>
                <div className='container-fluid'>
                    <div className='section-header'>
                        <h1> STUDENT PROFILE </h1>
                    </div>
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                            {successMessage && <div className="success-message">{successMessage}</div>}

                    <div className='form-inputs-content'>
                    <form onSubmit={handleSubmit}>
                            <h1> Update Student Profile </h1>

                            {/* Student Name Input */}
                            <div className='input'>
                                <label> Student Name </label>
                                <input value={studentData.student_name} onChange={(e) => setStudentData({ ...studentData, student_name: e.target.value })} type='text' required name='student_name' />
                            </div>

                            {/* Student Reg No Display */}
                            <div className='input'>
                                <label> Student Reg No </label>
                                <input disabled value={studentData.student_reg_no} readOnly type='text' name='student_reg_no' />
                            </div>

                            
                            <div className='input'>
                                <label> Pincode </label>
                                <input defaultValue={studentData.pincode} disabled readOnly type='number' required name='pincode' />
                            </div>

                            <div className='student-photo input'>
                                <label> Student Photo </label>
                                <img src={`./uploads/${studentData.student_photo}`} alt="Student" />
                            </div>


                            
                            <div className='input'>
                                <label> Upload New Photo </label>
                                <input type='file' name='student_photo' onChange={handleImageChange} ref={imageInputRef} />
                            </div>


                            <button type='submit'> Update </button>
                        </form>
                    </div>

                </div>
            </section>
        </>
    )
}

export default StudentProfile;