import Carousel from "../components/Carousel";
import CardsSection from "../components/CardsSection";
import AboutSection from "../components/AboutSection";
import Card from "../components/Card";

const homeCards = [
  {
    title: "Vamos jogar",
    text: "Prepare-se para se divertir enquanto aprende!",
    image: "/images/banner-card1.png",
    link: "/jogos",
    button: "Jogue agora!",
  },
  {
    title: "Aprenda mais",
    text: "Explore curiosidades e dicas!",
    image: "/images/banner-card2.png",
    link: "/blog",
    button: "Descubra mais!",
  },
  {
    title: "Explore a Galeria",
    text: "Veja as criações dos nossos amigos!",
    image: "/images/banner-card3.png",
    link: "/galeria",
    button: "Veja a galeria!",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Carousel />
      <CardsSection />
      <AboutSection />
    </div>
  );
}
