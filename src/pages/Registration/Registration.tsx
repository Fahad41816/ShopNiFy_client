/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { useRegisterUserMutation } from "../../Redux/feature/auth/authApi";
import toast from "react-hot-toast";

const Registration = () => {


  const Navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  }: any = useForm();

  // Watch password field value for validation against confirmPassword
  const password = watch("password");

  const [Register, { isLoading }] = useRegisterUserMutation();

  const notify = () => toast.success("Register Success.");
  const ErrorNotify = (err: string) =>
    toast.error(err, {
      position: "top-center",
    });

  const onSubmit = async (data: {
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    comfirmPassword: string;
    role: "user" | "vendor";
  }) => {
    try {
      console.log("Form Submitted: ", data);

      const UserData = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        role: data.role,
        password: data.password,
      };

      const Responce: any = await Register(UserData);

      if (Responce.error) {
        ErrorNotify(Responce?.error?.data?.message);
        reset();
      } else {
        notify();
        reset();
        Navigate('/Login')
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
          Create an Account
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Join us and explore the possibilities
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-2 items-center justify-between">
            <div className="mb-4 h-max">
              <label
                className="block text-gray-700 font-medium mb-1"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                type="text"
                {...register("firstName", {
                  required: "First name is required",
                })}
                className="w-full rounded-none px-4 py-2 border focus:ring focus:ring-blue-300 focus:outline-none"
                placeholder="First name"
              />
              {errors.firstName && (
                <span className="text-sm text-red-400">
                  {errors.firstName.message}
                </span>
              )}
            </div>
            <div className="mb-4 h-max">
              <label
                className="block text-gray-700 font-medium mb-1"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                type="text"
                {...register("lastName", { required: "Last name is required" })}
                className="w-full px-4 py-2 border focus:ring focus:ring-blue-300 focus:outline-none"
                placeholder="Last name"
              />
              {errors.lastName && (
                <span className="text-sm text-red-400">
                  {errors.lastName.message}
                </span>
              )}
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full px-4 py-2 border focus:ring focus:ring-blue-300 focus:outline-none"
              placeholder="Enter your email"
            />
            {errors.email && (
              <span className="text-sm text-red-400">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Password Field */}
          <div className="mb-4 relative">
            <label
              className="block text-gray-700 font-medium mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", { required: "Password is required" })}
              className="w-full px-4 py-2 border focus:ring focus:ring-blue-300 focus:outline-none"
              placeholder="Create a password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-12 right-3 transform -translate-y-2/4 text-gray-500 focus:outline-none"
            >
              {showPassword ? (
                <FaEyeSlash className="text-lg" />
              ) : (
                <FaEye className="text-lg" />
              )}
            </button>
            {errors.password && (
              <span className="text-sm text-red-400">
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Confirm Password Field */}
          <div className="mb-6 relative">
            <label
              className="block text-gray-700 font-medium mb-1"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value: string) =>
                  value === password || "Passwords do not match",
              })}
              className="w-full px-4 py-2 border focus:ring focus:ring-blue-300 focus:outline-none"
              placeholder="Confirm your password"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute top-12 right-3 transform -translate-y-2/4 text-gray-500 focus:outline-none"
            >
              {showConfirmPassword ? (
                <FaEyeSlash className="text-lg" />
              ) : (
                <FaEye className="text-lg" />
              )}
            </button>
            {errors.confirmPassword && (
              <span className="text-sm text-red-400">
                {errors?.confirmPassword?.message}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-1"
              htmlFor="role"
            >
              Role
            </label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="user"
                  {...register("role", { required: "Please select a role" })}
                  className="radio radio-primary mr-2"
                  defaultChecked
                />
                User
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="vendor"
                  {...register("role", { required: "Please select a role" })}
                  className="radio radio-primary mr-2"
                />
                Vendor
              </label>
            </div>
            {errors.role && (
              <span className="text-sm text-red-400">
                {errors.role.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-2 bg-gradient-to-r from-[#5E17EB] hover:to-[#5E17EB] to-[#9a70ee] hover:from-[#7f59cc] text-white rounded-lg transition font-medium"
          >
            Sign Up{" "}
            {isLoading && (
              <span className="loading loading-spinner loading-md"></span>
            )}
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-6">
          Already have an account?{" "}
          <Link to="/Login" className="text-blue-500 hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Registration;
