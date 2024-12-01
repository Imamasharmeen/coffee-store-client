import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import Home from './components/Home.jsx';
import MainLayout from './LayOut/MainLayout.jsx';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';
import User from './components/User.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';

const router = createBrowserRouter([

  {
    path:'/',
    element:<MainLayout></MainLayout>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/addCoffee')
      },
      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({params}) => fetch(`http://localhost:5000/addCoffee/${params.id}`)
      },
      {
        path: 'signin',
        element: <SignIn></SignIn>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
      {
        path: 'users',
        element: <User></User>
      },

    ]
  },
 

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
