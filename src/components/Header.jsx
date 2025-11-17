import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/themeSlice";
import { HeartIcon } from "@heroicons/react/20/solid";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const favoritesCount = useSelector((state) => state.favorites.items.length);
  const theme = useSelector((state) => state.theme.mode);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-amber-700 dark:text-amber-500">
          CupVerse
        </h1>

        <ul className="hidden md:flex space-x-8 items-center">
          <li>
            <button
              onClick={() => scrollToSection("hero")}
              className="hover:text-amber-700 dark:text-gray-300 dark:hover:text-amber-500"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("menu")}
              className="hover:text-amber-700 dark:text-gray-300 dark:hover:text-amber-500"
            >
              Menu
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-amber-700 dark:text-gray-300 dark:hover:text-amber-500"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="hover:text-amber-700 dark:text-gray-300 dark:hover:text-amber-500"
            >
              Testimonials
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-amber-700 dark:text-gray-300 dark:hover:text-amber-500"
            >
              Contact
            </button>
          </li>

          <li className="relative">
            <button className="flex items-center space-x-1 text-red-500 hover:text-red-600">
              <HeartIcon className="w-8 h-8  text-red-500" />
              {favoritesCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {favoritesCount}
                </span>
              )}
            </button>
          </li>

          <li>
            <button
              onClick={() => dispatch(toggleTheme())}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              {theme === "light" ? (
                <MoonIcon className="w-6 h-6 text-gray-800" />
              ) : (
                <SunIcon className="w-6 h-6 text-yellow-500" />
              )}
            </button>
          </li>
        </ul>

   <button
  onClick={() => setIsMenuOpen(!isMenuOpen)}
  className="md:hidden text-gray-700 dark:text-gray-300"
>
  {isMenuOpen ? (
    <XMarkIcon className="w-6 h-6" />
  ) : (
    <Bars3Icon className="w-6 h-6" />
  )}
</button>
      </nav>



      {/* for mobile menu */}

      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-t dark:border-gray-700">
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <button
                onClick={() => scrollToSection("hero")}
                className="block w-full text-left dark:text-gray-300"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("menu")}
                className="block w-full text-left dark:text-gray-300"
              >
                Menu
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left dark:text-gray-300"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="block w-full text-left dark:text-gray-300"
              >
                Testimonials
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left dark:text-gray-300"
              >
                Contact
              </button>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-red-500 flex items-center">
                <HeartIcon className="w-6 h-6 mr-1" />
                Favorites: {favoritesCount}
              </span>
              <button
                onClick={() => dispatch(toggleTheme())}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
              >
                {theme === "light" ? (
                  <MoonIcon className="w-6 h-6 text-gray-800" />
                ) : (
                  <SunIcon className="w-6 h-6 text-yellow-500" />
                )}
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
