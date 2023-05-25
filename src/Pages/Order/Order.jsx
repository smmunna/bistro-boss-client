import React, { useState } from 'react';
import OrderImg from '../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import useMenu from '../../hooks/useMenu'
import OrderCard from '../Order/OrderCard';

const Order = () => {
    const [menus] = useMenu()
    const [tabIndex, setTabIndex] = useState(0);
    const dessert = menus.filter(menu => menu.category === 'dessert')
    const pizza = menus.filter(menu => menu.category === 'pizza')
    const soup = menus.filter(menu => menu.category === 'soup')
    const offered = menus.filter(menu => menu.category === 'offered')

    return (
        <div>
            <Cover title={'Order you Food'} img={OrderImg} />
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                   <div className='text-center my-4'>
                   <Tab>Soup</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Desert</Tab>
                    <Tab>Offered</Tab>
                   </div>
                </TabList>
                   
                <TabPanel>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                   {
                        soup.map(item=><OrderCard key={item._id} item={item}/>)
                    }
                   </div>
                </TabPanel>
                <TabPanel>
                <div className='grid grid-cols-1 md:grid-cols-3'>
                   {
                        pizza.map(item=><OrderCard key={item._id} item={item}/>)
                    }
                   </div>
                </TabPanel>
                <TabPanel>
                <div className='grid grid-cols-1 md:grid-cols-3'>
                   {
                        dessert.map(item=><OrderCard key={item._id} item={item}/>)
                    }
                   </div>
                </TabPanel>
                <TabPanel>
                <div className='grid grid-cols-1 md:grid-cols-3'>
                   {
                        offered.map(item=><OrderCard key={item._id} item={item}/>)
                    }
                   </div>
                </TabPanel>

            </Tabs>
        </div>
    );
}

export default Order;
