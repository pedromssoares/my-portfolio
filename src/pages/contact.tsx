import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  // 🔹 Atualiza os valores do formulário
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔹 Função de envio do formulário (simulação)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");

    // Simulando um tempo de resposta (API ou EmailJS pode ser usado aqui)
    setTimeout(() => {
      setIsSubmitting(false);
      setStatusMessage(t("contact.successMessage"));
      setForm({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 pt-24">
      {/* 🔹 Título */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-primary dark:text-accent mb-6"
      >
        {t("contact.title")}
      </motion.h1>

      {/* 🔹 Descrição */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl text-center leading-relaxed mb-6"
      >
        {t("contact.description")}
      </motion.p>

      {/* 🔹 Formulário de Contato */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="w-full max-w-lg bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">
            {t("contact.name")}
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">
            {t("contact.email")}
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">
            {t("contact.message")}
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>
        </div>

        {/* 🔹 Status de Envio */}
        {statusMessage && (
          <p className="text-green-500 text-center">{statusMessage}</p>
        )}

        {/* 🔹 Botão de Envio */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-white py-2 rounded-md hover:bg-secondary transition flex items-center justify-center"
        >
          {isSubmitting ? (
            <span className="animate-spin mr-2">⏳</span>
          ) : (
            t("contact.sendMessage")
          )}
        </button>
      </motion.form>
    </section>
  );
}
