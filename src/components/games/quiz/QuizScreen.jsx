import QuestionCard from "./QuestionCard";

export default function QuizScreen({
  currentQuestion,
  handleAnswer,
  selectedOption,
  showNextButton,
  handleNext,
}) {
  return (
    <div className="flex flex-col items-center justify-center">
      <QuestionCard
        question={currentQuestion.question}
        options={currentQuestion.options}
        image={currentQuestion.image}
        selectedOption={selectedOption}
        onSelect={handleAnswer}
      />

      {showNextButton && (
        <button
          onClick={handleNext}
          className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-6 rounded-full shadow-md transition"
        >
          Próxima Pergunta
        </button>
      )}
    </div>
  );
}
