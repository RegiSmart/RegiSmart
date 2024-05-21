import  './css/pagesinputs.css';
import { Link as RouterLink } from 'react-router-dom';
import UserImg from './images/users/user.webp';
import React, { useState } from 'react';

function StudentProfile(){


    const [imageSrc, setImageSrc] = useState(UserImg);

    // Handler for file input change event
    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];

            // Create a URL for the uploaded file
            const imageUrl = URL.createObjectURL(file);
            setImageSrc(imageUrl);
        }
    };



    return(
        <>
            <section className='form-inputs'>
                <div className='container-fluid'>
                    <div className='section-header'>
                        <h1> STUDENT PROFILE </h1>
                    </div>

                    <div className='form-inputs-content'>
                        <form action='' method=''>
                            <h1> Update Student Profile </h1>


                            <div className='input'>
                                <label> Student Name </label>
                                <input defaultValue="Anuj Kumar" type='text' required name='student_name' />
                            </div>

                            <div className='input'>
                                <label> Student Reg No </label>
                                <input defaultValue="1080528" readOnly type='text' required name='student_reg_no' />
                            </div>

                            
                            <div className='input'>
                                <label> Pincode </label>
                                <input defaultValue="35885" readOnly type='number' required name='student_reg_no' />
                            </div>

                            <div className='student-photo input'>
                                <label> Student Photo </label>
                                <img src={imageSrc} alt="user" />
                            </div>


                            
                            <div className='input'>
                                <label> Upload New Photo </label>
                                <input type='file' required name='student_photo' onChange={handleImageChange} />
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