import { useEffect, useRef, useState } from "react";
import { Trash, Upload, User } from "lucide-react";

const ProfilePhotoSelector = ({ image, setImage }) => {
  const inputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  useEffect(() => {
    if (typeof image === "string") {
      setPreviewUrl(image);
    }
  }, [image]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const preview = URL.createObjectURL(file);
      setPreviewUrl(preview);
    }
  };

  const handleRemoveImage = (e) => {
    e.preventDefault();
    setImage(null);
    setPreviewUrl(null);
  };

  const onChooseFile = (e) => {
    e.preventDefault();
    inputRef.current?.click();
  };

  return (
    <div className="flex justify-center mb-6">
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleImageChange}
        className="hidden"
      />

      {!previewUrl ? (
        <div className="w-20 h-20 flex items-center justify-center bg-green-100 dark:bg-green-900 rounded-full relative shadow-md">
          <User className="text-green-700 dark:text-green-300" size={32} />
          <button
            onClick={onChooseFile}
            title="Upload profile photo"
            className="w-8 h-8 flex items-center justify-center absolute -bottom-1 -right-1 rounded-md shadow bg-white dark:bg-green-700 text-green-600 dark:text-white hover:bg-green-100 dark:hover:bg-green-800 transition"
          >
            <Upload size={16} />
          </button>
        </div>
      ) : (
        <div className="relative">
          <img
            src={previewUrl}
            alt="Selected profile"
            className="w-20 h-20 rounded-md object-cover border border-green-400 shadow"
          />
          <button
            onClick={handleRemoveImage}
            title="Remove image"
            className="w-8 h-8 flex items-center justify-center absolute -bottom-1 -right-1 rounded-md shadow bg-red-600 text-white hover:bg-red-700 transition"
          >
            <Trash size={16} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfilePhotoSelector;
