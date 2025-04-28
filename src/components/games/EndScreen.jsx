import { Link } from "react-router-dom";

export default function EndScreen({ startGame }) {
  return (
    <div className="text-center space-y-6">
      <h2 className="text-2xl font-bold text-eco-verde">Parabéns! Você completou o jogo!</h2>
      <img
        src="/gameimages/banner-comemoracao.png"
        alt="Parabéns!"
        className="mx-auto rounded-3xl max-w-md"
      />
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
        <button
          onClick={startGame}
          className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-6 rounded-full shadow-md transition"
        >
          Jogar Novamente
        </button>
        <Link
          to="/jogos"
          className="bg-eco-verde hover:bg-eco-verde-escuro text-white font-bold py-2 px-6 rounded-full shadow-md transition"
        >
          Voltar ao Início
        </Link>
      </div>
    </div>
  );
}
