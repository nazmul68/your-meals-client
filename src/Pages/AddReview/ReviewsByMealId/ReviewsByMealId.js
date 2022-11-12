import React from "react";

const ReviewsByMealId = ({ reviewById }) => {
  //   console.log(reviewById);
  const { mealId, image, name, userImage, review, userEmail } = reviewById;
  return (
    <section>
      {mealId ? (
        <div className="my-10">
          <div className="overflow-x-auto shadow rounded-md py-3  w-4/6 mx-auto transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 ">
            <table className="table w-full">
              <tbody>
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="rounded-full w-12">
                          <img src={userImage} alt="userimg" />
                        </div>
                      </div>
                      <div>
                        <div>{userEmail}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="font-bold">{name}</div>

                    <p className="">{review}</p>
                  </td>
                  <td>
                    <div className="w-32 flex items-center rounded">
                      <img src={image} alt="item img" className="rounded" />
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
