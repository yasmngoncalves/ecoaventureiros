import { Link } from "react-router-dom";
import Card from "../../components/Card";

export default function Artigo2() {
  const posts = [
    {
      title: "Recicle e dê uma nova vida aos materiais!",
      description: "Descubra como reciclar transforma lixo em novas possibilidades e ajuda a natureza.",
      image: "/blogimages/banner-blog-card1.jpg",
      link: "/blog/reciclar-e-transformar-materiais",
    },
    {
      title: "O que é o meio ambiente e por que ele é tão importante?",
      description: "O meio ambiente é a casa de todos nós. Descubra por que cuidar dele é tão importante!",
      image: "/blogimages/banner-blog-card3.jpg",
      link: "/blog/importancia-do-meio-ambiente",
    },
  ];

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-12">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
        {/* Título e informações */}
        <header className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-eco-verde mb-2">
            Pequenas ações que salvam muita água!
          </h1>
          <p className="text-gray-600">
            Por <strong>Equipe EcoAventureiros</strong> | Publicado em 19 de Novembro de 2024
          </p>

          {/* Tags */}
          <div className="flex justify-center flex-wrap gap-2 mt-4">
            <span className="bg-eco-verde text-white px-3 py-1 rounded-full text-sm">Sustentabilidade</span>
            <span className="bg-eco-verde text-white px-3 py-1 rounded-full text-sm">Economia</span>
            <span className="bg-eco-azul text-white px-3 py-1 rounded-full text-sm">Educação</span>
          </div>
        </header>

        {/* Banner */}
        <div className="flex justify-center mb-10">
          <img
            src="/blogimages/banner-blog-post2.jpg"
            alt="Banner Pequenas ações que salvam água"
            className="rounded-lg shadow-md w-full max-w-3xl object-cover"
          />
        </div>

        {/* Texto do artigo */}
        <article className="max-w-3xl mx-auto space-y-6 text-justify mb-9">
          <p>
            Você já parou para pensar de onde vem a água que usamos todos os dias? Ela vem da natureza: rios, lagos e chuvas.
            Mas sabia que a água potável, aquela que podemos beber, é muito limitada? Isso mesmo! Só uma parte bem pequena da água
            do planeta está disponível para nós, e por isso precisamos cuidar bem dela.
          </p>
          <p>
            Economizar água é uma forma simples, mas poderosa, de ajudar o meio ambiente. Imagine que cada gota desperdiçada
            poderia ser usada por uma planta, um animal ou uma pessoa. Por isso, fechar a torneira enquanto escova os dentes
            ou tomar banhos mais curtos pode fazer uma grande diferença!
          </p>
          <p>
            Além disso, economizar água também ajuda a reduzir o uso de energia, sabia? Isso porque é preciso muita energia
            para tratar e levar a água até as nossas casas. Então, ao economizar água, você está cuidando do planeta de duas formas!
          </p>
          <p>
            Vamos juntos nessa missão? Cada vez que você fecha a torneira ou reaproveita a água da chuva, está ajudando a
            construir um mundo melhor. Lembre-se: pequenas atitudes fazem grandes mudanças!
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
