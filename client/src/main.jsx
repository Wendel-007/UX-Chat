import React, {useContext} from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import {AuthContextProvider} from './context/AuthContext.jsx'
import {Login} from './pages/Login.jsx'
import {Register} from './pages/Register.jsx'
import {HomePage} from './pages/HomePage.jsx'
import {Chat} from './pages/Chat.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element:  <HomePage/>,
      },
      {
        path: "/chat",
        element:  <Chat/>,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "*",
        element: <Navigate to="/" />,
      }
      ],
  }
]);



ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>  
    </React.StrictMode>
);