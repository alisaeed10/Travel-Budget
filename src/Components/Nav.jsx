import '../Pages/FirstPage/FirstPage.css';
import { useEffect } from 'react';

export function Nav(){
    // if user is not in the home page then nave bar will change the link from sign in to home
    const path = window.location.pathname;
    console.log(path);
    useEffect(() => {
        if(path !== '/'){
            document.querySelector('.signin-link').href = '/';
            document.querySelector('.signin-link').innerHTML = 'Home';
        }
    }, [path]);
    return(
        <div className='NavBar'>
            <div className="logo">
                <img className='navbar-logo' src='../../../logo2.png' alt='logo'/>
                <p className='navbar-tag'>Travel Budget</p>
            </div>
            <div className="nav-links">
                <a className='signin-link' href='/signin'>Sign In</a>
            </div>
        </div>
    );
}