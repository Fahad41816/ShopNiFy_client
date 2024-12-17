import { useLoaderData } from "react-router";
import { useGetProductQuery } from "../../Redux/feature/Product/ProductApi";
 
import { FaHeart, FaShoppingBag } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { AddProductToCart } from "../../Redux/feature/Cart/CartSlice";
import toast from "react-hot-toast";
import { AiOutlineRetweet } from "react-icons/ai";
import Loader from "../../components/UI/Loader";
import { useEffect } from "react";

const ProductDetails = () => {


  useEffect(()=>{
    window.scroll(0,0)
  },[])

  const { shopName, productName } = useLoaderData();

  const RealShopName = shopName.split("_").join(" ");
  const RealProductName = productName.includes("/")
    ? decodeURIComponent(productName)
    : productName.split("_").join(" ");

  const { data, isLoading } = useGetProductQuery({
    shopName: RealShopName,
    productName: RealProductName,
  });

  console.log(data);

  const NotifyAddCart = () => toast.success('Product Added in your Cart!.', {
    style: {
      border: '2px solid #3498db',
      padding: '16px',
      color: '#3498db',
    },
    iconTheme: {
      primary: '#3498db',
      secondary: '#FFFAEE',
    },
  });

  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(AddProductToCart(data))
    NotifyAddCart()
  };

  if(isLoading){
    return <Loader/>
  }

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image Section */}
        <div className="flex justify-center items-center">
          <img
            src={data?.data?.image}
            alt={data?.data?.title}
            className="w-full h-full object-fill rounded-lg shadow-lg max-h-[500px]"
          />
        </div>

        {/* Product Details Section */}
        <div className="space-y-6">
          <h1 className="text-3xl font-semibold text-gray-800">
            {data?.data?.title}
          </h1>
          <p className="text-base text-gray-500">{data?.data?.description}</p>
          <div className="text-2xl font-bold text-red-500">
            ${data?.data?.price}
          </div>

          {/* Actions */}
          <div className="space-y-4">
            {/* Size Selector */}
            {/* <div>
            <label
              htmlFor="size"
              className="block text-sm font-medium text-gray-700"
            >
              Size
            </label>
            <select
              id="size"
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              {product.sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div> */}

            {/* Quantity Selector */}
            <div className="flex items-center space-x-4">
              <label htmlFor="quantity" className="text-sm text-gray-700">
                Quantity
              </label>
              <input
                id="quantity"
                type="number"
                min="1"
                defaultValue="1"
                className="w-20 border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            {/* Buttons */}
            <div className="flex items-center space-x-4">
              <button
                onClick={handleAddToCart}
                className="w-[200px] flex items-center justify-center gap-2 bg-gradient-to-l from-blue-700 hover:from-blue-500 to-blue-500 hover:to-blue-400 text-white py-2 px-4  hover:bg-green-600"
              >
                Add to Cart <FaShoppingBag className="text-lg"/>
              </button>
              <button title="Add To Wishlist" className="w-max flex items-center justify-center gap-2 bg-0 text-white bg-gradient-to-l from-[#ff6652] hover:from-[#ff5d48] to-[#f3220b] hover:to-[#c53c2c] p-3  hover:bg-gray-200">
                 <FaHeart />
              </button>
              <button title="Add Compare list" className="w-max flex items-center justify-center gap-2 bg-0 text-white bg-[#95a5a6] hover:bg-[#bdc3c7] p-3   ">
                 <AiOutlineRetweet className="text-xl text-white font-bold"/>
              </button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="border-t pt-4 text-sm text-gray-600">
            <p>
              <span className="font-semibold">Category:</span>{" "}
              {data?.data?.Category?.name}
            </p>
            <p>
              {/* <span className="font-semibold">SKU:</span> {data.data.sku} */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
