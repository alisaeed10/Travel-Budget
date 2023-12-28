import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Welcome } from './Pages/FirstPage/FirstPage'
import { SignIn } from './Pages/SignIn/SignIn'
import {CreateAccount} from './Pages/SignIn/CreateAccount/CreateAccount'


import './App.css'


function App() {
 return (
   <div className="Apps">
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Welcome/>}/>
         <Route path="/SignIn" element={<SignIn/>}/>
          <Route path="/createAccount" element={<CreateAccount/>}/>
       </Routes>
     </BrowserRouter>
   </div>
 )
}


export default App
