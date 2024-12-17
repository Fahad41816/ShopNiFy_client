/* eslint-disable @typescript-eslint/no-explicit-any */

import { AiOutlineRetweet } from "react-icons/ai";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { AddProductToCart } from "../../Redux/feature/Cart/CartSlice"; 
import { useCartAlertShow } from "../../context/CartAlertShowProvider/CartAlertShowProvider";
import { Link } from "react-router";
import { addProductToCompare } from "../../Redux/feature/CompareSlice/CompareSlice";
 

const ProductCard = ({ pdt }: any) => {
  const dispatch = useDispatch();

  const { handleModalShow }: any = useCartAlertShow();

  const containsSpecialChars = pdt.title.includes("/");

  // Conditionally process the name
  const processedName = containsSpecialChars
    ? encodeURIComponent(pdt.title) // Encode if special characters exist
    : pdt.title.split(" ").join("_"); // Use hyphens for user-friendly URLs

  //   add cart handler
  const handleAddCart = (Data: any) => {
    dispatch(AddProductToCart(Data));
    handleModalShow(Data);
  };

 

  const handleCompare = async (Data: any) => {
     dispatch(addProductToCompare(Data));
  
    // if (compare.warning) {
    //   toast.error(compare.warning);
    // } else {
    //   toast.success("Added Product in Compare!");
    // }
  };

  return (
    <>
      <div
        key={pdt?.id}
        className="group relative w-60 bg-white shadow-md border  overflow-hidden mx-auto"
      >
        {/* <!-- Product Image --> */}
        <div className="relative">
          <img
            src={pdt?.image}
            alt="Product Image"
            className="w-full h-52 object-fill bg-slate-50"
          />
          {/* <!-- Hover Overlay Options --> */}
          <div className="absolute inset-0 bg-black bg-opacity-30 h-0 opacity-0 group-hover:opacity-100 group-hover:h-full transition-all duration-200 flex flex-col justify-start items-end space-y-2">
            <button
              title="Add Wishlist"
              className="px-2 py-1 text-xl text-white font-bold hover:bg-slate-500 transition"
            >
              <FaRegHeart />
            </button>
            <button
              onClick={() => handleCompare(pdt)}
              title="Compare"
              className="px-2 py-1 text-xl text-white font-bold hover:bg-slate-500 transition"
            >
              <AiOutlineRetweet />
            </button>
            <button
              onClick={() => handleAddCart(pdt)}
              title="Add Cart"
              className="px-2 py-1 text-xl text-white font-bold  hover:bg-slate-500 transition"
            >
              <IoBagOutline />
            </button>
            <Link
              to={`/product/${pdt?.shops?.name
                .split(" ")
                .join("_")}/${processedName}`}
            >
              <button
                title="Details"
                className="px-2 py-1 text-xl text-white font-bold hover:bg-slate-500 transition"
              >
                <IoIosSearch />
              </button>
            </Link>
          </div>
        </div>
        {/* <!-- Product Details --> */}
        <div className="p-2">
          <div className="flex item-center justify-start">
            <FaStar className="text-[#fdde2f]" />
            <FaStar className="text-[#fdde2f]" />
            <FaStar className="text-[#fdde2f]" />
            <FaStar className="text-[#fdde2f]" />
            <FaStar className="text-[#fdde2f]" />
          </div>
          <h3 className="text-sm font-semibold mt-1">{pdt?.title}</h3>
          <p className="text-sm text-gray-500">{pdt?.Category?.name}</p>
          <p className="text-lg font-bold mt-1 text-[#ffc352]">${pdt?.price}</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
