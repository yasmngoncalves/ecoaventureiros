import { useState } from "react";
import StartScreen from "./StartScreen";
import GameBoard from "./GameBoard";
import EndScreen from "./EndScreen";
import Controls from "./Controls";

const images = [
  "/gameimages/card-memory1.png",
  "/gameimages/card-memory2.png",
  "/gameimages/card-memory3.png",
  "/gameimages/card-memory4.png",
  "/gameimages/card-memory5.png",
  "/gameimages/card-memory6.png",
  "/gameimages/card-memory7.png",
  "/gameimages/card-memory8.png",
];

const duplicatedCards = [...images, ...images];

export default function MemoryGame() {
  const [cards, setCards] = useState(shuffle(duplicatedCards));
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
  }

  function startGame() {
    setCards(shuffle(duplicatedCards));
    setMatched([]);
    setFlipped([]);
    setIsStarted(true);
    setIsFinished(false);
  }

  function flipCard(index) {
    if (flipped.length === 2 || matched.includes(index)) return;
    setFlipped((prev) => [...prev, index]);

    if (flipped.length === 1) {
      const firstIndex = flipped[0];
      const secondIndex = index;

      if (cards[firstIndex] === cards[secondIndex]) {
        setMatched((prev) => [...prev, firstIndex, secondIndex]);
        setFlipped([]);
      } else {
        setTimeout(() => {
          setFlipped([]);
        }, 1000);
      }
    }
  }

  function checkWin() {
    if (matched.length === duplicatedCards.length) {
      setIsFinished(true);
      setIsStarted(false);
    }
  }

  if (matched.length === duplicatedCards.length && !isFinished) {
    checkWin();
  }

  return (
    <div className="flex flex-col items-center justify-center py-8 px-4">
      {!isStarted && !isFinished && <StartScreen startGame={startGame} />}
      {isStarted && (
        <>
          <GameBoard
            cards={cards}
            flipped={flipped}
            matched={matched}
            flipCard={flipCard}
          />
          <Controls startGame={startGame} />
        </>
      )}
      {isFinished && <EndScreen startGame={startGame} />}
    </div>
  );
}
