import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "swiper/css";
import "swiper/css/pagination";
import './index.css'
import 'react-tabs/style/react-tabs.css';
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './provider/AuthProvider.jsx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <HelmetProvider>
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <div className='max-w-screen-xl mx-auto'>
            <RouterProvider router={router} />
          </div>
        </QueryClientProvider>
      </React.StrictMode>
    </HelmetProvider>
  </AuthProvider>
)
