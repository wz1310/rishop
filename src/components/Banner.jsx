import React from "react";

// Ambil semua file banner otomatis dari assets/images
const images = Object.values(
  import.meta.glob("../assets/images/banner*.webp", { eager: true })
).sort((a, b) => {
  // Urut berdasarkan angka di nama file: banner1, banner2, banner3...
  const extractNumber = (path) => {
    const match = path.default.match(/banner(\d+)\.webp/);
    return match ? Number(match[1]) : 0;
  };
  return extractNumber(a) - extractNumber(b);
});

const Banner = () => {
  return (
    <div className="w-full flex gap-1 mt-2 sm:mt-10 md:mt-0">
      {/* Banner kiri */}
      <div className="flex-[2]">
        <img
          src={images[0].default}
          className="w-full h-full object-cover "
        />
      </div>

      {/* Banner kanan */}
      <div className="flex-[1] flex flex-col gap-1">
        {images.slice(1, 3).map((img, index) => (
          <img
            key={index}
            src={img.default}
            className="w-full h-full object-cover "
          />
        ))}
      </div>
    </div>
  );
};


export default Banner;
