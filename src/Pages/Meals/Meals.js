import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import SingleMeal from "../SingleMeal/SingleMeal";
import "./meals.css";

const Meals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/allMeals`)
      .then((res) => res.json())
      .then((data) => setMeals(data));
  }, []);
  if (meals.length === 0) {
    //also can use loader state
    return <div className="spinner"></div>;
  }
  return (
    <div className=" grid md:grid-cols-3 container mx-auto gap-3 my-10 ">
      <Helmet>
        <title>Meals</title>
      </Helmet>
      {meals.map((meal) => (
        <SingleMeal key={meal._id} meal={meal}></SingleMeal>
      ))}
    </div>
  );
};

export default Meals;
