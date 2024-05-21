import './css/pagesinputs.css';

function AdminAccount(){
    return(
        <>
            <section className='form-inputs'>
                <div className='container-fluid'>
                    <div className='section-header'>
                        <h1> Admin Change Password </h1>
                    </div>

                    <div className='form-inputs-content'>
                        <form action='' method=''>
                            <h1> Change Password </h1>


                            <div className='input'>
                                <label> Current Password </label>
                                <input placeholder='Password' type='password' required name='currentpassword' />
                            </div>

                            <div className='input'>
                                <label> New Password </label>
                                <input placeholder='Password' type='password' required name='newpassword' />
                            </div>

                            <div className='input'>
                                <label> Confirm Password </label>
                                <input placeholder='Password' type='password' required name='confirmpassword' />
                            </div>

                            <button type='submit'> Submit </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AdminAccount;