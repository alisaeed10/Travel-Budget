import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import { Welcome } from './Pages/FirstPage/FirstPage';
import { SignIn } from './Pages/SignIn/SignIn';
import {CreateAccount} from './Pages/SignIn/CreateAccount/CreateAccount';
import { TripInformation } from './Pages/Info/InformationPage';
import './index.css';
import ForgotPassword from './Pages/SignIn/ForgotPassword/ForgotPassword';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Welcome />,
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
  {
    path: '/createAccount',
    element: <CreateAccount />,
  },
  {
    path: '/forgotPassword',
    element: <ForgotPassword />,
  },
  {
    path: '/info',
    element: <TripInformation />,
  },

]);

export function App() {
 return (
   <div className="Apps">
      <RouterProvider router={router} />
   </div>
 )
}