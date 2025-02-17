import CardProyectItem from "../cardProyectItem/CardProyectItem";
import { useProyects } from "../../mocks/proyectos";
import { useTranslation } from "react-i18next";
import { IconCode } from "@tabler/icons-react";

const CardProyects = () => {
  const proyects = useProyects();

  const { t } = useTranslation("proyects");

  return (
    <section
      id="proyects"
      className="mb-20 pt-[42px] mt-[-30px] max-w-[680px] mx-auto sm:w-[80%] w-full lg:m-auto lg:mb-20"
    >
      <div className="flex items-center gap-2 link link-underline link-underline-black w-fit cursor-pointer mb-5 mr-4">
        <a href="#proyects" className="flex items-center">
          <IconCode stroke={2} className="size-9 text-[#bfedff]" />
          <h1 className="text-3xl font-semibold m-2 text-[#bfedff]  ">
            {t("title")}
          </h1>
        </a>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {proyects.map((proyect, index) => (
          <CardProyectItem
            key={index}
            urlImage={proyect.urlImage}
            name={proyect.name}
            description={proyect.description}
            tecnologias={proyect.tecnologias}
            link={proyect.link}
          />
        ))}
      </div>
    </section>
  );
};

export default CardProyects;
