// import axios from "axios";
import '../Pages/SignIn/SignIn.css'


// // Ensures cookie is sent
// axios.defaults.withCredentials = true;

// const serverUrl = import.meta.env.VITE_SERVER_URL;

export function GoogleOAuth(){
    // console.log("serverUrl: ", serverUrl);
    // const handleLogin = async () => {
    //     try {
            
    //       // Gets authentication url from backend server
    //         const {data :{url}} = await axios.get(`${serverUrl}/auth/url`);
    //       // Navigate to consent screen
    //         window.location.assign(url);
    //     } catch (err) {
    //         console.log("ggogle oauth error:");
    //         console.error(err);
    //     }
    // }
    
    
    return (
        <div className="signIn-google-OAuth">
            <button className="signIn-google-OAuth-button">Sign In With Google<img className="googleLogo" src="../../googleLogo.png"></img></button>
        </div>
    )
}