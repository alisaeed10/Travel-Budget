import './ForgotPassword.css'
import { isValidEmail } from '../../../utils/Validation';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Nav } from '../../../Components/Nav';
import { changeOfPath } from '../../../utils/Validation';
import { useEffect } from 'react';


export function ForgotPassword(){

    const navigate = useNavigate();
    useEffect(() => {
        const path = window.location.pathname;
        changeOfPath(path);
    }, []);
    const handleForgotPassword = () => {
        const message = document.querySelector('.forgotPassword-inputs').children[0];
        const email = document.querySelector('.forgotPassword-inputs').children[1];
        const prompting = document.querySelector('.prompt');
        
        if(email.value === '' || !isValidEmail(email.value)){
            console.log('invalid email');
            message.style.display = 'block';
            message.innerHTML = 'Invalid Email';
            email.style.border = '2px solid red';
            email.style.animation = 'shake 0.5s';
            prompting.style.display = 'none';
            setTimeout(() => {
                email.style.animation = '';
            }, 600);
        }
        else{
            message.style.display = 'none';
            email.style.border = '2px solid black';
            email.style.animation = '';
            prompting.style.display = 'block';
            navigate('/');
        }
    }
    return(
        <div className='forgotPassword'>
            <Nav/>
            <div className='forgotPassword-container'>
                <p className='forgotPassword-title'>Password Reset</p>
                <p className='prompt'>Enter email to reset password</p>
                <div className='forgotPassword-inputs'>
                    <p className='error-checking'>Invalid Email</p>
                    <input className='forgotPassword-input' type='text' placeholder='Email'/>
                </div>
                <div className='forgotPassword-button'>
                    <button className='forgotPassword-button-button' onClick={() => handleForgotPassword()}>Reset Password</button>
                </div>
            </div>
            <div className='create-account-sign-in'>
                <p className='create-account-sign-in-title'>Already have an account?</p>
                <Link to='/signIn'>sign in</Link>
            </div>
        </div>
    )
}