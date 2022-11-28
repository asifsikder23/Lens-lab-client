import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../Layout/DashboardLayout/AddProduct";
import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";
import ReportedItems from "../Layout/DashboardLayout/ReportedItems";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import AllBuyer from "../Pages/AllUsers/AllBuyer";
import AllSeller from "../Pages/AllUsers/AllSeller";
import BLog from "../Pages/Blog/BLog";
import Contact from "../Pages/Contact/Contact";
import Dashboard from "../Pages/Dashboard/Dashboard";
import DashboradEmpty from "../Pages/Dashboard/DashboradEmpty";
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
                    element: <DashboradEmpty></DashboradEmpty>
                },
                {
                    path: '/dashboard/myorder',
                    element: <Dashboard></Dashboard>
                },
                {
                    path: '/dashboard/allsellers',
                    element: <AllSeller></AllSeller>
                },
                {
                    path: '/dashboard/allbuyers',
                    element: <AllBuyer></AllBuyer>
                },
                {
                    path: '/dashboard/reported',
                    element: <ReportedItems></ReportedItems>
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