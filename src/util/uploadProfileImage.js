import { API_ENDPOINTS } from "./apiEndpoints.js";

const CLOUDINARY_UPLOAD_PRESET = "money-manager";

const uploadProfileImage = async (imageFile) => {
  const formData = new FormData();
  formData.append("file", imageFile);
  formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

  try {
    const response = await fetch(API_ENDPOINTS.UPLOAD_IMAGE, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `Cloudinary upload failed: ${errorData.error?.message || response.statusText}`
      );
    }

    const data = await response.json();

    console.log("✅ Image uploaded to Cloudinary:", data.secure_url);

    return data.secure_url; // return the uploaded image URL
  } catch (error) {
    console.error("❌ Error uploading image to Cloudinary:", error);
    throw error; // rethrow so the calling function can handle it
  }
};

export default uploadProfileImage;
