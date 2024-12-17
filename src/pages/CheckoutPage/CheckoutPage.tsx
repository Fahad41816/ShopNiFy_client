/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useSelector } from "react-redux";
import OrderSummery from "../../components/OrderSummeryCheckout/OrderSummery";
import SSlComImg from "../../assets/Icon/logo.png";
import useAxios from "../../Hook/useAxios";

const countries = [
  "Afghanistan",
  "Argentina",
  "Australia",
  "Bangladesh",
  "Brazil",
  "Canada",
  "China",
  "Egypt",
  "France",
  "Germany",
  "India",
  "Indonesia",
  "Italy",
  "Japan",
  "Mexico",
  "Nepal",
  "Netherlands",
  "Nigeria",
  "Pakistan",
  "Philippines",
  "Russia",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Turkey",
  "United Kingdom",
  "United States",
  "Vietnam",
];

const CheckoutPage = () => {
  const { cart, auth } = useSelector((state: any) => state);

  const [billingSameAsShipping, setBillingSameAsShipping] = useState(true);
  const [PaymentMethod, setPaymentMethod] = useState(" ");
  const [ShippingAddress, setShippingAddress] = useState({
    firstName: auth.user.firstName,
    lastName: auth.user.lastName,
    address: null,
    address2: null,
    city: null,
    country: null,
    postalCode: null,
  });
  const [billingAddress, setbillingAddress] = useState({
    firstName: null,
    lastName: null,
    address: null,
    address2: null,
    city: null,
    country: null,
    postalCode: null,
  });

  console.log(ShippingAddress);
  console.log(billingAddress);

  const handleChangeShippingAdress = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;

    setShippingAddress((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleChangeBllingAdress = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;

    setbillingAddress((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const TotalPrice =
    cart.cartData.reduce(
      (max: number, pdt: any) => pdt.Qty * pdt.price + max,
      0
    ) + 20;

  const ProccessPaymentWithSslcommerz = async (Data: any) => {

    console.log(Data)

    const responce = await useAxios.post("/payment/sslcommerz", Data);

    console.log(responce);
    window.location = responce.data
  };

  const handleCompleteOrder = () => {
     
    const Data = {
      shippingAddress: ShippingAddress,
      billingAddress: billingSameAsShipping ? ShippingAddress : billingAddress,
      productData: cart.cartData,
      userId : auth.user.id,
      paymentMethod: "",
      totalPrice: TotalPrice,
    };

    console.log(Data)

    if (PaymentMethod == "sslcommerz") {
      Data.paymentMethod = "SSLCOMEERZ"
      ProccessPaymentWithSslcommerz(Data);
    }
  };

  return (
    <section className="max-w-7xl mx-auto grid grid-cols-2">
      {/* first part  overflow-y-scroll no-scrollbar */}
      <div className="max-w-4xl  mx-auto p-6 bg-white  ">
        {/* Contact Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <input
            type="email"
            placeholder="Email or mobile phone number"
            className="w-full p-2 border rounded mb-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
            defaultValue={auth.user.email}
          />
          <div className="flex items-center">
            <input
              type="checkbox"
              defaultChecked
              className="checkbox  text-white mr-2"
            />
            <label htmlFor="news-offers" className="text-sm">
              Email me with news and offers
            </label>
          </div>
        </section>

        {/* Shipping Address Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Shipping Address</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="firstName"
              onChange={handleChangeShippingAdress}
              placeholder="First name"
              className="input input-bordered w-full max-w-xs rounded-none "
              defaultValue={auth.user.firstName}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              onChange={handleChangeShippingAdress}
              className="input input-bordered w-full max-w-xs rounded-none "
              defaultValue={auth.user.lastName}
            />
          </div>

          <select
            onChange={handleChangeShippingAdress}
            id="country"
            name="country"
            className="select select-bordered rounded-none mb-3 w-full"
          >
            <option value="" disabled selected>
              Select Country
            </option>
            {countries.map((country) => (
              <option key={country} value={country.toLowerCase()}>
                {country}
              </option>
            ))}
          </select>

          <input
            type="text"
            name="address"
            onChange={handleChangeShippingAdress}
            placeholder="Address"
            className="input input-bordered w-full mb-3  rounded-none "
          />
          <input
            name="address2"
            type="text"
            onChange={handleChangeShippingAdress}
            placeholder="Apartment, suite, etc. (optional)"
            className="input input-bordered w-full mb-3 max-w-xs rounded-none "
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              name="city"
              type="text"
              onChange={handleChangeShippingAdress}
              placeholder="City"
              className="input input-bordered w-full mb-3 max-w-xs rounded-none "
            />
            <input
              type="text"
              name="postalCode"
              onChange={handleChangeShippingAdress}
              placeholder="Postal code (optional)"
              className="input input-bordered w-full mb-3 max-w-xs rounded-none "
            />
          </div>
        </section>

        {/* Shipping Method */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Shipping method</h2>
          <div className="p-4 border rounded flex justify-between items-center">
            <span className="flex items-center justify-start">
              <input
                type="radio"
                name="ShippingMethod"
                checked={true}
                className="radio mr-2"
              />
              International Shipping
            </span>
            <span className="font-semibold">$20.00</span>
          </div>
        </section>

        {/* Payment Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Payment</h2>
          <p className="text-sm text-gray-600 mb-2">
            All transactions are secure and encrypted.
          </p>
          <div className="w-full border rounded-md">
            {/* stripe payment section */}
            <div
              onClick={() => setPaymentMethod("card")}
              className={`flex items-center justify-start  p-4  border-b ${
                PaymentMethod == "card" && "bg-slate-50"
              }`}
            >
              <input
                type="radio"
                name="radio-1"
                className="radio"
                checked={PaymentMethod == "card"}
              />
              <span className="flex items-center justify-start ml-2 gap-2 font-bold">
                Card{" "}
                <img
                  className="w-36 "
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpDMOK2prur8D8qOlO98aHWoOo0ORo8RiNgA&s"
                  }
                  alt="cart privider image"
                />
              </span>
            </div>
            {/* paypal payment getway  section*/}
            <div
              onClick={() => setPaymentMethod("paypal")}
              className={`flex items-center justify-start  p-4  border-b ${
                PaymentMethod == "paypal" && "bg-slate-50"
              }`}
            >
              <input
                type="radio"
                name="radio-1"
                className="radio"
                checked={PaymentMethod == "paypal"}
              />
              <span className="flex items-center justify-start ml-2 gap-2">
                {" "}
                <img
                  className="w-28 "
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLmCw9KwTMuJOlqCjSQ8StSY7qg0gMtohnqA&s"
                  }
                  alt="cart privider image"
                />
              </span>
            </div>
            {/* sslcommerz payment getway  section*/}
            <div
              onClick={() => setPaymentMethod("sslcommerz")}
              className={`flex items-center justify-start  p-4  border-b ${
                PaymentMethod == "sslcommerz" && "bg-slate-50"
              }`}
            >
              <input
                type="radio"
                name="radio-1"
                className="radio"
                checked={PaymentMethod == "sslcommerz"}
              />
              <span className="flex items-center justify-start ml-2 gap-2">
                {" "}
                <img
                  className="w-32 "
                  src={SSlComImg}
                  alt="cart privider image"
                />
              </span>
            </div>
            {/* cash on delivery  payment getway  section*/}
            <div
              onClick={() => setPaymentMethod("COD")}
              className={`flex items-center justify-start  p-4  border-b ${
                PaymentMethod == "COD" && "bg-slate-50"
              }`}
            >
              <input
                type="radio"
                name="radio-1"
                className="radio"
                checked={PaymentMethod == "COD"}
              />
              <span className="font-bold ml-2">Cash on Delivery (COD)</span>
            </div>
          </div>
        </section>

        {/* Billing Address */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Billing address</h2>
          <div className=" border rounded">
            <label
              className={`w-full px-2 py-3 flex items-center ${
                billingSameAsShipping &&
                "bg-slate-50 border rounded-tr-md rounded-tl-md border-black"
              }`}
            >
              <input
                type="radio"
                name="billingAddress"
                checked={billingSameAsShipping}
                onChange={() => setBillingSameAsShipping(true)}
                className="radio mr-2"
              />
              Same as shipping address
            </label>
            <label
              className={`w-full px-2 py-3 flex items-center ${
                !billingSameAsShipping && "bg-slate-50 border border-black"
              }`}
            >
              <input
                type="radio"
                name="billingAddress"
                checked={!billingSameAsShipping}
                onChange={() => setBillingSameAsShipping(false)}
                className="radio mr-2"
              />
              Use a different billing address
            </label>
          </div>
          <div
            className={`bg-slate-50 p-4 overflow-hidden transition-all duration-500 ${
              !billingSameAsShipping ? "max-h-[1000px]" : "max-h-0 p-0"
            }`}
          >
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="firstName"
                onChange={handleChangeBllingAdress}
                placeholder="First name"
                className="input input-bordered w-full max-w-xs rounded-none "
                defaultValue={auth.user.firstName}
              />
              <input
                type="text"
                name="lastName"
                onChange={handleChangeBllingAdress}
                placeholder="Last name"
                className="input input-bordered w-full max-w-xs rounded-none "
                defaultValue={auth.user.lastName}
              />
            </div>
            <select
              onChange={handleChangeBllingAdress}
              id="country"
              name="country"
              className="select select-bordered rounded-none mb-3 w-full"
            >
              <option value="" disabled selected>
                Select Country
              </option>
              {countries.map((country) => (
                <option key={country} value={country.toLowerCase()}>
                  {country}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="address"
              onChange={handleChangeBllingAdress}
              placeholder="Address"
              className="input input-bordered w-full mb-3  rounded-none "
            />
            <input
              type="text"
              name="address2"
              onChange={handleChangeBllingAdress}
              placeholder="Apartment, suite, etc. (optional)"
              className="input input-bordered w-full mb-3 max-w-xs rounded-none "
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="city"
                onChange={handleChangeBllingAdress}
                placeholder="City"
                className="input input-bordered w-full mb-3 max-w-xs rounded-none "
              />
              <input
                type="text"
                name="postalCode"
                onChange={handleChangeBllingAdress}
                placeholder="Postal code (optional)"
                className="input input-bordered w-full mb-3 max-w-xs rounded-none "
              />
            </div>
          </div>
        </section>

        {/* Complete Order */}
        <div className="text-center">
          <button
            onClick={handleCompleteOrder}
            className="bg-black text-white w-full py-3 rounded hover:bg-gray-800"
          >
            Complete order
          </button>
        </div>
      </div>

      {/* 2nd part  */}
      <OrderSummery />
    </section>
  );
};

export default CheckoutPage;
