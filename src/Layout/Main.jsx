import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar'
import Footer from '../Shared/Footer/Footer'

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
            <ScrollRestoration/>
        </div>
    );
}

export default Main;
