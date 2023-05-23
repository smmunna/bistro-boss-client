import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "swiper/css";
import "swiper/css/pagination";

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <div className='max-w-screen-xl mx-auto'>
   <RouterProvider router={router} />
   </div>
  </React.StrictMode>,
)
