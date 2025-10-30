import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="relative z-50 flex items-center justify-between px-4 py-4 bg-white sm:px-6 md:px-10 md:py-6 lg:px-16 2xl:px-24">
      {/* Logo */}
      <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-[#0F0B43]">
        Red Sky
      </h1>

      {/* Desktop Links */}
      <div className="items-center hidden gap-4 text-sm md:flex lg:gap-8 lg:text-base xl:gap-12">
        <a href="#" className="transition-colors hover:text-blue-900">
          PLATFORM
        </a>
        <a href="#" className="transition-colors hover:text-blue-900">
          FINANCE
        </a>
        <a href="#" className="transition-colors hover:text-blue-900">
          FORWARDING
        </a>
        <a href="#" className="transition-colors hover:text-blue-900">
          ABOUT US
        </a>
        <a href="#" className="transition-colors hover:text-blue-900">
          CONTACT US
        </a>
      </div>

      {/* Login Button (hidden on small screens) */}
      <button className="hidden px-6 py-2 rounded-full bg-[#0F0B43] text-white text-sm font-semibold hover:bg-[#191368] transition md:block lg:px-10 lg:py-3 lg:text-base">
        LOGIN
      </button>

      {/* Hamburger Menu (visible below md) */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-3xl focus:outline-none">
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 sm:w-2/5 bg-white shadow-2xl transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold text-[#0F0B43]">Red Sky</h2>
            <button onClick={toggleMenu} className="text-3xl">
              <FiX />
            </button>
          </div>

          <nav className="flex flex-col gap-6 text-lg font-medium">
            <a href="#" className="hover:text-blue-900" onClick={toggleMenu}>
              PLATFORM
            </a>
            <a href="#" className="hover:text-blue-900" onClick={toggleMenu}>
              FINANCE
            </a>
            <a href="#" className="hover:text-blue-900" onClick={toggleMenu}>
              FORWARDING
            </a>
            <a href="#" className="hover:text-blue-900" onClick={toggleMenu}>
              ABOUT US
            </a>
            <a href="#" className="hover:text-blue-900" onClick={toggleMenu}>
              CONTACT US
            </a>
          </nav>

          <button
            className="mt-auto px-8 py-3 rounded-full bg-[#0F0B43] text-white hover:bg-[#191368] transition"
            onClick={toggleMenu}
          >
            LOGIN
          </button>
        </div>
      </div>

      {/* Background Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-70"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
};

export default NavBar;
