import LinkedButtons from "../linkedButtons/LinkedButtons";
import { useTranslation } from "react-i18next";

const Footer = ({ buttons }) => {
  const { t, i18n } = useTranslation("footer");
  return (
    <div className="bg-black bg-opacity-15 mt-auto p-4 min-w-[100vw]">
      <p className="flex justify-center text-white items-center text-center mb-3 ">
        {t("text1")}
        <br />
        {t("text2")}
      </p>

      <div className="flex justify-center mb-2">
        <LinkedButtons buttons={buttons} />
      </div>
    </div>
  );
};

export default Footer;
