import ExperienceItem from "../exprerienceItem/ExperienceItem";
import { useProyects } from "../../mocks/experiences";
import { IconBriefcase } from "@tabler/icons-react";

const Experience = () => {
  const experiences = useProyects();
  return (
    <>
      <div className="mb-20 pt-[42px] mt-[-30px] max-w-[680px] mx-auto sm:w-[80%] w-full lg:m-auto lg:mb-20">
        <div className="flex items-center gap-2 link link-underline link-underline-black w-fit cursor-pointer">
          <IconBriefcase stroke={2} className="size-8 text-[#bfedff]" />
          <h1 className="text-3xl font-semibold m-2 text-[#bfedff] ">
            Experiencias
          </h1>
        </div>
        {experiences.map((experience) => (
          <ExperienceItem
            key={experience.id}
            date={experience.date}
            title={experience.title}
            shortDescription={experience.shortDescription}
            experience={experience}
          />
        ))}
      </div>
    </>
  );
};
export default Experience;
