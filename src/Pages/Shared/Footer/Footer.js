import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";

const Footer = () => {
  return (
    <div className="flex ">
      <footer className="footer p-10 bg-stone-900 text-base-content">
        <div>
          <img src={logo} alt="logo" />
          <p className="text-left text-white">
            <span className="text-2xl font-bold text-orange-500">
              {" "}
              YourMeals
            </span>
            <br />
            Providing healthy & delicious foods
          </p>
        </div>
        <div className="text-white">
          <span className="footer-title font-bold">Services</span>
          <Link className="link link-hover">Branding</Link>
          <Link className="link link-hover">Design</Link>
          <Link className="link link-hover">Marketing</Link>
          <Link className="link link-hover">Advertisement</Link>
        </div>
        <div className="text-white">
          <span className="footer-title font-bold">More about</span>
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Contact</Link>
          <Link className="link link-hover">Jobs</Link>
          <Link className="link link-hover">Press kit</Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
