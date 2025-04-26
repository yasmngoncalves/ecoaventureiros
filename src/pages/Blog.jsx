import { Link } from "react-router-dom";

export default function Blog() {
  const posts = [
    {
      title: "Recicle e dê uma nova vida aos materiais!",
      description: "Descubra como reciclar transforma lixo em novas possibilidades e ajuda a natureza. Seja um herói do planeta com pequenas ações no dia a dia!",
      image: "/blogimages/banner-blog-card1.jpg",
      link: "/blog/reciclar-e-transformar-materiais",
    },
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
    <section className="w-full max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-eco-verde mb-10">
        BLOG EcoAventureiros
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-eco-verde-escuro mb-2">
                {post.title}
              </h3>
              <p className="text-gray-700 flex-grow">{post.description}</p>
              <Link
                to={post.link}
                className="mt-4 bg-eco-verde text-white text-center py-2 rounded hover:bg-eco-verde-escuro"
              >
                Leia Mais
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
