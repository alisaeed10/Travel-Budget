import './SignIn.css';
import { Link } from 'react-router-dom';
import { isvaildEmail, isvaildPassword } from '../../utils/Validation';

export function SignIn() {

    // this will handle the sign in of the account and will also handle any errors that may occur
    const handleSignIn = () => {
        const message = document.querySelector('.signin-inputs').children[0];
        const email = document.querySelector('.signin-inputs').children[1];
        const password = document.querySelector('.signin-inputs').children[2];
        
        if (isvaildEmail(email.value) && (isvaildPassword(password.value))) {
            message.style.display = 'none';
            email.style.border = '2px solid black';
            password.style.border = '2px solid black';
        } 
        else if (!isvaildEmail(email.value) && (isvaildPassword(password.value))) {
            message.style.display = 'block';
            message.innerHTML = 'Invalid Email';
            password.style.border = '2px solid black';
            email.style.border = '2px solid red';
            email.style.animation = 'shake 0.5s';
            setTimeout(() => {
                email.style.animation = '';
            }, 600);

        }else{
            message.style.display = 'block';
            message.innerHTML = 'Invalid Email and Password';
            email.style.border = '2px solid red';
            password.style.border = '2px solid red';
            password.style.animation = 'shake 0.5s';
            email.style.animation = 'shake 0.5s';
            setTimeout(() => {
                email.style.animation = '';
                password.style.animation = '';
            }, 600);

        }
        
    }
    return (
        <div className='signin'>
            <div className='signin-container'>
            <p className='signin-title'>Login In</p>
            <div className='signin-inputs'>
                <p className='error-checking'>Invalid Email or Password</p>
                <input className='signin-input' type='text' placeholder='Email' pattern='[^\s@]+@[^\s@]+\.[^\s@]'/>
                <input className='signin-input' type='password' placeholder='Password' pattern='[a-zA-Z#$%0-9]'/>
             </div>  
             <div className='signin-forgot-password'>
                    <a className='signin-forgot-password-button'>Forgot Password?</a>
            </div> 
             <div className='signin-button'>
                <button className='signin-button-button' onClick={() => handleSignIn()}>Sign In</button>
            </div>
             <div className='signin-google-OAuth'>
                <button className='signin-google-OAuth-button'>Sign In with Google <img className='googleLogo' src='../../../googleLogo.png'></img></button>
            </div>
            <div className='signin-apple-OAuth'>
                <button className='signin-apple-OAuth-button'>Sign In with Apple <img className='appleLogo' src='../../../appleLogo.png'></img></button>
            </div>
            
            </div>
            <div className='signin-create-account'>
                <p className='signin-create-account-title'>Dont have an account?</p>
                <Link to='/createaccount'>create account</Link>
            </div>
        </div>
    );
}
