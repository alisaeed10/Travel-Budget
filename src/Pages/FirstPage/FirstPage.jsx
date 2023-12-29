import videoBackground from '../../assets/video (1080p) (1).mp4'
import './FirstPage.css'

export function Welcome() {
    return (
        <div className='main'>
            <div className="overlay"></div>
            <video src={videoBackground} autoPlay loop muted />
            <div className='content'>
                <h1>Adventures Await</h1>
                <button className='btn'>Start Here</button>
            </div>
        </div>
    );
}

