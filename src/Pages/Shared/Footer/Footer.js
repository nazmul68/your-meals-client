import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";

const Footer = () => {
  return (
    <div className="  bg-stone-900">
      <div className="py-3">
        <h6 className="p-1 text-2xl text-orange-500 italic">Get in touch</h6>
        <div className="flex justify-center my-5">
          <a
            className="mx-3"
            href="https://www.facebook.com/profile.php?id=100017560637039"
          >
            <FaFacebook className="text-gray-300 text-3xl mx-2"></FaFacebook>
          </a>
          <a
            className="mx-2"
            href="https://www.linkedin.com/in/nazmul-sujon-39647b244/"
          >
            <FaLinkedinIn className="text-gray-300  text-3xl mx-2"></FaLinkedinIn>
          </a>
          <a className="mx-2" href="https://github.com/nazmul68">
            <FaGithub className="text-gray-300  text-3xl mx-2"></FaGithub>
          </a>
          <a
            className="mx-2"
            href="https://api.whatsapp.com/send/?phone=01776097768"
          >
            <FaWhatsapp className="text-gray-300  text-3xl mx-2"></FaWhatsapp>
          </a>
          <a className="mx-2" href="https://www.instagram.com/nazmul_sujon/">
            <FaInstagram className="text-gray-300  text-3xl mx-2"></FaInstagram>
          </a>
        </div>
      </div>
      <footer className="footer p-10 text-base-content">
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
          <Link to="/allMeals" className="link link-hover">
            Meals
          </Link>
          <Link className="link link-hover">Lunch</Link>
          <Link className="link link-hover">Dinner</Link>
          <Link className="link link-hover">Snacks</Link>
        </div>
        <div className="text-white">
          <span className="footer-title font-bold">More about</span>
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Contact</Link>
          <Link className="link link-hover">Privacy</Link>
          <Link className="link link-hover">Policy</Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
