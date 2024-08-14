import { useTranslation } from "react-i18next";

export const useProyects = () => {
  const { t } = useTranslation("proyects");

  const proyects = [
    {
      urlImage:
        "https://digitiz.fr/wp-content/uploads/2021/01/Exemplse-site-e-commerce.png",
      name: t("waikiki.name"),
      description: t("waikiki.description"),
      tecnologias: [
        {
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          name: "React",
        },
        {
          logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
          name: "Tailwind CSS",
        },
        {
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          name: "Node JS",
        },
      ],
    },
    {
      urlImage:
        "https://sm.ign.com/ign_me/screenshot/default/discord-logo_ycay.jpg",
      name: t("discordBot.name"),
      description: t("discordBot.description"),
      tecnologias: [
        {
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          name: "Node JS",
        },
      ],
    },
  ];

  return proyects;
};
