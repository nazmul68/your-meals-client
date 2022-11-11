import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";

const Header = () => {
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
      <li className="font-bold mx-1">
        <Link
          className="btn btn-ghost normal-case hover:text-orange-600 font-bold "
          to="blog"
        >
          Blog
        </Link>
      </li>
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
          <button
            className=" mr-5 font-bold bg-warning px-3 py-2 rounded hover:bg-black"
            style={{ color: "#ffff" }}
          >
            Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
