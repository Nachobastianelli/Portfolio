import ExperienceItem from "../exprerienceItem/ExperienceItem";
import { useProyects } from "../../mocks/experiences";

const Experience = () => {
  const experiences = useProyects();
  return experiences.map((experience) => (
    <ExperienceItem
      key={experience.id}
      date={experience.date}
      title={experience.title}
      shortDescription={experience.shortDescription}
      experience={experience}
    />
  ));
};
export default Experience;
