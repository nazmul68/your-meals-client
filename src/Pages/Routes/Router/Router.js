import Main from "../../../Layouts/Main";
import AddMeals from "../../AddMeals/AddMeals";
import Blog from "../../Blog/Blog";
import ErrorPage from "../../ErrorPage/ErrorPage";
import Home from "../../Home/Home";
import Login from "../../Login/Login";
import Meals from "../../Meals/Meals";
import MyReviews from "../../MyReviews/MyReviews";
import Signup from "../../Signup/Signup";
import SingleMealDetails from "../../SingleMealDetails/SingleMealDetails";
import UpdateReview from "../../UpdateReview/UpdateReview";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
          return fetch(
            `https://assignment-11-review-service-server.vercel.app/allMeals/${params.id}`
          );
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
        path: "/update/:id",
        element: <UpdateReview></UpdateReview>,
        loader: async ({ params }) => {
          return fetch(
            `https://assignment-11-review-service-server.vercel.app/myReviews/${params.id}`
          );
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
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default router;
