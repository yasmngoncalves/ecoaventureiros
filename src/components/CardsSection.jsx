import Card from "./Card";

const homeCards = [
  {
    title: "Vamos jogar",
    description: "Prepare-se para se divertir enquanto aprende!",
    image: "/images/banner-card1.png",
    link: "/jogos",
    buttonText: "Jogue agora!",
  },
  {
    title: "Aprenda mais",
    description: "Explore curiosidades e dicas!",
    image: "/images/banner-card2.png",
    link: "/blog",
    buttonText: "Descubra mais!",
  },
  {
    title: "Explore a Galeria",
    description: "Veja as criações dos nossos amigos!",
    image: "/images/banner-card3.png",
    link: "/galeria",
    buttonText: "Veja a galeria!",
  },
];

export default function CardsSection() {
  return (
    <section className="w-full max-w-6xl px-4 mx-auto mt-12">
      <h2 className="text-2xl sm:text-3xl text-center font-bold text-green-800 mb-8">
        Vamos começar a jornada!
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {homeCards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
            link={card.link}
            buttonText={card.buttonText}
          />
        ))}
      </div>
    </section>
  );
}
