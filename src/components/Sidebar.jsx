import { useContext, useEffect, useState } from "react";
import { User, CameraIcon, Trash2 } from "lucide-react";
import { SIDE_BAR_DATA } from "../assets/assets.js";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal.jsx";
import toast from "react-hot-toast";
import uploadProfileImage from "../util/uploadProfileImage.js";
import { AppContext } from "../context/AppContext.jsx"; // ✅ added

const Sidebar = ({ activeMenu }) => {
  const { user } = useContext(AppContext); // ✅ added
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [profileImage, setProfileImage] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("profileImage");
    if (saved) setProfileImage(saved);
  }, []);

  const handleUpload = async () => {
    if (!imageFile) {
      toast.error("Please select an image.");
      return;
    }

    try {
      const imageUrl = await uploadProfileImage(imageFile);
      localStorage.setItem("profileImage", imageUrl);
      setProfileImage(imageUrl);
      toast.success("Profile photo updated!");
      setOpenModal(false);
    } catch (error) {
      console.error("Error uploading profile image:", error);
      toast.error("Failed to upload image");
    }
  };

  const handleRemove = () => {
    localStorage.removeItem("profileImage");
    setProfileImage("");
    toast.success("Profile photo removed!");
    setOpenModal(false);
  };

  return (
    <div className="w-64 h-[calc(100vh-61px)] bg-white border-r border-gray-200 p-5 sticky top-[61px] z-20">
      <div className="flex flex-col items-center gap-3 mb-6">
        <div className="relative group">
          {profileImage ? (
            <img
              src={profileImage}
              alt="profile"
              className="w-20 h-20 rounded-md object-cover border border-gray-300"
            />
          ) : (
            <div className="w-20 h-20 bg-gray-200 rounded-md flex items-center justify-center">
              <User className="w-10 h-10 text-gray-500" />
            </div>
          )}
          <button
            onClick={() => setOpenModal(true)}
            className="absolute bottom-0 right-0 bg-green-600 p-1 rounded-md text-white hover:bg-green-700"
          >
            <CameraIcon size={16} />
          </button>
        </div>
        <h5 className="text-gray-900 font-medium">
          {user?.fullName || "FinTrack User"}
        </h5>
      </div>

      {SIDE_BAR_DATA.map((item, index) => (
        <button
          key={index}
          onClick={() => navigate(item.path)}
          className={`w-full text-left py-3 px-6 rounded-md mb-2 flex items-center gap-4 text-sm ${
            activeMenu === item.label
              ? "bg-green-700 text-white"
              : "hover:bg-gray-100"
          }`}
        >
          <item.icon size={18} />
          {item.label}
        </button>
      ))}

      <Modal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        title="Update Profile Picture"
      >
        <div className="flex flex-col gap-4">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files[0])}
          />
          <button
            onClick={handleUpload}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
          >
            Upload
          </button>
          {profileImage && (
            <button
              onClick={handleRemove}
              className="text-red-600 hover:underline text-sm flex items-center gap-1"
            >
              <Trash2 size={14} /> Remove photo
            </button>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Sidebar;
