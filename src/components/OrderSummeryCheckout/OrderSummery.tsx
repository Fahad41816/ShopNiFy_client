/* eslint-disable @typescript-eslint/no-explicit-any */

import { useSelector } from "react-redux";

const OrderSummery = () => {
  const { cart } : any = useSelector((state) => state);

  const totalPrice = cart.cartData.reduce((max : number, pdt : any) => {return (pdt.price * pdt.Qty) + max} , 0)

  return (
    <div className="max-w-4xl h-screen sticky top-0 bg-slate-50 py-4 px-10">
      {/* product showcase  */}
      {cart.cartData?.map((data: any) => (
        <div className="flex items-center justify-between mt-8">
          <div className="flex items-center justify-start gap-4">
            <div className="indicator">
              <span className="indicator-item badge badge-primary text-white">
                {data.Qty}
              </span>
              <div className="bg-base-300 grid h-20 w-20 border justify-center items-center rounded-md">
                <img
                  src={data.image}
                  alt="Product Image"
                  className="h-16 w-16 object-cover"
                />
              </div>
            </div>
            <div>
              <p>{data.title}</p>
              <p>M / brown 2</p>
            </div>
          </div>
          <div>${data.price * data.Qty}</div>
        </div>
      ))}

      <div className="w-full mt-10 flex gap-4 flex-col items-start justify-start">
        <div className="w-full flex items-start justify-between">
          <p>Subtotal • 11 items</p>
          <p>${totalPrice}</p>
        </div>
        <div className="w-full flex items-start justify-between">
          <p>Shipping</p>
          <p>$20.00</p>
        </div>
        <div className="w-full flex items-start justify-between">
          <p>Total</p>
          <p>USD ${totalPrice + 20}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummery;
