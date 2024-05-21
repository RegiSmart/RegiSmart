import './App.css';
import { Routes, Route } from "react-router-dom";



import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import AdminLogin from './components/AdminLogin';
import UserLogin from './components/UserLogin';
import NavbarAdmin from './components/NavbarAdmin';
import AdminAccount from './components/AdminAccount';
import AddSession from './components/AddSession';
import AddSemester from './components/AddSemester';
import AddDepartment from './components/AddDepartment';
import AddCourse from './components/AddCourse';
import UpdateCourse from './components/UpdateCourse';
import AddStudent from './components/AddStudent';
import AllStudents from './components/AllStudents';
import UpdateStudent from './components/UpdateStudent';
import EnrollHistory from './components/EnrollHistory';
import StudentLogs from './components/StudentLogs';
import AddNews from './components/AddNews';
import NavbarUser from './components/NavbarUser';
import UpdateUserPassword from './components/UpdateUserPassword';
import CourseEnroll from './components/CourseEnroll';
import EnrollUserHistory from './components/EnrollUserHistory';
import StudentProfile from './components/StudentProfile';
import HomeAdmin from './components/HomeAdmin';
import HomeUser from './components/HomeUser';


function App() {
    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
    }, [])
    
return (
    <div className="App">

            <Routes>

        
            <Route path="/" element={
                    <>
                        <UserLogin />
                    </>
                } />


            <Route path="/login-as-admin" element={
                    <>
                        <AdminLogin />
                    </>
                } />

                
            <Route path="/admin-account" element={
                    <>
                        <NavbarAdmin />
                        <AdminAccount />
                    </>
                } />


            
            <Route path="/add-session" element={
                    <>
                        <NavbarAdmin />
                        <AddSession />
                    </>
                } />


            <Route path="/add-semester" element={
                    <>
                        <NavbarAdmin />
                        <AddSemester />
                    </>
                } />



                <Route path="/add-department" element={
                    <>
                        <NavbarAdmin />
                        <AddDepartment />
                    </>
                } />


                
                <Route path="/add-course" element={
                    <>
                        <NavbarAdmin />
                        <AddCourse />
                    </>
                } />


                <Route path="/update-course" element={
                    <>
                        <NavbarAdmin />
                        <UpdateCourse />
                    </>
                } />

                <Route path="/add-student" element={
                    <>
                        <NavbarAdmin />
                        <AddStudent />
                    </>
                } />

                
                <Route path="/manage-students" element={
                    <>
                        <NavbarAdmin />
                        <AllStudents />
                    </>
                } />

                
                <Route path="/update-student" element={
                    <>
                        <NavbarAdmin />
                        <UpdateStudent />
                    </>
                } />


                
                <Route path="/enroll-history" element={
                    <>
                        <NavbarAdmin />
                        <EnrollHistory />
                    </>
                } />


            <Route path="/student-logs" element={
                    <>
                        <NavbarAdmin />
                        <StudentLogs />
                    </>
                } />


                
            <Route path="/add-news" element={
                    <>
                        <NavbarAdmin />
                        <AddNews />
                    </>
                } />


            <Route path="/admin-home-page" element={
                        <>
                            <NavbarAdmin />
                            <HomeAdmin />
                        </>
                    } />



            <Route path="/change-user-password" element={
                    <>
                        <NavbarUser />
                        <UpdateUserPassword />
                    </>
                } />



                <Route path="/enroll-for-course" element={
                    <>
                        <NavbarUser />
                        <CourseEnroll />
                    </>
                } />



                <Route path="/enroll-user-history" element={
                    <>
                        <NavbarUser />
                        <EnrollUserHistory />
                    </>
                } />


                <Route path="/user-profile" element={
                    <>
                        <NavbarUser />
                        <StudentProfile />
                    </>
                } />


                <Route path="/user-home-page" element={
                    <>
                        <NavbarUser />
                        <HomeUser />
                    </>
                } />









        </Routes>


        
    </div>
);
}

export default App;
