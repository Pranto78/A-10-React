import React, { useState, useContext } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthContext";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log("User Logged In:", result.user);
      })
      .catch((error) => console.log(error));
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log("Google Login:", result.user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        {/* Info Section */}
        <div className="text-center lg:text-left text-white">
          <h1 className="text-5xl text-base-content font-bold mb-4">Login now!</h1>
          <p className="text-lg text-base-content">
            Welcome back! Login with your credentials or use Google for a quick
            login.
          </p>
        </div>

        {/* Form Section */}
        <div className="card bg-base-300 w-full max-w-sm shadow-2xl rounded-2xl">
          <div className="card-body">
            <form onSubmit={handleLogin} className="space-y-4">
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input input-bordered w-full"
                placeholder="Email"
                required
              />

              <label className="label">Password</label>
              <div className="relative">
                <input
                  name="password"
                  type={showPass ? "text" : "password"}
                  className="input input-bordered w-full pr-10"
                  placeholder="Password"
                  required
                />
                <span
                  onClick={() => setShowPass(!showPass)}
                  className="absolute top-3 right-3 cursor-pointer text-gray-500 hover:text-gray-700 transition-colors duration-300"
                >
                  {showPass ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              <div>
                <a
                  href="/forgot-password"
                  className="link link-hover text-sm text-gray-500"
                >
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="btn w-full text-white font-semibold bg-gradient-to-r from-[#3498db] to-[#9b59b6] border-none hover:opacity-90 transition-all duration-300 mt-2"
              >
                Login
              </button>
            </form>

            {/* Google Login */}
            <button
              onClick={handleGoogleSignIn}
              className="btn w-full flex items-center justify-center gap-2 bg-base-300 text-base-400 border-[#a747db] hover:bg-base-200 mt-4 transition-all duration-300"
            >
              <FcGoogle /> Continue with Google
            </button>

            {/* Link to Register */}
            <p className="text-center text-sm mt-4 text-gray-600">
              Don't have an account?{" "}
              <a
                href="/registration"
                className="link link-hover font-medium text-[#6e34db]"
              >
                Register here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
