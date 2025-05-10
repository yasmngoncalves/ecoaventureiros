import { Link } from "react-router-dom";
import Card from "../../components/Card";

export default function Artigo3() {
  const posts = [
    {
      title: "Recicle e dê uma nova vida aos materiais!",
      description: "Descubra como reciclar transforma lixo em novas possibilidades e ajuda a natureza.",
      image: "/blogimages/banner-blog-card1.jpg",
      link: "/blog/reciclar-e-transformar-materiais",
    },
    {
      title: "Pequenas ações que economizam muita água!",
      description: "Aprenda como atitudes simples podem economizar água e proteger a natureza de forma divertida.",
      image: "/blogimages/banner-blog-card2.jpg",
      link: "/blog/economizar-agua-no-dia-a-dia",
    },
  ];

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-12">
      {/* Container com fundo branco */}
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
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
            alt="Banner Meio Ambiente"
            className="rounded-lg shadow-md w-full max-w-3xl object-cover"
          />
        </div>

        {/* Texto do artigo */}
        <article className="max-w-3xl mx-auto space-y-6 text-justify mb-9 text-gray-700">
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
      </div>

      {/* Botão voltar */}
      <div className="flex justify-center mt-12">
        <Link
          to="/blog"
          className="bg-eco-verde text-white px-6 py-2 rounded hover:bg-eco-verde-escuro transition-colors"
        >
          ← Voltar para o Blog
        </Link>
      </div>

      {/* Postagens recentes */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-center text-eco-verde mb-6">Postagens Recentes</h2>
        <div className="grid grid-cols-2 gap-6">
          {posts.map((post, index) => (
            <Card
              key={index}
              title={post.title}
              description={post.description}
              image={post.image}
              link={post.link}
              buttonText="Leia Mais"
            />
          ))}
        </div>
      </section>
    </section>
  );
}
