import * as React from "react";
import "./HeroBanner.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";




const images = [
    "https://i.ibb.co.com/KWpKq7C/shopping-concept-close-up-portrait-young-beautiful-attractive-redhair-girl-smiling-looking-camera.jpg",
  "https://i.ibb.co.com/Q9BP3dt/portrait-young-asian-woman-isolated-blue-studio-space.jpg",
  "https://i.ibb.co.com/6gnwmw4/shopping-concept-close-up-portrait-young-beautiful-attractive-redhair-girl-smiling-looking-camera.jpg",
  "https://i.ibb.co.com/6Yc2gtM/Adobe-Stock-854821865-Preview.jpg",
];

function Arrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}

export default function App() {
  const [opacities, setOpacities] = React.useState<number[]>([]);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = React.useState(false);


  console.log(images.length)

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: 4,
    loop: true,
    detailsChanged(s) {
      const new_opacities = s.track.details.slides.map(
        (slide) => slide.portion
      );
      setOpacities(new_opacities);
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    defaultAnimation: {
        duration: 2000, // works only for navigation buttons and when clicking on gallery thumbnails, but not when swiping
      },
    created() {
      setLoaded(true);
    },
  });

  console.log(opacities)

  return (
    <section className="relative">
      <div ref={sliderRef} className="fader">
        
          <div 
            className="fader__slide relative"
            style={{ opacity: opacities[0] }}
          > 
          
            <img className="w-full h-full" src={images[0]} />
            <div data-aos="zoom-in"  className="absolute top-0 w-full h-full flex flex-col items-start justify-start pt-36 pl-24">
                <h1 className="w-[700px] text-6xl font-bold text-white"> Shop Smarter, Live Better –  Explore Our Latest Collection!</h1> 
            </div> 
            <button className="w-[250px] text-white rounded-none btn btn-primary bg-gradient-to-l from-blue-800 to-blue-500 border-none absolute bottom-10 right-0 left-0 mx-auto text-2xl">ORDER NOW</button>
          </div>

          <div 
            className="fader__slide"
            style={{ opacity: opacities[1] }}
          > 
            <img src={images[1]} />
            <div data-aos="zoom-in"  className="absolute top-0 w-full h-full flex flex-col items-end justify-center">
                <h1 className="w-[800px] text-6xl font-bold text-white">Gear Up for Excellence – Premium Products at Your Fingertips!</h1> 
               
            </div>
            <button className="w-[250px] text-white rounded-none btn btn-primary bg-gradient-to-l from-blue-800 to-blue-500 border-none absolute bottom-10 right-0 left-0 mx-auto text-2xl">ORDER NOW</button>
          </div>
          <div 
            className="fader__slide"
            style={{ opacity: opacities[2] }}
          > 
            <img src={images[2]} />
            <div data-aos="zoom-in"  className="absolute top-0 w-full h-full flex flex-col items-start justify-start pt-36 pl-24">
                <h1 className="w-[700px] text-6xl font-bold text-white"> Custom Creations for Unique You – Start Designing Today</h1> 
            </div> 
            <button className="w-[250px] text-white rounded-none btn btn-primary bg-gradient-to-l from-blue-800 to-blue-500 border-none absolute bottom-10 right-0 left-0 mx-auto text-2xl">ORDER NOW</button>
          </div>
          <div 
            className="fader__slide"
            style={{ opacity: opacities[3] }}
          > 
            <img src={images[3]} />
            <div data-aos="zoom-in"  className="absolute top-0 w-full h-full flex flex-col items-center justify-center ">
                <h1 className="w-[700px] text-6xl font-bold text-black">Elevate Your Everyday – Discover the New Look!</h1> 
            </div> 
            <button className="w-[250px] text-white rounded-none btn btn-primary bg-gradient-to-l from-blue-800 to-blue-500 border-none absolute bottom-10 right-0 left-0 mx-auto text-2xl">ORDER NOW</button>
          </div>
           
      </div>

      {loaded && instanceRef.current && (
        <>
          <Arrow
            left
            onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
            disabled={currentSlide === 0}
          />

          <Arrow
            onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
            disabled={
              currentSlide ===
              instanceRef.current.track.details.slides.length - 1
            }
          />
        </>
      )}

      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}
    </section>
  );
}
