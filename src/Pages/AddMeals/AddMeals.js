import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddMeals = () => {
  const navigate = useNavigate();
  //
  const handleAddMeal = (event) => {
    event.preventDefault();
    const form = event.target;
    const image = form.image.value;
    const name = form.name.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const rating = form.rating.value;
    const made_by = form.made_by.value;
    const description = form.description.value;

    const meal = {
      name,
      made_by,
      price,
      quantity,
      rating,
      image,
      description,
    };

    fetch(`http://localhost:5000/postMeal`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(meal),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        if (data.acknowledged) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Meal added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
          navigate("/");
        }
      });
  };

  return (
    <form onSubmit={handleAddMeal}>
      <Helmet>
        <title>AddMeal</title>
      </Helmet>
      <div className="bg-base-200 w-5/6 mx-auto my-10 p-8 pb-10 rounded-md">
        <div className="text-center font-bold text-orange-600 text-3xl">
          <h2>Add Meal!</h2>
        </div>
        <div className="my-1">
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Iamge</span>
            </label>
            <input
              type="text"
              placeholder="iamge URL"
              name="image"
              className="input input-bordered input-accent w-full "
            />
          </div>
        </div>
        <div className="my-1">
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Meal Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              name="name"
              className="input input-bordered input-accent w-full "
            />
          </div>
        </div>
        <div className="my-1">
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              placeholder="price"
              name="price"
              className="input input-bordered input-accent w-full "
            />
          </div>
        </div>
        <div className="my-1">
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input
              type="text"
              placeholder="quantity"
              name="quantity"
              className="input input-bordered input-accent w-full "
            />
          </div>
        </div>
        <div className="my-1">
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="text"
              placeholder="rating"
              name="rating"
              className="input input-bordered input-accent w-full "
            />
          </div>
        </div>
        <div className="my-1">
          <div className="form-control ">
            <label className="label">
              <span className="label-text">made_by</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              name="made_by"
              className="input input-bordered input-accent w-full "
            />
          </div>
        </div>
        <div className="my-1">
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              type="text"
              placeholder="Type here"
              name="description"
              className="input input-bordered input-accent w-full h-20"
            />
          </div>
        </div>

        <div>
          <input
            type="submit"
            value="submit"
            className="bg-warning hover:bg-yellow-500 cursor-pointer font-semibold text-white p-3 rounded w-full mt-5 "
          />
        </div>
      </div>
    </form>
  );
};

export default AddMeals;
