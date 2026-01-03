import React, { useState, useContext } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Provider/AuthContext";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then(() => {
        toast.success("Login successful!", { duration: 2000 });
        setTimeout(() => navigate("/"), 2000);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("Google login successful!", { duration: 2000 });
        setTimeout(() => navigate("/"), 2000);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="hero min-h-screen flex items-center justify-center px-4">
      <Toaster position="top-center" />

      <div className="hero-content flex-col lg:flex-row-reverse gap-14 max-w-6xl w-full">
        {/* Info Section */}
        <div className="text-center lg:text-left max-w-md">
          <h1 className="text-5xl font-extrabold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3498db] to-[#9b59b6]">
              Welcome Back
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Sign in to access your Home Nest dashboard, manage properties, and
            explore premium real estate opportunities.
          </p>
        </div>

        {/* Form Section */}
        <div
          className="
            w-full max-w-sm
            rounded-3xl
            border border-white/20 dark:border-white/10
            bg-transparent dark:bg-gray-900/40
            backdrop-blur-xl
            shadow-[0_20px_60px_rgba(0,0,0,0.25)]
            transition-all duration-300
          "
        >
          <div className="card-body p-8">
            <h2 className="text-2xl font-bold text-center mb-6 text-base-content">
              Login to Home Nest
            </h2>

            <form onSubmit={handleLogin} className="space-y-5">
              {/* Email */}
              <div>
                <label className="label text-sm font-medium">Email</label>
                <input
                  name="email"
                  type="email"
                  className="
                    input input-bordered w-full
                    bg-transparent dark:bg-gray-800/60
                    focus:outline-none focus:ring-2 focus:ring-[#9b59b6]
                  "
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="label text-sm font-medium">Password</label>
                <div className="relative">
                  <input
                    name="password"
                    type={showPass ? "text" : "password"}
                    className="
                      input input-bordered w-full pr-10
                      bg-transparent dark:bg-gray-800/60
                      focus:outline-none focus:ring-2 focus:ring-[#9b59b6]
                    "
                    placeholder="Enter your password"
                    required
                  />
                  <span
                    onClick={() => setShowPass(!showPass)}
                    className="absolute top-3 right-3 cursor-pointer text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                  >
                    {showPass ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>

              <div className="flex justify-end">
                <a
                  href="/forgot-password"
                  className="text-sm text-gray-500 hover:text-[#9b59b6] transition"
                >
                  Forgot password?
                </a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="
                  btn w-full text-white font-semibold
                  bg-gradient-to-r from-[#3498db] to-[#9b59b6]
                  border-none
                  hover:opacity-90
                  shadow-lg
                  transition-all duration-300
                "
              >
                Login
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-3 my-6">
              <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700" />
              <span className="text-sm text-gray-500">OR</span>
              <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700" />
            </div>

            {/* Google Login */}
            <button
              onClick={handleGoogleSignIn}
              className="
                btn w-full flex items-center justify-center gap-2
                bg-transparent dark:bg-gray-800/60
                text-base-content
                dark:border-gray-700
                hover:shadow-md
                transition-all duration-300
              "
            >
              <FcGoogle className="text-xl" /> Continue with Google
            </button>

            {/* Register */}
            <p className="text-center text-sm mt-6 text-gray-600 dark:text-gray-400">
              Don't have an account?{" "}
              <a
                href="/registration"
                className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#3498db] to-[#9b59b6]"
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
