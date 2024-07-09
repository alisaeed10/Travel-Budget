import { useState } from 'react';

export function NumPeopleSlides({people,setPeople}) {
    
    const handlePeople = (value) => {

        setPeople(value);
        
    }
    return (
        <div className="people">
            <button className="people-button" onChange={handlePeople}>1</button>
            <button className="people-button" onChange={handlePeople}>2</button>
            <button className="people-button" onChange={handlePeople}>3</button>
            <button className="people-button" onChange={handlePeople}>4</button>
            <button className="people-button" onChange={handlePeople}>5</button>
            <button className="people-button" onChange={handlePeople}>6</button>
        </div>
    );
}