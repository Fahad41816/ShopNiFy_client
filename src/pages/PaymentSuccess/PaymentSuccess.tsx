 

const PaymentSuccess = () => {
  return (
    <div className="shadow-md   text-center  w-full p-5">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6L3gT8Xv5lqUkX1NcH-iyez8dmsHfyaiTrA&s"
        alt="Success Icon"
        className="mx-auto  w-20"
      />
      <h1 className="text-2xl font-bold text-green-500 mb-1">
        Payment Successful!
      </h1>
      <p className="text-gray-600 mb-1">
        Thank you for your purchase! Your payment has been processed
        successfully.
      </p>
      <div className="image-section ">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/order-placed-illustration-download-in-svg-png-gif-file-formats--processed-confirmed-e-commerce-pack-shopping-illustrations-3581435.png"
          alt="Product"
          className="w-96  mx-auto"
        />
      </div>
      <a
        href="/"
        className="btn bg-gradient-to-r from-blue-800 to-blue-500 text-white"
      >
        Go to Homepage
      </a>
    </div>
  );
};

export default PaymentSuccess;
