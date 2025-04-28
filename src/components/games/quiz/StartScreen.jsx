export default function StartScreen({ startQuiz }) {
    return (
      <div className="text-center space-y-6">
        <img
          src="/gameimages/banner-jogo-aventura-sustentavel.png"
          alt="Banner do Quiz"
          className="mx-auto rounded-3xl max-w-md"
        />
        <p className="text-gray-700">Teste seus conhecimentos sobre o meio ambiente e sustentabilidade.</p>
        <button
          onClick={startQuiz}
          className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-6 rounded-full shadow-md transition"
        >
          Iniciar Quiz
        </button>
      </div>
    );
  }
  