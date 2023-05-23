import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from '../Layout/Main.jsx'
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    },
]);

export default router;