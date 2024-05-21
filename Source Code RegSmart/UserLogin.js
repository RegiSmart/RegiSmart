import React, { useState } from 'react';
import './css/adminlogin.css';
import './css/userlogin.css';
import Logo from './images/logo.png';
import { Link as RouterLink } from 'react-router-dom';

function UserLogin() {
const [showPinCheck, setShowPinCheck] = useState(false);
const [showLoginInputs, setShowLoginInputs] = useState(true);
// State to manage the visibility of the password
const [passwordShown, setPasswordShown] = useState(false);

const handleLoginClick = () => {
    setShowLoginInputs(false);
    setShowPinCheck(true);
};

// Toggle the visibility of the password
const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
};

return (
    <div className="login-admin">
    <div className="container-fluid">
        <div className="login-content">
        <div className='err-msg'>
            <h2> Wrong username or password </h2>
        </div>

        <div className="logo">
            <img src={Logo} alt="logo"/>
            <div>
            <h1> Online Course Registration  <i className="las la-user-plus"></i> </h1>  
            <h2> User Login </h2>
            </div>
        </div>

        <div className="login-form">
            <form action="/user-home-page" method=""> 
            {showLoginInputs && (
                <>

                <div className='news-content'>
                    <h3> Latest News / Updates </h3>

                    <div>
                        <h4> New Course Started C# - 2022-02-11 23:05:10 </h4>
                    </div>
                </div>


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

                <button className='check-pin' type="button" onClick={handleLoginClick}> Log in </button>
                </>
            )}

            {showPinCheck && (
                <div className="user-check-pin">
                <div className="input">
                    <label> Pincode </label>
                    <input type="number" required name="pincode" />
                </div>

                <button type="submit"> Check <i className="las la-lock"></i></button>
                </div>
            )}

            <RouterLink to="/login-as-admin"> Login as admin </RouterLink>
            </form>
        </div>
        </div>
    </div>
    </div>
);
}

export default UserLogin;
