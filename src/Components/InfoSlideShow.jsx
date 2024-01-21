// import { useState } from 'react';
import {LocationSlide} from './infoSlides/LocationSlide.jsx';
import {BudgetSlide} from './infoSlides/BudgetSlide.jsx';
import {NumPeopleSlides} from './infoSlides/NumPeopleSlides.jsx';
import {NumDaysSlide} from './infoSlides/NumDaysSlide.jsx';


// eslint-disable-next-line react/prop-types
export function InfoSlideShow({slideNumber}){
    // const [location, setLocation] = useState('');
    // const [budget, setBudget] = useState('');
    // const [people, setPeople] = useState(0);
    // const [timeFrame, setTimeFrame] = useState('');

    console.log(slideNumber);
        const update = () => {
            const title = document.querySelector('.info-input-title');
            if (slideNumber === 0) {
                title.innerHTML = 'Where would you like to go?';
                return <LocationSlide/>;
            } else if (slideNumber === 1) {
                title.innerHTML = 'Whats the Maximum spending limit?';
                
                return <BudgetSlide/>;
            } else if (slideNumber === 2) {
                title.innerHTML = 'How many people would like to come?';
                return <NumPeopleSlides/>;
                
            } else if (slideNumber === 3) {
                title.innerHTML = 'How long would you like to stay?';
                return <NumDaysSlide />;
            }
        }
    return (
        <>
        
            <p className='info-input-title'>Title</p>
            <div className='info-input-container'>
                {update()}
            </div>
        </>
    );
}