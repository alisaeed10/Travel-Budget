import './InformationPage.css';
import { Nav } from '../../Components/Nav';
import { InfoSlideShow } from '../../Components/InfoSlideShow';
import { useState } from 'react';

export function TripInformation() {
    const [slideNumber, setSlideNumber] = useState(0);

    const nextSlide = () => {
        setSlideNumber(() => {
            if (slideNumber === 3) {
                return 0;
            }
            else {
                return slideNumber + 1;
            }
        });
    }

    const prevSlide = () => {
        setSlideNumber(() => {
            if (slideNumber === 0) {
                return 3;
            }
            else
                return slideNumber - 1;
        });
    }
    return (
        <div className='info'>
            <Nav/>
            <div className="info-container">
                <div className="info-title">
                    <p className="info-title-text">
                        Trip Information
                    </p>
                    <p className="info-title-bio">
                        we will need some Information before booking your Trip
                    </p>
                </div>
                <div className="info-input">
                   <InfoSlideShow slideNumber={slideNumber}/>
                </div>
                <div className="info-buttons">
                    <button className='info-buttons-prev' onClick={() => prevSlide()}>Previous</button>
                    <button className='info-buttons-next' onClick={() => nextSlide() }>Next</button>
                </div>
            </div>
        </div>
    );
}