import {
    createBrowserRouter
} from "react-router-dom";
import Main from '../Layout/Main.jsx'
import Home from "../Pages/Home/Home";
import MyMenu from "../Pages/MyMenu/MyMenu.jsx";
import Order from "../Pages/Order/Order.jsx";
import Login from "../Layout/Login/Login.jsx";
import Register from "../Layout/Register/Register.jsx";
import Secret from "../Pages/Secret.jsx";
import PrivateRoutes from "../privateRoutes/PrivateRoutes.jsx";
import Dashboard from "../Layout/Dashboard.jsx";
import MyCart from "../Pages/Dashboard/MyCart/MyCart.jsx";
import AddProducts from "../Pages/Dashboard/AddProducts/AddProducts.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/menu',
                element: <MyMenu />
            },
            {
                path: '/order',
                element: <Order />
            },
            {
                path: '/secret',
                element: <PrivateRoutes><Secret /></PrivateRoutes>
            }
        ],
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: 'dashboard',
        element: <Dashboard />,
        children: [
            {
                path: 'mycarts',
                element: <MyCart />
            },
            {
                path:'addproducts',
                element:<AddProducts/>
            }
        ]
    }
]);

export default router;