import { ArgIcon, EeuuIcon } from "../../icons/icons";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const { t, i18n } = useTranslation("header");

  const handleScroll = () => {
    setIsHeaderFixed(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [isEnglish, setIsEnglish] = useState(true);

  const changeLanguaje = () => {
    let languaje = isEnglish ? "es" : "en";
    i18n.changeLanguage(languaje);
  };

  const styleAnchor =
    "p-4 border-b-2 border-blue-500 border-opacity-0  hover:border-opacity-100  hover:text-blue-400 duration-200 cursor-pointer ";

  const clickHandler = () => {
    changeLanguaje();
    setIsEnglish(!isEnglish);
  };

  const flag = isEnglish ? <ArgIcon /> : <EeuuIcon />;
  const text = isEnglish ? <p>ES</p> : <p>EN</p>;
  return (
    <header
      className={`fixed  top-0 w-full z-50 shadow-md bg-opacity-10 blur-0 ${
        isHeaderFixed ? "backdrop-blur-md" : ""
      }`}
    >
      <div className="flex items-center max-w-[90vh] sm:max-w-[75vw] md:max-w-[60vw] w-full m-auto justify-between lg:justify-around px-4 text-white">
        <div className="hover:scale-110  transition-all ease-in-out duration-300 ml-10 md:ml-0">
          <a
            href="#home"
            className="transition-all ease-in-out duration-500 hover:text-[#00b7ff]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-prompt"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 7l5 5l-5 5" />
              <path d="M13 17l6 0" />
            </svg>
          </a>
        </div>
        <div className="gap-6 hidden header:flex ">
          <a className={styleAnchor} href="#about-me">
            {t("title1")}
          </a>
          <a className={styleAnchor} href="#proyects">
            {t("title2")}
          </a>
          <a className={styleAnchor} href="#contact">
            {t("title3")}
          </a>
        </div>
        <div
          className="border-gray-300 flex gap-2 border w-[85.4px] rounded-md py-2 px-4 cursor-pointer hover:bg-gray-500 active:bg-gray-600 active:bg-opacity-10  hover:bg-opacity-10 mr-10 md:mr-0 my-2 header:my-0"
          onClick={clickHandler}
        >
          <div>{flag}</div>
          <div>{text}</div>
        </div>
      </div>
    </header>
  );
};
export default Header;
