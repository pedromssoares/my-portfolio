import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next"; 

export default function Home() {
  const { t } = useTranslation(); 

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden bg-transparent">
      {/* 🔹 Avatar / Ilustração */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-40 h-40 md:w-52 md:h-52 mb-6"
      >
        <Image
          src="/avatar.jpeg"
          alt="Pedro Soares - Desenvolvedor Frontend"
          width={500}
          height={500}
          className="rounded-full shadow-lg border-4 border-primary"
          priority
        />
      </motion.div>

      {/* 🔹 Conteúdo da Home */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <h1 className="text-5xl font-bold text-primary dark:text-accent mb-4">
          {t("greeting")}
        </h1>
      </motion.div>

      {/* 🔹 Efeito de Digitação */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-2xl text-gray-600 dark:text-gray-300 mb-6 relative z-10"
      >
        <ReactTyped
          strings={[
            t("developer"),
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
        />
      </motion.div>

      {/* 🔹 Botão CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="relative z-10"
      >
        <Link href="#projects">
          <button className="px-6 py-3 text-lg font-semibold bg-primary text-white rounded-lg shadow-lg hover:bg-secondary transition">
            {t("cta")}
          </button>
        </Link>
      </motion.div>
    </section>
  );
}
