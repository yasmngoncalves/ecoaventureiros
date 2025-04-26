import { Link } from "react-router-dom";

export default function Jogos() {
  const games = [
    {
      title: "Jogo da Ecomemória",
      description:
        "Treine sua memória enquanto aprende sobre sustentabilidade! Encontre os pares de cartas e descubra dicas sobre como cuidar do planeta. Pronto para o desafio?",
      image: "/images/banner-jogos1.png",
      link: "/jogos/jogo-memoria",
    },
    {
      title: "Aventura Sustentável",
      description:
        "Entre nessa jornada e ajude a salvar o planeta! Responda ao quiz e descubra como suas escolhas podem fazer a diferença no mundo. Prepare-se para a missão e divirta-se enquanto aprende!",
      image: "/images/banner-jogos2.png",
      link: "/jogos/quiz",
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-eco-verde mb-10">
        Divirta-se e Aprenda!
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {games.map((game, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
          >
            <img
              src={game.image}
              alt={game.title}
              className="w-full h-48 sm:h-56 md:h-72 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-eco-verde-escuro mb-2">
                {game.title}
              </h3>
              <p className="text-gray-700 flex-grow">{game.description}</p>
              <Link
                to={game.link}
                className="mt-4 bg-eco-verde text-white text-center py-2 rounded hover:bg-eco-verde-escuro"
              >
                JOGUE AGORA!
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
