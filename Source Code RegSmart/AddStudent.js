import  './css/pagesinputs.css';

function AddStudent(){
    return(
        <>
            <section className='form-inputs'>
                <div className='container-fluid'>
                    <div className='section-header'>
                        <h1> STUDENT REGISTRATION </h1>
                    </div>

                    <div className='form-inputs-content'>
                        <form action='' method=''>
                            <h1> Student Registration </h1>


                            <div className='input'>
                                <label> Student Name </label>
                                <input placeholder='Student Name' type='text' required name='student_name' />
                            </div>

                            <div className='input'>
                                <label> Student Reg No </label>
                                <input placeholder='Student Reg No' type='text' required name='student_reg_no' />
                            </div>


                            
                            <div className='input'>
                                <label> Password </label>
                                <input placeholder='Enter Password' type='password' required name='password' />
                            </div>


                            <button type='submit'> Submit </button>
                        </form>
                    </div>

                </div>
            </section>
        </>
    )
}

export default AddStudent;