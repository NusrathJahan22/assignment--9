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
// import { AuthProvider } from './Provider/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
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
        element:<Service3></Service3>
      },
      {
        path:"/service4",
        element:<Service4></Service4>
      },
      {
        path:"/wedding",
        element:<Wedding></Wedding>
      },
      {
        path:"/engagement",
        element:<Engagement></Engagement>
      },
      {
        path:"/baby",
        element:<Baby></Baby>
      },
      {
        path:"/retirement",
        element:<Retirement></Retirement>
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
