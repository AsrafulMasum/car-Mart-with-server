import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AboutPage from "../Pages/About/AboutPage";
import AddCars from "../Pages/addCars/AddCars";
import BrandCar from "../Pages/BrandCar/BrandCar";
import CarDetails from "../Pages/BrandCar/CarDetails";
import Cart from "../Pages/Cart/Cart";
import UpdateCar from "../Pages/Update/UpdateCar";
import PrivateRoutes from "./PrivateRoutes";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/cars/:brand",
        element: <PrivateRoutes><BrandCar></BrandCar></PrivateRoutes>,
        loader: () => fetch('https://assignment10-rho.vercel.app/cars')
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/about",
        element: <PrivateRoutes><AboutPage></AboutPage></PrivateRoutes>
      },
      {
        path: "/addCars",
        element: <PrivateRoutes><AddCars></AddCars></PrivateRoutes>
      },
      {
        path:"/carsDetails/:id",
        element: <PrivateRoutes><CarDetails></CarDetails></PrivateRoutes>,
        loader: ({params}) => fetch(`https://assignment10-rho.vercel.app/cars/${params.id}`)
      },
      {
        path: "/cart",
        element: <PrivateRoutes><Cart></Cart></PrivateRoutes>,
        loader: () => fetch("https://assignment10-rho.vercel.app/cart")
      },
      {
        path: "/updateCar/:id",
        element: <PrivateRoutes><UpdateCar></UpdateCar></PrivateRoutes>,
        loader: ({params}) => fetch(`https://assignment10-rho.vercel.app/cars/${params.id}`)
      }
    ],
  },
]);

export default Routes;
