import { createBrowserRouter } from "react-router";
import RootLayout from "../root/RootLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivetRout from "./PrivetRout";
import Profile from "../pages/Profile";
import ServiceDetails from "../pages/ServiceDetails";
import FoprgetPass from "../pages/FoprgetPass";
import Error from "../pages/Error";
import AddService from "../pages/AddService";
import MyServices from "../pages/MyServices";
import UpdateService from "../pages/UpdateService";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <Error></Error>,
    children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path: '/services',
            Component: Services,
        },
        {
            path:'/login',
            Component: Login
        },
        {
            path:'/signup',
            Component: Register
        },
        {
            path: '/profile',
            element: <PrivetRout><Profile></Profile></PrivetRout>
        },
        {
            path: '/details/:id',
            element: <PrivetRout><ServiceDetails></ServiceDetails></PrivetRout>
        },
        {
            path: '/forgetPass/:email',
            Component: FoprgetPass,
        },
        {
            path: '/add-services',
            element: <AddService></AddService>
        },
        {
            path: '/my-services',
            element: <MyServices></MyServices>
        },
        {
            path: '/update-services/:id',
            element: <UpdateService></UpdateService>
        },
    ]
  },
]);

export default router;