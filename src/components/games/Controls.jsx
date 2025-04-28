import { Link } from "react-router-dom";

export default function Controls({ startGame }) {
  return (
    <div className="flex gap-4 mt-4">
      <button
        onClick={startGame}
        className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-6 rounded-full shadow-md transition"
      >
        Embaralhar Novamente
      </button>
      <Link
        to="/jogos"
        className="bg-eco-verde hover:bg-eco-verde-escuro text-white font-bold py-2 px-6 rounded-full shadow-md transition"
      >
        Voltar ao Início
      </Link>
    </div>
  );
}
