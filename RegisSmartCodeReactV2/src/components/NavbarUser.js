import React, { useEffect } from 'react';
import './css/navbar.css';
import Logo from './images/logo.png';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import axios from '../config/index'; // Adjust this path as needed
import $ from 'jquery';



function NavbarUser(){
    const navigate = useNavigate();

    useEffect(() => {
        $("#open-nav").on("click", function() {
            $(".nav-eles").slideDown(400);
            $("nav").addClass("active");

            $(".nav-eles").css({display: "flex"});
        });

        $("#close-nav").on("click", function() {
            $(".nav-eles").slideUp(400);
            $("nav").removeClass("active");

        });

        if ($(window).width() < 950) {
            $(".nav-eles li").on("click", function() {
                $(".nav-eles").slideUp(400);
                $("nav").removeClass("active");

            });
        }
    
    })

    const handleLogout = async () => {
        try {

            const response = await axios.get('/logoutStudent');
            if (response.data.logout) {

                // Redirect to homepage or login page after successful logout
                navigate('/');
            }
        } catch (error) {
            console.error('Logout failed:', error);
            // Handle logout error (optional)
        }
    };



    return(
        <>
            <nav>
                <div className='container-fluid'>
                    <div className='nav-content'>
                        
                        <div className='logo'>
                            <RouterLink to="/user-home-page">
                                <img src={Logo} alt="logo" />
                            </RouterLink>
                        </div>

                        <button id="open-nav"> <i className="las la-bars"></i> </button>
                        <ul className="nav-eles">
                        <button id="close-nav"> <i className="las la-times"></i> </button>

                            <li>
                                <RouterLink to="/user-home-page">
                                    Home
                                </RouterLink>
                            </li>



                            <li>
                                <RouterLink to="/enroll-for-course">
                                    Enroll for Course
                                </RouterLink>
                            </li>

                            <li>
                                <RouterLink to="/enroll-user-history">
                                    Enroll History
                                </RouterLink>
                            </li>

                            <li>
                                <RouterLink to="/user-profile">
                                    My Profile
                                </RouterLink>
                            </li>

                            <li>
                                <RouterLink to="/change-user-password">
                                    Chnage Password
                                </RouterLink>
                            </li>

                            <li onClick={handleLogout}>
                                    Logout
                            </li>



                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavbarUser;