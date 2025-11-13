import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const { createUser, signInWithGoogle, updateUserProfile } =
    useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photoURL.value;
    const password = e.target.password.value;

    createUser(email, password)
      .then(() => updateUserProfile(name, photoURL))
      .then(() => console.log("✅ Profile updated successfully!"))
      .catch((error) => console.log(error));
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => console.log("Google Login:", result.user))
      .catch((error) => console.log(error));
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="card bg-base-300 w-full max-w-sm shadow-2xl rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-base-400">
          Register
        </h1>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="label text-gray-700">Name</label>
            <input
              name="name"
              type="text"
              className="input input-bordered w-full"
              required
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="label text-gray-700">Email</label>
            <input
              name="email"
              type="email"
              className="input input-bordered w-full"
              required
              placeholder="Email"
            />
          </div>

          <div>
            <label className="label text-gray-700">Photo URL</label>
            <input
              name="photoURL"
              type="text"
              className="input input-bordered w-full"
              required
              placeholder="Photo URL"
            />
          </div>

          <div>
            <label className="label text-gray-700">Password</label>
            <div className="relative">
              <input
                name="password"
                type={showPass ? "text" : "password"}
                className="input input-bordered w-full pr-10"
                required
                placeholder="Password"
              />
              <span
                onClick={() => setShowPass(!showPass)}
                className="absolute top-3 right-3 cursor-pointer text-gray-500 hover:text-gray-700 transition-colors duration-300"
              >
                {showPass ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="btn w-full text-white font-semibold bg-gradient-to-r from-[#3498db] to-[#9b59b6] border-none hover:opacity-90 transition-all duration-300 mt-4"
          >
            Register
          </button>
        </form>

        {/* Google Login */}
        <button
          onClick={handleGoogleSignIn}
          className="btn w-full flex items-center justify-center gap-2 bg-base-300 text-base-400 border-[#a747db] hover:bg-base-200 mt-4 transition-all duration-300"
        >
          <FcGoogle /> Continue with Google
        </button>

        {/* Link to Login */}
        <p className="text-center text-sm mt-4 text-gray-600">
          Already have an account?{" "}
          <a
            href="/login"
            className="link link-hover font-medium text-[#3498db]"
          >
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
