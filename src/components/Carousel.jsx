import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  "/images/banner-carousel-1.png",
  "/images/banner-carousel-2.png",
  "/images/banner-carousel-3.png"
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full max-w-6xl mx-auto mt-6 px-4 relative">
      <div className="relative w-full h-56 sm:h-72 md:h-96 overflow-hidden rounded-lg shadow-lg">
        {slides.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Setas de navegação */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-eco-verde text-white p-2 rounded-full hover:bg-eco-verde-escuro"
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-eco-verde text-white p-2 rounded-full hover:bg-eco-verde-escuro"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}
