import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg';
import offerdImg from '../../assets/menu/pizza-bg.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg';
import Menu from '../Home/Menu/Menu';
import useMenu from '../../hooks/useMenu';
import MenuCategory from '../MenuCategory/MenuCategory';

const MyMenu = () => {
    const [menus] = useMenu()
    const dessert = menus.filter(menu => menu.category === 'dessert')
    const pizza = menus.filter(menu => menu.category === 'pizza')
    const soup = menus.filter(menu => menu.category === 'soup')
    const offered = menus.filter(menu => menu.category === 'offered')

    return (
        <div>
            <Helmet>
                <title>Menu | Bistro Boss</title>
            </Helmet>
            <Cover title={'OUR MENU'} subtitle={'Would you like to try a dish?'} img={menuImg} />
            <Menu />

            <Cover title={'Offered MENU'} img={offerdImg} />
            <MenuCategory items={offered} />

            <Cover title={'Dessert MENU'} img={dessertImg} />
            <MenuCategory items={dessert} />


        </div>
    );
}

export default MyMenu;
