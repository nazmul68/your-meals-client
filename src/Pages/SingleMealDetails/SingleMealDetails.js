import { useLoaderData } from "react-router-dom";

import AddReveiw from "../AddReview/AddReveiw";

const SingleMealDetails = () => {
  const meal = useLoaderData();
  // console.log(meal);
  const { name, price, quantity, rating, image, description, made_by } = meal;

  return (
    <div>
      <div className="card w-4/5 mx-auto bg-base-200 shadow-xl mb-20">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl w-11/12" />
        </figure>
        <div className="card-body items-center text-center">
          <div className="w-11/12">
            <h2 className="card-title text-3xl text-orange-600">
              <span className="text-orange-600">{name}</span>
            </h2>
            <p className="text-left font-bold">
              price: <span className="text-orange-600"> {price} tk</span>
            </p>
            <p className="text-left font-bold">
              quantity: <span className="text-orange-600">{quantity}</span>{" "}
            </p>
            <p className="text-left font-bold">
              ratings: <span className="text-orange-600">{rating}</span>{" "}
            </p>
            <p className="text-left font-bold">
              made_by: <span className="text-orange-600">{made_by}</span>
            </p>
            <p className="text-left font-bold">
              description: <span className="font-semibold"> {description}</span>
            </p>
            <p className="text-left"></p>
          </div>
        </div>
      </div>
      <AddReveiw meal={meal}></AddReveiw>
    </div>
  );
};

export default SingleMealDetails;
