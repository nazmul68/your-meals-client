import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { AuthContext } from "../../../Contexts/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const userImg = user?.photoURL;
  // console.log(userImg);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("log out successful");
      })
      .catch((err) => console.error(err));
  };

  const menuItems = (
    <>
      <li className="text-2xl mx-1">
        <Link
          className="btn btn-ghost normal-case hover:text-orange-600 font-bold "
          to="/"
        >
          Home
        </Link>
      </li>
      <li className="text-2xl mx-1">
        <Link
          className="btn btn-ghost normal-case hover:text-orange-600 font-bold "
          to="/allMeals"
        >
          Meals
        </Link>
      </li>
      {user ? (
        <>
          <li className="text-2xl mx-1">
            <Link
              className="btn btn-ghost normal-case hover:text-orange-600 font-bold "
              to="/addMeals"
            >
              AddMeal
            </Link>
          </li>
          <li className="text-2xl mx-1">
            <Link
              className="btn btn-ghost normal-case hover:text-orange-600 font-bold "
              to="/myReviews"
            >
              MyReviews
            </Link>
          </li>
        </>
      ) : (
        <></>
      )}
      <li className="font-bold mx-1">
        <Link
          className="btn btn-ghost normal-case hover:text-orange-600 font-bold "
          to="blog"
        >
          Blog
        </Link>
      </li>
      {user ? (
        <>
          <li className="text-2xl mx-1">
            <button
              onClick={handleLogOut}
              className="btn btn-ghost normal-case hover:text-orange-600 font-bold "
            >
              Log out
            </button>
          </li>
        </>
      ) : (
        <>
          <li className="text-2xl mx-1">
            <Link
              className="btn btn-ghost normal-case hover:text-orange-600 font-bold "
              to="/login"
            >
              Login
            </Link>
          </li>
          <li className="text-2xl mx-1">
            <Link
              className="btn btn-ghost normal-case hover:text-orange-600 font-bold "
              to="/signup"
            >
              Sign up
            </Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="container mx-auto">
      <div className="navbar h-24 bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link to={"/"} className="normal-case text-xl mx-4">
            <img className="h-8 md:h-12" src={logo} alt="logo" />
          </Link>
          <p className="text-2xl font-bold text-orange-500">YourMeals</p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          {user?.uid ? (
            <div className="w-8">
              <img src={userImg} alt="user" className="rounded-full" />
            </div>
          ) : (
            <div className="w-10 rounded-full">
              <FaUser className="text-2xl font-bold text-gray-400"></FaUser>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
