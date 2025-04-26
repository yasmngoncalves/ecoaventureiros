import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-eco-verde-claro flex flex-col">
        {children}
      </main>
      <Footer />
    </div>
  );
}
