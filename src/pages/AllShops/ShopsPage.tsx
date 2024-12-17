/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router";
import { useGetShopsQuery } from "../../Redux/feature/shop/shopApi";

// interface Shop {
//     id: string;
//     vendorId: string;
//     name: string | null;
//     bio: string | null;
//     image: string | null;
//     bannerImage: string | null;
//     followers: number | null;
//     status: string;
//     createAt: string;
//   }

const ShopsPage = () => {
  const { data } = useGetShopsQuery(undefined);

  const placeholderImage =
  "https://via.placeholder.com/150?text=No+Image";
const placeholderBanner =
  "https://via.placeholder.com/800x200?text=No+Banner";



  return (
    <section className="max-w-7xl mx-auto py-10 px-4">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-6">Shops</h1>

      {/* Shops Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.data?.map((shop : any) => (
          <Link
            to={`/shop/${shop.name}`}
            key={shop.id}
            className="group block rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
          >
            {/* Shop Banner */}
            <div className="h-32">
              <img
                src={shop.bannerImage || placeholderBanner}
                alt="Shop Banner"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Shop Details */}
            <div className="p-4">
              {/* Shop Image */}
              <div className="w-16 h-16 rounded-full overflow-hidden -mt-10 mx-auto border-2 border-white shadow-md">
                <img
                  src={shop.image || placeholderImage}
                  alt={shop.name || "Shop Image"}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Shop Name */}
              <h2 className="text-center text-xl font-semibold mt-2 text-gray-800">
                {shop.name || "Unnamed Shop"}
              </h2>

              {/* Shop Bio */}
              <p className="text-center text-sm text-gray-600 mt-1 line-clamp-2">
                {shop.bio || "No bio available."}
              </p>

              {/* Followers and Status */}
              <div className="flex justify-between items-center text-sm text-gray-500 mt-3">
                <span>
                  {shop.followers !== null
                    ? `${shop.followers.length} Followers`
                    : "No Followers"}
                </span>
                <span
                  className={`px-2 py-1 rounded text-xs ${
                    shop.status === "Progress"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {shop.status}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* No Shops Available */}
      {data?.data?.length === 0 && (
        <p className="text-center text-gray-600 mt-10">
          No shops available at the moment.
        </p>
      )}
    </section>
  );
};

export default ShopsPage;
