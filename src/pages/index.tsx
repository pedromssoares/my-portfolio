import { motion } from "framer-motion";
import { ReactTyped }  from "react-typed";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center">
      {/* Animação de Entrada */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold text-primary dark:text-accent mb-4">
          Olá, eu sou Pedro 👋
        </h1>
      </motion.div>

      {/* Efeito de Digitação */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-2xl text-gray-600 dark:text-gray-300 mb-6"
      >
        <ReactTyped
          strings={[
            "Desenvolvedor Frontend 🚀",
            "Especialista em Next.js & React ⚛️",
            "Apaixonado por Tecnologia e Inovação 💡"
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
        />
      </motion.div>

      {/* Botão CTA */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Link href="#projects">
          <button className="px-6 py-3 text-lg font-semibold bg-primary text-white rounded-lg shadow-lg hover:bg-secondary transition">
            Veja meus projetos →
          </button>
        </Link>
      </motion.div>
    </section>
  );
}