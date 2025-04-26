import { useState } from "react";

export default function Contato() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // Aqui no futuro você pode integrar com algum serviço de envio de email.
    alert("Mensagem enviada! Obrigado pelo contato. 🌎");
    setForm({ nome: "", email: "", assunto: "", mensagem: "" });
  };

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-eco-verde mb-4">
        Entre em Contato
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Envie sua mensagem e vamos construir juntos um planeta mais sustentável e divertido!
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="nome" className="block mb-1 text-sm font-medium text-gray-700">
            Nome
          </label>
          <input
            type="text"
            id="nome"
            value={form.nome}
            onChange={handleChange}
            required
            placeholder="Seu nome completo"
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="seuemail@exemplo.com"
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
        </div>

        <div>
          <label htmlFor="assunto" className="block mb-1 text-sm font-medium text-gray-700">
            Assunto
          </label>
          <input
            type="text"
            id="assunto"
            value={form.assunto}
            onChange={handleChange}
            required
            placeholder="Motivo do contato"
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
        </div>

        <div>
          <label htmlFor="mensagem" className="block mb-1 text-sm font-medium text-gray-700">
            Mensagem
          </label>
          <textarea
            id="mensagem"
            value={form.mensagem}
            onChange={handleChange}
            required
            placeholder="Digite sua mensagem aqui"
            rows="5"
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-eco-verde hover:bg-eco-verde-escuro text-white font-semibold px-8 py-2 rounded-md"
          >
            Enviar Mensagem
          </button>
        </div>
      </form>
    </section>
  );
}
