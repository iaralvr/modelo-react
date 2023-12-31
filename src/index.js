
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './Login';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>
  },
  {
    path: "/login",
    element:<Login/>
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>

);