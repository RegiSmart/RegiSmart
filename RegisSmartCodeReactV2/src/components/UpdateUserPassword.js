import  './css/pagesinputs.css';
import { Link as RouterLink } from 'react-router-dom';

import React, { useState, useEffect } from 'react';
import axios from '../config/index'; // Adjust this import path as needed

import { useNavigate } from 'react-router-dom';


function UpdateUserPassword(){
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // for smoothly scrolling
        });
    };


    
    const navigate = useNavigate(); // Hook to navigate programmatically

    useEffect(() => {
        const fetchSessionData = async () => {
            try {
                const response = await axios.get('/session-student');
                if (response.data && response.data.valid) {
                    return 0;
                } else {
                    // If the session data is not valid, navigate the user to "/"
                    navigate('/');
                }
            } catch (error) {
                console.error('Error fetching session data:', error);
                setErrorMessage('An error occurred fetching session data.');
                
                navigate('/'); // Navigate on error as well
            }
        };

        fetchSessionData();
    }, []); 



    

    const [formData, setFormData] = useState({
        current_password: '',
        new_password: '',
        confirm_password: ''
    });
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [studentRegNo, setStudentRegNo] = useState('');

    // Fetch the student registration number from session data on component mount
    useEffect(() => {
        const fetchSessionData = async () => {
            try {
                const response = await axios.get('/session-student');
                if (response.data && response.data.valid) {
                    setStudentRegNo(response.data.studentRegNo);
                    scrollToTop();

                } else {
                    setErrorMessage('Failed to retrieve student data. Please log in again.');
                    scrollToTop();

                }
            } catch (error) {
                setErrorMessage('An error occurred while fetching session data.');
                scrollToTop();

            }
        };

        fetchSessionData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.new_password !== formData.confirm_password) {
            setErrorMessage('New password and confirm password do not match.');
            scrollToTop();

            return;
        }

        try {
            const response = await axios.post('/update-student-password', {
                student_reg_no: studentRegNo, // Assuming you store studentRegNo as the student's ID
                current_password: formData.current_password,
                new_password: formData.new_password
            });

            if (response.data.message) {
                setSuccessMessage(response.data.message);
                // Optionally, clear the form here
            } else {
                setErrorMessage('Failed to update the password.');
                scrollToTop();

            }
        } catch (error) {
            setErrorMessage(error.response.data.message || 'An error occurred during the password update.');
        }
    };



    return(
        <>
            <section className='form-inputs'>
                <div className='container-fluid'>
                    <div className='section-header'>
                        <h1> STUDENT CHANGE PASSWORD </h1>
                    </div>

                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                        {successMessage && <div className="success-message">{successMessage}</div>}



                    <div className='form-inputs-content'>
                    <form onSubmit={handleSubmit}>
                            <h1> Change Password </h1>


                            <div className='input'>
                            <label> Current Password </label>
                            <input placeholder='Password' type='password' required name='current_password' value={formData.current_password} onChange={handleChange} />
                        </div>

                        <div className='input'>
                            <label> New Password </label>
                            <input placeholder='Password' type='password' required name='new_password' value={formData.new_password} onChange={handleChange} />
                        </div>

                        <div className='input'>
                            <label> Confirm Password </label>
                            <input placeholder='Password' type='password' required name='confirm_password' value={formData.confirm_password} onChange={handleChange} />
                        </div>


                            <button type='submit'> Update </button>
                        </form>
                    </div>

                </div>
            </section>
        </>
    )
}

export default UpdateUserPassword;