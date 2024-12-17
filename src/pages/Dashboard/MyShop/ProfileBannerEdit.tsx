/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { FaCloudUploadAlt, FaEdit } from "react-icons/fa";

const ProfileBannerEdit = ({ handleImageUpload, isLoading }: any) => {
  const [imgFile, setImgFile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [UploadedImg, setUploadedImg] = useState(null);
  const handleFileChange = (e: any) => {
    const file: any = e.target.files[0];
    if (file) {
      setUploadedImg(file);
      setImgFile(URL.createObjectURL(file) as any); // Display the selected image
      setIsEditing(true); // Enable the editing mode
    }
  };

  const handleSave = async() => {
    await handleImageUpload(UploadedImg);
  };

  return (
    <section className="relative">
      <label
        htmlFor="UploadBanner"
        className="flex cursor-pointer flex-col items-center justify-center w-full h-[200px] border-2 rounded-md border-blue-300 border-dashed"
      >
        {imgFile ? (
          <div className="relative w-full h-full">
            <img
              src={imgFile}
              alt="Banner Preview"
              className="w-full h-full object-cover rounded-md"
            />
            <div className="absolute top-2 right-2 bg-white p-2 rounded-full cursor-pointer">
              <FaEdit className="text-blue-600" />
            </div>
          </div>
        ) : (
          <div className="text-blue-600">
            <FaCloudUploadAlt className="text-4xl" />
          </div>
        )}
        <div>
          <p className="font-semibold text-slate-500">
            {imgFile ? "" : "Click And Upload Your Shop Banner"}
          </p>
        </div>
        <input
          onChange={handleFileChange}
          className="hidden"
          type="file"
          id="UploadBanner"
        />
      </label>

      {isEditing && (
        <div className="mt-4 flex justify-end">
          <button
            onClick={handleSave}
            disabled={isLoading}
            className="px-4 py-2 bg-gradient-to-l from-blue-700 to-blue-500 bg-blue-600 text-white rounded-md"
          >
            Save Banner {isLoading && <span className="loading loading-spinner loading-sm"></span>}
          </button>
        </div>
      )}
    </section>
  );
};

export default ProfileBannerEdit;
