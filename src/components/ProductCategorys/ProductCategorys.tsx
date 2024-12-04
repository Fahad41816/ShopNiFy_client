import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ProductCategories = () => {
  const Categories = [
    {
      id: 1,
      name: "Watches",
      image:
        "https://i.ebayimg.com/thumbs/images/g/RFcAAOSwA1lg~ohl/s-l500.jpg",
    },
    {
      id: 2,
      name: "Smartphones",
      image:
        "https://m.media-amazon.com/images/I/71TXKuUwFxL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
      id: 3,
      name: "Laptops",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVfUrTMlZjzQncknnLg3XoHhlSKsKy7ajVGw&s",
    },
    {
      id: 4,
      name: "Televisions",
      image:
        "https://www.shutterstock.com/image-photo/tv-flat-screen-lcd-plasma-260nw-314401364.jpg",
    },
    {
      id: 5,
      name: "Audio Devices",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNfdne3llpE4TY7KgX1BWCd53okw1r-A8-1A&s",
    },
    {
      id: 6,
      name: "Footwear",
      image:
        "https://media.istockphoto.com/id/1279108197/photo/variety-of-womens-fashion-comfortable-shoes-of-all-seasons-on-a-light-background-top-view.jpg?s=612x612&w=0&k=20&c=_mdUMo2tsufgilqv8IQeW6hp8YjICTR8_tF-YP1Zgxk=",
    },
    {
      id: 7,
      name: "Accessories",
      image:
        "https://media.istockphoto.com/id/531786318/photo/top-view-of-female-fashion-accessories.jpg?s=612x612&w=0&k=20&c=kA9wOhgfDQiz7RO6GoEztqlPNGaTxZyFwf14991aMM0=",
    },
    {
      id: 8,
      name: "Wearables",
      image:
        "https://techcrunch.com/wp-content/uploads/2015/06/wearables-e1455299947895.jpg",
    },
    {
      id: 9,
      name: "Gaming Gear",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW8pE1H9f3gLxACrY3-SC0VIfBFYIBk5IwCw&s",
    },
    {
      id: 10,
      name: "Cameras",
      image: "https://cdn.mos.cms.futurecdn.net/GXHa4PWwDPx7tGQG9MDQvK.jpg",
    },
    {
      id: 11,
      name: "Home Appliances",
      image:
        "https://media.istockphoto.com/id/1211554164/photo/3d-render-of-home-appliances-collection-set.jpg?s=612x612&w=0&k=20&c=blm3IyPyZo5ElWLOjI-hFMG-NrKQ0G76JpWGyNttF8s=",
    },
    {
      id: 12,
      name: "Furniture",
      image:
        "https://img.freepik.com/free-vector/home-furniture-set_74855-15461.jpg",
    },
    {
      id: 13,
      name: "Toys & Games",
      image:
        "https://media.istockphoto.com/id/1072351298/photo/young-girl-playing-with-educational-toys.jpg?s=612x612&w=0&k=20&c=FetuwtUPQoy7GfAZCNRbmVZ7JXggsJOXkS3b1gSbTYw=",
    },
    {
      id: 14,
      name: "Beauty Products",
      image:
        "https://t4.ftcdn.net/jpg/02/73/55/33/360_F_273553300_sBBxIPpLSn5iC5vC8FwzFh6BJDKvUeaC.jpg",
    },
    {
      id: 15,
      name: "Sports Equipment",
      image:
        "https://media.gettyimages.com/id/137352556/photo/sports-equipment.jpg?s=612x612&w=gi&k=20&c=Q-UE8G3WdRLp99rHx7qqYOcm_n25X4JyZSyeiswNVLE=",
    },
    {
      id: 16,
      name: "Books",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtCyGq73Yl8yr0YzSuxuS8-fJUQVGXDgPJRw&s",
    },
    {
      id: 17,
      name: "Kitchenware",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzN0agiwxcLV1iBbwDmR_NSDrpKrWmaRMZIA&s",
    },
    {
      id: 18,
      name: "Clothing",
      image:
        "https://t3.ftcdn.net/jpg/03/34/79/68/360_F_334796865_VVTjg49nbLgQPG6rgKDjVqSb5XUhBVsW.jpg",
    },
    {
      id: 19,
      name: "Stationery",
      image:
        "https://media.istockphoto.com/id/1213573873/photo/group-of-colorful-school-supplies-isolated-on-white.jpg?s=612x612&w=0&k=20&c=xFC6dFBxjH4OKbTk51RlzVL_qwP8Yl5MCJZZD8lC45M=",
    },
    {
      id: 20,
      name: "Outdoor Gear",
      image:
        "https://media.istockphoto.com/id/1180121132/photo/top-view-camping-and-hiking-travel-and-hiking-gear-equipment-and-accessories-for-mountain.jpg?s=612x612&w=0&k=20&c=9m8mb5RlWEyHxaA3VXrMOxtivu3_Xzdh7bx0om70sTQ=",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto my-5">
      <div className="border-b-2 border-slate-100">
        <h1 className="text-2xl font-semibold font-serif">PRODUCT CATEGORIES</h1>
      </div>
      <div   className="flex flex-wrap justify-start gap-2 mt-2">
        {Categories.map((category) => (
          <div
           data-aos="flip-left"
            key={category.id}
            className="w-34 p-4 text-center border border-gray-200 rounded-sm shadow-lg bg-white hover:shadow-xl transform hover:scale-90 transition duration-300 ease-in-out cursor-pointer"
          >
            <div className="flex justify-center items-center w-24 h-24 mx-auto mb-2 rounded-full border-2 border-blue-500 overflow-hidden">
              <LazyLoadImage
                width={96} 
                src={category.image}
                alt={category.name}
                effect="blur"
                className="h-full object-cover"
              />
            </div>
            <p className="text-sm font-medium text-gray-700 hover:text-blue-500 transition duration-300">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCategories;
