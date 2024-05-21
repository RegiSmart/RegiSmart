import  './css/pagesinputs.css';
import axios from '../config/index';
import React, { useEffect, useRef, useState } from 'react';

function AddNews(){

    
        
    const [newsTitle, setnewsTitle] = useState('');
    const [newsDescription, setnewsDescription] = useState('');

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        try {
            const response = await axios.post('/add-news', {
                news_title: newsTitle,
                news_description: newsDescription

            });
            
            if (response.data.message) {
                setSuccessMessage('News added successfully');
                setnewsTitle(''); // Clear the input field after successful submission
                setnewsDescription(''); // Clear the input field after successful submission

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




    
    
    const [News, setNews] = useState([]);

    const getAllNews = () => {
        axios.post("AllItems", {
            table: "news",
        })
        .then((res) => {
            if (res.data) {
                setNews(res.data);
                getAllNews();
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
            table: 'news',
            },
        })
        .then((response) => {
            if (response.data.message === 'Item deleted successfully') {
                getAllNews();
            } else {
            console.error('Failed to delete result:', response.data.message);
            }
        })
        .catch((error) => {
            console.error('Error deleting result:', error);
        });
    };




    useEffect(() => {
        getAllNews();

    }, []);




    return(
        <>
            <section className='form-inputs'>
                <div className='container-fluid'>
                    <div className='section-header'>
                        <h1> News </h1>
                    </div>


                    
                    
                    
                    {successMessage && <div className="success-message">{successMessage}</div>} {/* Display the error message */}

                    {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Display the error message */}



                    <div className='form-inputs-content'>
                    <form onSubmit={handleSubmit}>
                            <h1> News </h1>


                            <div className='input'>
                                <label> News Title </label>

                                <input 
                                    placeholder='News Title' 
                                    type='text' 
                                    required 
                                    name='news_title' 
                                    value={newsTitle} 
                                    onChange={e => setnewsTitle(e.target.value)} 
                                />
                            </div>

                            <div className='input'>
                                <label> News Description </label>
                                <textarea   onChange={e => setnewsDescription(e.target.value)}  defaultValue={newsDescription} placeholder='News Description' type='text' required name='news_description'>

                                </textarea>
                            </div>

                            <button type='submit'> Submit </button>
                        </form>
                    </div>

                    <div className='all-data-table'>
                        <h1> Manage News </h1>

                        <div className='table-content'>
                        <table>

                        
                                <tr>
                                    <th>
                                        <h1> # </h1>
                                    </th>

                                    <th>
                                        <h1> News Title </h1>
                                    </th>

                                    <th>
                                        <h1> News Description </h1>
                                    </th>

                                    <th>
                                        <h1> Creation Date </h1>
                                    </th>

                                    <th>
                                        <h1> Action </h1>
                                    </th>

                                </tr>



                                {News && News.length > 0 ? (
                                    News.map((newsdata) => (
                                    
                                    
                                    <tr>
                                            <td> 
                                                <h2> {newsdata.id} </h2> 
                                            </td>
                                            <td>
                                                <h2>{newsdata.news_title} </h2>
                                            </td>

                                            <td> 
                                                <h2>{newsdata.news_description}</h2>
                                            </td>


                                            <td> 
                                                <h2>{newsdata.posting_date}</h2>
                                            </td>

                                            <td> 
                                            <button className='delete-record delete' onClick={() => deleteItem(newsdata.id)}>
                                            <i class="las la-trash"></i> Delete 
                                        </button>
                                            </td>
                                        </tr>
                                ))
                                ) : (
                                <div>No News available.</div> 
                                )}  




                        </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AddNews;