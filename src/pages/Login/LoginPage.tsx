import { Link } from "react-router"
import Google from '../../assets/logo/Google.png'
 
const LoginPage = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="bg-white rounded-lg shadow-md w-full max-w-md p-6">
    <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">Welcome Back!</h2>
    <p className="text-center text-gray-500 mb-6">Login to continue</p>

    {/* Google & Facebook Auth */}
    <div className="flex flex-col space-y-3 mb-6">
      <button className="flex items-center justify-center w-full py-2 border rounded-lg hover:shadow-md transition">
        <img
          src={Google}
          alt="Google"
          className="w-5 h-5 mr-3"
        />
        <span className="text-gray-700 font-medium">Continue with Google</span>
      </button>
      <button className="flex items-center justify-center w-full py-2 border rounded-lg hover:shadow-md transition">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/512px-F_icon.svg.png"
          alt="Facebook"
          className="w-5 h-5 mr-3"
        />
        <span className="text-gray-700 font-medium">Continue with Facebook</span>
      </button>
    </div>

    <div className="relative flex items-center justify-center my-6">
      <span className="absolute bg-white px-3 text-gray-500">or</span>
      <div className="w-full h-px bg-gray-300"></div>
    </div>

    {/* Login Form */}
    <form>
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
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
          placeholder="Enter your password"
        />
      </div>
      <div className="text-right mb-4">
        <a href="#" className="text-blue-500 text-sm hover:underline">Forgot password?</a>
      </div>
      <button
        type="submit"
        className="w-full btn bg-gradient-to-r from-blue-700 to-blue-400 focus:right-2  hover text-white"
      >
        Login
      </button>
    </form>

    <p className="text-center text-gray-500 text-sm mt-6">
      Don't have an account?{" "}
      <Link to={'/Registration'} className="text-blue-500 hover:underline">Sign up</Link>
    </p>
  </div>
</section>

  )
}

export default LoginPage