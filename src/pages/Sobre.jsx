import { Link } from "react-router-dom";

export default function Sobre() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12">
      {/* Sobre o EcoAventureiros */}
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-eco-verde mb-8">
        Sobre o EcoAventureiros
      </h2>
      <div className="space-y-6 text-gray-700 text-justify">
        <p>
          O EcoAventureiros é uma plataforma de jogos educativos que busca ensinar, de forma divertida, a importância da sustentabilidade para crianças. Acreditamos que pequenos gestos podem transformar o futuro e que a educação é a chave para criar um mundo mais consciente e equilibrado.
        </p>
        <p>
          Nosso propósito é unir diversão, aprendizado e responsabilidade ambiental por meio de jogos interativos, como quiz, memória e coleta seletiva. Cada atividade foi pensada para mostrar como conceitos como reciclagem, preservação ambiental e consumo consciente podem ser aplicados no dia a dia.
        </p>
        <p>
          Queremos que as crianças aprendam brincando e sintam-se motivadas a fazer parte dessa jornada. Aqui, cada resposta certa, cada par encontrado e cada palavra adivinhada é um passo rumo a um futuro melhor. A missão do EcoAventureiros é clara: jogar, aprender e cuidar do planeta, juntos!
        </p>
        <p>
          Junte-se a essa aventura e ajude a espalhar boas ideias para um mundo mais sustentável!
        </p>
      </div>

      <hr className="my-12" />

      {/* Desenvolvedora */}
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-eco-verde mb-8">
        Quem Está Por Trás do Projeto
      </h2>
      <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-8 max-w-md mx-auto">
        <img
          src="/images/yasmin.jpeg"
          alt="Yasmin Gonçalves"
          className="w-36 h-36 object-cover rounded-full mb-4"
        />
        <h5 className="text-xl font-semibold text-eco-verde mb-2">Yasmin Gonçalves</h5>
        <p className="text-sm text-gray-600 text-center mb-4">
          Desenvolvedora responsável por todo o planejamento, design e implementação do EcoAventureiros. Apaixonada por tecnologia, educação e sustentabilidade.
        </p>
        <div className="flex gap-3">
          <a
            href="https://www.linkedin.com/in/yasmngoncalves/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600"
          >
            <i className="bi bi-linkedin text-2xl"></i>
          </a>
          <a
            href="https://github.com/yasmngoncalves"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800"
          >
            <i className="bi bi-github text-2xl"></i>
          </a>
          <a
            href="https://www.instagram.com/yasmndev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600"
          >
            <i className="bi bi-instagram text-2xl"></i>
          </a>
        </div>
      </div>

      {/* Banner Final */}
      <div className="mt-16">
        <img
          src="/images/banner-pag-sobre.png"
          alt="Banner EcoAventureiros - Junte-se à Aventura Sustentável!"
          className="rounded-lg shadow-md w-full object-cover"
        />
      </div>
    </section>
  );
}
