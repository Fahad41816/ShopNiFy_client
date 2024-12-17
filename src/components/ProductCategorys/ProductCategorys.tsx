import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useGetProductCategoryQuery } from "../../Redux/feature/ProductCategory/ProductCategory";
import { TCategory } from "../../type/userDatatype";
import { Link } from "react-router";

const ProductCategories = () => {
  const { data } = useGetProductCategoryQuery(undefined);

  return (
    <section className="max-w-7xl mx-auto my-5">
      <div className="border-b-2 border-slate-100">
        <h1 className="text-2xl font-semibold font-serif">
          PRODUCT CATEGORIES
        </h1>
      </div>
      <div className="grid grid-cols-9  flex-wrap justify-start gap-1 mt-2">
        {data?.data?.map((category: TCategory) => (
          <Link to={`/Collections/${category.name}`}>
          <div
            data-aos="flip-left"
            key={category.id}
            className="w-34 p-2 text-center border border-gray-200 rounded-sm shadow-lg bg-white hover:shadow-xl transform hover:scale-90 transition duration-300 ease-in-out cursor-pointer"
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
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductCategories;
