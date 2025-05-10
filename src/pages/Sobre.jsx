import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaInstagram, FaTiktok, FaGlobe } from "react-icons/fa";

export default function Sobre() {
  return (
    <section className="w-full max-w-3xl mx-auto px-4 py-12">
      {/* Sobre o EcoAventureiros */}
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-eco-verde mb-8">
        Sobre o EcoAventureiros
      </h2>

      <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 text-gray-700 space-y-6 text-justify">
        <p>
          O EcoAventureiros é uma plataforma educativa gamificada que nasceu com o objetivo de ensinar, de forma divertida e acessível, temas importantes como cidadania, meio ambiente e alfabetização.
        </p>
        <p>
          Através de jogos como quizzes e memória, buscamos promover o aprendizado de forma lúdica e significativa. Acreditamos que a educação pode transformar o mundo — e tudo começa com uma boa aventura!
        </p>
        <p>
          Em breve, novas áreas temáticas, trilhas educativas e funcionalidades como desafios e sistema de pontos estarão disponíveis.
        </p>
        <p className="font-semibold text-eco-verde text-center">
          Jogue, aprenda e explore um mundo de conhecimento com os EcoAventureiros!
        </p>

          {/* Banner Final */}
        <div className="mt-16">
          <img
            src="/images/banner-pag-sobre.png"
            alt="Banner EcoAventureiros"
            className="w-full object-cover"
          />
        </div>
      </div>

      <hr className="my-12" />

      {/* Sobre Yasmin */}
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-eco-verde mb-8">
        Quem Está Por Trás do Projeto
      </h2>

      <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto text-center">
        <img
          src="/images/yasmin.jpeg"
          alt="Yasmin Gonçalves"
          className="w-36 h-36 object-cover rounded-full mb-4 shadow-md"
        />
        <h5 className="text-xl font-semibold text-eco-verde mb-2">Yasmin Gonçalves</h5>
        <p className="text-sm text-gray-600 mb-4">
          Desenvolvedora front-end com foco em projetos com propósito. Criadora do EcoAventureiros, atuando no design, programação e expansão da plataforma. Unindo tecnologia, educação e criatividade para transformar ideias em experiências interativas.
        </p>

        <div className="flex gap-4 mt-4 justify-center">
          <a
            href="https://www.linkedin.com/in/yasmngoncalves/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/yasmngoncalves"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/yasmndev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 text-2xl"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com/@yasmndev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-2xl"
          >
            <FaTiktok />
          </a>
          <a
            href="https://yasmndev.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 text-2xl"
          >
            <FaGlobe />
          </a>
        </div>
      </div>

    </section>
  );
}
