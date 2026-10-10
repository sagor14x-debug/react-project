import Logo from "../assets/logo-text.png";
import { FiMenu } from "react-icons/fi";

const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6 py-4">

        {/*Desktop Navbar*/}
        <div className="hidden md:flex items-center justify-between">

          {/* Logo */}
          <a href="#">
            <img
              src={Logo}
              alt="Dev Stack"
              className="w-32 lg:w-36"
            />
          </a>

          {/* Navigation */}
          <ul className="flex items-center gap-6 lg:gap-8 font-medium text-gray-700">
            <li>
              <a
                href="#"
                className="text-pink-600 transition"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#technologies"
                className="hover:text-pink-600 transition"
              >
                Technologies
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="hover:text-pink-600 transition"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="hover:text-pink-600 transition"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="hover:text-pink-600 transition"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Buttons */}
          <div className="flex items-center gap-2">

            {/* Sign In */}
            <button
              className="px-4 py-2 font-medium text-gray-700
              rounded-xl hover:bg-gray-100
              transition cursor-pointer"
            >
              Sign In
            </button>

            {/* Sign Up */}
            <button
              className="px-5 py-2 rounded-xl
              text-white font-medium
              bg-pink-700 hover:bg-pink-800
              transition cursor-pointer"
            >
              Sign Up
            </button>

          </div>
        </div>

           {/* Mobile Navbar */}
        <div className="relative flex md:hidden items-center justify-between">

          {/* Hamburger */}
          <button
            className="flex items-center justify-center
            w-9 h-9 rounded-lg
            hover:bg-gray-100
            transition cursor-pointer"
            aria-label="Open menu"
          >
            <FiMenu className="text-2xl text-gray-800" />
          </button>


          {/* Center Logo */}
          <a
            href="#"
            className="absolute left-1/2 -translate-x-1/2"
          >
            <img
              src={Logo}
              alt="Dev Stack"
              className="w-28"
            />
          </a>


          {/* Mobile Buttons */}
          <div className="flex items-center gap-1">

            {/* Sign In */}
            <button
              className="px-2 py-1.5
              text-xs font-medium
              text-gray-700
              rounded-lg
              hover:bg-gray-100
              transition cursor-pointer"
            >
              Sign In
            </button>

            {/* Sign Up */}
            <button
              className="px-3 py-1.5
              text-xs font-medium
              text-white
              rounded-lg
              bg-pink-700 hover:bg-pink-800
              transition cursor-pointer"
            >
              Sign Up
            </button>

          </div>

        </div>

      </div>
    </nav>
  );
};

export default Nav;