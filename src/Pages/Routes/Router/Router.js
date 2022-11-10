import Main from "../../../Layouts/Main";
import Blog from "../../Blog/Blog";
import Home from "../../Home/Home";
import Login from "../../Login/Login";
import Meals from "../../Meals/Meals";
import Signup from "../../Signup/Signup";
import SingleMeal from "../../SingleMeal/SingleMeal";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/meals",
        element: <Meals></Meals>,
      },
      {
        path: "/meals/:id",
        element: <SingleMeal></SingleMeal>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default router;
