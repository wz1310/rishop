import React from "react";
import submenu1 from "../assets/images/submenu1.webp"
import submenu2 from "../assets/images/submenu2.webp"
import submenu3 from "../assets/images/submenu3.webp"
import submenu4 from "../assets/images/submenu4.webp"
import submenu5 from "../assets/images/submenu5.webp"
import submenu6 from "../assets/images/submenu6.webp"

const menuItems = [
  {
    label: "Pilih Lokal",
    link: "/m/shopee-pilih-lokal",
    img: submenu1,
  },
  {
    label: "Shopee Mall",
    link: "/mall",
    img: submenu2,
  },
  {
    label: "Pulsa & Tiket",
    link: "/produk-digital",
    img: submenu3,
  },
  {
    label: "Flash Sale",
    link: "/flash_sale",
    img: submenu4,
  },
  {
    label: "Supermarket",
    link: "/supermarket",
    img: submenu5,
  },
  {
    label: "Semua Promo",
    link: "/promo",
    img: submenu6,
  },
];

const Submenu = () => {
  return (
    <div className="w-full flex justify-center py-4">
      
      {/* WRAPPER RESPONSIVE */}
      <div className="w-max max-w-[90%]">
        
        {/* LIST CONTAINER */}
        <div 
          className="
            grid grid-cols-3 gap-4 place-items-center  /* default grid (fallback) */
            sm:grid-cols-4                              /* layar kecil → 4 kolom */
            md:flex md:justify-center md:flex-wrap md:gap-6  /* tablet ke atas → flex horizontal */
          "
        >
          {menuItems.map((item, index) => (
            <a key={index} href={item.link} className="flex flex-col items-center w-[80px]">
              <div className="w-[56px] h-[56px] rounded-2xl shadow-md bg-white flex items-center justify-center">
                <img 
                  src={item.img} 
                  alt={item.label} 
                  className="w-[65%] h-[65%] object-contain"
                />
              </div>
              <span className="text-[11px] mt-2 text-center font-bold leading-tight">{item.label}</span>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Submenu;
