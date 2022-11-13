import { data } from "autoprefixer";
import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Contexts/AuthProvider";
import MyReviewRow from "./MyReviewRow";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);
  const [loader, setLoader] = useState(true);
  //   console.log(myReviews);

  useEffect(() => {
    fetch(`http://localhost:5000/myReviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setMyReviews(data);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user?.email]);

  const handleDeleteReview = (id) => {
    const procced = window.confirm("Are you sure to delete ?");
    console.log(alert);
    if (procced) {
      fetch(`http://localhost:5000/myReviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          //   console.log(data);
          if (data.deletedCount > 0) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your review has been deleted",
              showConfirmButton: true,
              timer: 1500,
            });
            const remaining = myReviews.filter((rev) => rev._id !== id);
            setMyReviews(remaining);
          }
        });
    }
  };

  //   const handleUpdateReview = (id) =>{
  //     fetch(`http://localhost:5000/myReviews/${id}`{
  //         method: 'PATCH',
  //         headers:{
  //             'content-type': 'application.json'
  //         }
  //         // body: JSON.stringify()
  //     })
  //   }

  //

  if (loader) {
    return "";
  } else if (myReviews.length) {
    return (
      <div>
        <div className="text-center font-bold text-orange-600 text-3xl">
          <h2>All Your Reviews Here!</h2>
        </div>
        {myReviews.map((myReview) => (
          <MyReviewRow
            key={myReview._id}
            myReview={myReview}
            handleDeleteReview={handleDeleteReview}
          ></MyReviewRow>
        ))}
      </div>
    );
  }
  return (
    <div
      className="flex justify-center items-center font-bold text-orange-600 text-4xl mb-16"
      style={{ height: "50vh" }}
    >
      <h2>No reviews were added!</h2>
    </div>
  );
};

export default MyReviews;
