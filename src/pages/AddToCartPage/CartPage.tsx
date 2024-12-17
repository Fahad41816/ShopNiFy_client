/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaReplyAll, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductToCart } from "../../Redux/feature/Cart/CartSlice";
import toast from "react-hot-toast";
import CartEmpty from '../../assets/Icon/shopping.png'
import { Link } from "react-router";

const CartPage = () => {
  
  const { cart } = useSelector((state: any) => state);
  const dispatch = useDispatch();

  console.log(cart)

  const Notify = () => toast.success('Product Deleted!', {
    style: {
      border: '2px solid #2ecc71',
      padding: '16px',
      color: '#000',
    },
    iconTheme: {
      primary: '#2ecc71',
      secondary: '#FFFAEE',
    },
  });

  const handleDeletePDT = (data: any) => {
    dispatch(deleteProductToCart(data));
    Notify()
  };

  const TotalPrice  = cart.cartData.reduce((max : number, data : any) => (data.price * data.Qty) + max, 0)

  if(cart.cartData <= 0){
    return  <div className="flex flex-col items-center justify-start mt-5 min-h-screen ">
    {/* Sad Image */}
    <img
      src={CartEmpty} // Replace with your sad image URL
      alt="Sad Face"
      className="w-60 h-60 object-cover mb-6"
    />
 
    {/* Message */}
    <h1 className="text-2xl font-semibold text-gray-800 mb-2">
      Your cart is empty!
    </h1>
    <p className="text-gray-500 text-center mb-6">
      It looks like you haven’t added anything to your cart yet. <br /> Start
      shopping to fill it up.
    </p>

    {/* Button */}
    <Link to="/">
    <button 
      className="bg-gradient-to-l from-blue-700 to-blue-400 hover:bg-blue-700 text-white font-medium py-2 px-6  shadow-md transition"
    >
      Continue Shopping
    </button>
    </Link>
  </div>
  }

  return (
    <section className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">SHOPPING CART</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="col-span-2">
          <div className="bg-white border  shadow-sm p-4">
            {cart?.cartData?.map((item: any) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-4 mb-4"
              >
                <div className="flex items-center space-x-4">
                  {/* Product Image */}
                  <img
                    src={item?.image}
                    alt={item?.name}
                    className="w-40 h-40 rounded-lg object-fill"
                  />
                  {/* Product Details */}
                  <div>
                    <h2 className="font-semibold text-lg">{item?.title}</h2>
                    <p className="text-red-500 font-semibold">
                      ${item.price}
                    </p>
                    <p className="text-gray-500 text-sm">Size: {item?.size}</p>
                    <p className="text-gray-500 text-sm">
                      Color: {item?.color}
                    </p>
                  </div>
                </div>
                {/* Quantity & Total */}
                <div className="flex items-center space-x-6">
                  <input
                    type="number"
                    min="1"
                    value={item?.Qty}
                    className="w-16 border rounded-md text-center"
                  />
                  <p className="font-semibold text-lg">
                    ${(item?.Qty * item?.price)}
                  </p>
                  <button
                    onClick={() => handleDeletePDT(item)}
                    className="text-gray-500 hover:text-red-500"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
            <button className="text-blue-500 hover:underline text-sm mt-4">
              &larr; Continue shopping
            </button>
          </div>
        </div>

        {/* Order Summary */}
        <div>
          <div className=" border  p-4">
            <h2 className="text-lg font-bold mb-4">Summary</h2>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>{cart.cartData.length} items</span>
                <span>${TotalPrice}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Shipping</span>
                <span>$55</span>
              </div>
              <div className="border-t my-2"></div>
              <div className="flex justify-between text-sm font-semibold">
                <span>Total</span>
                <span>${TotalPrice + 55}</span>
              </div>
            </div>
            <Link to={'/Checkout'}>
            <button className="flex items-center justify-center gap-4 mt-4 p-3 w-full bg-gradient-to-l from-blue-700 to-blue-400 text-lg font-semibold text-white">
            <FaReplyAll className="text-xl"/> Proceed to checkout
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
