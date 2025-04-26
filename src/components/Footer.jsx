import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Logo + redes */}
        <div>
          <Link to="/">
            <img src="/images/ecoaventureiros-logo.png" alt="EcoAventureiros" className="h-10 mb-2" />
          </Link>
          <p className="text-sm">Projeto criado pelos EcoAventureiros. Juntos, por um planeta mais sustentável!</p>
          <div className="flex gap-4 mt-3">
            <a href="https://facebook.com/profile.php?id=61569595804767" target="_blank" rel="noreferrer">
              <i className="bi bi-facebook text-xl"></i>
            </a>
            <a href="https://instagram.com/eco_aventureiros" target="_blank" rel="noreferrer">
              <i className="bi bi-instagram text-xl"></i>
            </a>
            <a href="https://github.com/yasmngoncalves/Projeto-EcoAventureiros" target="_blank" rel="noreferrer">
              <i className="bi bi-github text-xl"></i>
            </a>
          </div>
        </div>

        {/* Mapa do Site */}
        <div>
          <h5 className="font-semibold mb-2">Mapa do Site</h5>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:underline">Página Inicial</Link></li>
            <li><Link to="/jogos" className="hover:underline">Jogos Educativos</Link></li>
            <li><Link to="/blog" className="hover:underline">Blog Educacional</Link></li>
            <li><Link to="/galeria" className="hover:underline">Galeria EcoAventureiros</Link></li>
            <li><Link to="/sobre" className="hover:underline">Quem Somos</Link></li>
            <li><Link to="/contato" className="hover:underline">Contato</Link></li>
          </ul>
        </div>

        {/* Jogos */}
        <div>
          <h5 className="font-semibold mb-2">Jogos</h5>
          <ul className="space-y-1 text-sm">
            <li><Link to="/jogos/jogo-memoria" className="hover:underline">Jogo da Ecomemória</Link></li>
            <li><Link to="/jogos/quiz" className="hover:underline">Aventura Sustentável</Link></li>
          </ul>
        </div>

        {/* Imagem ou ilustração extra */}
        <div className="flex justify-center items-start">
          <img src="/images/icone-footer.png" alt="Ícone" className="h-32" />
        </div>
      </div>

      <div className="border-t border-green-700 py-4 text-center text-sm text-green-200">
        © {new Date().getFullYear()} EcoAventureiros. Todos os direitos reservados.
      </div>
    </footer>
  );
}
