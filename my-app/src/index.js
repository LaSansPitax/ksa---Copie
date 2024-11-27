import React from 'react';
import ReactDOM from 'react-dom/client';

import Appartementpage from './composants/Appartementpage.jsx'
import Navbar from './composants/Navbar.jsx';
import Home from './Home.jsx'
import Footer from './composants/Footer.jsx';
import ErrorPage from'./composants/ErrorPage.jsx';
import About from'./composants/About.jsx';
import reportWebVitals from './reportWebVitals.js';
import {createBrowserRouter,RouterProvider,Outlet,} from "react-router-dom";

const HeaderFooterLayout = () => {
  return <>
  <Navbar/>
  <Outlet/>
  <Footer/>
  </>
}

export const router = createBrowserRouter([
  {
    errorElement: <ErrorPage/>,
    element:<HeaderFooterLayout/>,
    children : [
      {
        path: "/",
        element : <Home/>
      },
      {
        path: "/Appartements",
        element: <Appartementpage />,  
    }, 
      {
        path: "/About",
        element: <About/>
    },
    
    
    
  ],
    
  },
   
   
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();