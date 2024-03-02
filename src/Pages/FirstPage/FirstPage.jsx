/* eslint-disable react/no-unescaped-entities */
import './FirstPage.css';
import { SlideShow } from '../../Components/SlideShow';
import { Nav } from '../../Components/Nav';
// import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ImAirplane } from "react-icons/im";


export function Welcome() {
    // these useState hooks will store information about the user
    // const [userName, setUserName] = useState('');
    // const [userEmail, setUserEmail] = useState('');
    // const location = useLocation();
    // const userData = location.state;
    const navigate = useNavigate();

    // // setting the user data into the state hooks:
    // useEffect(() => {
    //     if(userData){
    //         setUserName(userData.name);
    //         setUserEmail(userData.email);
    //     }
    //     console.log("User Data: ", userData);
    // }, [userData]);

    const startTrip = () => {
        // { state: { name: userName, email: userEmail}}
        navigate('/info');
    }
    return (
        <div className='Welcome'>
            <div className="Welcome-header">
                <Nav/>
            <p className="Welcome-title">Travel to a World of Dreams</p>
           </div>
           <div className="Welcome-content">
                <SlideShow />
            </div>
            <div className='Welcome-footer' onClick={() => startTrip()}><p className='Welcome-footer-text'>Start Trip </p><span className='plane'><ImAirplane size={30} /></span></div>
        </div>
    );
} 
