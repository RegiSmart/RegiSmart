import  './css/pagesinputs.css';
import { Link as RouterLink } from 'react-router-dom';


function UpdateStudent(){
    return(
        <>
            <section className='form-inputs'>
                <div className='container-fluid'>
                    <div className='section-header'>
                        <h1> Update Student </h1>
                    </div>

                    <div className='form-inputs-content'>
                        <form action='' method=''>
                            <h1> Update Student </h1>


                            <div className='input'>
                                <label> Student Name </label>
                                <input defaultValue="Anuj Kumar" placeholder='Student Name' type='text' required name='student_name' />
                            </div>

                            
                            <div className='input'>
                                <label> Student Reg No </label>
                                <input defaultValue="10806121"  placeholder='Student Reg No' type='text' required name='student_reg_no' />
                            </div>


                            <div className='input'>
                                <label> Password</label>
                                <input  placeholder='New Password' type='text' required name='password' />
                            </div>

                            <button type='submit'> Update </button>
                        </form>
                    </div>

                </div>
            </section>
        </>
    )
}

export default UpdateStudent;