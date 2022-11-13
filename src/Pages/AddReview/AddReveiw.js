import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Contexts/AuthProvider";
import ReviewsByMealId from "./ReviewsByMealId/ReviewsByMealId";

const AddReveiw = ({ meal }) => {
  const { user } = useContext(AuthContext);
  const userImg = user?.photoURL;
  const [reviewsById, setReviewsById] = useState([]);

  const { _id, name, image } = meal;

  const postDate = new Date();
  const postDay = new Date().toDateString();
  const postTime = new Date().toLocaleTimeString();

  const handlePostReviews = (event) => {
    event.preventDefault();
    const form = event.target;
    const photoURL = form.photoURL.value;
    const review = form.review.value;

    const reviews = {
      userImage: user?.photoURL || photoURL,
      userEmail: user?.email,
      postDay,
      postDate,
      postTime,
      mealId: _id,
      name,
      image,
      review,
    };

    setReviewsById([reviews, ...reviewsById]);

    // POST review
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        form.reset();
        // console.log( data);
        if (data.acknowledged) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your review has submitted successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/reviewsByIds?id=${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setReviewsById(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [_id]);

  return (
    <div>
      {user ? (
        <div>
          <div className="text-center font-bold text-orange-600 text-4xl">
            <h2>Add Your Review</h2>
          </div>
          <div className="flex justify-center  space-x-3 bg-base-200 w-4/5 mx-auto mt-5 rounded-xl py-5">
            <div className="md:px-40 ">
              <h2 className="font-bold">{user?.displayName}</h2>
            </div>
            <div className="md:px-40">
              <div className="w-8">
                <img src={userImg} alt="user" className="mask mask-decagon" />
              </div>
            </div>
          </div>
          <form
            onSubmit={handlePostReviews}
            className=" bg-base-300 my-10 w-4/5 mx-auto py-10 rounded-lg "
          >
            <div className="grid md:grid-cols-2 sm:grid-cols-1 w-full">
              <input
                type="text"
                placeholder="item name"
                name="name"
                className="input input-bordered input-accent w-full max-w-xs mx-auto m-5"
                defaultValue={name}
                required
              />

              <input
                type="text"
                placeholder="user photoURL"
                name="photoURL"
                className="input input-bordered input-accent w-full max-w-xs mx-auto m-5"
                defaultValue={user?.photoURL}
                required
              />
            </div>
            <div className=" w-4/5 mx-auto">
              <textarea
                className="textarea textarea-success w-full my-5 py-10"
                placeholder="Your Review"
                name="review"
              ></textarea>
              <br />
              <input
                type="submit"
                value="submit"
                className="bg-warning hover:bg-yellow-500 cursor-pointer font-semibold text-white p-3 rounded w-full my-5 "
              />
            </div>
          </form>
        </div>
      ) : (
        <div className="text-center font-bold text-4xl my-10">
          <h2 className="text-black">
            To Add Review Please
            <Link to={`/login`} className=" text-orange-600 mx-2">
              Login
            </Link>
          </h2>
        </div>
      )}

      {/* specific meal reviews by mealId  */}
      {reviewsById.map((reviewById) => (
        <ReviewsByMealId
          key={reviewById._id}
          reviewById={reviewById}
        ></ReviewsByMealId>
      ))}
    </div>
  );
};

export default AddReveiw;
