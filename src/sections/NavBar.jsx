import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="flex justify-between items-center mx-6 md:mx-10 my-4 md:my-6">
      {/* Logo */}
      <h1 className="font-bold text-2xl md:text-3xl">Red Sky</h1>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-10 lg:gap-12">
        <a href="#" className="hover:text-blue-900">
          PLATFORM
        </a>
        <a href="#" className="hover:text-blue-900">
          FINANCE
        </a>
        <a href="#" className="hover:text-blue-900">
          FORWARDING
        </a>
        <a href="#" className="hover:text-blue-900">
          ABOUT US
        </a>
        <a href="#" className="hover:text-blue-900">
          CONTACT US
        </a>
      </div>

      {/* Login Button (hidden on small screens) */}
      <button className="hidden md:block px-12 py-3 rounded-full bg-blue-950 text-white hover:bg-blue-900 transition">
        LOGIN
      </button>

      {/* Hamburger Menu (mobile/tablet) */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-3xl focus:outline-none">
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Drawer with animations and transition */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 sm:w-2/5 bg-white shadow-2xl transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold">Red Sky</h2>
            <button onClick={toggleMenu} className="text-3xl">
              <FiX />
            </button>
          </div>

          <nav className="flex flex-col gap-6 text-lg">
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
            className="mt-auto px-8 py-3 rounded-full bg-blue-950 text-white hover:bg-blue-900 transition"
            onClick={toggleMenu}
          >
            LOGIN
          </button>
        </div>
      </div>

      {/* Background overlay when menu is open */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
};

export default NavBar;
