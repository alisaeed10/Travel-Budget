
import { Link } from 'react-router-dom';
import './CreateAccount.css';
import { isvaildEmail, isvaildPassword } from '../../../utils/Validation';

function isvalidName(name){ 
    
    return /^[a-zA-Z]+$/.test(name) || name === '';
}

export function CreateAccount() {


    // this will handle the creation of the account and will also handle any errors that may occur
    const handleAccount = () => {
        const firstName = document.querySelector('.create-account-inputs-name').children[0];
        const lastName = document.querySelector('.create-account-inputs-name').children[1];
        const email = document.querySelector('.create-account-inputs').children[3];
        const password = document.querySelector('.create-account-inputs').children[4];
        const confirmPassword = document.querySelector('.create-account-inputs').children[5];
        if(firstName.value.length === 0){
            document.querySelector('.error-name-checking').style.display = 'block';
            firstName.style.border = '2px solid red';
            firstName.style.animation = 'shake 0.5s';
            setTimeout(() => {
                firstName.style.animation = '';
            }, 600);
        }
        else if(!isvalidName(firstName.value) && !isvalidName(lastName.value)){
            document.querySelector('.error-name-checking').style.display = 'block';
            firstName.style.border = '2px solid red';
            lastName.style.border = '2px solid red';
            firstName.style.animation = 'shake 0.5s';
            lastName.style.animation = 'shake 0.5s';
            setTimeout(() => {
                firstName.style.animation = '';
                lastName.style.animation = '';
            }, 600);
            lastName.value = '';
            firstName.value = '';
        }
        else if(!isvalidName(firstName.value) && (isvalidName(lastName.value))){
            document.querySelector('.error-name-checking').style.display = 'block';
            firstName.style.border = '2px solid red';
            firstName.style.animation = 'shake 0.5s';
            setTimeout(() => {
                firstName.style.animation = '';
            }, 600);
            lastName.style.border = '2px solid black';
            firstName.value = '';
        }
        else if((!isvalidName(lastName.value)) && isvalidName(firstName.value) ){
            document.querySelector('.error-name-checking').style.display = 'block';
            lastName.style.border = '2px solid red';
            lastName.style.animation = 'shake 0.5s';
            lastName.value = '';
            setTimeout(() => {
                lastName.style.animation = '';
            }, 600);
            firstName.style.border = '2px solid black';
        }
        else if(!isvaildPassword(password.value) || password.value !== confirmPassword.value){
            document.querySelector('.error-checking2').style.display = 'block';
            password.style.border = '2px solid red';
            confirmPassword.style.border = '2px solid red';
            password.style.animation = 'shake 0.5s';
            confirmPassword.style.animation = 'shake 0.5s';
            setTimeout(() => {
                password.style.animation = '';
                confirmPassword.style.animation = '';
            }, 600);
            password.value = '';
            confirmPassword.value = '';
        }
        else if(!isvaildEmail(email.value)){
            document.querySelector('.error-checking2').style.display = 'block';
            email.style.border = '2px solid red';
            email.style.animation = 'shake 0.5s';
            setTimeout(() => {
                email.style.animation = '';
            }, 600);
            email.value = '';
            firstName.style.border = '2px solid black';
            lastName.style.border = '2px solid black';
            password.style.border = '2px solid black';
            confirmPassword.style.border = '2px solid black';
        }
        else{
            document.querySelector('.error-checking2').style.display = 'none';
            document.querySelector('.error-name-checking').style.display = 'none';
            firstName.style.border = '2px solid black';
            lastName.style.border = '2px solid black';
            email.style.border = '2px solid black';
            password.style.border = '2px solid black';
            confirmPassword.style.border = '2px solid black';
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