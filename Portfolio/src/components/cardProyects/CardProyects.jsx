import CardProyectItem from "../cardProyectItem/CardProyectItem";
import { useProyects } from "../../mocks/proyectos";
import { useTranslation } from "react-i18next";
import { IconCode } from "@tabler/icons-react";

const CardProyects = () => {
  const proyects = useProyects();

  const { t } = useTranslation("proyects");

  return (
    <>
      <div className="pt-[70px] mt-[-70px]">
        <h1 className="flex items-center justify-center mb-6 max-w-[82%] mx-auto">
          <a
            href="#proyects"
            className="flex items-center gap-3 link link-underline link-underline-black w-fit pb-2 text-[#bfedff] "
          >
            <IconCode stroke={2} className="size-8" />
            <h1 className="  cursor-pointer  text-3xl font-semibold  ">
              {t("title")}
            </h1>
          </a>
        </h1>
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
    </>
  );
};

export default CardProyects;
