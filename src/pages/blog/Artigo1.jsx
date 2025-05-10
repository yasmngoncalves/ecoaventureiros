import { Link } from "react-router-dom";
import Card from "../../components/Card";

export default function Artigo1() {
  const posts = [
    {
      title: "Pequenas ações que economizam muita água!",
      description: "Cada gota conta! Aprenda como atitudes simples podem economizar água e proteger a natureza de forma divertida.",
      image: "/blogimages/banner-blog-card2.jpg",
      link: "/blog/economizar-agua-no-dia-a-dia",
    },
    {
      title: "O que é o meio ambiente e por que ele é tão importante?",
      description: "O meio ambiente é a casa de todos nós. Descubra por que cuidar dele é tão importante e como você pode fazer a diferença!",
      image: "/blogimages/banner-blog-card3.jpg",
      link: "/blog/importancia-do-meio-ambiente",
    },
  ];

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-12">
      {/* Container com fundo branco */}
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">

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
            alt="Banner EcoAventureiros"
            className="rounded-lg shadow-md w-full max-w-3xl object-cover"
          />
        </div>

        {/* Texto do artigo */}
        <article className="max-w-3xl mx-auto space-y-6 text-justify mb-9">
          <p> Reciclar é uma maneira incrível de ajudar o planeta, e sabe o que é mais divertido? É como transformar coisas velhas em algo novinho em folha! Quando reciclamos, pegamos materiais que iriam para o lixo, como garrafas plásticas, latinhas de alumínio e pedaços de papel, e damos a eles uma nova utilidade.</p>
          <p>Uma garrafa de plástico pode se transformar em uma blusa ou até em um brinquedo! Além disso, reciclar ajuda a diminuir o lixo que vai parar em lugares como rios, praias e florestas. Quando isso acontece, a natureza agradece, porque os animais ficam mais seguros e o ambiente mais limpo.</p>
          <p>Para começar a reciclar, você só precisa separar os materiais: papel, plástico, vidro e metal. Ah, e não esqueça de lavar tudo antes de colocar na lixeira reciclável!</p>
          <p>Pense nisso: cada vez que você recicla, está ajudando a economizar recursos naturais, como árvores, água e energia. É como ser um super-herói do planeta! Então, que tal chamar sua família para começar a reciclar em casa? Afinal, salvar o mundo começa com pequenas ações!</p>
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
