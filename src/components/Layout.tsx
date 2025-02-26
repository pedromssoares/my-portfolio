import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ParticlesBackground from "./ParticlesBackground";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative z-10 flex flex-col bg-background text-text dark:bg-darkBackground dark:text-darkText transition-colors duration-300">
      {/* 🔹 Header Fixo no Topo */}
      <Header />

      {/* 🔹 Background Animado */}
      <ParticlesBackground />

      {/* 🔹 Conteúdo que se ajusta automaticamente */}
      <main className="flex-grow flex flex-col items-center justify-center">
        {children}
      </main>

      {/* 🔹 Footer Fixo no Final */}
      <Footer />
    </div>
  );
}