import { useState } from "react";

export default function GalleryCarousel({ images }) {
  const [selectedImage, setSelectedImage] = useState(0);

  const next = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full max-w-4xl mx-auto mb-10">
      <div className="relative">
        <img
          src={images[selectedImage]}
          alt={`Imagem ${selectedImage + 1}`}
          className="rounded-lg w-full h-72 sm:h-96 object-cover"
        />
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-eco-verde text-white p-2 rounded-full shadow"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-eco-verde text-white p-2 rounded-full shadow"
        >
          ›
        </button>
      </div>

    </div>
  );
}
