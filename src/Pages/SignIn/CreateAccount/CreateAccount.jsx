
import { Link } from 'react-router-dom';
import './CreateAccount.css';
import { isvaildEmail, isvaildPassword } from '../../../utils/Validation';

function isvalidName(name){ 
    return /^[nulla-zA-Z]+$/.test(name);
}

export function CreateAccount() {

    const handleAccount = () => {
        const firstName = document.querySelector('.create-account-inputs-name').children[0].value;
        const lastName = document.querySelector('.create-account-inputs-name').children[1].value;
        const email = document.querySelector('.create-account-inputs').children[3].value;
        const password = document.querySelector('.create-account-inputs').children[4].value;
        const confirmPassword = document.querySelector('.create-account-inputs').children[5].value;
        if(firstName.length === 0){
            document.querySelector('.error-name-checking').style.display = 'block';
            document.querySelector('.create-account-inputs-name').children[0].style.border = '2px solid red';
        }
        if(!isvalidName(firstName) && !isvalidName(lastName)){
            document.querySelector('.error-name-checking').style.display = 'block';
            document.querySelector('.create-account-inputs-name').children[0].style.border = '2px solid red';
            document.querySelector('.create-account-inputs-name').children[1].style.border = '2px solid red';
        }
        if(!isvalidName(firstName) && isvalidName(lastName)){
            document.querySelector('.error-name-checking').style.display = 'block';
            document.querySelector('.create-account-inputs-name').children[0].style.border = '2px solid red';
            document.querySelector('.create-account-inputs-name').children[1].style.border = '2px solid black';
        }
        if(!isvalidName(lastName) && isvalidName(firstName) ){
            document.querySelector('.error-name-checking').style.display = 'block';
            document.querySelector('.create-account-inputs-name').children[1].style.border = '2px solid red';
            document.querySelector('.create-account-inputs-name').children[0].style.border = '2px solid black';
        }
        if(isvaildEmail(email) && (isvaildPassword(password) && password.length >= 8) && (password === confirmPassword) && firstName.length !== 0){
            document.querySelector('.error-checking2').style.display = 'none';
            document.querySelector('.error-name-checking').style.display = 'none';
            document.querySelector('.create-account-inputs-name').children[0].style.border = '2px solid black';
            document.querySelector('.create-account-inputs').children[3].style.border = '2px solid black';
            document.querySelector('.create-account-inputs').children[4].style.border = '2px solid black';
            document.querySelector('.create-account-inputs').children[5].style.border = '2px solid black';
        }
        
    }

    return (
        <div className='create-account'>
            <div className='create-account-container'>
            <p className='create-account-title'>Create Account</p>
            <div className='create-account-inputs'>
                <p className='error-checking2'>Invalid Email or Password</p>
                <p className='error-name-checking'>Invalid Name</p>
                <div className='create-account-inputs-name'>
                    <input className='create-account-input-name' type='text' placeholder='First Name' />
                    <input className='create-account-input-name' type='text' placeholder='Last Name' />
                </div>
                <input className='create-account-input' type='text' placeholder='Email' />
                <input className='create-account-input' type='password' placeholder='Password' />
                <input className='create-account-input' type='password' placeholder='Confirm Password' />
             </div>  
             <div className='create-account-button'>
                <button className='create-account-button-button' onClick={() => handleAccount()}>Create Account</button>
            </div>
            </div>
            <div className='create-account-sign-in'>
                <p className='create-account-sign-in-title'>Already have an account?</p>
                <Link to='/signin'>sign in</Link>
            </div>
        </div>
    );
}