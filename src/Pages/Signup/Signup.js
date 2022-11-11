import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const Signup = () => {
  const [error, setError] = useState("");
  const { createUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        form.reset();
        setError("");
        navigate("/login");
        form.reset();
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  };
  // handle google sign in
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        const user = res.user;
        console.log(user);
        setError("");
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div>
      <div className="hero my-20">
        <div className="hero-content ">
          <div className="card flex-shrink-0 w-full max-w-xl mx-auto shadow-2xl bg-base-100 py-10 px-20">
            <form onSubmit={handleRegister} className="card-body">
              <h1 className="text-5xl font-bold text-center mb-5">Sign Up</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <p className="label-text-alt text-red-500">
                    {error ? "Invalid user" : ""}
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Sign Up"
                  className="btn bg-orange-700 hover:bg-orange-900 border-none w-full"
                />
              </div>
            </form>

            <button
              className="flex justify-center btn border-none normal-case mb-1"
              onClick={handleGoogleSignIn}
            >
              Continue With Google
              <FaGoogle className="font-bold text-2xl text-green-500 ml-1" />
            </button>
            <p className="mx-8">
              Already have an account?{" "}
              <Link to="/login" className="text-orange-500 font-bold ">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
