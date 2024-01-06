/* eslint-disable react/no-unescaped-entities */
import './FirstPage.css';
import { SlideShow } from '../../Components/SlideShow';


export function Welcome() {

    return (
        <div className='Welcome'>
            <div className="Welcome-header">
            <p className="Welcome-title">Travel to a World of Dreams</p>
            
            <p className="Welcome-bio">wanna travel but rather not spend a lot. Set a budget and We'll guarantee a fun trip under that budget.  </p>
           </div>
           <div className="Welcome-content">
                <SlideShow />
           </div>
        </div>
    );
} 