import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen px-6">
      {/* 🔹 Título animado */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-primary dark:text-accent mb-6"
      >
        {t("aboutMe.title")}
      </motion.h1>

      {/* 🔹 Imagem de perfil */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="w-40 h-40 md:w-52 md:h-52 mb-6"
      >
        <Image 
          src="/avatar.jpeg" 
          alt="Pedro Soares - Desenvolvedor Frontend" 
          width={200} 
          height={200} 
          className="rounded-full shadow-lg border-4 border-primary"
          priority
        />
      </motion.div>

      {/* 🔹 Texto sobre você */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl leading-relaxed"
      >
        {t("aboutMe.description")}
      </motion.p>

      {/* 🔹 Tecnologias */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="mt-6 flex flex-wrap justify-center gap-4"
      >
        {["React", "Next.js", "TypeScript", "Tailwind", "AEM", "Contentstack"].map((tech, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-secondary text-white rounded-full shadow-md text-sm md:text-base"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </section>
  );
}