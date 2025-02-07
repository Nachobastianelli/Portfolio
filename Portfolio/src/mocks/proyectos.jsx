import { useTranslation } from "react-i18next";
import blogPhoto from "../assets/BlogPhoto.png";
import fotoVotos from "../assets/fotoVot.png";
import bodezPhoto from "../assets/bannerBodez.PNG";

export const useProyects = () => {
  const { t } = useTranslation("proyects");

  const proyects = [
    {
      urlImage: fotoVotos,
      name: t("votos.name"),
      description: t("votos.description"),
      link: "https://final-lab-bastianelli.netlify.app/",

      tecnologias: [
        {
          logo: "https://camo.githubusercontent.com/426c1121b29abc64a6b1af1e3aa3091abb38e39c87054720b765af1425c74e7f/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6a6176617363726970742f6a6176617363726970742d6f726967696e616c2e737667",
          name: "JavaScript",
        },
        {
          logo: "https://camo.githubusercontent.com/4eaf7f26830ffa4bc4c4502a24e9be29fa2796208648a805e8f610da811aeb05/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f637373332f637373332d6f726967696e616c2e737667",
          name: "CSS",
        },
        {
          logo: "https://camo.githubusercontent.com/6647554cf19482c32acc6a6a3b8bd68b845fafabd474595e7e92dead3075c3ea/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f68746d6c352f68746d6c352d6f726967696e616c2e737667",
          name: "HTML",
        },
      ],
    },
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
          logo: "https://img.icons8.com/?size=100&id=laYYF3dV0Iew&format=png&color=000000",
          name: "SQL Server",
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
          logo: "https://dwglogo.com/wp-content/uploads/2018/03/SQLite_Vector_logo-1024x705.png",
          name: "SQLite",
        },
      ],
    },
    {
      urlImage: bodezPhoto,
      name: t("bodez.name"),
      description: t("bodez.description"),
      link: "https://github.com/nachobastianelli/Bodez-Inmobiliaria",

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
          logo: "https://img.icons8.com/?size=100&id=laYYF3dV0Iew&format=png&color=000000",
          name: "SQL Server",
        },
      ],
    },
  ];

  return proyects;
};
