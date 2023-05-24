import React from 'react';

const MenuCategory = ({ items }) => {
    return (
        <div className=' grid grid-cols-1 md:grid-cols-2 gap-5 my-5'>
            {
                items.slice(0, 6).map(menu => (


                    <div className='flex justify-center items-center  gap-6' key={menu._id}>
                        <div className='menuImage'>
                            <img src={menu.image} width={90} alt="" />
                        </div>
                        <div>
                            <h3 className='text-2xl font-semibold'>{menu.name}</h3>
                            <p>{menu.recipe}</p>
                        </div>
                        <div>
                            <h3 className='text-warning'>${menu.price}</h3>
                        </div>
                    </div>


                ))
            }

        </div>
    );
}

export default MenuCategory;
