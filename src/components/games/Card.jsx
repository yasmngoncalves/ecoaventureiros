export default function Card({ index, image, isFlipped, onFlip }) {
    return (
      <div
        className={`h-24 w-24 flex items-center justify-center rounded-lg bg-eco-azul cursor-pointer transition-transform duration-300 ${
          isFlipped ? "bg-white" : ""
        }`}
        onClick={onFlip}
      >
        {isFlipped && (
          <img
            src={image}
            alt={`Carta ${index}`}
            className="h-full w-full object-cover rounded-lg"
          />
        )}
      </div>
    );
  }
  