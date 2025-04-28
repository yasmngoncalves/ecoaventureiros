export default function StartScreen({ startGame }) {
    return (
      <div className="text-center space-y-6">
        <img
          src="/gameimages/banner-jogo-ecomemoria.png"
          alt="Banner do jogo da memória"
          className="mx-auto rounded-3xl max-w-md"
        />
        <p className="text-gray-700">Teste sua memória com o nosso jogo de cartas!</p>
        <button
          onClick={startGame}
          className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-6 rounded-full shadow-md transition"
        >
          Iniciar Jogo
        </button>
      </div>
    );
  }
  