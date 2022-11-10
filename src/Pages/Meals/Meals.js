import React, { useEffect, useState } from "react";

const Meals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/allMeals`)
      .then((res) => res.json())
      .then((data) => setMeals(data));
  }, []);
  return (
    <div>
      <h2>{meals.length}</h2>
    </div>
  );
};

export default Meals;
