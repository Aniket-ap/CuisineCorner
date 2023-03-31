import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/context/useAuth";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();

  const handleSubmit = () => {
    let data = {
      name,
      email,
    };
    localStorage.setItem("auth", JSON.stringify(data));
    setAuth({ ...auth, user: data });
    navigate("/");
  };

  return (
    <>
      <div className="relative">
        <div className="flex items-center justify-center my-4">
          <div className="flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8 sm:py-16 lg:py-24 bg-white rounded-md">
            <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                Sign in
              </h2>
              <p className="mt-2 text-base text-gray-600">
                Don&apos;t have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-orange-600 transition-all duration-200 hover:text-orange-700 hover:underline focus:text-orange-700"
                >
                  Create a free account
                </Link>
              </p>

              <form className="mt-8" onSubmit={handleSubmit}>
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor=""
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Your Name{" "}
                    </label>
                    <div className="mt-2.5">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 py-2 px-3 text-sm"
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      ></input>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Email{" "}
                      </label>
                    </div>
                    <div className="mt-2.5">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 py-2 px-3 text-sm"
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      ></input>
                    </div>
                  </div>

                  <div>
                    <button className="w-full inline-flex items-center justify-center rounded-md bg-orange-500 px-3.5 py-2.5 text-base font-semibold leading-7 text-white hover:bg-orange-600">
                      Sign in
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
