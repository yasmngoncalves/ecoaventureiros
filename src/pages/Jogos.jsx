import Card from "../components/Card";

export default function Jogos() {
  const games = [
    {
      title: "Jogo da Ecomemória",
      description: "Treine sua memória enquanto aprende sobre sustentabilidade!",
      image: "/images/banner-jogos1.png",
      link: "/jogos/jogo-memoria",
      buttonText: "JOGUE AGORA!",
    },
    {
      title: "Aventura Sustentável",
      description: "Entre nessa jornada e ajude a salvar o planeta!",
      image: "/images/banner-jogos2.png",
      link: "/jogos/quiz",
      buttonText: "JOGUE AGORA!",
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-eco-verde mb-10">
        Divirta-se e Aprenda!
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {games.map((game) => (
          <Card
            key={game.title}
            title={game.title}
            description={game.description}
            image={game.image}
            link={game.link}
            buttonText={game.buttonText}
          />
        ))}
      </div>
    </section>
  );
}
