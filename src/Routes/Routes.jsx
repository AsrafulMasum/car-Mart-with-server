import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AboutPage from "../Pages/About/AboutPage";
import AddCars from "../Pages/addCars/AddCars";
import BrandCar from "../Pages/BrandCar/BrandCar";

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
        element: <BrandCar></BrandCar>,
        loader: () => fetch('http://localhost:3000/cars')
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
        element: <AboutPage></AboutPage>
      },
      {
        path: "/addCars",
        element: <AddCars></AddCars>
      }
    ],
  },
]);

export default Routes;
