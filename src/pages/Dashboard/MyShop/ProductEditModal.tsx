/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import { MdEdit } from "react-icons/md";
import { useGetProductCategoryQuery } from "../../../Redux/feature/ProductCategory/ProductCategory";
import { IoMdCloseCircle } from "react-icons/io";
import useImageUpload from "../../../Hook/useImgUpload";
import { useUpdateProductMutation } from "../../../Redux/feature/Product/ProductApi";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const ProductEditPage = ({
  editedProductData,
  setEditProductModalOpen,
}: any) => {
  const ImageUploadRef: any = useRef(null);
  const [ProductData, setProductData]: any = useState({});
  const [image, setImage] = useState();
  const [tags, settags]: any = useState();
  const [newTag, setnewTag] = useState("");
  const [IsSaveChange, setIsSaveChange] = useState(false);
  const [IsImgChange, setIsImgChange] = useState(false);

  //   api
  const { data: category } = useGetProductCategoryQuery(undefined);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file: any = e.target.files?.[0]; // Use optional chaining to handle the possibility of no file
    if (file) {
      // @ts-ignore
      setImage(URL.createObjectURL(file) as string); // TypeScript infers the correct type here
      setIsSaveChange(true);
      setIsImgChange(true);
    }
  };

  const handleInputChange = (filedName: string, value: string) => {
    console.log(filedName, value);
    setProductData((prev: any) => {
      return {
        ...prev,
        [filedName]: value,
      };
    });
    setIsSaveChange(true);
  };

  const handleTagsChange = (action: string, value: string) => {
    const IsTagExists = tags.includes(value);

    if (IsTagExists && action == "Deleted") {
      settags((prev: string[]) => prev.filter((data) => data !== value));
      handleInputChange("tags", tags);
    } else {
      settags((prev: string[]) => [...prev, value]);
      setnewTag("");
      handleInputChange("tags", tags);
    }
  };

  const { uploadImage } = useImageUpload();
  const { user } = useSelector((state: any) => state.auth);
  const [updateProduct] = useUpdateProductMutation();

  const Notify = () => toast.success("Product Updated!");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (IsImgChange) {
      const imgLink: any = await uploadImage(ImageUploadRef.current);
      setImage(imgLink);
    }

    const updateData = {
      image: image,
      title: ProductData.title,
      categoryId: ProductData.categoryId,
      price: ProductData.price,
      stock: ProductData.stock,
      description: ProductData.description,
      tags: ProductData.tags,
    };

    updateProduct({
      id: ProductData.id,
      shopid: user.shop[0].id,
      updateData: updateData,
    })
      .then(() => {
        Notify();
        setEditProductModalOpen(false);
      })
      .catch((err) => console.log(err));

    // Handle form submission logic
    console.log("Form submitted");
  };

  useEffect(() => {
    setProductData(editedProductData);
    setImage(editedProductData.image);
    settags(editedProductData.tags);
  }, [editedProductData]);

  return (
    <div className=" bg-white p-6 rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Edit Product</h1>

      <form onSubmit={handleSubmit}>
        {/* Image Section */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Product Image
          </label>
          <div className="flex items-center space-x-4 relative w-max">
            {image ? (
              <img
                src={image}
                alt="Product Preview"
                className="w-32 h-32 rounded-lg object-cover border"
              />
            ) : (
              <div className="w-32 h-32 flex items-center justify-center border rounded-lg text-gray-500 bg-gray-50">
                No Image
              </div>
            )}
            <label htmlFor="ImageUpload">
              <button
                type="button"
                title="Replace"
                onClick={() => ImageUploadRef?.current?.click()}
                className="absolute top-1 right-0 bg-blue-600 p-0.5 text-white text-lg"
              >
                <MdEdit />
              </button>
              <input
                ref={ImageUploadRef}
                type="file"
                accept="image/*"
                id="ImageUpload"
                onChange={handleImageChange}
                className="text-sm hidden"
              />
            </label>
          </div>
        </div>
        {/* Title */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Title</label>
          <input
            value={ProductData?.title}
            type="text"
            onChange={(e) => handleInputChange("title", e.target.value)}
            placeholder="Enter product title"
            className="rounded-none input input-bordered w-full "
          />
        </div>
        <div className="grid grid-cols-3">
          {" "}
          {/* Price */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Price
            </label>
            <input
              value={ProductData?.price}
              type="number"
              onChange={(e) => handleInputChange("price", e.target.value)}
              placeholder="Enter product price"
              className="rounded-none input input-bordered w-full max-w-xs"
            />
          </div>
          {/* Stock */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Stock
            </label>
            <input
              value={ProductData?.stock}
              type="number"
              onChange={(e) => handleInputChange("stock", e.target.value)}
              placeholder="Enter stock quantity"
              className="rounded-none input input-bordered w-full max-w-xs"
            />
          </div>
          {/* Category */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Category
            </label>
            <select
              onChange={(e) => handleInputChange("categoryId", e.target.value)}
              className="select rounded-none select-bordered w-full max-w-xs"
            >
              {category?.data?.map((data: any) => (
                <option
                  selected={data.id == ProductData?.Category?.id}
                  value={data.id}
                >
                  {data.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Description
          </label>
          <textarea
            value={ProductData?.description}
            onChange={(e) => handleInputChange("description", e.target.value)}
            className="w-full rounded-none h-[150px] textarea textarea-bordered"
            placeholder="Bio"
          ></textarea>
        </div>

        {/* Tags */}
        <div className=" mb-4">
          <label className="block text-gray-700 font-medium mb-2">Tags</label>
          <div>
            <input
              type="text"
              placeholder="Enter product tags, separated by commas"
              onChange={(e) => setnewTag(e.target.value)}
              value={newTag}
              className="input rounded-none input-bordered w-full max-w-xs"
            />
            <button
              type="button"
              onClick={() => handleTagsChange("Add", newTag)}
              className="btn rounded-none bg-blue-600 text-white hover:bg-blue-800"
            >
              Add
            </button>
          </div>
        </div>

        <div className="flex gap-2 items-center justify-start flex-wrap mb-6">
          {tags?.map((data: string) => (
            <span className="flex gap-1 items-center justify-start bg-slate-100 p-1">
              {data}{" "}
              <IoMdCloseCircle
                onClick={() => handleTagsChange("Deleted", data)}
                className="text-lg text-red-400 cursor-pointer"
              />{" "}
            </span>
          ))}
        </div>
        {/* Submit Button */}
        <div>
          <button
            disabled={!IsSaveChange}
            type="submit"
            className={`btn bg-gradient-to-r ${
              !IsSaveChange && "hover:cursor-not-allowed"
            } text-white from-blue-600 to-blue-900`}
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductEditPage;
