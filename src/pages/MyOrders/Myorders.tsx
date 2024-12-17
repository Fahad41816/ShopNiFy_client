/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useSelector } from "react-redux";
import { useGetUserOrdersQuery } from "../../Redux/feature/orders/orderApi";
import Loader from "../../components/UI/Loader";
import { useCreateProductReviewMutation } from "../../Redux/feature/Reviews/ReviewsApi";
import toast from "react-hot-toast";

const MyOrdersPage = () => {
  const { auth }: any = useSelector((state) => state);
  const { data, isLoading } = useGetUserOrdersQuery(auth.user.id);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [ratting, setratting] = useState(0)
  const [message, setmessage] = useState("")

  const openModal = (item: any) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
  };

  const [sumbitReview] = useCreateProductReviewMutation()

  const handleSubmitReview = async() => {
    // Handle the review submission logic here
    console.log("Submitting review for:", selectedItem);
    const Data  = {
      userId : auth.user.id,
      productId : selectedItem.product.id,
      ratting : Number(ratting),
      review : message,
    }
    const responce  = await sumbitReview(Data)
    console.log(responce)
    if(responce.data){
      toast.success("Review Submited!")
    }else{
      toast.error("there is Something Wrong!")
    }

    closeModal();
    
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">My Orders</h1>
      {data?.data?.length === 0 ? (
        <p className="text-gray-600 text-center">No orders found.</p>
      ) : (
        <div className="space-y-6">
          {data?.data?.map((order: any) => (
            <div
              key={order.id}
              className="border rounded-lg p-6 bg-white shadow-md hover:shadow-lg"
            >
              {/* Order Header */}
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-bold text-gray-800">
                    Order #{order.tranId}
                  </h2>
                  <p className="text-sm text-gray-600">
                    Placed on: {new Date(order.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <span
                  className={`px-3 py-1 text-sm rounded-full font-medium ${
                    order.status === "Complete"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {order.status}
                </span>
              </div>

              {/* Order Details */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Billing Address */}
                <div>
                  <h3 className="text-sm font-bold text-gray-800 mb-2">
                    Billing Address
                  </h3>
                  <p className="text-sm text-gray-600">
                    {order.billingAddress.firstName} {order.billingAddress.lastName}
                  </p>
                  <p className="text-sm text-gray-600">
                    {order.billingAddress.address}, {order.billingAddress.city},
                    {order.billingAddress.country}
                  </p>
                </div>

                {/* Shipping Address */}
                <div>
                  <h3 className="text-sm font-bold text-gray-800 mb-2">
                    Shipping Address
                  </h3>
                  <p className="text-sm text-gray-600">
                    {order.shippingAddress.firstName} {order.shippingAddress.lastName}
                  </p>
                  <p className="text-sm text-gray-600">
                    {order.shippingAddress.address}, {order.shippingAddress.city},
                    {order.shippingAddress.country}
                  </p>
                </div>

                {/* Payment and Price */}
                <div>
                  <h3 className="text-sm font-bold text-gray-800 mb-2">
                    Payment Method
                  </h3>
                  <p className="text-sm text-gray-600">{order.paymentMethod}</p>
                  <h3 className="text-sm font-bold text-gray-800 mt-4">Total Price</h3>
                  <p className="text-lg font-semibold text-gray-800">
                    ${order.totalPrice}
                  </p>
                </div>
              </div>

              {/* Order Items */}
              <div className="mt-4">
                <h3 className="text-sm font-bold text-gray-800 mb-2">Items</h3>
                <ul className="space-y-2">
                  {order?.orderItems?.map((item: any, index: number) => (
                    <li
                      key={index}
                      className="text-sm text-gray-600 flex justify-between items-center"
                    >
                      <span>{item?.product?.title || "Product Name"}</span>
                      <div className="flex items-center space-x-4">
                        <span>x{item?.quantity}</span>
                        <button
                          className="text-blue-600 hover:underline text-sm"
                          onClick={() => {openModal(item); }}
                        >
                          Review
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Review Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-bold text-gray-800 mb-4">
              Review: {selectedItem?.product?.title}
            </h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-4">
                <label
                  htmlFor="rating"
                  className="block text-sm font-medium text-gray-700"
                >
                  Rating
                </label>
                <select
                  id="rating"
                  onChange={e => setratting(e.target.value)}
                 className="select select-bordered w-full rounded-none"
                >
                  <option value="">Select rating</option>
                  <option value="5">5 - Excellent</option>
                  <option value="4">4 - Good</option>
                  <option value="3">3 - Average</option>
                  <option value="2">2 - Poor</option>
                  <option value="1">1 - Terrible</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="review"
                  className="block text-sm font-medium text-gray-700"
                >
                  Review Message
                </label>
                <textarea
                  id="review"
                  rows={4}
                  value={message}
                  onChange={e => setmessage(e.target.value)}
                  className="textarea textarea-bordered w-ful" 
                  placeholder="Write your review here..."
                ></textarea>
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-200 rounded-md text-gray-800 hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSubmitReview}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyOrdersPage;
