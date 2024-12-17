/* eslint-disable @typescript-eslint/no-explicit-any */

import { useRef } from "react"; 
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "../ProductCard/ProductCard";

const SpecialProducts = ({ Products }: any) => {
  
  const carouselRef : any = useRef(null);

  const goToNextSlide = () => {
    carouselRef?.current?.next();
  };

  // Navigate to the previous slide
  const goToPreviousSlide = () => {
    carouselRef?.current?.previous();
  };

  return (
    <section className="max-w-7xl mx-auto my-5">
      <div className="border-b-2 border-gray-100 flex items-center justify-between">
        <h1 className="text-2xl font-semibold font-serif">SPECIAL PRODUCTS</h1>
        <div className="flex items-center justify-center gap-5">
          <div className="flex items-center justify-center gap-5">
            <p className=" cursor-pointer">Electronics</p>
            <p className=" cursor-pointer">Computers</p>
            <p className=" cursor-pointer">Smartphones</p>
            <p className=" cursor-pointer">TV & Audio</p>
            <p className=" cursor-pointer">Office Electronics</p>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <div onClick={goToPreviousSlide} className="btn px-2 rounded-none">
              <LuChevronLeft className="text-xl" />
            </div>
            <div onClick={goToNextSlide} className="btn px-2 rounded-none">
              <LuChevronRight className="text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* products  */}
      <div className="w-full flex items-center justify-center mt-2">
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          ref={carouselRef}
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
          slidesToSlide={2}
          swipeable
          autoPlay
        >
          {Products?.map((pdt : any) => (
            <ProductCard pdt={pdt}/>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default SpecialProducts;
