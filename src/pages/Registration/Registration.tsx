import { useState } from "react";
import { Link } from "react-router";

 

const Registration = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">Create an Account</h2>
      <p className="text-center text-gray-500 mb-6">Join us and explore the possibilities</p>

      <form>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1" htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
            placeholder="Enter your full name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
            placeholder="Enter your email"
          />
        </div>
        {/* Password Field with Show/Hide */}
        <div className="mb-4 relative">
          <label className="block text-gray-700 font-medium mb-1" htmlFor="password">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
            placeholder="Create a password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-2/4 right-3 transform -translate-y-2/4 text-gray-500 focus:outline-none"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        {/* Confirm Password Field with Show/Hide */}
        <div className="mb-6 relative">
          <label className="block text-gray-700 font-medium mb-1" htmlFor="confirm-password">
            Confirm Password
          </label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirm-password"
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
            placeholder="Confirm your password"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute top-2/4 right-3 transform -translate-y-2/4 text-gray-500 focus:outline-none"
          >
            {showConfirmPassword ? "Hide" : "Show"}
          </button>
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-medium"
        >
          Sign Up
        </button>
      </form>

      <p className="text-center text-gray-500 text-sm mt-6">
        Already have an account?{" "}
        <Link to={'/Login'} className="text-blue-500 hover:underline">Log In</Link>
      </p>
    </div>
  </section>

  )
}

export default Registration