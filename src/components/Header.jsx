import React, { useState } from "react";
import { RiShoppingBasketLine, RiSearchLine } from "@remixicon/react";

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
          <div className="hidden md:flex space-x-4">
            <a href="#login">Login</a>
            <a href="#register">Daftar</a>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <nav className="bg-[#04a6bf] shadow-md">
        <div className="container mx-auto px-6 py-3 flex items-center justify-between">

          {/* LOGO + LOGIN DAFTAR (MOBILE) */}
          <div className="flex items-center space-x-4 md:hidden">
            <a href="/" className="text-2xl font-bold text-white">
              Rishop
            </a>
            <a href="#login" className="text-white font-bold text-sm">Login</a>
            <a href="#register" className="text-white font-bold text-sm">Daftar</a>
          </div>

          {/* LOGO (DESKTOP) */}
          <a href="/" className="text-2xl font-bold text-white hidden md:block">
            Rishop
          </a>

          {/* SEARCH BAR DESKTOP */}
          <div className="bg-white hidden md:flex flex-1 mx-8 rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Cari di MyApp"
              className="w-full px-4 py-2 text-gray-700 focus:outline-none"
            />
            <button className="px-6 flex items-center justify-center hover:bg-gray-100 transition">
              <RiSearchLine size={20} className="text-[#04a6bf]" />
            </button>
          </div>

          {/* ICONS DESKTOP */}
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

          {/* MENU MOBILE BUTTON */}
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
            <button className="px-4 flex items-center justify-center hover:bg-gray-100 transition">
              <RiSearchLine size={18} className="text-[#04a6bf]" />
            </button>
          </div>
        </div>

      </nav>

      {/* DRAWER MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white shadow-sm">
          <a href="#download" className="block px-6 py-0.5 text-gray-700 font-bold text-sm">Download App</a>
          <a href="#seller" className="block px-6 py-0.5 text-gray-700 font-bold text-sm">Seller Centre</a>
          <a href="#help" className="block px-6 py-0.5 text-gray-700 font-bold text-sm">Bantuan</a>
          <a href="#cart" className="block px-6 py-0.5 text-gray-700 font-bold text-sm flex items-center">Keranjang</a>
          <a href="#login" className="block px-6 py-0.5 text-gray-700 font-bold text-sm">Login</a>
        </div>
      )}

    </header>
  );
};

export default Header;
