import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "swiper/css";
import "swiper/css/pagination";
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import { HelmetProvider } from 'react-helmet-async';



ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <React.StrictMode>
      <div className='max-w-screen-xl mx-auto'>
        <RouterProvider router={router} />
      </div>
    </React.StrictMode>
  </HelmetProvider>
)
