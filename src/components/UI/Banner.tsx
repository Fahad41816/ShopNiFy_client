import { LazyLoadImage } from "react-lazy-load-image-component";

 
 type TBanner = {
    img: string;
    title : string;
    offerText : string
 }

const Banner = ({img, title, offerText} : TBanner ) => {
  return (
    <div className="max-w-7xl mx-auto my-5 relative w-max h-max">
        <div className="z-10 w-full h-full  absolute flex flex-col items-center justify-start p-10">
            <p className="text-lg font-semibold text-gray-500">{offerText}</p>
            <h1 className="text-4xl font-bold mt-5">{title}</h1>

            <div className="btn bg-gradient-to-r from-blue-700 to-blue-500 text-white mt-6 rounded-none">ORDER NOW</div>
        </div>
        <LazyLoadImage effect="blur" src={img} alt={"Banner Image"} />
    </div>
  )
}

export default Banner