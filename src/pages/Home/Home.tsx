import FreeDeliveryOptions from "../../components/FreeDelivery/FreeDeliveryOptions";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import LatestProducts from "../../components/LatestProducts/LatestProducts";
import ProductCategories from "../../components/ProductCategorys/ProductCategorys";
import Banner from "../../components/UI/Banner";
import HeadPhoneImg from "../../assets/logo/I06.jpg";
import SpecialProducts from "../../components/SpecialProducts/SpecialProducts";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <FreeDeliveryOptions />
      <ProductCategories />
      <LatestProducts />
      <Banner
        img={HeadPhoneImg}
        offerText={"The Audio Sale up to 60% Off"}
        title={"Headphones & Speakers"}
      />
      <SpecialProducts />
    </div>
  );
};

export default Home;
