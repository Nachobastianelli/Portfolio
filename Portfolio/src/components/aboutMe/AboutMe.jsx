import { useTranslation } from "react-i18next";
import { IconUser } from "@tabler/icons-react";
const AboutMe = () => {
  const { t, i18n } = useTranslation(["aboutMe"]);
  return (
    <section
      id="about-me"
      className="mb-20 pt-[42px] mt-[-30px] max-w-[680px] mx-auto sm:w-[80%] w-full lg:m-auto lg:mb-20"
    >
      <div className="flex items-center gap-2 link link-underline link-underline-black w-fit cursor-pointer mb-5 mr-4">
        <a href="#about-me " className="flex items-center">
          <IconUser stroke={2} className="size-9 text-[#bfedff]" />
          <h1 className="text-3xl font-semibold m-2 text-[#bfedff]  ">
            {t("description")}
          </h1>
        </a>
      </div>
      <div className="flex items-start justify-center text-start text-lg">
        <p className="inline-block max-w-[70vh] leading-7 text-white mt-4 text-start">
          {t("title")}{" "}
          <span className="italic px-1 bg-indigo-400 bg-opacity-50 text-red-100 font-medium">
            {t("extra")}
          </span>
        </p>
      </div>
    </section>
  );
};
export default AboutMe;
