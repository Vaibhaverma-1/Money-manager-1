import { useState } from "react";
import { assets } from "../assets/assets.js";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "/home" },
    { name: "About us", to: "/about" },
    { name: "Contact us", to: "/contact" },
  ];

  return (
    <header className="border-b border-green-200 dark:border-green-700 bg-white dark:bg-green-950">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <Link to="/home" className="flex items-center gap-2">
            <img src={assets.logo} alt="logo" className="h-10 w-10" />
            <span className="text-lg font-bold text-green-800 dark:text-green-100 truncate cursor-pointer hover:opacity-80 transition">
              FinTrack
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                to={link.to}
                key={link.name}
                className="text-green-700 dark:text-green-100 hover:text-green-600 dark:hover:text-green-300 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Buttons + Menu Toggle */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-4">
              <Link
                to="/login"
                className="text-green-700 dark:text-green-100 hover:text-green-600 dark:hover:text-green-300 transition-colors"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-green-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-green-700 dark:text-green-100 hover:bg-green-100 dark:hover:bg-green-800"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-green-950 border-t border-green-200 dark:border-green-700">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  className="text-green-700 dark:text-green-100 hover:text-green-600 dark:hover:text-green-300 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-green-100 dark:border-green-800">
                <Link
                  to="/login"
                  className="text-green-700 dark:text-green-100 hover:text-green-600 dark:hover:text-green-300 transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-green-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-700 text-center transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
