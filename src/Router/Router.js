import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../Layout/DashboardLayout/AddProduct";
import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import AllUsers from "../Pages/AllUsers/AllUsers";
import BLog from "../Pages/Blog/BLog";
import Contact from "../Pages/Contact/Contact";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Error from "../Pages/Error/Error";
import Product from "../Pages/Home/Categories/Product";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyProducts from "../Pages/MyProducts/MyProducts";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute";

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
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
            
                {
                    path: '/dashboard',
                    element: <Dashboard></Dashboard>
                },
                {
                    path: '/dashboard/allusers',
                    element: <AllUsers></AllUsers>
                },
                {
                    path: '/dashboard/addproducts',
                    element: <AddProduct></AddProduct>
                },
                {
                    path: '/dashboard/myproducts',
                    element: <MyProducts></MyProducts>
                }
            
        ]
    },
    
])

export default router;