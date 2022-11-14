import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider";

const ReviewsByMealId = ({ reviewById }) => {
  //   console.log(reviewById);
  const { user } = useContext(AuthContext);
  const userImage = user?.photoURL;
  const { mealId, image, name, review, userEmail } = reviewById;

  return (
    <section>
      {mealId ? (
        <div className="my-10">
          <div className="overflow-x-auto shadow rounded-md w-4/6 mx-auto transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 ">
            <table className="table w-full">
              <tbody>
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-decagon w-12">
                          <img src={userImage} alt="userimg" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{user?.displayName}</div>
                        <div>{userEmail}</div>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className="font-bold">{name}</div>

                    <p className="">{review}</p>
                  </td>
                  <td>
                    <div className="flex items-center mask mask-diamond  w-32">
                      <img src={image} alt="item img" className="" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <h1 className="text-3xl font-bold my-20">No Reviws here</h1>
      )}
    </section>
  );
};

export default ReviewsByMealId;
