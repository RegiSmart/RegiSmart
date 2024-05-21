import  './css/pagesinputs.css';
import { Link as RouterLink } from 'react-router-dom';
import UserImg from './images/users/user.webp';



import axios from '../config/index';
import React, { useEffect, useRef, useState } from 'react';

import { useNavigate } from 'react-router-dom';



function CourseEnroll(){

    
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
                scrollToTop();

                navigate('/'); // Navigate on error as well
            }
        };

        fetchSessionData();
    }, []); 


    const initialFormData = {
        student_reg_no: '',
        student_name: '',
        pincode: '',
        photo: '',
        session: '',
        department: '',
        level: '',
        semester: '',
        course: '',
    };

    const [studentData, setStudentData] = useState(initialFormData);
    const [errorMessage, setErrorMessage] = useState('');
    const [enrollMessage, setEnrollMessage] = useState('');
    const [studentRegNoData, setStudentRegNoData] = useState('');

    // Fetch session student registration number
    useEffect(() => {
        const fetchSessionData = async () => {
            try {
                const response = await axios.get('/session-student');
                if (response.data && response.data.valid) {
                    setStudentRegNoData(response.data.studentRegNo);
                    // Instead of setting a separate state, you could directly call fetchStudentData here
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

    // Fetch student data once studentRegNoData is set
    useEffect(() => {
        const fetchStudentData = async () => {
            if (!studentRegNoData) return; // Ensure studentRegNoData is not empty

            try {
                const response = await axios.post('/get-student', { itemId: studentRegNoData });
                if (response.data) {
                    setStudentData({
                        ...initialFormData, // Reset form to ensure no stale data
                        student_reg_no: response.data.student_reg_no,
                        student_name: response.data.student_name,
                        pincode: response.data.pincode,
                        student_photo: response.data.student_photo,
                    });
                } else {
                    setErrorMessage('No student data found. Please log in again.');
                }
            } catch (error) {
                console.error('Error fetching student data:', error);
                setErrorMessage('An error occurred while fetching student data.');
            }
        };

        fetchStudentData();
    }, [studentRegNoData]); // Dependency array ensures useEffect runs when studentRegNoData updates

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudentData({ ...studentData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setEnrollMessage('');

        try {
            const response = await axios.post('/add-course-enroll-student', studentData);
            if (response.data.message) {
                setEnrollMessage('Enrolled successfully.');
                scrollToTop();
                setStudentData(initialFormData); // Clear form after successful enrollment
            } else {
                setErrorMessage('Failed to enroll in the course.');
                scrollToTop();

            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                setErrorMessage(error.response.data.message);
                scrollToTop();

            } else {
                setErrorMessage('An error occurred during enrollment. Please try again later.');
                scrollToTop();

            }
        }
    };








    
    
    
    const [Sessions, setSessions] = useState([]);
    const [Levels, setLevels] = useState([]);
    const [Semesters, setSemesters] = useState([]);
    const [Courses, setCourses] = useState([]);
    const [Departments, setDepartments] = useState([]);

    const getAllSessions = () => {
        axios.post("AllItems", {
            table: "session",
        })
        .then((res) => {
            if (res.data) {
                setSessions(res.data);

            } else {
                console.log("Error happened");
            }
        })
        .catch((err) => console.log(err));
    };



    
    const getAllDepartments = () => {
        axios.post("AllItems", {
            table: "department",
        })
        .then((res) => {
            if (res.data) {
                setDepartments(res.data);

            } else {
                console.log("Error happened");
            }
        })
        .catch((err) => console.log(err));
    };




    const getAllLevels = () => {
        axios.post("AllItems", {
            table: "level",
        })
        .then((res) => {
            if (res.data) {
                setLevels(res.data);
            } else {
                console.log("Error happened");
            }
        })
        .catch((err) => console.log(err));
    };


    const getAllSemesters = () => {
        axios.post("AllItems", {
            table: "semester",
        })
        .then((res) => {
            if (res.data) {
                setSemesters(res.data);
            } else {
                console.log("Error happened");
            }
        })
        .catch((err) => console.log(err));
    };



    const getAllCourses = () => {
        axios.post("AllItems", {
            table: "course",
        })
        .then((res) => {
            if (res.data) {
                setCourses(res.data);
            } else {
                console.log("Error happened");
            }
        })
        .catch((err) => console.log(err));
    };

    useEffect(() => {
        getAllSessions();
        getAllLevels();
        getAllSemesters();
        getAllCourses();
        getAllDepartments();

    }, []);



    

    return(
        <>
            <section className='form-inputs'>
                <div className='container-fluid'>
                    <div className='section-header'>
                        <h1> COURSE ENROLL </h1>
                    </div>

                    
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                    {enrollMessage && <div className="success-message">{enrollMessage}</div>}


                    <div className='form-inputs-content'>
                    <form onSubmit={handleSubmit}>
                            <h1> Course Enroll </h1>


                            <div className='input'>
                                <label> Student Name </label>
                                <input defaultValue={studentData.student_name} readOnly type='text' name='student_name' />
                            </div>

                            <div className='input'>
                                <label> Student Reg No </label>
                                <input value={studentData.student_reg_no} readOnly type='text' name='student_reg_no' />
                            </div>

                            <div className='input'>
                                <label> Pincode </label>
                                <input value={studentData.pincode} readOnly type='number' name='pincode' />
                            </div>

                            <div className='student-photo input'>
                                <label> Student Photo </label>
                                <img src={`./uploads/${studentData.student_photo}`} alt="Student" />
                            </div>

                            
                            <div className='input'>
                                <label> Session </label>

                                <select name='session' required value={studentData.session} onChange={handleChange}>
                                    
                                    <option value="" > Select Session </option>

                                    
                                    {Sessions && Sessions.length > 0 ? (
                                    Sessions.map((session) => (
                                        <option key={session.id} value={session.session} >  {session.session} </option>
                                    ))
                                    ) : (<></>)}  


                                </select>
                            </div>



                            
                            <div className='input'>
                                <label> Department </label>

                                <select name='department' required value={studentData.department} onChange={handleChange}>
                                    
                                    <option value="" > Select Department </option>

                                    
                                    {Departments && Departments.length > 0 ? (
                                    Departments.map((department) => (
                                        <option key={department.id} value={department.department} >  {department.department} </option>
                                    ))
                                    ) : (<></>)}  


                                </select>
                            </div>


                            <div className='input'>
                                <label> Level </label>
                                <select name='level' required value={studentData.level} onChange={handleChange} >
                                    <option value="" > Select Level </option>

                                    <option value="Level 1" >  Level 1 </option>
                                    <option value="Level 2" > Level 2</option>
                                    <option value="Level 3" > Level 3 </option>
                                    <option value="Level 4" > Level 4 </option>
                                    <option value="Level 5" > Level 5 </option>

                                </select>
                            </div>

                            <div className='input'>
                                <label> Semester </label>
                                <select name='semester' required value={studentData.semester} onChange={handleChange} >
                                    <option value="" >Select Semester </option>

                                    {Semesters && Semesters.length > 0 ? (
                                    Semesters.map((semester) => (
                                        <option key={semester.id} value={semester.semester} >  {semester.semester} </option>
                                    ))
                                    ) : (<></>)} 
                                </select>
                            </div>


                            
                            <div className='input'>
                                <label> Course </label>
                                <select name='course' required value={studentData.course} onChange={handleChange} >
                                    <option value="" > Seelct Course </option>
                                    
                                    {Courses && Courses.length > 0 ? (
                                    Courses.map((course) => (
                                        <option key={course.id} value={course.id} >  {course.course_name} </option>
                                    ))
                                    ) : (<></>)} 

                                </select>
                            </div>


                            <button type='submit'> Enroll </button>
                        </form>
                    </div>

                </div>
            </section>
        </>
    )
}

export default CourseEnroll;