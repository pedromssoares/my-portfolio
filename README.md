# 🌐 Pedro Soares - Portfolio

Welcome to my personal portfolio! 🚀 This project showcases my experience as a **Senior Frontend Developer & Headless CMS Specialist**. Built using **Next.js**, **Tailwind CSS**, and **Framer Motion**, this portfolio provides an interactive and seamless experience.

---

## 📌 Live Demo
🔗 [View Online on Vercel](https://pedromssoares-portfolio.vercel.app)


---

## 📸 Preview

<img width="1470" alt="image" src="https://github.com/user-attachments/assets/a1cddf7d-1e03-4264-a2e9-5ae1c0d8b93a" />
<img width="1469" alt="image" src="https://github.com/user-attachments/assets/ea78e823-b420-485b-b39e-a43f62babe3b" />
<img width="1470" alt="image" src="https://github.com/user-attachments/assets/7efbab9a-a084-4511-a24b-cf0fce2024c1" />
<img width="1469" alt="image" src="https://github.com/user-attachments/assets/9a942088-bdfa-420e-8f5c-96f3aadfff52" />

---

## 🛠️ Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Animations**: Framer Motion
- **State Management**: React Hooks
- **Localization**: i18next (English & Portuguese support)
- **Forms**: EmailJS (for contact form integration)
- **Deployment**: Vercel

---

## 📂 Project Structure

```
/src
  ├── components       # Reusable UI components
  ├── pages            # Next.js pages (Home, About, Projects, Contact)
  ├── layouts          # Page layouts (Header, Footer, ParticlesBackground)
  ├── data             # Projects data for dynamic rendering
  ├── hooks            # Custom React hooks (useTheme, etc.)
  ├── locales          # Localization files (i18n translations)
  ├── styles           # Global styles and Tailwind configuration
```

---

## ✨ Features

✅ **Dark/Light Mode Toggle** (Persistent across sessions)
✅ **Fully Responsive Design** (Mobile-friendly)
✅ **Interactive Particles Background**
✅ **Framer Motion Animations** (Smooth UI transitions)
✅ **Projects Page with Category Filtering**
✅ **Contact Form with EmailJS Integration**
✅ **Multi-language Support (EN/PT)**
✅ **SEO Optimized with Meta Tags**

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Create a `.env.local` File
```sh
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### 4️⃣ Run Locally
```sh
npm run dev
```

📍 App will be running at `http://localhost:3000`

---

## 🎯 Deployment

This project is deployed using **Vercel**.
To deploy manually:
```sh
git push origin main
```
Then, go to **Vercel Dashboard** → Import project → Deploy 🚀

---

## 🎨 Customization

To update **projects**, modify `src/data/projectsData.ts`:
```ts
export const projectsData = [
  {
    id: 1,
    title: "Mini Netflix",
    category: ["Frontend"],
    description: "Movie app built with Next.js & Tailwind CSS.",
    image: "/images/mini-netflix.png",
    github: "https://github.com/yourusername/mini-netflix",
    demo: "https://mini-netflix.vercel.app",
  },
];
```

To edit **translations**, modify `src/locales/en.json` and `pt.json`.

---

## 🤝 Contributing
Feel free to fork this repo and create pull requests with improvements! 🚀

---

## 📩 Contact
📧 Email: pedro.santos-soares@outlook.com 
🔗 LinkedIn: [Pedro Soares](https://www.linkedin.com/in/pedromssoares/)  
🐙 GitHub: [@pedromssoares](https://github.com/pedromssoares)  

---

**🚀 Thank you for checking out my portfolio!**

