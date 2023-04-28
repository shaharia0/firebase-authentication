import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main.jsx';
import Home from './layout/Home.jsx';
import Login from './layout/Login.jsx';
import Register from './layout/Register.jsx';
import AuthProviders from './providers/AuthProviders.jsx';
import Orders from './layout/Orders';
import PrivateRoute from './routes/PrivateRoute';
import Profile from './layout/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
       {
        path: '/register',
        element: <Register></Register>
       },
       {
        path: '/profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute> 
       },
       {
        path: '/orders',
        element: <PrivateRoute><Orders></Orders></PrivateRoute>
       }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProviders>
   <RouterProvider router={router} />
   </AuthProviders>
    
  </React.StrictMode>,
)
