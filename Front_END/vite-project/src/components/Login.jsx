import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:4000/user/login", data);
      toast.success(res.data.message || "Login successful!");
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/");
      reset();
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-100 rounded-2xl shadow-xl">
          {/* Close Button */}
          <button
            type="button"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-gray-200"
            onClick={() => document.getElementById("my_modal_3").close()}
          >
            ✕
          </button>

          {/* Title */}
          <h2 className="font-bold text-xl mb-3 text-center text-gray-800 dark:text-gray-100">
            Login
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block font-medium mb-1">Email</label>
              <input
                {...register("email", { required: "Email is required" })}
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md 
                           bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 
                           outline-none focus:ring-2 focus:ring-pink-500 transition"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block font-medium mb-1">Password</label>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md 
                           bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 
                           outline-none focus:ring-2 focus:ring-pink-500 transition"
              />
              {errors.password && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-md transition font-medium"
            >
              Login
            </button>
          </form>

          {/* Footer */}
          <p className="mt-4 text-sm text-center">
            Not registered?{" "}
            <Link
              to="/signup"
              className="text-pink-500 hover:underline"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              Sign up
            </Link>
          </p>
        </div>
      </dialog>
    </div>
  );
}
