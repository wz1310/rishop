import React, { useState } from "react";
import { RiShoppingBasketLine } from "@remixicon/react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* TOP BAR */}
      <div className="bg-[#04a6bf] text-white text-sm py-1">
        <div className="container mx-auto px-6 flex justify-between">
          <div className="hidden md:flex space-x-4">
            <a href="#download">Download App</a>
            <a href="#seller">Seller Centre</a>
            <a href="#help">Bantuan</a>
          </div>
          <div className="flex space-x-4">
            <a href="#login">Login</a>
            <a href="#register">Daftar</a>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <nav className="bg-[linear-gradient(to_right,#04a6bf,#04a6bf)] shadow-md">
        <div className="container mx-auto px-6 py-3 flex items-center justify-between">
          {/* LOGO */}
          <a href="/" className="text-2xl font-bold text-white">
            Rishop
          </a>

          {/* SEARCH BAR DESKTOP */}
          <div className="bg-white hidden md:flex flex-1 mx-8">
            <input
              type="text"
              placeholder="Cari di MyApp"
              className="w-full px-4 py-2 rounded-l-lg text-gray-700 focus:outline-none"
            />
            <button className="bg-white text-orange-600 px-6 py-2 font-semibold rounded-r-lg hover:bg-gray-100 transition">
              🔍
            </button>
          </div>

          {/* ICONS */}
          <div className="hidden md:flex items-center space-x-6 text-white text-xl">
            <a href="#cart" className="relative">
              <RiShoppingBasketLine size={28} className="text-white" />
              <span className="absolute -top-2 -right-2 bg-white text-[#04a6bf] text-xs font-bold px-1.5 py-0.5 rounded-full">
                0
              </span>
            </a>
            <button className="bg-white text-[#04a6bf] px-4 py-2 text-sm rounded-lg font-medium hover:bg-gray-100 transition">
              Login
            </button>
          </div>

          {/* MENU MOBILE */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
            className="md:hidden text-white text-2xl"
          >
            ☰
          </button>
        </div>

        {/* SEARCH BAR MOBILE */}
        <div className="md:hidden px-6 pb-3">
          <div className="flex bg-white rounded-lg shadow-sm overflow-hidden">
            <input
              type="text"
              placeholder="Cari di MyApp"
              className="flex-1 px-4 py-2 text-gray-700 focus:outline-none"
            />
            <button className="bg-white text-orange-600 px-4 py-2 font-semibold hover:bg-gray-100 transition">
              🔍
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE DRAWER MENU */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <a href="#download" className="block px-6 py-3 text-gray-700">
            Download App
          </a>
          <a href="#seller" className="block px-6 py-3 text-gray-700">
            Seller Centre
          </a>
          <a href="#help" className="block px-6 py-3 text-gray-700">
            Bantuan
          </a>
          <a href="#cart" className="block px-6 py-3 text-gray-700">
            Keranjang 🛒
          </a>
          <button className="w-full text-left px-6 py-3 bg-orange-600 text-white">
            Login
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
