import  './css/pagesinputs.css';
import { Link as RouterLink } from 'react-router-dom';
import axios from '../config/index';
import React, { useState, useEffect } from 'react';
import { useLocation,useParams } from 'react-router-dom'; // Import useParams hook


function UpdateStudent(){


    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const studentRegNo = queryParams.get('id');


    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const [studentData, setStudentData] = useState({
        student_name: '',
        student_reg_no: '',
        password: ''
    });

    useEffect(() => {
        const fetchStudentData = async () => {
            try {
                const response = await axios.post('/get-student', { itemId: studentRegNo });

                console.log(studentRegNo);
                if (response.data.student_reg_no) {
                    setStudentData({ ...response.data, password: '' }); // Do not preload password
                } else {
                    setErrorMessage('Student not found or error fetching student data.');
                }
            } catch (error) {
                console.error('Error fetching student data:', error);
                setErrorMessage('Error fetching student data');
            }
        };

        fetchStudentData();
    }, [studentRegNo]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        const updateData = {
            student_reg_no: studentData.student_reg_no,
            student_name: studentData.student_name,
        };

        if (studentData.password.trim()) {
            updateData.password = studentData.password;
        }


        try {
            const response = await axios.post('/update-user', updateData);
            if (response.data.message) {
                setSuccessMessage('Student updated successfully');
            } else {
                setErrorMessage('Error updating student');
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
                        <h1> Update Student </h1>
                    </div>

                    {successMessage && <div className="success-message">{successMessage}</div>}

                    {errorMessage && <div className="error-message">{errorMessage}</div>}

                    <div className='form-inputs-content'>
                        <form onSubmit={handleUpdate}>
                            <h1> Update Student </h1>

                            <div className='input'>
                                <label> Student Reg No </label>
                                <input readOnly value={studentData.student_reg_no} placeholder='Student Reg No' type='text' required name='student_reg_no' />
                            </div>

                            <div className='input'>
                                <label> Student Name </label>
                                <input value={studentData.student_name} onChange={e => setStudentData({ ...studentData, student_name: e.target.value })} placeholder='Student Name' type='text' required name='student_name' />
                            </div>

                            <div className='input'>
                                <label> Password </label>
                                <input value={studentData.password} onChange={e => setStudentData({ ...studentData, password: e.target.value })} placeholder='New Password' type='password' name='password' />
                            </div>

                            <button type='submit'> Update </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UpdateStudent;