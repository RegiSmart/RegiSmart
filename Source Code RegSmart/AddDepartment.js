import  './css/pagesinputs.css';

function AddDepartment(){
    return(
        <>
            <section className='form-inputs'>
                <div className='container-fluid'>
                    <div className='section-header'>
                        <h1> DEPARTMENT </h1>
                    </div>

                    <div className='form-inputs-content'>
                        <form action='' method=''>
                            <h1> Department </h1>


                            <div className='input'>
                                <label> Add Department </label>
                                <input placeholder='department' type='text' required name='department_name' />
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
                                        <h1> Department </h1>
                                    </th>

                                    <th>
                                        <h1> Creation Date </h1>
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
                                    <h2> Account </h2>
                                </td>
                                <td> 
                                    <h2> 2017-02-09 23:46:51 </h2>
                                </td>

                                <td> 
                                    <button className='delete-record'>
                                        <i class="las la-trash"></i> Delete 
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td> 
                                    <h2> 2 </h2> 
                                </td>
                                <td>
                                    <h2> HR </h2>
                                </td>
                                <td> 
                                    <h2> 2017-02-09 23:46:51 </h2>
                                </td>

                                <td> 
                                    <button className='delete-record'>
                                        <i class="las la-trash"></i> Delete 
                                    </button>
                                </td>
                            </tr>

                            <tr>
                                <td> 
                                    <h2> 3 </h2> 
                                </td>
                                <td>
                                    <h2> Admin </h2>
                                </td>
                                <td> 
                                    <h2> 2017-02-09 23:46:51 </h2>
                                </td>

                                <td> 
                                    <button className='delete-record'>
                                        <i class="las la-trash"></i> Delete 
                                    </button>
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

export default AddDepartment;