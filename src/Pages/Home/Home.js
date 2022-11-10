import React, { useEffect, useState } from "react";
import Carosel from "./Carosel";
import LimFoodCard from "./LimFoodCard";
import StorySection from "./StorySection";

const Home = () => {
  const [limFoods, setLimFoods] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/limFoods`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setLimFoods(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Carosel></Carosel>
      <div>
        <h2 className="font-bold text-3xl text-orange-600  hover:text-orange-700 rounded-tr-none rounded-bl-none mb-5 mt-12 btn btn-ghost btn-active normal-case">
          Special Dishes
        </h2>

        <div className="grid md:grid-cols-3 container mx-auto gap-3 my-10">
          {limFoods.map((limfood) => (
            <LimFoodCard key={limfood._id} limfood={limfood}></LimFoodCard>
          ))}
        </div>
      </div>
      <StorySection></StorySection>
    </div>
  );
};

export default Home;
