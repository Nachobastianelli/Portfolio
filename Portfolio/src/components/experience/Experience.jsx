import ExperienceItem from "../exprerienceItem/ExperienceItem";
import { useProyects } from "../../mocks/experiences";
import { IconBriefcase } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const experiences = useProyects();

  const { t } = useTranslation("experience");

  return (
    <>
      <div className="mb-20 pt-[42px] mt-[-30px] max-w-[680px] mx-auto sm:w-[80%] w-full lg:m-auto lg:mb-20 ">
        <div className="flex items-center gap-2 link link-underline link-underline-black w-fit cursor-pointer mb-5 mr-4">
          <IconBriefcase stroke={2} className="size-8 text-[#bfedff]" />
          <h1 className="text-3xl font-semibold m-2 text-[#bfedff]  ">
            {t("title")}
          </h1>
        </div>
        {experiences.map((experience) => (
          <ExperienceItem
            key={experience.id}
            date={t(`netizar.date`)} // Aquí traducimos el valor de "date"
            title={t(`netizar.title`)} // Aquí traducimos el valor de "title"
            shortDescription={t(`netizar.shortDescription`)} // Aquí traducimos el valor de "shortDescription"
            experience={experience}
          />
        ))}
      </div>
    </>
  );
};
export default Experience;
