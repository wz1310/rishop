import React from "react";

const menuItems = [
  {
    label: "Pilih Lokal",
    link: "/m/shopee-pilih-lokal",
    // img: "https://cf.shopee.co.id/file/id-11134258-7rbk2-m6yxbqa9ubyh26_xhdpi",
  },
  {
    label: "Shopee Mall",
    link: "/mall",
    // img: "https://cf.shopee.co.id/file/id-50009109-21067727429e50037f52d3bda8a8bcf6_xhdpi",
  },
  {
    label: "Pulsa & Tiket",
    link: "/produk-digital",
    // img: "https://cf.shopee.co.id/file/id-50009109-4f6225c6af9676bb98b6ef90b5eea2c1_xhdpi",
  },
  {
    label: "Flash Sale",
    link: "/flash_sale",
    // img: "https://cf.shopee.co.id/file/id-11134258-7rbkc-mas4hs48hfp464_xhdpi",
  },
  {
    label: "Supermarket",
    link: "/supermarket",
    // img: "https://cf.shopee.co.id/file/id-50009109-973424e34266b401880d7dcc2d40156d_xhdpi",
  },
  {
    label: "Semua Promo",
    link: "/promo",
    // img: "https://cf.shopee.co.id/file/id-50009109-b26e4a6a1add042d828b58143fceda1a_xhdpi",
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
              <span className="text-[11px] mt-2 text-center leading-tight">{item.label}</span>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Submenu;
