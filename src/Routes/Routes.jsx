import {
    createBrowserRouter
} from "react-router-dom";
import Main from '../Layout/Main.jsx'
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu.jsx";

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
                element:<Menu/>
            }
        ]
    },
]);

export default router;