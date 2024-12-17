/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { RiMenu3Line } from "react-icons/ri";
import { TfiMenuAlt } from "react-icons/tfi";
import { useGetProductCategoryQuery } from "../../Redux/feature/ProductCategory/ProductCategory";
const FilterSortsection = ({ handleFilterChange, status }: any) => {
  const [idFilterModelOpen, setidFilterModelOpen] = useState(false);

  const handleChange = (option: string, value: any) => {
    if (option == "sort") handleFilterChange("sort", value);
    if (option == "status") handleFilterChange("status", value);
    if (option == "minPrice") handleFilterChange("minPrice", value);
    if (option == "maxPrice") handleFilterChange("maxPrice", value);
  };

  const { data } = useGetProductCategoryQuery(undefined);

  console.log(data);

  return (
    <section>
      {/* Filter Overlay with Opacity */}
      <div
        className={`fixed top-0 left-0 w-full h-screen transition-opacity duration-500 bg-black ${
          idFilterModelOpen ? "opacity-50 visible z-20" : "opacity-0 invisible"
        }`}
        onClick={() => setidFilterModelOpen(false)} // Close when clicking the overlay
      ></div>

      {/* Sidebar Filter */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg transition-transform duration-500 transform z-20 ${
          idFilterModelOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "300px" }} // Fixed width but no animation jank
      >
        <div className="p-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Filter Options</h3>
            <button
              onClick={() => setidFilterModelOpen(false)}
              className="text-gray-600 hover:text-red-500 flex items-center justify-start gap-2"
            >
              Close <IoMdClose className="text-xl" />
            </button>
          </div>

          {/* Add filter content here */}
          <div className="mt-4 border rounded-lg p-1">
            <h4 className="font-medium mb-2  bg-gradient-to-r from-blue-800 to-blue-500 text-xl text-white p-2 rounded-t-lg">
              Availability
            </h4>
            <label className="flex  items-center space-x-2 mb-1">
              <input
                onChange={() => handleChange("status", "In Stock")}
                type="checkbox"
                checked={status == "In Stock"}
                className="checkbox"
              />{" "}
              <span>In Stock</span>
            </label>
            <label className="flex items-center space-x-2 mt-2">
              <input
                type="checkbox"
                onChange={() => handleChange("status", "Out of Stock")}
                checked={status == "Out of Stock"}
                defaultChecked
                className="checkbox"
              />{" "}
              <span>Out of Stock</span>
            </label>
          </div>

          <div className="border rounded-lg shadow-md p-1 mt-5 w-full max-w-sm">
            {/* Header */}
            <div className=" bg-gradient-to-r from-blue-800 to-blue-500 text-white rounded-t-lg py-2 px-4">
              <h3 className="font-semibold text-lg ">Price</h3>
            </div>

            {/* Input Section */}
            <div className="flex items-center justify-between mt-4">
              {/* From Input */}
              <div className="flex flex-col items-start">
                <label className="text-sm font-medium mb-1 text-gray-600">
                  $ From
                </label>
                <input
                  type="number"
                  placeholder="0"
                  onChange={(e: any) =>
                    handleChange("minPrice", Number(e.target.value))
                  }
                  className="input input-bordered w-24 text-center"
                />
              </div>

              {/* To Input */}
              <div className="flex flex-col items-start">
                <label className="text-sm font-medium mb-1 text-gray-600">
                  $ To
                </label>
                <input
                  type="number"
                  placeholder="4500.00"
                  onChange={(e: any) =>
                    handleChange("maxPrice", Number(e.target.value))
                  }
                  className="input input-bordered w-24 text-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Sort Navbar */}
      <div className="flex items-center justify-between    border rounded-md px-4 p-1 mt-4">
        {/* Left: Filter and View Icons */}
        <div className="flex items-center space-x-4 ">
          <button
            onClick={() => setidFilterModelOpen(true)}
            className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 font-medium"
          >
            <span className="text-lg">
              <RiMenu3Line />
            </span>
            <span>Filter</span>
          </button>
        </div>

        {/* Grid and List Icons */}
        <div className="flex items-center space-x-2">
          <button className="p-1 border rounded hover:bg-gray-200">
            <span className="material-icons">
              <CgMenuGridR className="text-xl" />
            </span>
          </button>
          <button className="p-1 border rounded hover:bg-gray-200">
            <span className="material-icons">
              <TfiMenuAlt className="text-xl" />
            </span>
          </button>
        </div>

        {/* Right: Sort and Product Count */}
        <div className=" flex items-center space-x-4">
          {/* Sort Dropdown */}
          <span className="text-gray-600 font-medium">Sort by:</span>
          <div className="flex items-center space-x-2">
            <select
              onClick={(e) => handleChange("sort", e.target.value)}
              className="select select-bordered w-full max-w-xs h-4"
              defaultValue="A-Z"
            >
              <option value="A-Z">Alphabetically, A-Z</option>
              <option value="Z-A">Alphabetically, Z-A</option>
              <option value="priceLow">Price: Low to High</option>
              <option value="priceHigh">Price: High to Low</option>
            </select>
          </div>

          {/* Product Count */}
          <div>
            <p>12 products</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterSortsection;
