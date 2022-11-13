import React from "react";
import { FaEdit, FaWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyReviewRow = ({ myReview, handleDeleteReview }) => {
  const { _id, name, review, image, postDay } = myReview;
  //   console.log(name, review, image, postDay);
  return (
    <div className="my-10">
      <div className="overflow-x-auto shadow rounded-md py-3  w-full md:w-4/5 mx-auto  ">
        <table className="table w-full">
          <tbody>
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="rounded w-32">
                      <img src={image} alt="userimg" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{name}</div>
                  </div>
                </div>
              </td>
              <td>
                <div className="font-semibold">{review}</div>

                <p className="">{postDay}</p>
              </td>
              <td>
                <Link
                  to={`/update/${_id}`}
                  className="w-32 flex items-center rounded"
                >
                  <FaEdit className="font-bold text-3xl text-orange-900"></FaEdit>
                </Link>
              </td>
              <td>
                <button onClick={() => handleDeleteReview(_id)} className="">
                  <FaWindowClose className="font-bold text-3xl text-orange-900"></FaWindowClose>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviewRow;
