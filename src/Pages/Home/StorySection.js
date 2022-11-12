import React from "react";
import img from "../../assets/storyImg.webp";

const StorySection = () => {
  return (
    <div className="container mx-auto md:flex my-20 items-center">
      <div className="img-div md:w-1/2">
        <img
          src={img}
          alt=""
          className="rounded-tl-3xl rounded-br-3xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 "
        />
      </div>
      <div className="details md:w-1/2 my-5">
        <h2 className="text-3xl font-bold text-orange-600 mb-5 hover:text-orange-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          OUR STORY
        </h2>
        <p>
          Food is an essential part of our lives. But today, many of us struggle
          with it for a variety of reasons. Our mission is to serve a fresh meal
          to people every day. YourMeals was started the journey since 2021 when
          its scope was not very large but day by day our customer like our
          foods consequently we growing our ability to serve fresh and delicious
          also nutritios food . Now YourMeals meals has their large kitchen and
          serve more than 500 meals per day . Say Alhamdulillah
        </p>
      </div>
    </div>
  );
};

export default StorySection;
