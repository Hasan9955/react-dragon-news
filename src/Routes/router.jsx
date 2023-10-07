import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import About from "../Components/About/About";
import Career from "../Components/Career/Career";
import NewsDetails from "../Shared/NewsDetails";
import PrivateRoute from "./Private Route/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('../../public/data/news.json')

            },
            {
                path: '/news/:id',
                element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
                loader: () => fetch('../../public/data/news.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
              path: '/about',
              element: <About></About>
            },
            {
              path: '/career',
              element: <Career></Career>
            }
        ]
    }
])

export default router;