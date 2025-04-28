import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-eco-azul shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img
            src="/images/ecoaventureiros-logo.png"
            alt="EcoAventureiros"
            className="h-10 object-contain"
          />
        </NavLink>

        {/* Botão mobile */}
        <button
          className="md:hidden bg-yellow-400 p-2 rounded-full focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Menu */}
        <div className={`md:flex md:items-center gap-2 ${menuOpen ? 'block' : 'hidden'} md:block`}>
          {["Início", "Jogos", "Blog", "Galeria", "Sobre"].map((label) => (
            <NavLink
              key={label}
              to={`/${label.toLowerCase() === "início" ? "" : label.toLowerCase()}`}
              className={({ isActive }) =>
                `block px-5 py-2 rounded-full text-white font-bold uppercase text-sm transition-colors ${
                  isActive ? "bg-eco-amarelo" : "hover:bg-eco-amarelo"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Campo de pesquisa (desktop) */}
        <div className="hidden lg:flex items-center ms-4">
          <input
            type="text"
            placeholder="Pesquisar"
            className="bg-white text-gray-700 rounded-full px-4 py-1 border border-gray-300 focus:outline-none focus:ring-none text-sm"
          />
          <button className="ml-2 bg-eco-amarelo text-white px-3 py-2 rounded-full hover:bg-yellow-500 flex items-center justify-center">
            <FaSearch />
          </button>
        </div>
      </div>
    </nav>
  );
}
