/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import FreeDeliveryOptions from "../../components/FreeDelivery/FreeDeliveryOptions";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import LatestProducts from "../../components/LatestProducts/LatestProducts";
import ProductCategories from "../../components/ProductCategorys/ProductCategorys";
import Banner from "../../components/UI/Banner";
import HeadPhoneImg from "../../assets/logo/I06.jpg";
import SpecialProducts from "../../components/SpecialProducts/SpecialProducts";
import CartAddedAlerModal from "../../components/CartAddAlertModal/CartAddedAlerModal";
import { useCartAlertShow } from "../../context/CartAlertShowProvider/CartAlertShowProvider";
import Loader from "../../components/UI/Loader";
import { useGetHomePageProductQuery } from "../../Redux/feature/Product/ProductApi";

const Home = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    window.scroll(0, 0); // Scroll to the top when the component mounts

    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const { data, isLoading } = useGetHomePageProductQuery(undefined);

  const specialProductsFind =
    data?.data.filter((Pdt: any) => Pdt.productType == "special") || [];
  const latestProductsFind =
    data?.data.filter((Pdt: any) => Pdt.productType == "latest") || [];

  const { IsOpen, handleModalHide, ProductData }: any = useCartAlertShow();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="relative">
      <HeroBanner />
      <FreeDeliveryOptions />
      <ProductCategories />
      <LatestProducts Products={latestProductsFind} />
      <Banner
        img={HeadPhoneImg}
        offerText={"The Audio Sale up to 60% Off"}
        title={"Headphones & Speakers"}
      />
      <SpecialProducts Products={specialProductsFind} />
      <CartAddedAlerModal
        isOpen={IsOpen}
        onClose={() => handleModalHide()}
        ProductData={ProductData}
      />

      {/* Scroll to Top Button */}
      {showScrollButton && (
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-4 right-4 bg-gradient-to-r from-blue-800 to-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-500 focus:outline-none"
          aria-label="Scroll to Top"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default Home;
