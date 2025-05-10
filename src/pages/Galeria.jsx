import GalleryCarousel from "../components/GalleryCarousel";

export default function Galeria() {
  const imagens = [
    "/galeria/foto-galeria1.jpg",
    "/galeria/foto-galeria2.jpg",
    "/galeria/foto-galeria3.jpg",
    "/galeria/foto-galeria4.jpg",
    "/galeria/foto-galeria5.jpg",
    "/galeria/foto-galeria6.jpg",
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-eco-verde mb-10">
        Veja a Arte dos EcoAventureiros
      </h2>

      <GalleryCarousel images={imagens} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {imagens.map((src, index) => (
          <div key={index} className="w-full">
            <a href={src} target="_blank" rel="noopener noreferrer" className="block">
              <img
                src={src}
                alt={`Foto EcoAventureiros ${index + 1}`}
                className="w-full rounded-lg shadow-md object-cover"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
