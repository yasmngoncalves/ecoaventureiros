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
              O EcoAventureiros é um espaço cheio de aventuras e descobertas, feito para quem quer cuidar do
              planeta brincando e aprendendo. Aqui, você é o herói da história, ajudando a criar um mundo mais
              sustentável com escolhas simples e divertidas!
            </p>
            <p className="text-gray-700">
              Nosso objetivo é ensinar, inspirar e convidar você a explorar, aprender e compartilhar. Vamos
              juntos nessa missão ecológica? O planeta conta com a gente!
            </p>
          </div>
        </div>
      </section>
    );
  }
  