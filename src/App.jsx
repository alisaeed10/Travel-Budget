import { RouterProvider,createBrowserRouter, useNavigate } from 'react-router-dom'
import { Welcome } from './Pages/FirstPage/FirstPage'
import { SignIn } from './Pages/SignIn/SignIn'
import {CreateAccount} from './Pages/SignIn/CreateAccount/CreateAccount'

import { useEffect, useRef, useState, createContext, useContext, useCallback } from 'react';
import axios from 'axios';
import './index.css';
import { ForgotPassword } from './Pages/SignIn/ForgotPassword/ForgotPassword';

// Ensures cookie is sent
axios.defaults.withCredentials = true;

const serverUrl = import.meta.env.VITE_SERVER_URL;

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(null);
  const [user, setUser] = useState(null);

  const checkLoginState = useCallback(async () => {
    try {
      const { data: { loggedIn: logged_in, user }} = await axios.get(`${serverUrl}/auth/logged_in`);
      setLoggedIn(logged_in);
      user && setUser(user);
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    checkLoginState();
  }, [checkLoginState]);

  return (
    <AuthContext.Provider value={{ loggedIn, checkLoginState, user }}>
      {children}
    </AuthContext.Provider>
  );
}
const Callback = () => {
  const called = useRef(false);
  const { checkLoginState, loggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      if (loggedIn === false) {
        try {
          if (called.current) return; // prevent rerender caused by StrictMode
          called.current = true;
          const res = await axios.get(`${serverUrl}/auth/token${window.location.search}`);
          console.log('response: ', res);
          checkLoginState();
          navigate('/');
        } catch (err) {
          console.error(err);
          navigate('/');
        }
      } else if (loggedIn === true) {
        navigate('/');
      }
    })();
  }, [checkLoginState, loggedIn, navigate])
  return <></>
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Welcome />,
  },
  {
    path: '/auth/callback/', // google will redirect here
    element: <Callback />,
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

]);

function App() {
 return (
   <div className="Apps">
     <AuthContextProvider>
          <RouterProvider router={router} />
      </AuthContextProvider>
   </div>
 )
}
export default App;