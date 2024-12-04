import { FaRegHeart, FaStar } from "react-icons/fa";
import Title from "../UI/Title";
import { AiOutlineRetweet } from "react-icons/ai";
import { IoBagOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const products = [
    {
      "id": 1,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7k64yP9C2ljp4wtPvg05Es3Wt7AzRx5WxMQ&s",
      "title": "Bold Metallic Watch",
      "category": "Watches",
      "description": "Elegant metallic watch with a classic leather strap and modern design.",
      "price": 150.00,
      "tags": ["watches", "metallic", "classic", "luxury"],
      "rating": 4.8,
      "reviews": 102,
      "stock": 12,
      "brand": "Basel",
      "discount": 10,
      "newArrival": true
    },
    {
      "id": 2,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqpRrswrq9GmUfPLoIpeGMTYXLE8-CWb1n_g&s",
      "title": "Smartphone XR Pro",
      "category": "Smartphones",
      "description": "High-performance smartphone with cutting-edge features and sleek design.",
      "price": 899.99,
      "tags": ["smartphones", "android", "high-performance", "5G"],
      "rating": 4.6,
      "reviews": 245,
      "stock": 20,
      "brand": "TechCo",
      "discount": 15,
      "newArrival": false
    },
    {
      "id": 3,
      "image": "data:image/jpeg;base64,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",
      "title": "UltraBook Slim",
      "category": "Laptops",
      "description": "Lightweight ultrabook with a powerful processor and long battery life.",
      "price": 1299.00,
      "tags": ["laptops", "ultrabook", "slim", "portable"],
      "rating": 4.9,
      "reviews": 320,
      "stock": 8,
      "brand": "InnovateTech",
      "discount": 20,
      "newArrival": true
    },
    {
      "id": 4,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkQdSpzknHHy4WmGOZgg39b-WUI50xKK4miQ&s",
      "title": "4K Smart TV",
      "category": "Electronics",
      "description": "Experience cinema-quality visuals at home with this 4K ultra HD Smart TV.",
      "price": 799.99,
      "tags": ["television", "4K", "smart-tv", "electronics"],
      "rating": 4.7,
      "reviews": 185,
      "stock": 15,
      "brand": "VisionPro",
      "discount": 25,
      "newArrival": false
    },
    {
      "id": 5,
      "image": "https://m.media-amazon.com/images/I/71v+yDiRjJL._AC_UF1000,1000_QL80_.jpg",
      "title": "Wireless Noise-Cancelling Headphones",
      "category": "Audio Devices",
      "description": "Immerse yourself in music with premium noise-cancelling headphones.",
      "price": 199.99,
      "tags": ["headphones", "wireless", "noise-cancelling", "audio"],
      "rating": 4.8,
      "reviews": 210,
      "stock": 30,
      "brand": "SoundWave",
      "discount": 10,
      "newArrival": true
    },
    {
      "id": 6,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbKZCvKDsCDgujQkpWChkVnA09mT7Ylw-evQ&s",
      "title": "Running Shoes ProMax",
      "category": "Footwear",
      "description": "Lightweight running shoes designed for comfort and durability.",
      "price": 120.00,
      "tags": ["footwear", "running", "shoes", "sports"],
      "rating": 4.5,
      "reviews": 145,
      "stock": 50,
      "brand": "TrackMaster",
      "discount": 15,
      "newArrival": false
    },
    {
      "id": 7,
      "image": "https://m.media-amazon.com/images/I/61t-3RKN-9L._AC_UL1500_.jpg",
      "title": "Leather Laptop Bag",
      "category": "Accessories",
      "description": "Stylish and durable leather bag, perfect for laptops and work essentials.",
      "price": 85.00,
      "tags": ["bags", "leather", "laptop", "work"],
      "rating": 4.7,
      "reviews": 98,
      "stock": 25,
      "brand": "BagIt",
      "discount": 10,
      "newArrival": true
    },
    {
      "id": 8,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbq-ewYyjYbY149G68BNzNza90NCefnNSoEA&s",
      "title": "Fitness Smartwatch",
      "category": "Wearables",
      "description": "Track your health and stay connected with this sleek fitness smartwatch.",
      "price": 199.99,
      "tags": ["wearables", "smartwatch", "fitness", "gadgets"],
      "rating": 4.6,
      "reviews": 170,
      "stock": 18,
      "brand": "FitTrack",
      "discount": 20,
      "newArrival": false
    },
    {
      "id": 9,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTz6Guw6k4Q-kKeq8uKuAYLnJZ211k0rHtaw&s",
      "title": "Gaming Keyboard Pro",
      "category": "Gaming Gear",
      "description": "RGB mechanical keyboard with responsive keys for an ultimate gaming experience.",
      "price": 120.00,
      "tags": ["gaming", "keyboard", "RGB", "mechanical"],
      "rating": 4.9,
      "reviews": 140,
      "stock": 10,
      "brand": "GameForce",
      "discount": 15,
      "newArrival": true
    },
    {
      "id": 10,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv4wOJyb4vg4xInZ2ldlehwqwmnhW6javTiQ&s",
      "title": "Digital SLR Camera",
      "category": "Cameras",
      "description": "Capture stunning images with this high-quality digital SLR camera.",
      "price": 499.99,
      "tags": ["cameras", "DSLR", "photography", "electronics"],
      "rating": 4.8,
      "reviews": 200,
      "stock": 12,
      "brand": "PhotoPro",
      "discount": 10,
      "newArrival": false
    }
  ]
  

const LatestProducts = () => {
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
        slidesToSlide={2}
        swipeable
        autoPlay 
        
      >
        {products.map((pdt) => (
          <div
            key={pdt.id}
            className="group relative w-60 bg-white shadow-md border  overflow-hidden mx-auto"
          >
            {/* <!-- Product Image --> */}
            <div className="relative">
              <img
                src={pdt.image}
                alt="Product Image"
                className="w-full h-52 object-fill bg-slate-50"
              />
              {/* <!-- Hover Overlay Options --> */}
              <div className="absolute inset-0 bg-black bg-opacity-30 h-0 opacity-0 group-hover:opacity-100 group-hover:h-full transition-all duration-200 flex flex-col justify-start items-end space-y-2">
                <button
                  title="Add Wishlist"
                  className="px-2 py-1 text-xl text-white font-bold hover:bg-slate-500 transition"
                >
                  <FaRegHeart />
                </button>
                <button
                  title="Compare"
                  className="px-2 py-1 text-xl text-white font-bold hover:bg-slate-500 transition"
                >
                  <AiOutlineRetweet />
                </button>
                <button
                  title="Add Cart"
                  className="px-2 py-1 text-xl text-white font-bold  hover:bg-slate-500 transition"
                >
                  <IoBagOutline />
                </button>
                <button
                  title="Details"
                  className="px-2 py-1 text-xl text-white font-bold hover:bg-slate-500 transition"
                >
                  <IoIosSearch />
                </button>
              </div>
            </div>
            {/* <!-- Product Details --> */}
            <div className="p-2">
              <div className="flex item-center justify-start">
                <FaStar className="text-[#fdde2f]" />
                <FaStar className="text-[#fdde2f]" />
                <FaStar className="text-[#fdde2f]" />
                <FaStar className="text-[#fdde2f]" />
                <FaStar className="text-[#fdde2f]" />
              </div>
              <h3 className="text-sm font-semibold mt-1">{pdt.title}</h3>
              <p className="text-sm text-gray-500">{pdt.category}</p>
              <p className="text-lg font-bold mt-1 text-[#ffc352]">
                ${pdt.price}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
    </section>
  );
};

export default LatestProducts;
