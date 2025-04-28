import { useState } from "react";
import StartScreen from "./StartScreen";
import QuizScreen from "./QuizScreen";
import EndScreen from "./EndScreen";

const questions = [
  {
    question: "Você terminou de lanchar e ficou com uma garrafa de plástico vazia. O que você faz?",
    options: ["Coloco no lixo reciclável.", "Jogo no lixo comum."],
    answer: 0,
    image: "/gameimages/banner-quiz1.png",
  },
  {
    question: "Você está escovando os dentes. O que faz com a torneira?",
    options: ["Deixo a torneira fechada enquanto escovo.", "Deixo a torneira aberta o tempo todo."],
    answer: 0,
    image: "/gameimages/banner-quiz2.png",
  },
  {
    question: "Você vai sair da sala onde estava brincando. O que você faz com a luz?",
    options: ["Deixo a luz acesa para quando eu voltar.", "Apago a luz antes de sair."],
    answer: 1,
    image: "/gameimages/banner-quiz3.png",
  },
  {
    question: "Você está no mercado e vai pegar uma fruta para levar para casa. O que você faz?",
    options: ["Levo uma sacola reutilizável.", "Uso uma sacola plástica descartável."],
    answer: 0,
    image: "/gameimages/banner-quiz4.png",
  },
  {
    question: "Você vai almoçar e tem várias opções de alimentos. O que você faz?",
    options: ["Pego mais comida do que preciso.", "Pego só o que vou comer."],
    answer: 1,
    image: "/gameimages/banner-quiz5.png",
  },
];

export default function QuizGame() {
  const [step, setStep] = useState("start");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);

  function startQuiz() {
    setStep("quiz");
    setCurrentIndex(0);
    setScore(0);
    setSelectedOption(null);
  }

  function handleAnswer(index) {
    setSelectedOption(index);
    if (index === questions[currentIndex].answer) {
      setScore((prev) => prev + 1);
    }
  }

  function handleNext() {
    const nextIndex = currentIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentIndex(nextIndex);
      setSelectedOption(null);
    } else {
      setStep("end");
    }
  }

  function handleRestart() {
    setStep("start");
    setCurrentIndex(0);
    setScore(0);
    setSelectedOption(null);
  }

  if (step === "start") return <StartScreen startQuiz={startQuiz} />;
  if (step === "quiz")
    return (
      <QuizScreen
        currentQuestion={questions[currentIndex]}
        handleAnswer={handleAnswer}
        selectedOption={selectedOption}
        showNextButton={selectedOption !== null}
        handleNext={handleNext}
      />
    );
  if (step === "end")
    return <EndScreen score={score} total={questions.length} handleRestart={handleRestart} />;
}
