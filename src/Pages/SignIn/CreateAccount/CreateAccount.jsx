
import { Link, useNavigate } from 'react-router-dom';
import './CreateAccount.css';
import { isValidEmail, isValidPassword } from '../../../utils/Validation';
import { Nav } from '../../../Components/Nav';
import { useEffect,useState } from 'react';
import { changeOfPath } from '../../../utils/Validation'
const serverUrl = import.meta.env.VITE_SERVER_URL;


function isValidName(name){ 
    return /^[a-zA-Z]+$/.test(name) || name === '';
}

const createAccount = async (name, email, password, confirmPassword) => {
    try {
        console.log(name, email, password, confirmPassword);

        const res = await fetch(`${serverUrl}/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                confirm_password: confirmPassword
            })
        })
        const status = await res.json();
        console.log(status);
        return status.message;
    }
    catch (err) {
        return err;
    }
    
    // console.log(status.message)
}

export function CreateAccount() {
    const navigate = useNavigate();
    const [id, setId] = useState(0);

    // this will handle the creation of the account and will also handle any errors that may occur
    useEffect(() => {
        // used to update the top left button to the current page
        const path = window.location.pathname;
        changeOfPath(path);
    }, []);

    // function to handle the creation of the account
    const handleAccount = () => {
        // getting all the html tags to check if the user has entered the correct information
        const firstName = document.querySelector('.create-account-inputs-name').children[0];
        const lastName = document.querySelector('.create-account-inputs-name').children[1];
        const email = document.querySelector('.create-account-inputs').children[3];
        const password = document.querySelector('.create-account-inputs').children[4];
        const confirmPassword = document.querySelector('.create-account-inputs').children[5];
        // if user doesn't display a name then an error is displayed
        if(firstName.value.length === 0){
            document.querySelector('.error-name-checking').style.display = 'block';
            firstName.style.border = '2px solid red';
            firstName.style.animation = 'shake 0.5s';
            setTimeout(() => {
                firstName.style.animation = '';
            }, 600);
        }
        //if user doesn't enter a vaild name then an error is displayed
        else if(!isValidName(firstName.value) && !isValidName(lastName.value)){
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
        // if user doesn't enter a firstname but enters a last name then error occurs
        else if(!isValidName(firstName.value) && (isValidName(lastName.value))){
            document.querySelector('.error-name-checking').style.display = 'block';
            firstName.style.border = '2px solid red';
            firstName.style.animation = 'shake 0.5s';
            setTimeout(() => {
                firstName.style.animation = '';
            }, 600);
            lastName.style.border = '2px solid black';
            firstName.value = '';
        }
        // if user doesn't enter a last name but enters a first name then error occurs
        else if((!isValidName(lastName.value)) && isValidName(firstName.value) ){
            document.querySelector('.error-name-checking').style.display = 'block';
            lastName.style.border = '2px solid red';
            lastName.style.animation = 'shake 0.5s';
            lastName.value = '';
            setTimeout(() => {
                lastName.style.animation = '';
            }, 600);
            firstName.style.border = '2px solid black';
        }
        // if the password entered is not valid or the confirmed password doesn't match the password then an error occurs
        else if(!isValidPassword(password.value) || password.value !== confirmPassword.value){
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
        // if the email entered is not valid then an error occurs
        else if(!isValidEmail(email.value)){
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
        // if all the information entered is valid then the account is created
        else{
            document.querySelector('.error-checking2').style.display = 'none';
            document.querySelector('.error-name-checking').style.display = 'none';
            firstName.style.border = '2px solid black';
            lastName.style.border = '2px solid black';
            email.style.border = '2px solid black';
            password.style.border = '2px solid black';
            confirmPassword.style.border = '2px solid black';

            
            // making a Post request to the server to create the account
            const reponse = async () => {
                const message = await createAccount(firstName.value + ' ' + lastName.value, email.value, password.value, confirmPassword.value)
                if (message === 'Email already exists') {
                    document.querySelector('.error-checking2').style.display = 'block';
                    document.querySelector('.error-checking2').innerHTML = message;
                    email.style.border = '2px solid red';
                    email.style.animation = 'shake 0.5s';
                    password.style.border = '2px solid red';
                    confirmPassword.style.border = '2px solid red';
                    password.style.animation = 'shake 0.5s';
                    confirmPassword.style.animation = 'shake 0.5s';
                    setTimeout(() => {
                        email.style.animation = '';
                        password.style.animation = '';
                        confirmPassword.style.animation = '';
                    }, 600);
                    email.value = '';
                    password.value = '';
                    confirmPassword.value = '';
                }
                else {
                    navigate('/');
                }
            }
            reponse();
        }
        
    }

    return (
        <div className='create-account'>
            <Nav/>
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
                <Link to='/signIn'>sign in</Link>
            </div>
        </div>
    );
}