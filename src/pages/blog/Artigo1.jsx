import { Link } from "react-router-dom";

export default function Artigo1() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-12">
      {/* Título e informações */}
      <header className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-eco-verde mb-2">
          Reciclar é como dar uma nova vida aos materiais!
        </h1>
        <p className="text-gray-600">
          Por <strong>Equipe EcoAventureiros</strong> | Publicado em 19 de Novembro de 2024
        </p>

        {/* Tags */}
        <div className="flex justify-center flex-wrap gap-2 mt-4">
          <span className="bg-eco-verde text-white px-3 py-1 rounded-full text-sm">Sustentabilidade</span>
          <span className="bg-eco-verde text-white px-3 py-1 rounded-full text-sm">Reciclagem</span>
          <span className="bg-eco-azul text-white px-3 py-1 rounded-full text-sm">Educação</span>
        </div>
      </header>

      {/* Banner */}
      <div className="flex justify-center mb-10">
        <img
          src="/blogimages/banner-blog-post1.jpg"
          alt="Banner EcoAventureiros - Junte-se à Aventura Sustentável!"
          className="rounded-lg shadow-md w-full max-w-3xl object-cover"
        />
      </div>

      {/* Texto do artigo */}
      <article className="text-gray-700 space-y-6 text-justify">
        <p>
          Reciclar é uma maneira incrível de ajudar o planeta, e sabe o que é mais divertido? É como transformar coisas
          velhas em algo novinho em folha! Quando reciclamos, pegamos materiais que iriam para o lixo, como garrafas
          plásticas, latinhas de alumínio e pedaços de papel, e damos a eles uma nova utilidade.
        </p>
        <p>
          Uma garrafa de plástico pode se transformar em uma blusa ou até em um brinquedo! Além disso, reciclar ajuda a
          diminuir o lixo que vai parar em lugares como rios, praias e florestas. Quando isso acontece, a natureza
          agradece, porque os animais ficam mais seguros e o ambiente mais limpo.
        </p>
        <p>
          Para começar a reciclar, você só precisa separar os materiais: papel, plástico, vidro e metal. Ah, e não
          esqueça de lavar tudo antes de colocar na lixeira reciclável!
        </p>
        <p>
          Pense nisso: cada vez que você recicla, está ajudando a economizar recursos naturais, como árvores, água e
          energia. É como ser um super-herói do planeta! Então, que tal chamar sua família para começar a reciclar em
          casa? Afinal, salvar o mundo começa com pequenas ações!
        </p>
      </article>

      {/* Botão voltar */}
      <div className="flex justify-center mt-12">
        <Link
          to="/blog"
          className="bg-eco-verde text-white px-6 py-2 rounded hover:bg-eco-verde-escuro transition-colors"
        >
          ← Voltar para o Blog
        </Link>
      </div>
    </section>
  );
}
