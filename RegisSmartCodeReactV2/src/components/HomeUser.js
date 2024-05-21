import "./css/homepage.css";
import { Link as RouterLink } from "react-router-dom";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import { useNavigate } from 'react-router-dom';


import axios from '../config/index';
import React, { useEffect, useRef, useState } from 'react';




function HomeUser(){


    
    const [News, setNews] = useState([]);

    const getAllNews = () => {
        axios.post("AllItems", {
            table: "news",
        })
        .then((res) => {
            if (res.data) {
                setNews(res.data);
            } else {
                console.log("Error happened");
            }
        })
        .catch((err) => console.log(err));
    };


    useEffect(() => {
        getAllNews();

    }, []);


    const navigate = useNavigate(); // Hook to navigate programmatically

    useEffect(() => {
        const fetchSessionData = async () => {
            try {
                const response = await axios.get('/session-student');
                if (response.data && response.data.valid) {
                    setStudentRegNoData(response.data.studentRegNo);
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


    const [studentRegNoData, setStudentRegNoData] = useState('');
    const [UserEnrolls, setUserEnrolls] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [enrollsWithCourses, setEnrollsWithCourses] = useState([]);

    // Fetch session data
    useEffect(() => {
        const fetchSessionData = async () => {
            try {
                const response = await axios.get('/session-student');
                if (response.data && response.data.valid) {
                    setStudentRegNoData(response.data.studentRegNo);
                } else {
                    setErrorMessage('Session data not found. Please log in again.');
                }
            } catch (error) {
                console.error('Error fetching session data:', error);
                setErrorMessage('An error occurred fetching session data.');
            }
        };

        fetchSessionData();
    }, []);

    // Fetch all user enrolls when studentRegNoData is set
    useEffect(() => {
        if (studentRegNoData) {
            getAllUserEnrolls();
        }
    }, [studentRegNoData]);

    const getAllUserEnrolls = async () => {
        try {
            const res = await axios.post("/AllUserEnrolls", {
                table: "course_enrolls",
                studentId: studentRegNoData,
            });
            if (res.data) {
                setUserEnrolls(res.data);
            } else {
                console.log("No enrollments found.");
            }
        } catch (err) {
            setErrorMessage('Failed to fetch user enrollments.');
        }
    };

    const fetchCourseData = async (CourseId) => {
        try {
            const response = await axios.post('/get-item', { itemId: CourseId, table: "course" });
            if (response.data.id) {
                return { success: true, data: response.data };
            } else {
                console.log('Course not found or error fetching course data.');
                return { success: false };
            }
        } catch (error) {
            console.error('Error fetching course data:', error);
            return { success: false };
        }
    };

    useEffect(() => {
        const fetchAndSetCourseNames = async () => {
            if (UserEnrolls && UserEnrolls.length > 0) {

                const enrichedEnrolls = await Promise.all(UserEnrolls.map(async (enroll) => {
                    const result = await fetchCourseData(enroll.id);
                    if (result.success) {
                        return { ...enroll, course_name: result.data.course_name };
                    } else {
                        return { ...enroll, course_name: 'Unknown Course' };
                    }
                }));
                setEnrollsWithCourses(enrichedEnrolls);
            }
        };

        fetchAndSetCourseNames();
    }, [UserEnrolls]);


    
        // Function to print a specific record
        const printRecord = (recordId) => {
            const printContent = document.querySelector(`#record-${recordId}`);
            const originalContents = document.body.innerHTML;
            document.body.innerHTML = printContent.innerHTML;
            window.print();
            document.body.innerHTML = originalContents;
        }
    
    
        // Function to download a specific record as PDF
        const downloadPDFRecord = (recordId) => {
            const input = document.querySelector(`#record-${recordId}`);
    
            document.querySelectorAll('.print-record, .download-as-pdf-record').forEach(button => {
                button.style.visibility = 'hidden';
                });
            
                document.querySelectorAll('.print-all-table, .download-as-pdf-table-content').forEach(button => {
                    button.style.visibility = 'hidden';
                    });
    
                    
            html2canvas(input).then((canvas) => {
                // Show buttons again after capture
                document.querySelectorAll('.print-record, .download-as-pdf-record').forEach(button => {
                    button.style.visibility = 'visible';
                });
            
                
                document.querySelectorAll('.print-all-table, .download-as-pdf-table-content').forEach(button => {
                    button.style.visibility = 'visible';
                    });
                
            
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF({
                    orientation: 'landscape',
                });
                const margin = 10; // mm
                let pdfWidth = pdf.internal.pageSize.getWidth() - 2 * margin;
                let pdfHeight = pdf.internal.pageSize.getHeight() - 2 * margin;
                
                // Calculate the image dimensions to maintain aspect ratio
                const imgProps = pdf.getImageProperties(imgData);
                let imgHeight = (imgProps.height * pdfWidth) / imgProps.width;
                
                // If the image height is too large for the page, scale it down
                if (imgHeight > pdfHeight) {
                    imgHeight = pdfHeight; // Fit the image to the page based on height
                    pdfWidth = (imgProps.width * imgHeight) / imgProps.height; // Recalculate width to maintain aspect ratio
                }
            
                // Add the image with margins
                pdf.addImage(imgData, 'PNG', margin, margin, pdfWidth, imgHeight);
                pdf.save("Student-Enroll.pdf");
                });
                }
    
    
    
    // Print the table content
    const printTable = () => {
        window.print();
    }
    // Download the table content as PDF
    const downloadPDF = () => {
        const input = document.querySelector(`.table-content table`);
    
            document.querySelectorAll('.print-record, .download-as-pdf-record').forEach(button => {
                button.style.visibility = 'hidden';
                });
            
                document.querySelectorAll('.print-all-table, .download-as-pdf-table-content').forEach(button => {
                    button.style.visibility = 'hidden';
                    });
    
                    
            html2canvas(input).then((canvas) => {
                // Show buttons again after capture
                document.querySelectorAll('.print-record, .download-as-pdf-record').forEach(button => {
                    button.style.visibility = 'visible';
                });
            
                
                document.querySelectorAll('.print-all-table, .download-as-pdf-table-content').forEach(button => {
                    button.style.visibility = 'visible';
                    });
                
            
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF({
                    orientation: 'landscape',
                });
                const margin = 10; // mm
                let pdfWidth = pdf.internal.pageSize.getWidth() - 2 * margin;
                let pdfHeight = pdf.internal.pageSize.getHeight() - 2 * margin;
                
                // Calculate the image dimensions to maintain aspect ratio
                const imgProps = pdf.getImageProperties(imgData);
                let imgHeight = (imgProps.height * pdfWidth) / imgProps.width;
                
                // If the image height is too large for the page, scale it down
                if (imgHeight > pdfHeight) {
                    imgHeight = pdfHeight; // Fit the image to the page based on height
                    pdfWidth = (imgProps.width * imgHeight) / imgProps.height; // Recalculate width to maintain aspect ratio
                }
            
                // Add the image with margins
                pdf.addImage(imgData, 'PNG', margin, margin, pdfWidth, imgHeight);
                pdf.save("Student-Enroll.pdf");
                });
                }
    




    return(
        <>
        <section className="home-page">
            <div className="container-fluid">
                <div className="row">

                    <div className="col-12">
                                            
                        <div className='news-content'>
                            <h3> Latest News / Updates </h3>

                            <div>
                                
                            {News && News.length > 0 ? (
                                News.map((newdata) => (
                                    <h4>{newdata.news_title} - {newdata.news_description} - {newdata.posting_date} </h4>
                                ))
                                ) : (
                                <div>No News available.</div> 
                                )}  




                                
                            </div>
                        </div>

                    </div>



                    

                </div>
            </div>
        </section>




        <section className='form-inputs'>
                <div className='container-fluid'>

                    <div className='all-data-table'>
                        <h1> Enroll History </h1>



                        <div className='table-content'>

                            <div>
                                <button className='print-all-table' onClick={printTable}>
                                <i className="las la-print"></i> Print
                                </button>

                                <button className='download-as-pdf-table-content' onClick={downloadPDF}>
                                <i className="las la-file-pdf"></i> PDF
                                </button>

                            </div>
                        <table>
                                <tr>
                                    <th>
                                        <h1> # </h1>
                                    </th>

                                    <th>
                                        <h1> Student Reg no </h1>
                                    </th>

                                    <th>
                                        <h1> Student Pincode </h1>
                                    </th>


                                    <th>
                                        <h1> Course Name </h1>
                                    </th>

                                    <th>
                                        <h1> Session</h1>
                                    </th>

                                    <th>
                                        <h1> Semester</h1>
                                    </th>

                                    <th>
                                        <h1> Enrollment Date</h1>
                                    </th>

                                    <th>
                                        <h1> Action </h1>
                                    </th>

                                </tr>





            {enrollsWithCourses && enrollsWithCourses.length > 0 ? (
                enrollsWithCourses.map((enroll) => (

                                    <tr className='record' id={`record-${enroll.id}`} key={enroll.id}>
                                        <td> 
                                            <h2> {enroll.id} </h2> 
                                        </td>
                                        <td>
                                            <h2> {enroll.student_reg_no} </h2>
                                        </td>

                                        <td>
                                            <h2> {enroll.pincode} </h2>
                                        </td>


                                        <td>
                                            <h2>  {enroll.course_name}  </h2>
                                        </td>



                                        <td>
                                            <h2> {enroll.session}  </h2>
                                        </td>

                                        <td>
                                            <h2> {enroll.semester}  </h2>
                                        </td>

                                        <td> 
                                            <h2> {enroll.enroll_date} </h2>
                                        </td>

                                        <td> 
                                            <div>
                                            <button className='print-record' onClick={() => printRecord(enroll.id)}>
                                                    <i className="las la-print"></i> Print 
                                                </button>

                                                <button className='download-as-pdf-record' onClick={() => downloadPDFRecord(enroll.id)}>
                                                    <i className="las la-file-pdf"></i> PDF 
                                                </button>

                                            </div>
                                        </td>
                                    </tr>
                                ))
                                ) : (
                                <div>No Enrolls available.</div> 
                                )}  



                            


                        </table>
                        </div>
                    </div>
                </div>
            </section>


</>
    )
}


export default HomeUser;