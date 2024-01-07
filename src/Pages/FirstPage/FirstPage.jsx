/* eslint-disable react/no-unescaped-entities */
import './FirstPage.css';
import { SlideShow } from '../../Components/SlideShow';
import { Nav } from '../../Components/Nav';


export function Welcome() {

    return (
        <div className='Welcome'>
            <div className="Welcome-header">
            <Nav />
            <p className="Welcome-title">Travel to a World of Dreams</p>
           </div>
           <div className="Welcome-content">
                <SlideShow />
           </div>
        </div>
    );
} 