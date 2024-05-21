import './css/navbar.css';
import Logo from './images/logo.png';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useEffect,useRef  } from "react";
import $ from 'jquery';
import axios from '../config/index'; // Adjust this path as needed

function NavbarAdmin(){






    const navigate = useNavigate();

    useEffect(() => {
        const fetchSessionData = async () => {
            try {
                const response = await axios.get('/session-admin');
                if (response.data && response.data.valid) {
                    return 0;
                } else {
                    // If the session data is not valid, navigate the user to "/"
                    navigate('/login-as-admin');
                }
            } catch (error) {
                console.error('Error fetching session data:', error);
                navigate('/'); // Navigate on error as well
            }
        };

        fetchSessionData();
    }, []); 

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

            const response = await axios.get('/logoutAdmin');
            if (response.data.logout) {

                // Redirect to homepage or login page after successful logout
                navigate('/login-as-admin');
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

                            <RouterLink to="/admin-home-page">
                                <img src={Logo} alt="logo" />
                            </RouterLink>

                        </div>

                        <button id="open-nav"> <i className="las la-bars"></i> </button>
                        <ul className="nav-eles">
                        <button id="close-nav"> <i className="las la-times"></i> </button>

                            <li>
                                <RouterLink to="/admin-home-page">
                                    home
                                </RouterLink>
                            </li>

                            <li>
                                <RouterLink to="/add-session">
                                    SESSION
                                </RouterLink>
                            </li>

                            <li>
                                <RouterLink to="/add-semester">
                                    SEMESTER
                                </RouterLink>
                            </li>

                            <li>
                                <RouterLink to="/add-department">
                                    Department
                                </RouterLink>
                            </li>

                            <li>
                                <RouterLink to="/add-course">
                                    course
                                </RouterLink>
                            </li>

                            <li>
                                <RouterLink to="/add-student">
                                    registration
                                </RouterLink>
                            </li>


                            <li>
                                <RouterLink to="/manage-students">
                                    Manage Students
                                </RouterLink>
                            </li>


                            <li>
                                <RouterLink to="/enroll-history">
                                    Enroll History
                                </RouterLink>
                            </li>


                            <li>
                                <RouterLink to="/student-logs">
                                    Student Logs
                                </RouterLink>
                            </li>


                            <li>
                                <RouterLink to="/admin-account">
                                    My Account
                                </RouterLink>
                            </li>


                            <li>
                                <RouterLink to="/add-news">
                                    News
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

export default NavbarAdmin;