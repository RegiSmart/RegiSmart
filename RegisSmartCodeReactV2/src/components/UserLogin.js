import React, { useState , useEffect} from 'react';
import './css/adminlogin.css';
import './css/userlogin.css';
import Logo from './images/logo.png';
import { Link as RouterLink } from 'react-router-dom';
import axios from '../config/index';
import { useNavigate } from 'react-router-dom';

function UserLogin() {


    
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
                    navigate('/user-home-page');

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


    const [errorMessage, setErrorMessage] = useState('');
    const [regNumber, setRegNumber] = useState('');
    const [password, setPassword] = useState('');
    const [pincode, setPincode] = useState('');
    const [showPinCheck, setShowPinCheck] = useState(false);
    const [showLoginInputs, setShowLoginInputs] = useState(true);
    const [passwordShown, setPasswordShown] = useState(false);
    const [isLoggingIn, setIsLoggingIn] = useState(false); // State to track login process

    const handleLoginClick = async () => {
        // Here, you'll typically make an API request to your backend to authenticate the user
        setIsLoggingIn(true); // Start login process
        setShowLoginInputs(false);
        setShowPinCheck(true);

    };
    

// Toggle the visibility of the password
const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
};

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // for smoothly scrolling
    });
};



const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setIsLoggingIn(true); // Start the login process

    const loginData = {
        reg_number: regNumber,
        password: password,
        pincode: showPinCheck ? pincode : undefined
    };


    try {
        // Use Axios to send a POST request
        console.log(loginData);

        const response = await axios.post('/login', loginData);
        
        // Check if response has data indicating a successful login
        if (response.status === 200) {
            // Handle successful login here (e.g., redirect to user home page)
                navigate('/user-home-page');
        } else {
            // If the login wasn't successful, show the error message
            setErrorMessage(response.data.message);
            setIsLoggingIn(false); 


        }
    } catch (error) {
        // Handle errors here, such as displaying a generic error message
        const message = error.response && error.response.data.message ? error.response.data.message : 'An error occurred. Please try again later.';
        setErrorMessage(message);
        setIsLoggingIn(false); 

    }

    setIsLoggingIn(false); // End the login process regardless of outcome
};



return (
    <div className="login-admin">
    <div className="container-fluid">
        <div className="login-content">
            {errorMessage && (
                <div className='err-msg'>
                    <h2>{errorMessage}</h2>
                </div>
            )}

        <div className="logo">
            <img src={Logo} alt="logo"/>
            <div>
            <h1> Online Course Registration  <i className="las la-user-plus"></i> </h1>  
            <h2> User Login </h2>
            </div>
        </div>

        <div className="login-form">
            <form onSubmit={handleLogin}> 
            {showLoginInputs && (
                <>

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


                <div className="input">
                    <label> Registration Number </label>
                    <input onChange={e => setRegNumber(e.target.value)} type="text" required name="reg_number" />
                </div>

                <div className="input">
                    <label> Password </label>
                    <input  onChange={e => setPassword(e.target.value)} type={passwordShown ? "text" : "password"} required name="password" />
                    <button type="button" className="show-password" onClick={togglePasswordVisibility}> 
                    {passwordShown ? <i className="las la-eye-slash"></i> : <i className="las la-eye active"></i>}
                    </button>
                </div>

                <button type="button" onClick={handleLoginClick}>
                    Next
                </button>
                </>
            )}

            {showPinCheck && (
                <div className="user-check-pin">
                <div className="input">
                    <label> Pincode </label>
                    <input  onChange={e => setPincode(e.target.value)} type="number" required name="pincode" />
                </div>

                <button type="submit"> {isLoggingIn ? 'Log in' : 'Logging in...'} <i className="las la-lock"></i></button>
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
