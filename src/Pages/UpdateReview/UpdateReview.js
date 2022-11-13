import toast, { Toaster } from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateReview = () => {
  const storedReviews = useLoaderData();
  const storedReview = storedReviews.find((review) => review);
  const { _id, name, review, image } = storedReview;

  const navigate = useNavigate();

  const handleUpdateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const review = form.review.value;
    const updateReview = { review };

    // console.log(user);
    fetch(`http://localhost:5000/myReviews/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateReview),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Review Updated Successfully");
          setTimeout(() => {
            navigate(`/myReviews`);
          }, 1000);
        }
      });
  };

  return (
    <div>
      <Toaster></Toaster>
      <div>
        <div className="text-center font-bold text-orange-600 text-4xl">
          <h2>Please Update Your Review</h2>
        </div>

        <form
          onSubmit={handleUpdateUser}
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
              readOnly
            />

            <input
              type="text"
              placeholder="user photoURL"
              name="photoURL"
              className="input input-bordered input-accent w-full max-w-xs mx-auto m-5"
              defaultValue={image}
              required
              readOnly
            />
          </div>

          <div className=" w-4/5 mx-auto">
            <textarea
              className="textarea textarea-success w-full my-5 py-10"
              placeholder="Your Review"
              name="review"
              defaultValue={review}
            ></textarea>
            <br />
            <input
              type="submit"
              value="update"
              className="bg-warning hover:bg-yellow-500 cursor-pointer font-semibold text-white p-3 rounded w-full my-5 "
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateReview;
