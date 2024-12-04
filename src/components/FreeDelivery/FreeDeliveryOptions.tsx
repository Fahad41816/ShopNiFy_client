import { FaMoneyBillWave, FaRegClock, FaShippingFast, FaShoppingCart } from "react-icons/fa"

 

const FreeDeliveryOptions = () => {
  return (
    <section className="max-w-7xl grid grid-cols-4 mx-auto my-5">
        <div data-aos="zoom-in-right" className="max-w-72 flex gap-5 items-start justify-start border p-3">
            <div><FaShippingFast className="text-5xl text-gray-500"/></div>
            <div>
                <h2 className="text-xl font-semibold">Free Delivery</h2>
                <p className="text-gray-500 font-semibold">Free shipping on all order</p>
            </div>
        </div> 
        <div data-aos="fade-up" className="max-w-72 flex gap-5 items-start justify-start border p-3">
            <div> <FaShoppingCart className="text-5xl text-gray-500"/></div>
            <div>
                <h2 className="text-xl font-semibold">Safe Shopping</h2>
                <p className="text-gray-500 font-semibold">Your personal Details Always Secure</p>
            </div>
        </div> 
        <div data-aos="fade-up"  className="max-w-72 flex gap-5 items-start justify-start border p-3">
            <div><FaRegClock className="text-5xl text-gray-500"/></div>
            <div>
                <h2 className="text-xl font-semibold">Online Support</h2>
                <p className="text-gray-500 font-semibold">Support online 24 hours a day</p>
            </div>
        </div> 
        <div data-aos="zoom-in-left"  className="max-w-72 flex gap-5 items-start justify-start border p-3">
            <div><FaMoneyBillWave className="text-5xl text-gray-500"/></div>
            <div>
                <h2 className="text-xl font-semibold">Money Guarantee</h2>
                <p className="text-gray-500 font-semibold">30 days money back guarantee</p>
            </div>
        </div> 
    </section>
  )
}

export default FreeDeliveryOptions