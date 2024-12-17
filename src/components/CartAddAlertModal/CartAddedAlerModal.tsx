/* eslint-disable @typescript-eslint/no-explicit-any */
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";

const CartAddedAlerModal = ({ isOpen, onClose, ProductData } : any) => {
  const { cart } = useSelector((state : any) => state.cart);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-lg shadow-lg max-w-lg w-full"
            initial={{ y: 50, scale: 0.9, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 50, scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="px-4 py-3 bg-green-100 flex justify-between items-center rounded-t-lg">
              <span className="text-green-700 font-medium">
                ✔ Product successfully added to your shopping cart
              </span>
              <button
                onClick={onClose}
                className="text-green-700 hover:text-green-900"
              >
                <IoMdCloseCircleOutline className="text-lg" />
              </button>
            </div>
            <div className="p-4">
              <div className="flex gap-4">
                <img
                  src={ProductData.image}
                  alt="Product"
                  className="w-40 h-40 rounded-md object-cover"
                />
                <div>
                  <p className="text-sm text-gray-500">
                    There are {cart.length} items in your cart.
                  </p>
                  <p className="text-lg font-semibold">{ProductData.title}</p>
                  <p className="text-red-500 font-semibold">${ProductData.price}</p>
                  <Link to={"/Cart"}>
                    <button
                      onClick={onClose}
                      className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg mt-3"
                    >
                      View Cart
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CartAddedAlerModal;
