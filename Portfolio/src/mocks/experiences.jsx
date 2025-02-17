import logoNetizar from "../assets/logoNetizar.png";
import { useTranslation } from "react-i18next";

export const useProyects = () => {
  const { t } = useTranslation("experiences");

  const experiences = [
    {
      id: 1,
      image: logoNetizar,
      date: t("netizar.date"),
      title: t("netizar.title"),
      shortDescription: t("netizar.shortDescription"),
      description: t("netizar.description"),
    },
  ];

  return experiences;
};
