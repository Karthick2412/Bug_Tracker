import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import HomePage from './routes/Home';
import React from 'react';
import Users from './routes/Users';
import RootLayout from './routes/Root';
import ErrorPage from './routes/Error';
import Projects from './routes/Projects';
import Tickets from './routes/Tickets';
import ProjectHistory from './routes/ProjectHistory';

const router=createBrowserRouter([
  {
    path:'/',
    element:<RootLayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        index:true,
        element:<HomePage/>
      },
      {
        path:'users',
        element:<Users/>
      },
      {
        path:'projects',
        element:<Projects/>
      },
      {
        path:'tickets',
        element:<Tickets/>
      },
      {
        path:'projectHistory',
        element:<ProjectHistory/>
      }
    ]
  }
])

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
