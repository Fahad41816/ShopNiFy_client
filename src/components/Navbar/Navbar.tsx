import TopNav from "./TopNav";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Logo from "../../assets/logo/logo.png";
import {
  FaBars,
  FaCamera,
  FaDesktop,
  FaGamepad,
  FaLaptop,
  FaSignInAlt,
  FaTimes,
  FaUserPlus,
} from "react-icons/fa";

import { AiFillAudio, AiOutlineRetweet } from "react-icons/ai";
import { useState } from "react";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdOutlineWatch } from "react-icons/md";
import { IoTv } from "react-icons/io5";
import { Link } from "react-router";
const Navbar = () => {
  const [IsCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);

  const handleCategoryMenuShow = () => {
    if (IsCategoryMenuOpen) {
      setIsCategoryMenuOpen(false);
    } else {
      setIsCategoryMenuOpen(true);
    }
  };

  return (
    <section className="w-full bg-slate-50">
      <TopNav />
      {/* center navbar  */}
      <div className="  max-w-7xl mx-auto flex items-center justify-between z-20 bg-slate-50">
        {/* logo  */}
        <div>
          <Link to={"/"}>
            <div data-aos="zoom-in">
              {" "}
              <LazyLoadImage
                alt={"logo"}
                src={Logo} // use normal <img> attributes as props
                width={160}
              />
            </div>
          </Link>
        </div>
        {/* search option  */}
        <div>
          <div className="w-[700px] flex items-center border border-gray-300 rounded-full overflow-hidden shadow-md">
            {/* Search Input */}
            <input
              type="text"
              placeholder="Search our product"
              className="px-4 py-4 flex-1 outline-none text-gray-700"
            />

            {/* Dropdown */}
            <select className="w-[200px] border border-l-2 select rounded-none  max-w-xs">
              <option value="all" disabled selected>
                All Categories
              </option>
              <option value="shirts">Shirts</option>
              <option value="hoodies">Hoodies</option>
              <option value="accessories">Accessories</option>
            </select>

            {/* Search Button */}
            <button className="bg-blue-500 px-6 py-4 text-white font-medium hover:bg-blue-600">
              <span className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35M16.65 13A6.65 6.65 0 1110 6.35 6.65 6.65 0 0116.65 13z"
                  />
                </svg>
                Search
              </span>
            </button>
          </div>
        </div>
        {/* Proffile, cart, compare options options */}
        <div className="flex gap-4 items-center justify-center ">
          {/* profile  */}
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="w-max h-max m-1">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 cursor-pointer"
                data-aos="zoom-in"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>{" "}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100  rounded-sm z-[1] w-52 p-2 -right-10 shadow"
            >
              {/* <FaSignOutAlt /> */}
              <li className="border-b">
                <Link to={"/Login"}>
                  <FaSignInAlt /> Login
                </Link>
              </li>
              <li>
                <Link to={"/Registration"}>
                  <FaUserPlus /> Register
                </Link>
              </li>
            </ul>
          </div>

          {/* compare  */}
          <div data-aos="zoom-in" className="indicator">
            <Link to={'/Compares'}>
            <span className="indicator-item badge badge-primary text-white">
              0
            </span>
            <div className="grid h-8 w-8 place-items-center">
              <AiOutlineRetweet className="text-2xl cursor-pointer" />
            </div>
            </Link>
          </div>

          {/* wishlist  */}
          <div data-aos="zoom-in" className="indicator">
            <Link to={"/Wishlist"}>
              <span className="indicator-item badge badge-primary text-white">
                0
              </span>
              <div
                data-aos="zoom-in"
                className="grid h-8 w-8 place-items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </div>
            </Link>
          </div>

          {/* Cart Page  */}
          <div data-aos="zoom-in" className="indicator">
            <Link to={"/Cart"}>
              <span className="indicator-item badge badge-primary text-white">
                0
              </span>
              <div className="grid h-8 w-8 place-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* bottom navbar  */}
      <div className="text-white bg-[#2d3436] p-2 ">
        <div className="max-w-7xl mx-auto flex items-center justify-start ">
          {/* Shop category button  */}
          <div className="relative ">
            <button
              onClick={handleCategoryMenuShow}
              className="btn rounded-none border-none flex items-center px-6 py-3   bg-gradient-to-r from-[#5E17EB] to-blue-500 text-white font-medium shadow-md hover:shadow-lg transition-shadow"
            >
              {IsCategoryMenuOpen ? (
                <FaTimes className="text-xl h-5 w-5 mr-2" />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 mr-2 text-white`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
              SHOP BY CATEGORIES
            </button>

            <div
              className={`w-full absolute z-50 overflow-hidden  bg-slate-50 text-black transition-all duration-500 ${
                IsCategoryMenuOpen
                  ? "max-h-[1000px] opacity-100"
                  : "max-h-0 opacity-50"
              }`}
            >
              <div className="p-2 border-b hover:bg-slate-100 cursor-pointer flex items-center justify-between">
                <p className="flex items-center justify-center gap-2">
                  <FaLaptop className="text-xl" /> Laptop{" "}
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
              <div className="p-2 border-b hover:bg-slate-100 cursor-pointer flex items-center justify-between">
                <p className="flex items-center justify-center gap-2">
                  <FaDesktop className="text-xl" />
                  PC & desktop{" "}
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>{" "}
              </div>
              <div className="p-2 border-b hover:bg-slate-100 cursor-pointer flex items-center justify-between">
                <p className="flex items-center justify-center gap-2">
                  <AiFillAudio className="text-xl" /> Audio Devices{" "}
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>{" "}
              </div>
              <div className="p-2 border-b hover:bg-slate-100 cursor-pointer flex items-center justify-between">
                <p className="flex items-center justify-center gap-2">
                  <IoIosPhonePortrait className="text-xl" /> Smart Phone{" "}
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>{" "}
              </div>
              <div className="p-2 border-b hover:bg-slate-100 cursor-pointer flex items-center justify-between">
                <p className="flex items-center justify-center gap-2">
                  <MdOutlineWatch className="text-xl" /> Smart watch{" "}
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>{" "}
              </div>
              <div className="p-2 border-b hover:bg-slate-100 cursor-pointer flex items-center justify-between">
                <p className="flex items-center justify-center gap-2">
                  <FaGamepad className="text-xl" />
                  Gaming Gear{" "}
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>{" "}
              </div>
              <div className="p-2 border-b hover:bg-slate-100 cursor-pointer flex items-center justify-between">
                <p className="flex items-center justify-center gap-2">
                  <IoTv className="text-xl" />
                  TV & Video{" "}
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>{" "}
              </div>
              <div className="p-2 border-b hover:bg-slate-100 cursor-pointer flex items-center justify-between">
                <p className="flex items-center justify-center gap-2">
                  <FaCamera className="text-xl" /> Cemera{" "}
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>{" "}
              </div>
            </div>
          </div>

          {/* Manu Options  */}
          <div className="flex ml-32 gap-5 items-center justify-start">
            <Link to={'/'}><div className="cursor-pointer hover:text-blue-300 hover:underline font-semibold">
              HOME
            </div></Link>
            <Link to={'/Collections'}><div className="cursor-pointer hover:text-blue-300 hover:underline font-semibold">
              ALL COLLECTIONS
            </div></Link>
            <Link to={'/Contact'}><div className="cursor-pointer hover:text-blue-300 hover:underline font-semibold">
              CONTACT US
            </div></Link>
            <Link to={'/About'}><div className="cursor-pointer hover:text-blue-300 hover:underline font-semibold">
              ABOUT US
            </div></Link>
            <div className="cursor-pointer hover:text-blue-300 hover:underline font-semibold">
              SELLER PAGE
            </div>
            <div className="cursor-pointer hover:text-blue-300 hover:underline font-semibold">
              MORE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
