/* eslint-disable @typescript-eslint/no-explicit-any */
import { FiEdit } from "react-icons/fi";
import {
  useGetVendorShopQuery,
  useUpdateShopMutation,
} from "../../../Redux/feature/shop/shopApi";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Fade } from "@mui/material";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import ProfileBannerEdit from "./ProfileBannerEdit";
import useImageUpload from "../../../Hook/useImgUpload";
import ProfileEditModel from "./ProfileEditModal";
import ProductDetailsmodal from "./ProductDetailsmodal";
import { IoTrash } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import formatPriceWithCommas from "../../../utils/NumberFormat";
import ProductEditPage from "./ProductEditModal";
import { useDeleteProductMutation } from "../../../Redux/feature/Product/ProductApi";
import Swal from "sweetalert2";

const MyShop = () => {
  const ProductDetailsModalStyle = {
    position: "absolute",
    top: "0%",
    left: "0%",
    right: "0%",
    bottom: "0%",
    width: "90%",
    margin: "auto auto",
    overflow: "scroll",
    bgcolor: "background.paper",
    boxShadow: 24,
    pt: 1,
    px: 2,
    pb: 3,
  };
  const style = {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    boxShadow: 24,
    pt: 1,
    px: 2,
    pb: 3,
  };

  const { user } = useSelector((state: any) => state.auth);
  const { data } = useGetVendorShopQuery(user.id);
  const [updateShop] = useUpdateShopMutation();
  const { uploadImage, isLoading } = useImageUpload();

  // action state
  const [ProductDetailsData, setProductDetailsData] = useState({});
  const [EditProductData, setEditProductData] = useState({});

  // Modal State
  const [bannerEditModelOpen, setbannerEditModelOpen] = useState(false);
  const [ProfileEditModelOpen, setProfileEditModelOpen] = useState(false);
  const [ProductDetailsModalOpen, setProductDetailsModalOpen] = useState(false);
  const [EditProductModalOpen, setEditProductModalOpen] = useState(false);

  const handleBannerModelOpen = () => {
    setbannerEditModelOpen(true);
  };
  const handleBannerModelClose = () => {
    setbannerEditModelOpen(false);
  };
  const handleProfileEditModelOpen = () => {
    setProfileEditModelOpen(true);
  };
  const handleProfileEditModelClose = () => {
    setProfileEditModelOpen(false);
  };

  const handleImageUpload = async (file: any) => {
    await uploadImage(file).then((imglink) => {
      const updateData: any = { bannerImage: imglink };
      updateShop({ id: data.data.id, ShopData: updateData })
        .then((DATA) => {
          console.log(DATA);
          handleBannerModelClose();
        })
        .catch((err) => console.log(err));
    });
  };

  const handleProfileUpdate = (Data: any) => {
    updateShop({ id: data.data.id, ShopData: Data })
      .then((data) => {
        console.log(data);
        setProfileEditModelOpen(false);
      })
      .catch((err) => console.log(err));
  };

  const [deleteProduct] = useDeleteProductMutation();

  const handleDeleteProduct = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(id)
          .then((data) => {
            console.log(data);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          })
          .catch((err) => console.log(err));
      }
    });
  };

  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        {/* Banner Section */}
        <div className="relative bg-gray-300 h-72">
          <img
            src={
              data?.data?.bannerImage || "https://via.placeholder.com/1920x300"
            }
            alt="Shop Banner"
            className="w-full h-full object-fill"
          />
          <button
            onClick={handleBannerModelOpen}
            title="Edit"
            className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full"
          >
            <FiEdit className="text-xl" />
          </button>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col items-center mt-[-50px]">
          <div className="relative">
            <img
              src={data?.data?.image || "https://via.placeholder.com/120"}
              alt="Shop Profile"
              className="rounded-full w-32 h-32 border-4 border-white"
            />
            <button
              onClick={handleProfileEditModelOpen}
              title="Edit"
              className="absolute bottom-0 right-0 bg-blue-500 text-white px-2 py-1 rounded-full text-xs"
            >
              <FiEdit className="text-lg" />
            </button>
          </div>
          <h1 className="mt-4 text-2xl font-bold">
            {data?.data?.name || "ShopNify Shop"}
          </h1>
          <p className="text-gray-600 text-sm">
            {data?.data?.bio || "ShopNify Is Your Best Option"}
          </p>
        </div>

        {/* About Section */}
        <div className="max-w-4xl mx-auto mt-6 px-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            About the Shop
          </h2>
          <p className="text-gray-600">
            {data?.data?.about ||
              "ShopNify is Online Shop for user and Vendor. user can buy any product and vendor can sale her product Help of this onlin platform."}
          </p>
        </div>

        {/* Products Section */}
        <div className="w-full mx-auto mt-8 px-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Our Products
          </h2>
          {data?.data?.products?.length <= 0 && (
            <div className="w-full text-2xl font-bold text-center mt-5 h-screen ">
              No Product In Your Shop!
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data?.data?.products.map((product: any) => (
              <div
                key={product.id}
                className="shadow-md overflow-hidden relative"
              >
                <div className="flex items-center justify-end gap-2 absolute top-2 right-2">
                  <div
                    onClick={() => {
                      setEditProductModalOpen(true);
                      setEditProductData(product);
                    }}
                    className="text-blue-700 text-lg cursor-pointer"
                  >
                    <FaEdit />
                  </div>
                  <div
                    onClick={() => {
                      handleDeleteProduct(product.id);
                    }}
                    className="text-red-700 text-lg cursor-pointer"
                  >
                    <IoTrash />
                  </div>
                </div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-[250px] h-48 object-cover object-center"
                />
                <div className="p-4">
                  <h3 className="text-base font-semibold text-gray-800">
                    {product.title}
                  </h3>
                  <p className="text-gray-600">
                    Price : {formatPriceWithCommas(product.price)}
                  </p>
                  <p className="text-gray-600">
                    Category : {product.Category.name}
                  </p>
                  <p className="text-gray-600">Stock : {product.stock}</p>
                  <button
                    onClick={() => {
                      setProductDetailsModalOpen(true);
                      setProductDetailsData(product);
                    }}
                    className="mt-4 w-full bg-gradient-to-r from-blue-700 to-blue-500 text-white py-2 "
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Profile banner Edit  */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={bannerEditModelOpen}
        onClose={handleBannerModelClose}
        closeAfterTransition
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={bannerEditModelOpen}>
          <Box sx={style}>
            {/* close button  */}
            <div className="flex item-start justify-end">
              <IoMdClose
                onClick={() => setbannerEditModelOpen(false)}
                className="text-2xl cursor-pointer"
              />
            </div>
            <div>
              <ProfileBannerEdit
                handleImageUpload={handleImageUpload}
                isLoading={isLoading}
              />
            </div>
          </Box>
        </Fade>
      </Modal>

      {/* Profile Profile Name Change Modal  */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={ProfileEditModelOpen}
        onClose={handleProfileEditModelClose}
        closeAfterTransition
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={ProfileEditModelOpen}>
          <Box sx={style}>
            {/* close button  */}
            <div className="flex item-start justify-end">
              <IoMdClose
                onClick={() => setProfileEditModelOpen(false)}
                className="text-2xl cursor-pointer"
              />
            </div>
            <div>
              <ProfileEditModel
                handleProfileUpdate={handleProfileUpdate}
                uploadImage={uploadImage}
                isLoading={isLoading}
                shopData={data?.data}
              />
            </div>
          </Box>
        </Fade>
      </Modal>

      {/*Product Details*/}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={ProductDetailsModalOpen}
        onClose={() => setProductDetailsModalOpen(false)}
        closeAfterTransition
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        className="flex items-center justify-center"
      >
        <Fade in={ProductDetailsModalOpen}>
          <Box sx={ProductDetailsModalStyle}>
            {/* close button  */}
            <div className="flex item-start justify-end">
              <IoMdClose
                onClick={() => setProductDetailsModalOpen(false)}
                className="text-2xl cursor-pointer"
              />
            </div>
            <div>
              <ProductDetailsmodal ProductDetailsData={ProductDetailsData} />
            </div>
          </Box>
        </Fade>
      </Modal>

      {/*Product Details*/}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={EditProductModalOpen}
        onClose={() => setEditProductModalOpen(false)}
        closeAfterTransition
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        className="flex items-center justify-center"
      >
        <Fade in={EditProductModalOpen}>
          <Box sx={ProductDetailsModalStyle}>
            {/* close button  */}
            <div className="flex item-start justify-end">
              <IoMdClose
                onClick={() => setEditProductModalOpen(false)}
                className="text-2xl cursor-pointer"
              />
            </div>
            <div>
              <ProductEditPage
                editedProductData={EditProductData}
                setEditProductModalOpen={setEditProductModalOpen}
              />
            </div>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default MyShop;
