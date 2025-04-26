import { Link } from "react-router-dom";

export default function Artigo2() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-12">
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
          alt="Banner EcoAventureiros - Pequenas ações que salvam água"
          className="rounded-lg shadow-md w-full max-w-3xl object-cover"
        />
      </div>

      {/* Texto do artigo */}
      <article className="text-gray-700 space-y-6 text-justify">
        <p>
          Você já parou para pensar de onde vem a água que usamos todos os dias? Ela vem da natureza: rios, lagos e
          chuvas. Mas sabia que a água potável, aquela que podemos beber, é muito limitada? Isso mesmo! Só uma parte bem
          pequena da água do planeta está disponível para nós, e por isso precisamos cuidar bem dela.
        </p>
        <p>
          Economizar água é uma forma simples, mas poderosa, de ajudar o meio ambiente. Imagine que cada gota desperdiçada
          poderia ser usada por uma planta, um animal ou uma pessoa. Por isso, fechar a torneira enquanto escova os dentes
          ou tomar banhos mais curtos pode fazer uma grande diferença!
        </p>
        <p>
          Além disso, economizar água também ajuda a reduzir o uso de energia, sabia? Isso porque é preciso muita energia
          para tratar e levar a água até as nossas casas. Então, ao economizar água, você está cuidando do planeta de duas
          formas!
        </p>
        <p>
          Vamos juntos nessa missão? Cada vez que você fecha a torneira ou reaproveita a água da chuva, está ajudando a
          construir um mundo melhor. Lembre-se: pequenas atitudes fazem grandes mudanças!
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
