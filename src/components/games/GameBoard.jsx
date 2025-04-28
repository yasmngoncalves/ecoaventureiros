import Card from "./Card";

export default function GameBoard({ cards, flipped, matched, flipCard }) {
  return (
    <div className="grid grid-cols-4 gap-4 max-w-md my-8">
      {cards.map((image, index) => (
        <Card
          key={index}
          index={index}
          image={image}
          isFlipped={flipped.includes(index) || matched.includes(index)}
          onFlip={() => flipCard(index)}
        />
      ))}
    </div>
  );
}
