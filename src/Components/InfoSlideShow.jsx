import { useEffect, useState } from 'react';

export function InfoSlideShow({slideNumber}){
    const [location, setLocation] = useState('');
    const [budget, setBudget] = useState('');
    const [people, setPeople] = useState(0);
    const [timeFrame, setTimeFrame] = useState('');

    console.log(slideNumber);
    useEffect(() => {
        const update = () => {
            const title = document.querySelector('.info-input-title');
            if (slideNumber === 0) {
                title.innerHTML = 'Where do you want to go?';
                document.querySelector('.info-input-container').textContent = '';
                const input = document.createElement('input');
                input.type = 'text';
                input.placeholder = 'Location';
                input.style.width = '17rem';
                input.style.height = '2rem';
                document.querySelector('.info-input-container').appendChild(input);
            } else if (slideNumber === 1) {
                title.innerHTML = 'Whats the Maximum spending limit?';
                document.querySelector('.info-input-container').textContent = '';
                const input = document.createElement('input');
                input.type = 'currency';
                input.step = '0.01';
                input.placeholder = 'Budget';
                input.style.width = '17rem';
                input.style.height = '2rem';
                document.querySelector('.info-input-container').appendChild(input);
            } else if (slideNumber === 2) {
                title.innerHTML = 'How many people would like to come?';
            } else if (slideNumber === 3) {
                title.innerHTML = 'How long would you like to stay?';
            }
        }
        update();

    });
    
    return (
        <>
            <p className='info-input-title'>Title</p>
            <div className='info-input-container'>
            </div>
        </>
    );
}