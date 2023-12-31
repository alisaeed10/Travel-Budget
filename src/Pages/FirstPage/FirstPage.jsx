import videoBackground from '../../assets/video (1080p) (1).mp4'
import './FirstPage.css'

export function Welcome() {
    return (
        <div className='main'>
            <div className="overlay"></div>
            <video src={videoBackground} autoPlay loop muted />
            <div className='content'>
                <h1>Adventures</h1>
                <h1>Await</h1>
            </div>
        </div>
    );
}

