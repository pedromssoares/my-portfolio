import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaReact, FaAngular, FaJs, FaNodeJs, FaCloud } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiAdobe, SiContentstack, SiTerraform } from "react-icons/si";
import { TbApi } from "react-icons/tb";

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen px-6 pt-24">
      {/* 🔹 Título */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-primary dark:text-accent mb-6"
      >
        {t("about.title")}
      </motion.h1>

      {/* 🔹 Descrição */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl leading-relaxed"
      >
        {t("about.description")}
      </motion.p>

      {/* 🔹 Linha do Tempo Profissional */}
      <div className="mt-12 w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="relative pl-6 space-y-8"
        >
          {t("about.experience", { returnObjects: true }).map((job, index) => (
            <div key={index} className="relative">
              <h3 className="text-xl font-semibold">{job.role} - {job.company}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{job.date} | {job.location}</p>
              <ul className="mt-2 text-gray-700 dark:text-gray-300 text-left list-disc pl-5">
                {job.tasks.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>
              <p className="mt-2 text-sm font-semibold text-gray-600 dark:text-gray-300">Key Technologies: {job.technologies}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* 🔹 Tech Stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="mt-12 mb-8 grid grid-cols-3 md:grid-cols-5 gap-6 text-4xl text-gray-600 dark:text-gray-300"
      >
        <FaReact className="hover:text-blue-400 transition" />
        <SiNextdotjs className="hover:text-black dark:hover:text-white transition" />
        <FaAngular className="hover:text-red-500 transition" />
        <FaJs className="hover:text-yellow-500 transition" />
        <FaNodeJs className="hover:text-green-500 transition" />
        <SiTerraform className="hover:text-purple-500 transition" />
        <SiContentstack className="hover:text-gray-500 transition" />
        <FaCloud className="hover:text-indigo-500 transition" />
        <SiAdobe className="hover:text-red-500 transition" />
        <SiTailwindcss className="hover:text-blue-300 transition" />
      </motion.div>
    </section>
  );
}