/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useGetProductCategoryQuery } from "../../../Redux/feature/ProductCategory/ProductCategory";
import { useSelector } from "react-redux";
import useImageUpload from "../../../Hook/useImgUpload";
import { useAddProductMutation } from "../../../Redux/feature/Product/ProductApi";
import toast from "react-hot-toast";

const AddProductPage = () => {
  // api
  const { data: CategroyData } = useGetProductCategoryQuery(undefined);
  const { user } = useSelector((state: any) => state.auth);
  const [AddProduct, { isLoading }] = useAddProductMutation();

  const [productTitle, setProductTitle] = useState("");
  const [productImage, setProductImage]: any = useState(null);
  const [productImageUrl, setProductImageUrl] = useState("");
  const [ProductDescription, setProductDescription] = useState("");
  const [category, setcategory] = useState("");
  const [stockLimit, setStockLimit] = useState("");
  const [price, setPrice] = useState("");
  const [tags, setTags]: any = useState([]);
  const [newTag, setNewTag] = useState("");

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setProductImage(file);
      setProductImageUrl(URL.createObjectURL(file)); // Display uploaded image
    }
  };

  const handleEditImage = () => {
    document.getElementById("image-upload")?.click(); // Trigger file input click
  };

  const handleAddTag = () => {
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
      setNewTag("");
    }
  };

  const handleDeleteTag = (tag: any) => {
    setTags(tags.filter((t: any) => t !== tag));
  };

  const ResetAll = () => {
    setProductTitle("");
    setProductImage("");
    setProductImageUrl("");
    setcategory("");
    setStockLimit("");
    setPrice("");
    setNewTag("");
    setTags([]);
    setProductDescription("");
  };

  const { uploadImage } = useImageUpload();

  const notify = () => toast.success("Product Added Success.");
  const ErrorNotify = (err: string) => toast.error(err);

  const handleSubmit = async () => {
    const imgLink = await uploadImage(productImage);

    const Responce: any = await AddProduct({
      shopId: user.shop[0].id,
      title: productTitle,
      image: imgLink,
      tags: tags,
      categoryId: category,
      price: parseFloat(price),
      stock: parseInt(stockLimit),
      description: ProductDescription,
    });

    if (Responce.error) {
      ErrorNotify(Responce?.error?.data?.message);
    } else {
      console.log(Responce);
      notify();
      ResetAll();
    }
  };

  return (
    <div className=" p-6 bg-white  rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Add New Product
      </h2>
      <div className="space-y-6">
        {/* Product Image */}
        <div>
          <label className="block text-gray-700 font-semibold">
            Product Image
          </label>
          <div className="mt-2">
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
            <div className="flex items-center space-x-4">
              {productImageUrl ? (
                <>
                  <img
                    src={productImageUrl}
                    alt="Product"
                    className="w-32 h-32 object-cover rounded-md"
                  />
                  <button
                    type="button"
                    onClick={handleEditImage}
                    className="text-blue-500 hover:underline"
                  >
                    Edit Image
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  onClick={handleEditImage}
                  className="text-blue-500 hover:underline"
                >
                  Upload Image
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Product Title */}
        <div>
          <label
            htmlFor="productTitle"
            className="block text-gray-700 font-semibold"
          >
            Product Title
          </label>
          <input
            type="text"
            id="productTitle"
            className="input rounded-none input-bordered w-full"
            placeholder="Enter product title"
            value={productTitle}
            onChange={(e) => setProductTitle(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-3 gap-10 item-center justify-start">
          {/* Stock Limit */}
          <div>
            <label
              htmlFor="stockLimit"
              className="block text-gray-700 font-semibold"
            >
              Stock Limit
            </label>
            <input
              type="number"
              min={0}
              id="stockLimit"
              onWheel={(e: any) => {
                e.target?.blur();
              }}
              className="input input-bordered w-full max-w-xs"
              placeholder="Enter stock limit"
              value={stockLimit}
              onChange={(e) => setStockLimit(e.target.value)}
            />
          </div>

          {/* Price */}
          <div>
            <label
              htmlFor="price"
              className="block text-gray-700 font-semibold"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              className="input input-bordered w-full max-w-xs"
              placeholder="Enter product price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="price"
              className="block text-gray-700 font-semibold"
            >
              Select Category
            </label>
            <select
              onChange={(e) => setcategory(e.target.value)}
              className="select select-bordered rounded-none  w-full"
            >
              <option disabled selected>
                Category
              </option>
              {CategroyData?.data?.map((data: any) => (
                <option value={data.id}>{data.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start">
          <label htmlFor="Description">Description</label>
          <textarea
            value={ProductDescription}
            id="Description"
            onChange={(e) => setProductDescription(e.target.value)}
            className="textarea textarea-bordered w-full h-[200px]"
            placeholder="Description"
          ></textarea>
        </div>

        {/* Tags */}
        <div>
          <label htmlFor="tags" className="block text-gray-700 font-semibold">
            Tags
          </label>
          <div className="mt-2">
            <input
              type="text"
              id="tags"
              className="input rounded-none input-bordered w-full max-w-xs"
              placeholder="Enter tags (comma separated)"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
            />
            <button
              type="button"
              onClick={handleAddTag}
              className="ml-1 mt-2 bg-blue-500 text-white p-3  hover:bg-blue-600"
            >
              Add Tag
            </button>
            <div className="mt-2 flex flex-wrap gap-2">
              {tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md flex items-center"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => handleDeleteTag(tag)}
                    className="ml-2 text-red-500"
                  >
                    x
                  </button>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div>
          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-l from-blue-700 to-blue-400 hover:from-blue-800 hover:to-blue-300 text-white py-3 rounded-md "
          >
            Save Product{" "}
            {isLoading && (
              <span className="loading loading-spinner loading-sm"></span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;
