import { Link } from 'react-router-dom';
import '../Pages/FirstPage/FirstPage.css';

export function Nav(){
    return(
        <div className='NavBar'>
            <div className="logo">
                <img className='navbar-logo' src='../../../public/logo2.png' alt='logo'/>
                <p className='navbar-tag'>Travel Budget</p>
            </div>
            <div className="nav-links">
                <a href='/signin'>Sign In</a>
            </div>
        </div>
    );
}