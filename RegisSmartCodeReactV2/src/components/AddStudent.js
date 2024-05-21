import  './css/pagesinputs.css';
import axios from '../config/index';
import React, { useState } from 'react';

function AddStudent(){

    const [formData, setFormData] = useState({
        student_name: '',
        student_reg_no: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/add-student', formData);
            if (response.data.message) {
                // Successfully added student
                setSuccessMessage(response.data.message); // Or handle the success scenario in a more user-friendly way
                setFormData({ student_name: '', student_reg_no: '', password: '' }); // Reset form
                setError(''); // Clear any previous errors
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message);
            } else {
                setError('An error occurred. Please try again later.');
            }
        }
    };
    
    return(
        <>
        <section className='form-inputs'>
                <div className='container-fluid'>
                    <div className='section-header'>
                        <h1> STUDENT REGISTRATION </h1>
                    </div>
                    {successMessage && <div className="success-message">{successMessage}</div>} {/* Display error message */}


                    {error && <div className="error-message">{error}</div>} {/* Display error message */}

                    <div className='form-inputs-content'>
                        <form onSubmit={handleSubmit}>
                            <h1> Student Registration </h1>

                            <div className='input'>
                                <label> Student Name </label>
                                <input placeholder='Student Name' type='text' required name='student_name' value={formData.student_name} onChange={handleChange} />
                            </div>

                            <div className='input'>
                                <label> Student Reg No </label>
                                <input placeholder='Student Reg No' type='text' required name='student_reg_no' value={formData.student_reg_no} onChange={handleChange} />
                            </div>

                            <div className='input'>
                                <label> Password </label>
                                <input placeholder='Enter Password' type='password' required name='password' value={formData.password} onChange={handleChange} />
                            </div>

                            <button type='submit'> Submit </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AddStudent;