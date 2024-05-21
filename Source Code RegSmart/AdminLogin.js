import './css/adminlogin.css';
import Logo from './images/logo.png';
import { Link as RouterLink } from 'react-router-dom';
import React, { useState } from 'react';


function AdminLogin(){

    const [passwordShown, setPasswordShown] = useState(false);

    
        // Toggle the visibility of the password
        const togglePasswordVisibility = () => {
            setPasswordShown(!passwordShown);
        };


    return(
        <div className="login-admin">
            <div className="container-fluid">
                <div className="login-content">

                    <div className='err-msg'>
                        <h2> Wrong username or password </h2>
                    </div>



                    <div className="logo">
                        <img src={Logo} alt="logo"/>
                        <div>
                            <h1> Online Course Registration  <i class="las la-user-plus"></i> </h1>  
                            <h2> Admin Login </h2>
                        </div>
                    </div>

                    <div className="login-form">
                        <form action="/admin-home-page" method=""> 
                                <div className="input">
                                    <label> Username </label>
                                    <input type="text" required name="username" />
                                </div>

                                <div className="input">
                                    <label> Password </label>
                                    <input type={passwordShown ? "text" : "password"} required name="password" />
                                    <button type="button" className="show-password" onClick={togglePasswordVisibility}> 
                                    {passwordShown ? <i className="las la-eye-slash"></i> : <i className="las la-eye active"></i>}
                                    </button>
                                </div>



                                <button type="submit"> Log in as admin </button>

                                <RouterLink to="/"> Login as user  </RouterLink>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default AdminLogin;