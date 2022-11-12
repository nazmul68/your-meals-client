import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);
  console.log(myReviews);
  const { name, review, image, postDay } = myReviews;
  console.log(name, review, image, postDay);

  useEffect(() => {
    fetch(`http://localhost:5000/myReviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyReviews(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [user?.email]);
  return (
    <div>
      {/* <div className="my-10">
        <div className="overflow-x-auto shadow rounded-md py-3  w-4/6 mx-auto transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 ">
          <table className="table w-full">
            <tbody>
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="rounded-full w-12">
                        <img src={image} alt="userimg" />
                      </div>
                    </div>
                    <div>
                      <div>{name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="font-bold">{name}</div>

                  <p className="">{review}</p>
                </td>
                <td>
                  <div className="w-32 flex items-center rounded"></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> */}
    </div>
  );
};

export default MyReviews;
