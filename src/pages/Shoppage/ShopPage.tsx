/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useLoaderData } from "react-router";
import { useGetSigleShopQuery } from "../../Redux/feature/shop/shopApi";
import Loader from "../../components/UI/Loader";
import ProductCard from "../../components/ProductCard/ProductCard";
import {
  useFollowShopMutation,
  useUnFollowShopMutation,
} from "../../Redux/feature/follower/followApi";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const ShopPage = () => {
  const { shopName } = useLoaderData();

  const { data: shop, isLoading } = useGetSigleShopQuery(shopName);

  console.log(shop);

  const { auth }: any = useSelector((state) => state);

  // api
  const [followShop] = useFollowShopMutation();
  const [unFollowShop] = useUnFollowShopMutation();

  const handleFollowShop = async () => {
    const Data = {
      shopId: shop.data.id,
      userId: auth.user.id,
    };
    const responce = await followShop(Data);
    console.log(responce);
    if (responce.data) {
      toast.success("Follow this Shop");
    } else {
      toast.error("Something Wrong Please Try Again Letter!");
    }
  };

  const isUserFollowShop = shop?.data?.followers.find(
    (data: any) => data.userId == auth.user.id
  )

  const handleunFollow = async() => {
    
    const responce = await unFollowShop(isUserFollowShop.id);
    console.log(responce);
    if (responce.data) {
      toast.success("UnFollow this Shop");
    } else {
      toast.error("Something Wrong Please Try Again Letter!");
    }
  };



  console.log(isUserFollowShop)

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      {/* Banner Section */}
      <div className="relative h-60 bg-gray-200 rounded-lg ">
        <img
          src={
            shop?.data?.bannerImage ||
            "https://via.placeholder.com/800x200?text=No+Banner"
          }
          alt="Shop Banner"
          className="w-full h-full object-cover"
        />
        {/* Shop Image */}
        <div className="absolute -bottom-12 left-4 w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
          <img
            src={
              shop?.data?.image ||
              "https://via.placeholder.com/150?text=No+Image"
            }
            alt="Shop Logo"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Shop Info */}
      <div className="mt-16 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            {shop?.data?.name || "Unnamed Shop"}
          </h1>
          <p className="text-gray-600 mt-2">
            {shop?.data?.bio || "No bio available."}
          </p>
        </div>
        {/* Follow/Unfollow Button */}
        <button
          onClick={() =>
            isUserFollowShop
              ? handleunFollow()
              : handleFollowShop()
          }
          className={`px-6 py-2 text-white bg-gradient-to-b from-blue-600 to-blue-400 rounded-lg font-medium `}
        >
          {isUserFollowShop
            ? "Unfollow"
            : "Follow"}
        </button>
      </div>

      {/* About Shop */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-800">About Shop</h2>
        <p className="text-gray-600 mt-4">
          {shop?.data?.about ||
            "This shop currently doesn't have an about section. Check out their products below!"}
        </p>
      </div>

      {/* Products Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Shop Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {shop?.data?.products?.map((product: any) => (
            <ProductCard pdt={product}></ProductCard>
          ))}
        </div>
        {shop?.data?.products?.length === 0 && (
          <p className="text-center text-gray-600 mt-6">
            No products available.
          </p>
        )}
      </div>
    </div>
  );
};

export default ShopPage;
