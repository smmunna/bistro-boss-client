import {
    createBrowserRouter
} from "react-router-dom";
import Main from '../Layout/Main.jsx'
import Home from "../Pages/Home/Home";
import MyMenu from "../Pages/MyMenu/MyMenu.jsx";
import Order from "../Pages/Order/Order.jsx";
import Login from "../Layout/Login/Login.jsx";
import Register from "../Layout/Register/Register.jsx";

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
                path:'/menu',
                element:<MyMenu/>
            },
            {
                path:'/order',
                element:<Order/>
            }
        ]
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/register',
        element:<Register/>
    }
]);

export default router;