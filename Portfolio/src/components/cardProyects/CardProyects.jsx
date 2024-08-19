import CardProyectItem from "../cardProyectItem/CardProyectItem";
import { useProyects } from "../../mocks/proyectos";
import { useTranslation } from "react-i18next";

const CardProyects = () => {
  const proyects = useProyects();

  const { t } = useTranslation("proyects");

  return (
    <>
      <div className="pt-[70px] mt-[-70px]">
        <h1 className="flex items-center cursor-pointer hover:underline underline-offset-8 justify-center  mb-6 text-3xl font-semibold text-[#bfedff] max-w-[82%] mx-auto">
          <a href="#proyects">{t("title")} 🧑🏽</a>
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
