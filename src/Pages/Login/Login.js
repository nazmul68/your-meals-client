import React, { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        form.reset();
        setError("");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
    setError("");
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
            <form onSubmit={handleLogin} className="card-body">
              <h1 className="text-5xl font-bold text-center mb-5">Login</h1>

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
                  value="Login"
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
              <Link to="/signup" className="text-orange-500 font-bold ">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
