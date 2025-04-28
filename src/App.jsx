import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Jogos from "./pages/Jogos";
import Blog from "./pages/Blog";
import Artigo1 from "./pages/blog/Artigo1";
import Artigo2 from "./pages/blog/Artigo2";
import Artigo3 from "./pages/blog/Artigo3";
import Galeria from "./pages/Galeria";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import GameMemory from "./pages/games/MemoryGame";
import Quiz from "./pages/games/Quiz";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/jogos" element={<Layout><Jogos /></Layout>} />
        <Route path="/jogos/jogo-memoria" element={<Layout><GameMemory /></Layout>} />
        <Route path="/jogos/quiz" element={<Layout><Quiz /></Layout>}/>

        <Route path="/blog" element={<Layout><Blog /></Layout>} />
        <Route path="/blog/reciclar-e-transformar-materiais" element={<Layout><Artigo1 /></Layout>} />
        <Route path="/blog/economizar-agua-no-dia-a-dia" element={<Layout><Artigo2 /></Layout>} />
        <Route path="/blog/importancia-do-meio-ambiente" element={<Layout><Artigo3 /></Layout>} />
        <Route path="/galeria" element={<Layout><Galeria /></Layout>} />
        <Route path="/sobre" element={<Layout><Sobre /></Layout>} />
        <Route path="/contato" element={<Layout><Contato /></Layout>} />
      </Routes>
    </Router>
  );
}
