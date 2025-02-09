"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

interface FormData {
  email: string;
  password: string;
}

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Login Data:", data);
    // Handle login logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white dark:bg-[#1B1A29] shadow-2xl rounded-2xl p-10 md:p-14 dark:border border-[#714EB6]">
        <h2 className="text-3xl font-bold text-center text-[#714EB6] dark:text-[#C4A5F7]">
          Login
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-6">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full mt-2 px-5 py-2 border border-[#714EB6] rounded-full bg-[#FAFAFA] dark:bg-[#26223B] dark:text-white focus:ring-2 focus:ring-[#714EB6] outline-none"
              placeholder="Enter Your Email"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", { required: "Password is required" })}
                className="w-full mt-2 px-5 py-2 border border-[#714EB6] rounded-full bg-[#FAFAFA] dark:bg-[#26223B] dark:text-white focus:ring-2 focus:ring-[#714EB6] outline-none"
                placeholder="**********"
              />
              <span
                className="absolute top-4 right-3 cursor-pointer text-gray-600 dark:text-gray-300"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible className="text-2xl" />
                ) : (
                  <AiOutlineEye className="text-2xl" />
                )}
              </span>
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#714EB6] hover:bg-[#5A3E9A] text-white p-2 rounded-full transition shadow-md"
          >
            Login
          </button>
        </form>

        {/* Forgot Password */}
        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
          <span
            className="text-[#714EB6] dark:text-[#C4A5F7] cursor-pointer hover:underline"
            onClick={() => router.push("/forgot-password")}
          >
            Forgot Password?
          </span>
        </p>

        {/* Redirect to Register */}
        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
          Don't have an account?{" "}
          <span
            className="text-[#714EB6] dark:text-[#C4A5F7] cursor-pointer hover:underline"
            onClick={() => router.push("/register")}
          >
            Register here
          </span>
        </p>
      </div>
    </div>
  );
}
