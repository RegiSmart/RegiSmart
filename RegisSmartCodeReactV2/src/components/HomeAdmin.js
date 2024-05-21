import "./css/homepage.css";
import { Link as RouterLink } from "react-router-dom";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


import axios from '../config/index';
import React, { useEffect, useRef, useState } from 'react';




function HomeAdmin(){

    
    const [CoursesCount, setCoursesCount] = useState(0);
    const [StudentsCount, setStudentsCount] = useState(0);
    const [EnrollsCount, setEnrollsCount] = useState(0);
    const [NewsCount, setNewsCount] = useState(0);



    

    const getCoursesCount = () => {
        axios.post('get-item-count', {
            table: 'course',
        })
        .then((res) => {
            if (res.data) {
                setCoursesCount(res.data.totalCount);
            } else {
                console.log("Error happened");
            }
        })
        .catch((err) => console.log(err));
    };


    

    const getStudentsCount = () => {
        axios.post('get-item-count', {
            table: 'student',
        })
        .then((res) => {
            if (res.data) {
                setStudentsCount(res.data.totalCount);
            } else {
                console.log("Error happened");
            }
        })
        .catch((err) => console.log(err));
    };


    

    const getEnrollsCount = () => {
        axios.post('get-item-count', {
            table: 'course_enrolls',
        })
        .then((res) => {
            if (res.data) {
                setEnrollsCount(res.data.totalCount);
            } else {
                console.log("Error happened");
            }
        })
        .catch((err) => console.log(err));
    };



    

    const getNewsCount = () => {
        axios.post('get-item-count', {
            table: 'news',
        })
        .then((res) => {
            if (res.data) {
                setNewsCount(res.data.totalCount);
            } else {
                console.log("Error happened");
            }
        })
        .catch((err) => console.log(err));
    };






    
    const [EnrollsData, setEnrollsData] = useState([]);

    const getAllEnrolls = () => {
        axios.post("AllItems", {
            table: "course_enrolls",
        })
        .then((res) => {
            if (res.data) {
                setEnrollsData(res.data);
            } else {
                console.log("Error happened");
            }
        })
        .catch((err) => console.log(err));
    };


    useEffect(() => {
        getAllEnrolls();
        getCoursesCount();
        getEnrollsCount();
        getNewsCount();
        getStudentsCount();


    }, []);





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
                    <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                        <RouterLink to="/add-course">
                            <div className="state">
                                
                                <div>
                                    <i class="las la-paste"></i>
                                    <h1> {CoursesCount}  </h1>
                                </div>
                                <h2> Courses </h2>
                            </div>
                        </RouterLink>
                    </div>


                    <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                        <RouterLink to="/manage-students">
                            <div className="state">
                                
                                <div>
                                    <i class="las la-users"></i>
                                    <h1> {StudentsCount}  </h1>
                                </div>
                                <h2>  Students </h2>
                            </div>
                        </RouterLink>
                    </div>


                    <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                        <RouterLink to="/manage-students">
                            <div className="state">
                                
                                <div>
                                    <i class="las la-external-link-alt"></i>
                                    <h1> {EnrollsCount}  </h1>
                                </div>
                                <h2>  Enrolls </h2>
                            </div>
                        </RouterLink>
                    </div>

                    
                    <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                        <RouterLink to="/manage-students">
                            <div className="state">
                                
                                <div>
                                    <i class="las la-newspaper"></i>
                                    <h1> {NewsCount}  </h1>
                                </div>
                                <h2>  News </h2>
                            </div>
                        </RouterLink>
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
                                        <h1> Student Name </h1>
                                    </th>

                                    <th>
                                        <h1> Student Reg no </h1>
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



                                {EnrollsData && EnrollsData.length > 0 ? (
                                EnrollsData.map((enroll) => (
                                    <tr className='record' id={`record-${enroll.id}`} key={enroll.id}>
                                    <td> 
                                        <h2> {enroll.id} </h2> 
                                    </td>
                                    <td>
                                        <h2> {enroll.student_reg_no}  </h2>
                                    </td>
    
    
                                    <td>
                                        <h2>  {enroll.pincode} </h2>
                                    </td>
    
                                    <td>
                                        <h2>  {enroll.course} </h2>
                                    </td>
    
                                    <td>
                                        <h2>  {enroll.session}  </h2>
                                    </td>
    
                                    <td>
                                        <h2>  {enroll.semester}  </h2>
                                    </td>
    
                                    <td> 
                                        <h2>  {enroll.enroll_date} </h2>
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


export default HomeAdmin;