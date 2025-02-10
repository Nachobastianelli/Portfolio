import { useTranslation } from "react-i18next";

export const useProyects = () => {
  const { t } = useTranslation("experiences");

  const experiences = [
    {
      id: 1,
      date: "January 2025",
      title: "Fullstack Developer at Netizar S.A.",
      shortDescription:
        "As a Fullstack Developer at Netizar S.A., I contributed to the design, development, and deployment of web applications.",
      description:
        "As a Fullstack Developer at Netizar S.A., I contributed to the design, development, and deployment of web applications. My responsibilities included creating scalable backends using Node.js and Express, managing and optimizing databases with MySQL, and building responsive frontends with React and JavaScript. I collaborated with cross-functional teams to deliver high-quality solutions and ensure seamless user experiences.",
    },
  ];

  return experiences;
};
