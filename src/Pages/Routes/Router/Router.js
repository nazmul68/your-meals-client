import Main from "../../../Layouts/Main";
import AddMeals from "../../AddMeals/AddMeals";
import Blog from "../../Blog/Blog";
import Home from "../../Home/Home";
import Login from "../../Login/Login";
import Meals from "../../Meals/Meals";
import MyReviews from "../../MyReviews/MyReviews";
import Signup from "../../Signup/Signup";
import SingleMeal from "../../SingleMeal/SingleMeal";
import SingleMealDetails from "../../SingleMealDetails/SingleMealDetails";
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
        element: <SingleMealDetails></SingleMealDetails>,
        loader: async ({ params }) => {
          return fetch(`http://localhost:5000/allMeals/${params.id}`);
        },
      },
      {
        path: "/addMeals",
        element: (
          <PrivateRoute>
            <AddMeals></AddMeals>
          </PrivateRoute>
        ),
      },
      {
        path: "/myReviews",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
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
