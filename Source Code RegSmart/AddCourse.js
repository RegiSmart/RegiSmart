import  './css/pagesinputs.css';
import { Link as RouterLink } from 'react-router-dom';


function AddCourse(){
    return(
        <>
            <section className='form-inputs'>
                <div className='container-fluid'>
                    <div className='section-header'>
                        <h1> Manage Courses </h1>
                    </div>

                    <div className='form-inputs-content'>
                        <form action='' method=''>
                            <h1> Course </h1>


                            <div className='input'>
                                <label> Course Code</label>
                                <input placeholder='Course Code' type='text' required name='course_code' />
                            </div>

                            
                            <div className='input'>
                                <label> Course Name</label>
                                <input placeholder='Course Name' type='text' required name='course_name' />
                            </div>


                            <div className='input'>
                                <label> Course Unit</label>
                                <input placeholder='Course Unit' type='text' required name='course_unit' />
                            </div>

                            <div className='input'>
                                <label> Seat Limit</label>
                                <input placeholder='Seat Limit' type='number' required name='seat_limit' />
                            </div>

                            <button type='submit'> Submit </button>
                        </form>
                    </div>

                    <div className='all-data-table'>
                        <h1> Manage Department </h1>

                        <div className='table-content'>
                        <table>
                                <tr>
                                    <th>
                                        <h1> # </h1>
                                    </th>

                                    <th>
                                        <h1> Course Code </h1>
                                    </th>

                                    <th>
                                        <h1> Course Name </h1>
                                    </th>

                                    <th>
                                        <h1> Course Unit </h1>
                                    </th>

                                    <th>
                                        <h1> Seat Limit </h1>
                                    </th>

                                    <th>
                                        <h1> Creation Date</h1>
                                    </th>

                                    <th>
                                        <h1> Action </h1>
                                    </th>

                                </tr>
                            <tr>
                                <td> 
                                    <h2> 1 </h2> 
                                </td>
                                <td>
                                    <h2> PHP 01 </h2>
                                </td>


                                <td>
                                    <h2> Core PHP  </h2>
                                </td>

                                <td>
                                    <h2> 1.5 </h2>
                                </td>

                                <td>
                                    <h2>10 </h2>
                                </td>

                                <td> 
                                    <h2> 2017-02-09 23:46:51 </h2>
                                </td>

                                <td> 
                                    <div>
                                    <RouterLink to="/update-course?id=">
                                        <i class="las la-edit"></i>
                                        Edit
                                    </RouterLink>

                                    <button className='delete-record'>
                                        <i class="las la-trash"></i> Delete 
                                    </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                            <td> 
                                    <h2> 1 </h2> 
                                </td>
                                <td>
                                    <h2> PHP 01 </h2>
                                </td>


                                <td>
                                    <h2> Core PHP  </h2>
                                </td>

                                <td>
                                    <h2> 1.5 </h2>
                                </td>

                                <td>
                                    <h2>10 </h2>
                                </td>

                                <td> 
                                    <h2> 2017-02-09 23:46:51 </h2>
                                </td>

                                <td> 
                                    <div>
                                    <RouterLink to="/update-course?id=">
                                        <i class="las la-edit"></i>
                                        Edit
                                    </RouterLink>

                                    <button className='delete-record'>
                                        <i class="las la-trash"></i> Delete 
                                    </button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                            <td> 
                                    <h2> 1 </h2> 
                                </td>
                                <td>
                                    <h2> PHP 01 </h2>
                                </td>


                                <td>
                                    <h2> Core PHP  </h2>
                                </td>

                                <td>
                                    <h2> 1.5 </h2>
                                </td>

                                <td>
                                    <h2>10 </h2>
                                </td>

                                <td> 
                                    <h2> 2017-02-09 23:46:51 </h2>
                                </td>

                                <td> 
                                    <div>
                                    <RouterLink to="/update-course?id=">
                                            <i class="las la-edit"></i>
                                            Edit
                                        </RouterLink>

                                        <button className='delete-record'>
                                            <i class="las la-trash"></i> Delete 
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AddCourse;