/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router";
import Loader from "../../components/UI/Loader";
import { useGetProductCategoryQuery } from "../../Redux/feature/ProductCategory/ProductCategory";

const CollectionsPage = () => {
  const { data: category, isLoading } = useGetProductCategoryQuery(undefined);

  console.log(category);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="max-w-7xl mx-auto mt-5 py-4">
      <h1 className="text-2xl font-semibold">Collections</h1>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mt-5">
        {category?.data?.map((ctg: any) => (
          <div className="w-60 h-64 group relative overflow-hidden cursor-pointer rounded-lg border-2">
            <img
              className="w-60 h-64 object-fill transition-transform duration-500 group-hover:scale-110"
              src={ctg?.image}
              alt=""
            />
            <div className="absolute bottom-0">
              <div className="btn btn-sm  bg-black text-white border-none text-sm font-light">
                {ctg?.products?.length} items
              </div>
            </div>
            <div
              className="w-full h-full absolute top-0 left-0 flex flex-col items-center justify-center bg-white bg-opacity-60
    translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"
            >
              <h1 className="text-2xl font-bold mb-2">{ctg?.name}</h1>
              <p className="text-center mb-4 text-sm font-semibold">
                Clothing brand tis now still alive
              </p>
              <Link to={`${ctg?.name}`}>
                <div className="btn bg-gradient-to-l from-blue-700 hover:from-blue-400 hover:to-blue-700 to-blue-400 rounded-3xl border-none text-white px-4 py-2">
                  Shop Now
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CollectionsPage;
