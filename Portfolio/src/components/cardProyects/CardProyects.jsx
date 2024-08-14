import CardProyectItem from "../cardProyectItem/CardProyectItem";
import { useProyects } from "../../mocks/proyectos";
import { useTranslation } from "react-i18next";

const CardProyects = () => {
  const proyects = useProyects();

  const { t } = useTranslation("proyects");

  return (
    <>
      <h1 className="flex items-center justify-center pt-[70px] mt-[-70px] mb-6 text-3xl font-semibold text-[#E7CFFF] max-w-[82%] mx-auto">
        {t("title")} 🧑🏽
      </h1>
      <div className="grid grid-cols-1 gap-8">
        {proyects.map((proyect, index) => (
          <CardProyectItem
            key={index}
            urlImage={proyect.urlImage}
            name={proyect.name}
            description={proyect.description}
            tecnologias={proyect.tecnologias}
          />
        ))}
      </div>
    </>
  );
};

export default CardProyects;
