import { useTranslation } from "react-i18next";
import blogPhoto from "../assets/BlogPhoto.png";

export const useProyects = () => {
  const { t } = useTranslation("proyects");

  const proyects = [
    {
      urlImage:
        "https://digitiz.fr/wp-content/uploads/2021/01/Exemplse-site-e-commerce.png",
      name: t("waikiki.name"),
      description: t("waikiki.description"),
      link: "https://github.com/nachobastianelli/Ecommerce-tienda-de-ropa",

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
      urlImage: "https://image5.slideserve.com/10806180/ecommerce-api-l.jpg",
      name: t("ecommerceApi.name"),
      description: t("ecommerceApi.description"),
      link: "https://github.com/nachobastianelli/EcommerceApiREST",
      tecnologias: [
        {
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/2048px-Microsoft_.NET_logo.svg.png",
          name: ".NET",
        },
        {
          logo: "https://dwglogo.com/wp-content/uploads/2018/03/SQLite_Vector_logo-1024x705.png",
          name: "SQLite",
        },
      ],
    },
    {
      urlImage: "https://www.webnode.com/es/blog/files/2019/05/blog2.png",
      name: t("blog.name"),
      description: t("blog.description"),
      link: "https://github.com/nachobastianelli/Blog-Front",

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
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/2048px-Microsoft_.NET_logo.svg.png",
          name: ".NET",
        },
        {
          logo: "https://e7.pngegg.com/pngimages/162/121/png-clipart-microsoft-sql-server-computer-servers-sql-server-management-studio-microsoft-angle-triangle.png",
          name: "SQL server",
        },
      ],
    },
  ];

  return proyects;
};
