import React from "react";
import Navbar from "./navbar";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:4000/user/signup", data);
      toast.success(res.data.message || "Signup successful");
      localStorage.setItem("user", JSON.stringify(res.data));
      reset();
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup failed");
      console.error("Signup Error:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-slate-900">
      <Navbar />
      <Toaster position="top-center" reverseOrder={false} />

      {/* Centered form */}
      <div className="flex flex-1 items-center justify-center px-4 py-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-md bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg space-y-5"
        >
          <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-2">
            Create Your Account
          </h2>

          <fieldset className="border border-gray-300 dark:border-gray-600 p-4 rounded-lg">
            <legend className="text-lg font-medium text-gray-700 dark:text-gray-200 px-2">
              Account Details
            </legend>

            {/* Username */}
            <label className="block mt-3">
              <span className="text-gray-700 dark:text-gray-300">Username</span>
              <input
                type="text"
                {...register("username", { required: "Username is required" })}
                className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-transparent focus:ring-2 focus:ring-pink-500 outline-none"
              />
              {errors.username && (
                <span className="text-red-500 text-sm">
                  {errors.username.message}
                </span>
              )}
            </label>

            {/* Email */}
            <label className="block mt-3">
              <span className="text-gray-700 dark:text-gray-300">Email</span>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-transparent focus:ring-2 focus:ring-pink-500 outline-none"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </label>

            {/* Password */}
            <label className="block mt-3">
              <span className="text-gray-700 dark:text-gray-300">Password</span>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-transparent focus:ring-2 focus:ring-pink-500 outline-none"
              />
              {errors.password && (
                <span className="text-red-500 text-sm">
                  {errors.password.message}
                </span>
              )}
            </label>
          </fieldset>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700 transition font-medium"
          >
            Sign Up
          </button>

          {/* Login redirect */}
          <p className="text-center text-sm text-gray-600 dark:text-gray-300">
            Already have an account?{" "}
            <span
              className="text-pink-500 cursor-pointer hover:font-semibold transition"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
