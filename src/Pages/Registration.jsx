import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router";

const Register = () => {
  const { createUser, signInWithGoogle, updateUserProfile } =
    useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const { name, email, photoURL, password } = e.target;

    createUser(email.value, password.value)
      .then(() => updateUserProfile(name.value, photoURL.value))
      .then(() => {
        toast.success("✨ Registration successful!");
        setTimeout(() => navigate("/login"), 1500);
      })
      .catch((error) => toast.error(error.message));
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("🚀 Signed in with Google");
        setTimeout(() => navigate("/"), 1200);
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <Toaster position="top-center" />

      {/* Glow background */}
      

      {/* Card */}
      <div className="relative w-full max-w-sm rounded-3xl p-[2px] bg-transparent shadow-2xl">
        <div className="rounded-3xl bg-base-200/80 backdrop-blur-xl p-8">
          <h1 className="text-3xl font-bold text-center mb-2">
            Create Account ✨
          </h1>
          <p className="text-center text-sm opacity-70 mb-6">
            Join HomeNest and explore premium listings
          </p>

          <form onSubmit={handleRegister} className="space-y-4">
            <Input label="Full Name" name="name" placeholder="John Doe" />
            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="you@email.com"
            />
            <Input
              label="Photo URL"
              name="photoURL"
              placeholder="https://photo..."
            />

            {/* Password */}
            <div>
              <label className="text-sm font-medium opacity-80">Password</label>
              <div className="relative mt-1">
                <input
                  name="password"
                  type={showPass ? "text" : "password"}
                  className="input input-bordered w-full pr-10 focus:ring-2 focus:ring-purple-500"
                  required
                  placeholder="••••••••"
                />
                <span
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-3 cursor-pointer opacity-60 hover:opacity-100 transition"
                >
                  {showPass ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="btn w-full rounded-xl text-white font-semibold
              bg-gradient-to-r from-[#3498db] to-[#9b59b6]
              hover:scale-[1.02] transition-all duration-300 shadow-lg"
            >
              Create Account
            </button>
          </form>

          {/* Divider */}
          <div className="divider my-6 text-xs opacity-60">OR</div>

          {/* Google */}
          <button
            onClick={handleGoogleSignIn}
            className="btn w-full rounded-xl bg-base-100 hover:bg-base-300
            flex items-center gap-2 transition-all duration-300"
          >
            <FcGoogle className="text-xl" />
            Continue with Google
          </button>

          <p className="text-center text-sm mt-6 opacity-70">
            Already have an account?{" "}
            <a
              href="/login"
              className="font-medium bg-gradient-to-r from-[#3498db] to-[#9b59b6]
              bg-clip-text text-transparent hover:underline"
            >
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

const Input = ({ label, ...props }) => (
  <div>
    <label className="text-sm font-medium opacity-80">{label}</label>
    <input
      {...props}
      className="input input-bordered w-full mt-1 focus:ring-2 focus:ring-purple-500 transition"
      required
    />
  </div>
);

export default Register;
