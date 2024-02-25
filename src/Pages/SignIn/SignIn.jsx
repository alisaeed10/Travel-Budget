import './signIn.css';
import { Link, useNavigate } from 'react-router-dom';
import { isValidEmail, isValidPassword } from '../../utils/Validation';
import { GoogleOAuth } from '../../Components/GoogleOAuth';
import { useEffect } from 'react';
import { Nav } from '../../Components/Nav';
import { changeOfPath } from '../../utils/Validation';
import { useState } from 'react';

const serverUrl = import.meta.env.VITE_SERVER_URL;

export function SignIn() {
    const navigate = useNavigate();
    const [userEmail, setUserEmail] =  ('');
    const [userPassword, setUserPassword] = useState('');

    // this will handle the sign in of the account and will also handle any errors that may occur
    useEffect(() => {
        const path = window.location.pathname;
        changeOfPath(path);
    }, []);

    const handleSignIn = () => {
        const message = document.querySelector('.signIn-inputs').children[0];
        const email = document.querySelector('.signIn-inputs').children[1];
        const password = document.querySelector('.signIn-inputs').children[2];
        var status ="";
        if (isValidEmail(email.value) && (isValidPassword(password.value))) {
            message.style.display = 'none';
            email.style.border = '2px solid black';
            password.style.border = '2px solid black';
            // setUserEmail(email.value);
            // setUserPassword(password.value);

            const  fetchSignIn = async () => {
                try {
                    const passwordEncoded = encodeURIComponent(password.value);
                    const res = await fetch(`${serverUrl}/login?email=${email.value}&password=${passwordEncoded}`,{
                        method: 'GET'
                    });
                    const data = await res.json();
                    if (data.user === 'User Not Found') {
                        message.style.display = 'block';
                        message.innerHTML = 'User Not Found';
                        email.style.border = '2px solid red';
                        password.style.border = '2px solid red';
                        password.style.animation = 'shake 0.5s';
                        email.style.animation = 'shake 0.5s';
                        setTimeout(() => {
                            email.style.animation = '';
                            password.style.animation = '';
                        }, 600);
                    }
                    else {
                        navigate('/');
                    }
                }catch(err){    
                    console.log("Error getting email: ", err);
                }
            }
            fetchSignIn();
        } 
        else if (!isValidEmail(email.value) && (isValidPassword(password.value))) {
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
        <div className='signIn'>
            <Nav/>
            <div className='signIn-container'>
                <p className='signIn-title'>Login In</p>
                <div className='signIn-inputs'>
                    <p className='error-checking'>Invalid Email or Password</p>
                    <input className='signIn-input' type='text' placeholder='Email' pattern='[^\s@]+@[^\s@]+\.[^\s@]'/>
                    <input className='signIn-input' type='password' placeholder='Password' pattern='[a-zA-Z#$%0-9]'/>
                </div>  
                <div className='signIn-forgot-password'>
                    {/* <Link className='signIn-forgot-password-button' to='/forgotPassword'>Forgot Password?</Link> */}
                </div> 
                <div className='signIn-button'>
                    <button className='signIn-button-button' onClick={() => handleSignIn()}>Sign In</button>
                </div>
                <div className='signIn-google-OAuth'>
                    <GoogleOAuth  />
                </div>
            </div>
            <div className='signIn-create-account'>
                <p className='signIn-create-account-title'>Dont have an account?</p>
                <Link to='/createAccount'>create account</Link>
            </div>
        </div>
    );
}
