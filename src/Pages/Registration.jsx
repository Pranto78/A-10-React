import React, { use, useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";

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
      .then((result) => {
        return updateUserProfile(name, photoURL);
      })
      .then(() => {
        console.log("✅ Profile updated successfully!");
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
    <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl mt-10 p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Register</h1>

      <form onSubmit={handleRegister} className="card-body space-y-3">
        <label className="label">Name</label>
        <input
          name="name"
          type="text"
          className="input"
          required
          placeholder="Your Name"
        />

        <label className="label">Email</label>
        <input
          name="email"
          type="email"
          className="input"
          required
          placeholder="Email"
        />

        <label className="label">photoURL</label>
        <input
          name="photoURL"
          type="text"
          className="input"
          required
          placeholder="Photo URL"
        />

        <label className="label">Password</label>
        <div className="relative">
          <input
            name="password"
            type={showPass ? "text" : "password"}
            className="input w-full pr-10"
            required
            placeholder="Password"
          />
          <span
            onClick={() => setShowPass(!showPass)}
            className="absolute top-3 right-3 cursor-pointer"
          >
            {showPass ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <button className="btn btn-neutral mt-4" type="submit">
          Register
        </button>
      </form>

      {/* Google Login */}
      <button
        onClick={handleGoogleSignIn}
        className="btn bg-white text-black border border-[#e5e5e5] w-11/12 mx-auto flex items-center gap-2 justify-center mt-2 mb-4"
      >
        <FaGoogle /> Continue with Google
      </button>

      {/* Link to Login */}
      <p className="text-center text-sm pb-3">
        Already have an account?{" "}
        <a href="/login" className="link link-hover font-medium">
          Login here
        </a>
      </p>
    </div>
  );
};

export default Register;
