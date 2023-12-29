import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Welcome } from './Pages/FirstPage/FirstPage'
import {SignIn} from './Pages/SignIn/OAuthPage'

import './App.css'


function App() {
 return (
   <div className="App">
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Welcome/>}/>
         {/* <Route path="/signin" element={<SignIn/>}/> */}
         {/* <Route path="/" element={<Info/>}/> */}
       </Routes>
     </BrowserRouter>
   </div>
 )
}


export default App
