import { Link } from "react-router-dom";

export default function CardsSection() {
  return (
    <section className="w-full max-w-6xl px-4 mx-auto mt-12">
      <h2 className="text-2xl sm:text-3xl text-center font-bold text-green-800 mb-8">
        Vamos começar a jornada!
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
          <img
            src="/images/banner-card1.png"
            alt="Vamos jogar"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 flex-1 flex flex-col">
            <h3 className="text-lg font-semibold text-green-800 mb-2">Vamos jogar</h3>
            <p className="text-sm text-gray-700 flex-1">
              Prepare-se para se divertir enquanto aprende! Jogue o quiz e desafie sua memória com o jogo da memória.
            </p>
            <Link
              to="/jogos"
              className="mt-4 bg-green-700 text-white text-center py-2 rounded hover:bg-green-800"
            >
              JOGUE AGORA!
            </Link>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
          <img
            src="/images/banner-card2.png"
            alt="Aprenda mais"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 flex-1 flex flex-col">
            <h3 className="text-lg font-semibold text-green-800 mb-2">Aprenda mais</h3>
            <p className="text-sm text-gray-700 flex-1">
              Explore curiosidades, dicas e histórias sobre como cuidar do planeta. Conteúdos educativos cheios de diversão!
            </p>
            <Link
              to="/blog"
              className="mt-4 bg-green-700 text-white text-center py-2 rounded hover:bg-green-800"
            >
              DESCUBRA MAIS!
            </Link>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
          <img
            src="/images/banner-card3.png"
            alt="Explore a Galeria"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 flex-1 flex flex-col">
            <h3 className="text-lg font-semibold text-green-800 mb-2">Explore a Galeria</h3>
            <p className="text-sm text-gray-700 flex-1">
              Veja as incríveis criações e desenhos dos nossos amigos. Compartilhe a sua arte também!
            </p>
            <Link
              to="/galeria"
              className="mt-4 bg-green-700 text-white text-center py-2 rounded hover:bg-green-800"
            >
              VEJA A GALERIA!
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
