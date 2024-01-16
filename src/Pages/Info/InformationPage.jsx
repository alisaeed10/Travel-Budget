import './InformationPage.css';
import { Nav } from '../../Components/Nav';

export function TripInformation() {
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
                    <p className='info-input-title'>Title</p>
                    <div className='info-input-container'>
                        <input className='info-input-input' type='text' placeholder='Title'/>
                    </div>
                </div>
                <div className="info-buttons">
                    <button className='info-buttons-prev'>Previous</button>
                    <button className='info-buttons-next'>Next</button>
                </div>
            </div>
        </div>
    );
}