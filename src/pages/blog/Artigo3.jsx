import { Link } from "react-router-dom";

export default function Artigo3() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-12">
      {/* Título e informações */}
      <header className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-eco-verde mb-2">
          O que é o meio ambiente e por que ele é tão importante?
        </h1>
        <p className="text-gray-600">
          Por <strong>Equipe EcoAventureiros</strong> | Publicado em 19 de Novembro de 2024
        </p>

        {/* Tags */}
        <div className="flex justify-center flex-wrap gap-2 mt-4">
          <span className="bg-eco-verde text-white px-3 py-1 rounded-full text-sm">Sustentabilidade</span>
          <span className="bg-eco-verde text-white px-3 py-1 rounded-full text-sm">Meio Ambiente</span>
          <span className="bg-eco-azul text-white px-3 py-1 rounded-full text-sm">Educação</span>
        </div>
      </header>

      {/* Banner */}
      <div className="flex justify-center mb-10">
        <img
          src="/blogimages/banner-blog-post3.jpg"
          alt="Banner EcoAventureiros - Meio Ambiente"
          className="rounded-lg shadow-md w-full max-w-3xl object-cover"
        />
      </div>

      {/* Texto do artigo */}
      <article className="text-gray-700 space-y-6 text-justify">
        <p>
          O meio ambiente é como uma grande casa onde todos nós vivemos: pessoas, animais, plantas e até
          microorganismos. Ele é formado por tudo o que está ao nosso redor, como o ar que respiramos, as
          árvores que nos dão sombra, os rios que nos fornecem água e os solos onde cultivamos alimentos.
        </p>
        <p>
          Mas, assim como cuidamos da nossa casa, o meio ambiente também precisa de cuidado para continuar saudável
          e bonito. Infelizmente, muitas coisas que fazemos no dia a dia podem prejudicar o meio ambiente.
          Jogar lixo no chão, gastar água sem necessidade e poluir o ar com fumaça são algumas delas.
        </p>
        <p>
          Quando não cuidamos bem dele, sofremos as consequências: o ar fica mais poluído, os rios secam
          e os animais perdem seus habitats. Mas nem tudo está perdido!
          Cuidar do meio ambiente pode ser divertido e recompensador.
        </p>
        <p>
          Que tal plantar uma árvore no quintal ou em um espaço comunitário? Além de deixar o lugar mais bonito, você
          estará ajudando a limpar o ar. Outra ideia é juntar seus amigos para uma limpeza de parque ou praia.
          Juntos, vocês podem fazer uma grande diferença!
        </p>
        <p>
          Lembre-se: o meio ambiente é a nossa casa, e depende de todos nós mantê-lo saudável.
          Vamos juntos ser EcoAventureiros e cuidar do nosso planeta com carinho e respeito?
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
