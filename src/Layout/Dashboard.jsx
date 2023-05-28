import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaHome,FaCalendarAlt,FaCartPlus } from "react-icons/fa";

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* <!-- Page content here --> */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet />

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link><FaHome/> User Home</Link></li>
                    <li><Link><FaCalendarAlt/> Reservation</Link></li>
                    <li><Link><FaCartPlus/> Payment History</Link></li>
                    <li><Link to="/dashboard/mycarts">My Cart</Link></li>
                </ul>

            </div>
        </div>
    );
}

export default Dashboard;
