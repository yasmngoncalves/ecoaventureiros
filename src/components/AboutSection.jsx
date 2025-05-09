export default function AboutSection() {
    return (
      <section className="w-full max-w-6xl px-4 mx-auto my-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Imagem */}
          <div>
            <img
              src="/images/banner-sobre.png"
              alt="Imagem sobre nós"
              className="w-full"
            />
          </div>
  
          {/* Texto */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-4">Quem Somos</h2>
            <p className="text-gray-700 mb-4">
            O EcoAventureiros é uma plataforma gamificada de aprendizagem, feita para transformar o saber em uma grande aventura! Aqui, alunos e professores exploram diferentes temas de forma leve, divertida e interativa.
            </p>
            <p className="text-gray-700 mb-4">
            Nosso objetivo é ensinar, inspirar e tornar o aprendizado uma jornada envolvente. Cada aventura é uma oportunidade de descobrir, jogar, criar e compartilhar.
            </p>

          </div>
        </div>
      </section>
    );
  }
  