import LinkedButtons from "../linkedButtons/LinkedButtons";
import { useTranslation } from "react-i18next";

const Footer = ({ buttons }) => {
  const { t, i18n } = useTranslation("footer");
  return (
    <div className="bg-black bg-opacity-15 mt-auto p-4 min-w-[100vw]">
      <p className="flex flex-col justify-center text-white items-center text-center mb-3 ">
        <div>
          {t("text1")}{" "}
          <span className="text-[#ffcaca] font-semibold italic">
            {" "}
            Ignacio Bastianelli{" "}
          </span>
        </div>

        <div>{t("text2")}</div>
      </p>

      <div className="flex justify-center mb-2">
        <LinkedButtons buttons={buttons} />
      </div>
    </div>
  );
};

export default Footer;
