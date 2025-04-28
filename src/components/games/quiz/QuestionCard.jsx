export default function QuestionCard({
    question,
    options,
    image,
    selectedOption,
    onSelect,
  }) {
    return (
      <div className="text-center space-y-6">
        <h3 className="text-xl font-bold text-green-800">{question}</h3>
        <img
          src={image}
          alt="Imagem da pergunta"
          className="mx-auto rounded-3xl max-w-md"
        />
        <div className="flex flex-col gap-4 mt-4">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => onSelect(index)}
              disabled={selectedOption !== null}
              className={`py-2 px-6 rounded-full font-bold shadow-md transition ${
                selectedOption === null
                  ? "bg-gray-400 hover:bg-yellow-400 text-white"
                  : selectedOption === index
                  ? "bg-red-500 text-white"
                  : ""
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    );
  }
  