import React, { useState,useEffect } from 'react';
import axios from '../config/index';
import './css/adminlogin.css';
import Logo from './images/logo.png';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

function AdminLogin(){



    

    useEffect(() => {
        const fetchSessionData = async () => {
            try {
                const response = await axios.get('/session-student');
                if (response.data && response.data.valid) {
                    navigate('/admin-home-page');

                } 
            } catch (error) {
                console.error('Error fetching session data:', error);
                navigate('/'); // Navigate on error as well
            }
        };

        fetchSessionData();
    }, []); 



    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const [passwordShown, setPasswordShown] = useState(false);
    const navigate = useNavigate(); // useNavigate hook for navigation after login

    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/admin-login', credentials);
            if (response.data.message) {
                // Assuming you have a route to navigate to upon successful login
                navigate('/admin-home-page');
            }
        } catch (error) {
            if (error.response) {
                // Displaying error message from the server response
                setError(error.response.data.message);
            } else {
                setError('An error occurred. Please try again later.');
            }
        }
    };


        

    return(
        <div className="login-admin">
            <div className="container-fluid">
                <div className="login-content">

                {error && <div className='err-msg'><h2>{error}</h2></div>}




                    <div className="logo">
                        <img src={Logo} alt="logo"/>
                        <div>
                            <h1> Online Course Registration  <i class="las la-user-plus"></i> </h1>  
                            <h2> Admin Login </h2>
                        </div>
                    </div>

                    <div className="login-form">
                    <form onSubmit={handleSubmit}>
                    <div className="input">
                            <label> Username </label>
                            <input type="text" required name="username" value={credentials.username} onChange={handleChange} />
                        </div>

                        <div className="input">
                            <label> Password </label>
                            <input type={passwordShown ? "text" : "password"} required name="password" value={credentials.password} onChange={handleChange} />
                            <button type="button" className="show-password" onClick={togglePasswordVisibility}>
                                {passwordShown ? <i className="las la-eye-slash"></i> : <i className="las la-eye active"></i>}
                            </button>
                        </div>



                                <button type="submit">Log in as admin</button>

                                <RouterLink to="/"> Login as user  </RouterLink>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default AdminLogin;