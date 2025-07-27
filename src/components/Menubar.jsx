import { useState, useRef, useEffect, useContext } from "react";
import { User, LogOut, X, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets.js";
import { AppContext } from "../context/AppContext.jsx";
import Sidebar from "./Sidebar.jsx";

const Menubar = ({ activeMenu }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const { clearUser, user } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showDropdown]);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const handleLogout = () => {
    localStorage.clear();
    clearUser();
    setShowDropdown(false);
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-between gap-5 bg-white dark:bg-green-950 border-b border-green-200 dark:border-green-700 py-4 px-4 sm:px-7 sticky top-0 z-30">
      {/* Left - Mobile Menu Toggle & Brand */}
      <div className="flex items-center gap-5">
        <button
          className="block lg:hidden text-green-800 dark:text-green-100 hover:bg-green-100 dark:hover:bg-green-900 p-1 rounded transition"
          onClick={() => setOpenSideMenu(!openSideMenu)}
        >
          {openSideMenu ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        <div className="flex items-center gap-2">
          <img src={assets.logo} alt="logo" className="h-10 w-10" />
          <span className="text-lg font-semibold text-green-800 dark:text-green-100 truncate">
            Money Manager
          </span>
        </div>
      </div>

      {/* Right - User Avatar */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={toggleDropdown}
          className="flex items-center justify-center w-10 h-10 bg-green-100 dark:bg-green-800 rounded-md transition"
        >
          {user?.profileImageUrl ? (
            <img
              src={user.profileImageUrl}
              alt="profile"
              className="w-10 h-10 rounded-md object-cover"
            />
          ) : (
            <User className="text-green-700 dark:text-green-100 w-6 h-6" />
          )}
        </button>

        {/* Dropdown */}
        {showDropdown && (
          <div className="absolute right-0 mt-2 w-52 bg-white dark:bg-green-900 border border-green-200 dark:border-green-700 rounded-md shadow-md z-50">
            <div className="px-4 py-3 border-b border-green-100 dark:border-green-700">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center">
                  {user?.profileImageUrl ? (
                    <img
                      src={user.profileImageUrl}
                      alt="profile"
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <User className="w-4 h-4 text-green-600" />
                  )}
                </div>
                <div>
                  <p className="text-sm font-medium text-green-800 dark:text-green-100 truncate">
                    {user.fullName}
                  </p>
                  <p className="text-xs text-green-500 dark:text-green-300 truncate">
                    {user.email}
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="flex items-center gap-3 w-full px-4 py-2 text-sm text-green-700 dark:text-green-100 hover:bg-green-50 dark:hover:bg-green-800 transition"
            >
              <LogOut className="w-4 h-4 text-green-500" />
              Logout
            </button>
          </div>
        )}
      </div>

      {/* Mobile Sidebar */}
      {openSideMenu && (
        <div className="fixed top-[73px] left-0 right-0 bg-white dark:bg-green-950 border-b border-green-200 dark:border-green-700 lg:hidden z-20">
          <Sidebar activeMenu={activeMenu} />
        </div>
      )}
    </div>
  );
};

export default Menubar;
