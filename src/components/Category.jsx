import React, { useRef, useState, useEffect } from "react";

// IMPORT IMAGE LOKAL
import elektronik from "../assets/images/Elektronik.webp";
import komputer from "../assets/images/Komputer.webp";
import handphone from "../assets/images/Handphone.webp";
import kesehatan from "../assets/images/Kesehatan.webp";
import hobi from "../assets/images/Hobi.webp";
import makanan from "../assets/images/Makanan.webp";
import jam from "../assets/images/Jam.webp";

const categories = [
  { label: "Elektronik", img: elektronik, link: "#" },
  { label: "Komputer", img: komputer, link: "#" },
  { label: "Handphone", img: handphone, link: "#" },
  { label: "Kesehatan", img: kesehatan, link: "#" },
  { label: "Hobi", img: hobi, link: "#" },
  { label: "Makanan", img: makanan, link: "#" },
  { label: "Jam", img: jam, link: "#" },
];

const Category = () => {
  const ref = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const next = () => {
    const el = ref.current;
    el?.scrollBy({ left: el.clientWidth, behavior: "smooth" });
  };

  const prev = () => {
    const el = ref.current;
    el?.scrollBy({ left: -el.clientWidth, behavior: "smooth" });
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleScroll = () => {
      setShowLeft(el.scrollLeft > 0);
      setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
    };

    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    el.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      el.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkScreen);
    };
  }, []);

  return (
    <section className={isMobile ? "mobileContainer" : "webContainer"}>
      <h2 className="text-sm font-bold mb-2 text-center">Kategori</h2>

      {showLeft && (
  <button onClick={prev} className={isMobile ? "mobileArrow mobileLeft" : "webArrow webLeft"}>‹</button>
)}

{showRight && (
  <button onClick={next} className={isMobile ? "mobileArrow mobileRight" : "webArrow webRight"}>›</button>
)}


      <div ref={ref} className={isMobile ? "mobileScrollArea" : "webScrollArea"}>
        <div className="inline-flex">
          {categories.map((c, i) => (
            <a
              key={i}
              href={c.link}
              className={isMobile ? "mobileItem" : "webItem"}
            >
              <img
                src={c.img}
                alt={c.label}
                className={isMobile ? "mobileImage" : "webImage"}
              />
              <span className={isMobile ? "mobileLabel" : "webLabel"}>
                {c.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
