/* eslint-disable @typescript-eslint/no-explicit-any */

import formatPriceWithCommas from "../../../utils/NumberFormat";

const ProductDetailsmodal = ({ ProductDetailsData }: any) => {
  return (
   
      <div className="bg-white rounded-lg  p-6">
        {/* Product Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Product Overview</h1>

        {/* Product Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product Image */}
          <div>
            <img
              src={ProductDetailsData.image}
              alt="Product"
              className="w-full rounded-lg border"
            />
          </div>

          {/* Product Details */}
          <div>
            <div className="mb-4"> 
              <p className="text-gray-600 text-lg font-semibold">{ProductDetailsData.title}</p>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-700">Category:</h2>
              <p className="text-gray-600">{ProductDetailsData.Category.name}</p>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-700">Description:</h2>
              <p className="text-gray-600">
                    {ProductDetailsData.description}
              </p>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-700">Tags:</h2>
              {ProductDetailsData.tags.map((data : string) => (
                  <span className="text-gray-600">{data}, </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stock Information */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Stock Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-100 rounded-lg p-4">
              <h3 className="text-gray-700 font-medium">Price:</h3>
              <p className="text-gray-800 font-bold">${formatPriceWithCommas(ProductDetailsData.price)}</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-4">
              <h3 className="text-gray-700 font-medium">Stock Limit:</h3>
              <p className="text-gray-800 font-bold">{ProductDetailsData.stock} Units</p>
            </div> 
          </div>
        </div>
      </div>
 
  );
};

export default ProductDetailsmodal;
