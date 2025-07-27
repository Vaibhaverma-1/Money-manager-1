import { useState } from "react";
import { Image, X } from "lucide-react";
import EmojiPicker from "emoji-picker-react";

const EmojiPickerPopup = ({ icon, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleEmojiClick = (emoji) => {
    onSelect(emoji?.imageUrl || "");
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col md:flex-row items-start gap-5 mb-6">
      <div
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-4 cursor-pointer"
      >
        <div className="w-12 h-12 flex items-center justify-center text-2xl bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-200 rounded-md shadow-sm">
          {icon ? (
            <img src={icon} alt="Icon" className="w-12 h-12 rounded-mg" />
          ) : (
            <Image />
          )}
        </div>
        <p className="text-sm text-green-800 dark:text-green-200 font-medium">
          {icon ? "Change Icon" : "Pick Icon"}
        </p>
      </div>

      {isOpen && (
        <div className="relative z-50">
          <button
            onClick={() => setIsOpen(false)}
            className="w-7 h-7 flex items-center justify-center bg-white dark:bg-green-900 border border-green-200 dark:border-green-700 text-green-800 dark:text-green-100 rounded-md absolute -top-2 -right-2 shadow-sm"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="rounded-md shadow-lg border border-green-200 dark:border-green-700 bg-white dark:bg-green-950">
            <EmojiPicker
              open={isOpen}
              onEmojiClick={handleEmojiClick}
              theme="light"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default EmojiPickerPopup;
