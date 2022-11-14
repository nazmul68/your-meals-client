import React from "react";
import fridRiceImg from "../../assets/fried-rice.webp";
import tomatoSaladImg from "../../assets/tomato-salad.webp";
import Swing from "react-reveal/Swing";
import { FaRegGrinHearts } from "react-icons/fa";
import Swal from "sweetalert2";

const Offer = () => {
  const handleModal = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Congratulations! your are eligible for this offer.",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <div className="container w-11/12 mx-auto md:flex my-20 items-center bg-base-300 p-5 rounded-2xl">
      <div className="img-div md:w-2/3 mx-auto relative mb-20">
        <img
          src={fridRiceImg}
          alt="rice"
          className="max-w-lg rounded-lg shadow-2xl w-3/4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        />
        <img
          src={tomatoSaladImg}
          alt="salad"
          className="max-w-sm rounded-lg shadow-2xl absolute w-1/2 right-5 top-1/2 border transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        />
      </div>
      <div className="md:w-1/2 md:ml-10">
        <Swing>
          <div className="flex items-center mb-5  text-cyan-400 text-left">
            <h2 className="font-extrabold text-4xl mr-2 md:mr-5 ">
              Best Combo Offer
            </h2>
            <FaRegGrinHearts className="font-bold text-4xl cursor-pointer"></FaRegGrinHearts>
          </div>
        </Swing>

        <p className="font-bold text-left">
          Fried Rice with Tomato Salad <br />
          <span className="font-bold text-orange-600 text-3xl">
            110 tk
          </span>{" "}
          only!
        </p>

        <div className="text-left">
          <button
            onClick={handleModal}
            className="btn font-bold bg-gray-800 border-none mt-8 "
          >
            claim offer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offer;
