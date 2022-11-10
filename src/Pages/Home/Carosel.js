import React from "react";
import slider1 from "../../assets/sliders/slide1.webp";
import slider2 from "../../assets/sliders/slide2.webp";
import slider3 from "../../assets/sliders/slide3.jpg";
import slider4 from "../../assets/sliders/slide4.webp";

const Carosel = () => {
  return (
    <div className="container mx-auto">
      <div className="carousel w-full rounded-lg " style={{ height: "70vh" }}>
        <div id="item1" className="carousel-item w-full">
          <img src={slider1} alt="slider1" className="w-full" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src={slider2} alt="slider2" className="w-full" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src={slider3} alt="slider1" className="w-full" />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img src={slider4} alt="slider1" className="w-full" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2 ">
        <a href="#item1" className="btn btn-xs bg-orange-600 border-none px-3">
          1
        </a>
        <a href="#item2" className="btn btn-xs bg-orange-600 border-none px-3">
          2
        </a>
        <a href="#item3" className="btn btn-xs bg-orange-600 border-none px-3">
          3
        </a>
        <a href="#item4" className="btn btn-xs bg-orange-600 border-none px-3">
          4
        </a>
      </div>
    </div>
  );
};

export default Carosel;
