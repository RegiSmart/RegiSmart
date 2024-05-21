import  './css/pagesinputs.css';
import axios from '../config/index';
import React, { useEffect, useRef, useState } from 'react';

function AddSession(){

    const [sessionName, setSessionName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        try {
            const response = await axios.post('/add-course-session', {
                session: sessionName
            });
            
            if (response.data.message) {
                setSuccessMessage('Session added successfully');
                setSessionName(''); // Clear the input field after successful submission
                setErrorMessage(''); // Clear any existing error messages
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                // Set the error message from the response if it exists
                setErrorMessage(error.response.data.message);
            } else {
                // Set a generic error message if the response does not contain one
                setErrorMessage('An error occurred. Please try again later.');
            }
        }
    };




    
    
    const [Sessions, setSessions] = useState([]);

    const getAllSessions = () => {
        axios.post("AllItems", {
            table: "session",
        })
        .then((res) => {
            if (res.data) {
                setSessions(res.data);
                getAllSessions();
            } else {
                console.log("Error happened");
            }
        })
        .catch((err) => console.log(err));
    };






        
    const deleteItem = (id) => {
        axios
        .delete(`delete-item/${id}`, {
            data: {
            table: 'session',
            },
        })
        .then((response) => {
            if (response.data.message === 'Item deleted successfully') {
                getAllSessions();
            } else {
            console.error('Failed to delete result:', response.data.message);
            }
        })
        .catch((error) => {
            console.error('Error deleting result:', error);
        });
    };




    useEffect(() => {
        getAllSessions();

    }, []);

    return(
        <>
            <section className='form-inputs'>
                <div className='container-fluid'>
                    <div className='section-header'>
                        <h1> ADD SESSION </h1>
                    </div>


                    {successMessage && <div className="success-message">{successMessage}</div>} {/* Display the error message */}

                    {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Display the error message */}



                    <div className='form-inputs-content'>
                    <form onSubmit={handleSubmit}>
                            <h1> Session </h1>

                            <div className='input'>
                                <label> Create Session </label>
                                <input 
                                    placeholder='Session' 
                                    type='text' 
                                    required 
                                    name='session_name' 
                                    value={sessionName} 
                                    onChange={e => setSessionName(e.target.value)} 
                                />
                            </div>

                            <button type='submit'> Submit </button>
                        </form>
                    </div>

                    <div className='all-data-table'>
                        <h1> Manage Session </h1>

                        <div className='table-content'>
                        <table>
                                <tr>
                                    <th>
                                        <h1> # </h1>
                                    </th>

                                    <th>
                                        <h1> Session </h1>
                                    </th>

                                    <th>
                                        <h1> Creation Date </h1>
                                    </th>

                                    <th>
                                        <h1> Action </h1>
                                    </th>

                                </tr>


                                
                                {Sessions && Sessions.length > 0 ? (
                                    Sessions.map((session) => (
                                    
                                    <tr>
                                    <td> 
                                        <h2> {session.id} </h2> 
                                    </td>
                                    <td>
                                        <h2>  {session.session} </h2>
                                    </td>
                                    <td> 
                                        <h2>  {session.creation_date} </h2>
                                    </td>

                                    <td> 
                                    <button className='delete-record delete' onClick={() => deleteItem(session.id)}>
                                            <i class="las la-trash"></i> Delete 
                                        </button>
                                    </td>
                                </tr>
                                ))
                                ) : (
                                <div>No Sessions available.</div> 
                                )}  

                        </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AddSession;