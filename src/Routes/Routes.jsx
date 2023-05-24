import {
    createBrowserRouter
} from "react-router-dom";
import Main from '../Layout/Main.jsx'
import Home from "../Pages/Home/Home";
import MyMenu from "../Pages/MyMenu/MyMenu.jsx";

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
            }
        ]
    },
]);

export default router;