import React from 'react';
import Banner from './Banner/Banner';
import Section1 from './Section1/Section1';
import Section2 from './Section2/Section2';
import Menu from './Menu/Menu';
import ChefRecom from './ChefRecom/ChefRecom';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
        <Helmet>
            <title>Home | Bistro Boss</title>
        </Helmet>
            <Banner />
            <Section1 />
            <Section2 />
            <Menu />
            <ChefRecom />
        </div>
    );
}

export default Home;
