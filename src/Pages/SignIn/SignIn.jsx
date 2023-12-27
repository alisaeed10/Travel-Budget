import './SignIn.css';
import { Link } from 'react-router-dom';
import { isvaildEmail, isvaildPassword } from '../../utils/Validation';

export function SignIn() {
    const handleEmail = () => {
        const email = document.querySelector('.signin-inputs').children[1].value;
        const password = document.querySelector('.signin-inputs').children[2].value;
        if (isvaildEmail(email) && (isvaildPassword(password) && password.length >= 8)) {
            document.querySelector('.signin-inputs').children[0].style.display = 'none';
            document.querySelector('.signin-inputs').children[1].style.border = '2px solid black';
            document.querySelector('.signin-inputs').children[2].style.border = '2px solid black';
        } else if (!isvaildEmail(email) && (isvaildPassword(password) && password.length >= 8)) {
            document.querySelector('.signin-inputs').children[0].style.display = 'block';
            document.querySelector('.signin-inputs').children[0].innerHTML = 'Invalid Email';
            document.querySelector('.signin-inputs').children[1].style.border = '2px solid red';
        }else{
            document.querySelector('.signin-inputs').children[0].style.display = 'block';
            document.querySelector('.signin-inputs').children[1].style.border = '2px solid red';
            document.querySelector('.signin-inputs').children[2].style.border = '2px solid red';
        }
        
    }
    return (
        <div className='signin'>
            <div className='signin-container'>
            <p className='signin-title'>Login In</p>
            <div className='signin-inputs'>
                <p className='error-checking'>Invalid Email or Password</p>
                <input className='signin-input' type='text' placeholder='Email' />
                <input className='signin-input' type='password' placeholder='Password' />
             </div>  
             <div className='signin-forgot-password'>
                    <a className='signin-forgot-password-button'>Forgot Password?</a>
            </div> 
             <div className='signin-button'>
                <button className='signin-button-button' onClick={() => handleEmail()}>Sign In</button>
            </div>
             <div className='signin-google-OAuth'>
                <button className='signin-google-OAuth-button'>Sign In with Google <img className='googleLogo' src='../../../public/googleLogo.png'></img></button>
            </div>
            <div className='signin-apple-OAuth'>
                <button className='signin-apple-OAuth-button'>Sign In with Apple <img className='appleLogo' src='../../../public/appleLogo.png'></img></button>
            </div>
            
            </div>
            <div className='signin-create-account'>
                <p className='signin-create-account-title'>Dont have an account?</p>
                <Link to='/createaccount'>create account</Link>
            </div>
        </div>
    );
}
