import Carousel from "../components/Carousel";
import CardsSection from "../components/CardsSection";
import AboutSection from "../components/AboutSection";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Carousel />
      <CardsSection />
      <AboutSection />
    </div>
  );
}
