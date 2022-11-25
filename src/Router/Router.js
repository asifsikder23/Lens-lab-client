import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import BLog from "../Pages/Blog/BLog";
import Contact from "../Pages/Contact/Contact";
import Error from "../Pages/Error/Error";
import Product from "../Pages/Home/Categories/Product";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <BLog></BLog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/categories/:id',
                element: <Product></Product>
            },
            {
                path: '/*',
                element: <Error></Error>
            },
        ]
    }
    
])

export default router;