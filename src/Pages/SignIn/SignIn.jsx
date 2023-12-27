import './SignIn.css';
import { Link } from 'react-router-dom';




export function SignIn() {
    return (
        <div className='signin'>
            <div className='signin-container'>
            <p className='signin-title'>Login In</p>
            <div className='signin-inputs'>
                <input className='signin-input' type='text' placeholder='Email' />
                <input className='signin-input' type='password' placeholder='Password' />
             </div>  
             <div className='signin-forgot-password'>
                    <a className='signin-forgot-password-button'>Forgot Password?</a>
            </div> 
             <div className='signin-button'>
                <button className='signin-button-button'>Sign In</button>
            </div>
             <div className='signin-google-OAuth'>
                <button className='signin-google-OAuth-button'>Sign In with Google <img className='googleLogo' src='../../../public/googleLogo.png'></img></button>
            </div>
            <div className='signin-apple-OAuth'>
                <button className='signin-apple-OAuth-button'>Sign In with Apple <img className='appleLogo' src='../../../public/appleLogo.png'></img></button>
            </div>
            
            </div>
            <div className='signin-create-account'>
                <p className='signin-create-account-title'>Don't have an account?</p>
                <Link to='/createaccount'>create account</Link>
            </div>
        </div>
    );
}
