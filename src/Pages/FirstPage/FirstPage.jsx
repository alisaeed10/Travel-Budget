/* eslint-disable react/no-unescaped-entities */
import './FirstPage.css';
import { SlideShow } from '../../Components/SlideShow';


export function Welcome() {

    return (
        <div className='Welcome'>
            <div className="Welcome-header">
            <p className="Welcome-title">Travel to a World of Dreams</p>
           </div>
           <div className="Welcome-content">
                <SlideShow />
           </div>
        </div>
    );
} 