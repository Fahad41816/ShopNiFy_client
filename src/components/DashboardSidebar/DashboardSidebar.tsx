import { CiShop } from "react-icons/ci";
import { FaBorderStyle } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { MdAdd, MdDashboard } from "react-icons/md";
import { Link } from "react-router";

const DashboardSidebar = () => {
  return (
    <section className="w-52 border-r h-screen overflow-y-scroll  bg-[#3498db]">
      <ul className="flex items-start justify-start flex-col">
        <Link to={'/Dashboard'} className="flex items-center justify-start gap-2 border-b-2 text-lg p-3 w-full text-white hover:font-semibold cursor-pointer hover:bg-[#2980b9]">
          <MdDashboard className="text-xl" />
          DASHBOARD
        </Link>

        <Link to={'/Dashboard/MyShop'} className="flex items-center justify-start gap-2 border-b-2 text-lg p-3 w-full text-white hover:font-semibold cursor-pointer hover:bg-[#2980b9]"> 
          <CiShop className="text-xl" /> MY SHOP
         </Link>

        <Link to={'/Dashboard/vendor/Orders'} className=" flex items-center justify-start gap-2 border-b-2 text-lg p-3 w-full text-white hover:font-semibold cursor-pointer hover:bg-[#2980b9]">
          <FaBorderStyle className="text-xl" /> ORDER'S
        </Link>

        <Link to={'/Dashboard/AddProduct'} className="flex items-center justify-start gap-2 border-b-2 text-lg p-3 w-full text-white hover:font-semibold cursor-pointer hover:bg-[#2980b9]">
          <MdAdd className="text-xl" /> ADD PRODUCT
        </Link>

        <Link to={'/'} className=" flex items-center justify-start gap-2  text-lg p-3 w-full text-white hover:font-semibold cursor-pointer hover:bg-[#2980b9]">
          <IoMdHome className="text-xl" /> GO TO HOME
        </Link>

      </ul>
    </section>
  );
};

export default DashboardSidebar;
