import Main from "../../../Layouts/Main";
import Blog from "../../Blog/Blog";
import Home from "../../Home/Home";
import Login from "../../Login/Login";
import Signup from "../../Signup/Signup";

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
