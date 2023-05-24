import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import './Menu.css'
import useMenu from '../../../hooks/useMenu';

const Menu = () => {
    const [menus] = useMenu();
    const popular = menus.filter(menu => menu.category === 'popular')

    return (
        <div className='p-12'>
            <SectionTitle subheading={'---Check it Out'} heading={'From Our Menu'} />

            {
                popular.length > 0 ?
                    <div>

                        <div className=' grid grid-cols-1 md:grid-cols-2 gap-5'>
                            {
                                popular.slice(0, 6).map(menu => (


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

                        <div className='flex justify-center mt-5'>
                            <button className=' btn btn-info'>See More</button>
                        </div>

                    </div>

                    :
                    <>

                        <div className=' grid grid-cols-1 md:grid-cols-2 gap-5'>
                            {
                                popular.slice(0, 6).map(menu => (

                                    <div>
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
                                    </div>

                                ))
                            }
                        </div>

                    </>
            }
        </div>

    );
}

export default Menu;
