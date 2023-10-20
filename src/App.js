import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import HomePage from './routes/Home';
import React from 'react';
import Users, {loader as userListLoader} from './components/ManageUsers/Users';
import RootLayout from './routes/Root';
import ErrorPage from './routes/Error';
import Projects from './routes/Projects';
import Tickets from './routes/Tickets';
import ProjectHistory from './routes/ProjectHistory';
//import UserForm from './components/ManageUsers/UserForm';
import UserEdit,{loader as UserEditLoader,action as userEditAction} from './components/ManageUsers/UserEdit';
import NewUser,{loader as NewUserFormData} from './components/ManageUsers/UserCreate';

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
        children:[
          {
            index:true,
            element:<Users/>,
            loader:userListLoader,
          },
          {
            path:':userId',
            element:<UserEdit/>,
            loader:UserEditLoader,
            action:userEditAction
          },
          {
            path:'create',
            element:<NewUser/>,
            action:NewUserFormData
          }
        ]
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
