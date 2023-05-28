import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import cartIcon from '../../assets/icon/carticon.png'
import { AuthContext } from '../../provider/AuthProvider';
import useCart from '../../hooks/useCart';

const Navbar = () => {
    const { user, logOut, loading } = useContext(AuthContext)
    const [cart] = useCart()

    const navigate = useNavigate()
    if (!user && loading) {
        return <div>Loading......</div>
    }
    const handleLogout = () => {
        logOut()
            .then(() => {
                navigate('/')
            }).catch((error) => {
                // An error happened.
            });
    }

    const navlink = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/order'>Order</Link></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>
        <li><Link to='/menu'>Our Menu</Link></li>
        <li><Link to='/shop'>Our Shop</Link></li>
        <li><Link to='/carts'>
            <button className="flex items-center gap-2">
                <img src={cartIcon} width={30} alt="" />
                <div className="badge">+{cart?.length}</div>
            </button>
        </Link></li>

        {
            user ?
                <>
                    <li><button onClick={handleLogout}>Logout</button></li>
                    <div className="avatar">
                        <div className="w-12">
                            <img src={user?.photoURL} />
                        </div>
                    </div>
                </>
                :
                <>
                    <li><Link to='/login'>Login</Link></li>
                </>
        }
    </>
    return (
        <div className="navbar fixed z-10 bg-opacity-60 bg-black max-w-screen-xl text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black bg-opacity-40 rounded-box w-52">
                        {navlink}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Bistro Boss Resturant</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlink}
                </ul>
            </div>
            {/* <div className="navbar-end">
                <a className="btn">Get started</a>
            </div> */}
        </div>
    );
}

export default Navbar;
