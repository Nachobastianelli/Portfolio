import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t, i18n } = useTranslation(["aboutMe"]);
  return (
    <section
      id="about-me"
      className="mb-20 pt-[42px] mt-[-30px] max-w-[800px] mx-auto w-[80%]lg:m-auto lg:mb-20 "
    >
      <div className="flex  items-center justify-start   mt-8 max-w-[82%] mx-auto">
        <a href="#about-me ">
          <h1 className="hover:underline underline-offset-8 cursor-pointer text-3xl font-semibold text-[#bfedff]">
            {t("description")} 🧑🏽‍🎓
          </h1>
        </a>
      </div>
      <p className="mx-auto flex items-center justify-center max-w-[82%] leading-7 text-white mt-4">
        {t("title")}
      </p>
    </section>
  );
};
export default AboutMe;
