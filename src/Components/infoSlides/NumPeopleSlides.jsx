import { useState } from 'react';

export function NumPeopleSlides() {
    const [numPeople,setNumPeople] = useState(1);
    return (
        <div className="people">
            <button className="people-button">1</button>
            <button className="people-button">2</button>
            <button className="people-button">3</button>
            <button className="people-button">4</button>
            <button className="people-button">5</button>
            <button className="people-button">6</button>
        </div>
    );
}