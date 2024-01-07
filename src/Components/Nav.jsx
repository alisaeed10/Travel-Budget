import '../Pages/FirstPage/FirstPage.css';

export function Nav(){
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