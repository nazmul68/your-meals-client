import React, { useEffect, useState } from "react";
import SingleMeal from "../SingleMeal/SingleMeal";

const Meals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/allMeals`)
      .then((res) => res.json())
      .then((data) => setMeals(data));
  }, []);
  return (
    <div className="grid md:grid-cols-3 container mx-auto gap-3 my-10">
      {meals.map((meal) => (
        <SingleMeal key={meal._id} meal={meal}></SingleMeal>
      ))}
    </div>
  );
};

export default Meals;
