import Main from "../../../Layouts/Main";
import Blog from "../../Blog/Blog";
import Home from "../../Home/Home";
import Login from "../../Login/Login";
import Meals from "../../Meals/Meals";
import Signup from "../../Signup/Signup";
import SingleMeal from "../../SingleMeal/SingleMeal";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
        path: "/allMeals",
        element: <Meals></Meals>,
      },
      {
        path: "/allMeals/:id",
        element: <SingleMeal></SingleMeal>,
        loader: async ({ params }) => {
          return fetch(`http://localhost:5000/allMeals/${params.id}`);
        },
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
        element: (
          <PrivateRoute>
            <Blog></Blog>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
