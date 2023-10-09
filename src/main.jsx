import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import MainPage from './MainPage';
import Home from './Home/Home';
import Login from './Login/Login';
import Register from './Register/Register';


import AuthProvider from './Provider/AuthProvider';

import About from './About/About';
import Contact from './Contact/Contact.JSX';
import Service4 from './Pages/Service4';
import Wedding from './wedding/Wedding';
import Service3 from './Pages/Service3';
import Engagement from './Engagement/Engagement';
import Baby from './baby/Baby';
import Retirement from './retirement/Retirement';
import Error from './Error/Error';
import PrivateRoute from './Private/PrivateRoute';
// import { AuthProvider } from './Provider/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
    // element:<Error></Error>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
     
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/service3",
        element:<PrivateRoute><Service3></Service3></PrivateRoute>
      },
      {
        path:"/service4",
        element:<PrivateRoute><Service4></Service4></PrivateRoute>
      },
      {
        path:"/wedding",
        element:<PrivateRoute><Wedding></Wedding></PrivateRoute>
      },
      {
        path:"/engagement",
        element:<PrivateRoute><Engagement></Engagement></PrivateRoute>
      },
      {
        path:"/baby",
        element:<PrivateRoute><Baby></Baby></PrivateRoute>
      },
      {
        path:"/retirement",
        element:<PrivateRoute><Retirement></Retirement></PrivateRoute>
      }
      
    ]
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <RouterProvider router={router} /> 
  </AuthProvider>
  </React.StrictMode>,
)
