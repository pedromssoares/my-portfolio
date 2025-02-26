import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { projectsData } from "@/data/projectsData";
import Image from "next/image";

export default function Projects() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("All");

  // 🔹 Filtra os projetos de acordo com a categoria selecionada
  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((project) => project.category.includes(filter));

  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 pt-24 overflow-hidden w-full">
      {/* 🔹 Título */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-primary dark:text-accent mb-6"
      >
        {t("projects.title")}
      </motion.h1>

      {/* 🔹 Filtros */}
      <div className="flex flex-wrap justify-center space-x-4 mb-6 w-full">
        {["All", "Frontend", "Fullstack", "CMS"].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-md transition ${
              filter === category
                ? "bg-primary text-white"
                : "bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-200"
            }`}
          >
            {t(`projects.filters.${category.toLowerCase()}`)}
          </button>
        ))}
      </div>

      {/* 🔹 Lista de Projetos */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md transition w-full max-w-full"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={300}
              height={200}
              className="w-full max-w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-primary dark:text-accent">
              {project.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              {project.description}
            </p>
            <div className="flex justify-between mt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                GitHub
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:underline"
                >
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
