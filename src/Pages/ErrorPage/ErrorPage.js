import React from "react";
import { Helmet } from "react-helmet";
import { FaRegTired } from "react-icons/fa";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="text-center">
      <Helmet>
        <title>ErrorPage</title>
      </Helmet>
      <div className="">
        <FaRegTired
          className="text-gray-400 bg-white mt-5 rounded-circle mx-auto"
          style={{ height: "250px", width: "250px" }}
        />
      </div>
      <div className="error-info">
        <h1 className="text-gray-500">Oops!</h1>

        <p className="text-gray-500">
          <i>{error.statusText || error.message}</i>
        </p>
        <p className="text-gray-500 w-50 mx-auto d-none d-md-block">
          The page you are looking for no longer exists. Perhaps you can return
          back to the site's homepage and see if you can find what you are
          looking for.
        </p>
      </div>

      <p className="my-5">
        Please Go Back
        <Link className="font-bold mx-2 text-blue-600 border-b-2 " to={"/"}>
          Home
        </Link>
      </p>
    </div>
  );
};

export default ErrorPage;
