import React from "react";
import { X } from "lucide-react";

const Modal = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center w-full h-full overflow-hidden bg-black/40 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl max-h-[90vh] p-4">
        <div className="relative bg-white dark:bg-green-950 rounded-md shadow-xl border border-green-200 dark:border-green-700">
          {/* Header */}
          <div className="flex items-center justify-between p-5 md:p-6 border-b border-green-100 dark:border-green-700 rounded-t-md">
            <h3 className="text-xl font-semibold text-green-800 dark:text-green-100">
              {title}
            </h3>

            <button
              type="button"
              onClick={onClose}
              className="w-9 h-9 flex items-center justify-center rounded-md bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-100 hover:bg-green-200 dark:hover:bg-green-700 transition"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-5 md:p-6 text-green-800 dark:text-green-100 overflow-y-auto max-h-[65vh]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
