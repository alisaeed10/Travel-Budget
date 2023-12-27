
import { Link } from 'react-router-dom';
import './CreateAccount.css';

export function CreateAccount() {
    
    return (
        <div className='create-account'>
            <div className='create-account-container'>
            <p className='create-account-title'>Create Account</p>
            <div className='create-account-inputs'>
                <div className='create-account-inputs-name'>
                    <input className='create-account-input-name' type='text' placeholder='First Name' />
                    <input className='create-account-input-name' type='text' placeholder='Last Name' />
                </div>
                <input className='create-account-input' type='text' placeholder='Email' />
                <input className='create-account-input' type='password' placeholder='Password' />
                <input className='create-account-input' type='password' placeholder='Confirm Password' />
             </div>  
             <div className='create-account-button'>
                <button className='create-account-button-button'>Create Account</button>
            </div>
            </div>
            <div className='create-account-sign-in'>
                <p className='create-account-sign-in-title'>Already have an account?</p>
                <Link to='/signin'>sign in</Link>
            </div>
        </div>
    );
}