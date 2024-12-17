/* eslint-disable @typescript-eslint/no-explicit-any */ 
import Title from "../UI/Title"; 
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "../ProductCard/ProductCard";

const LatestProducts = ({ Products }: any) => {
  return (
    <section className="w-full my-5">
      <div className="max-w-7xl mx-auto">
        <Title title="OUR LATEST PRODUCTS" />
      </div>
      <div className="w-full flex items-center justify-center mt-4">
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={true}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={0}
          // pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 5,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={true}
          sliderClass=""
          slidesToSlide={1}
          swipeable
          autoPlay
        >
          {Products?.map((pdt: any) => (
            <ProductCard pdt={pdt}/>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default LatestProducts;
