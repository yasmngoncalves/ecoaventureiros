import Card from "./Card";

const homeCards = [
  {
    title: "Vamos jogar",
    description: "Explore jogos educativos e se divirta enquanto aprende sobre diferentes temas.",
    image: "/images/banner-card1.png",
    link: "/jogos",
    buttonText: "Jogue agora!",
  },
  {
    title: "Aprenda mais",
    description: "Dicas, histórias e materiais educativos para aprender de forma leve e divertida.",
    image: "/images/banner-card2.png",
    link: "/blog",
    buttonText: "Descubra mais!",
  },
  {
    title: "Explore a Galeria",
    description: "Veja desenhos, ideias e compartilhe também a sua arte com a comunidade.",
    image: "/images/banner-card3.png",
    link: "/galeria",
    buttonText: "Veja a galeria!",
  },
];

export default function CardsSection() {
  return (
    <section className="w-full max-w-6xl px-4 mx-auto mt-12">
      <h2 className="text-2xl sm:text-3xl text-center font-bold text-green-800 mb-8">
      Explore, aprenda e se divirta!
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
