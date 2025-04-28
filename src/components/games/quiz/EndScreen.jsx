import { Link } from "react-router-dom";

export default function EndScreen({ score, total, handleRestart }) {
  const isSuccess = score > 3;

  return (
    <div className="text-center space-y-6">
      <h2 className="text-2xl font-bold text-green-700">
        {isSuccess
          ? `Parabéns! Você acertou ${score} de ${total} perguntas! 🎉`
          : `Você acertou ${score} de ${total} perguntas. Continue praticando! 🌱`}
      </h2>

      <img
        src={
          isSuccess
            ? "/gameimages/banner-comemoracao.png"
            : "/gameimages/banner-quiz-tentativa.png"
        }
        alt="Resultado"
        className="mx-auto rounded-3xl max-w-md"
      />

      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
        <button
          onClick={handleRestart}
          className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-6 rounded-full shadow-md transition"
        >
          Jogar Novamente
        </button>
        <Link
          to="/jogos"
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full shadow-md transition"
        >
          Voltar ao Início
        </Link>
      </div>
    </div>
  );
}
