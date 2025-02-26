import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ParticlesBackground from "./ParticlesBackground";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative z-10 flex flex-col min-h-screen bg-background text-text dark:bg-darkBackground dark:text-darkText transition-colors duration-300">
      {/* 🔹 Background Animado fica FORA do `main` para cobrir tudo */}
      <ParticlesBackground />

      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}
