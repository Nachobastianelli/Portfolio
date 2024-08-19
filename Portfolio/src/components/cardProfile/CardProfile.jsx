import myImage from "../../assets/image.jpg";
import ContactMe from "../contactMe/ContactMe";
import { useTranslation } from "react-i18next";
const CardProfile = ({ isVisible, onClose }) => {
  const { t, i18n } = useTranslation("contact");
  if (!isVisible) {
    return null;
  }

  return (
    <>
      <div className="pt-[112px] mt-[-2px]">
        <h1 className="flex  mb-11 items-center cursor-pointer hover:underline underline-offset-8  pb-20  justify-center text-3xl font-semibold text-[#bfedff]  max-w-[82%] mx-auto">
          <a href="#contact">{t("title")}</a>
        </h1>
      </div>
      <div className="flex justify-center items-center ">
        <div className="w-full ml-1 mr-1 flex flex-col justify-center items-center sm:w-96 border-gray-700 text-center">
          <div className="w-full rounded-2xl p-8 text-white bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700 pb-44 relative">
            <h1 className="text-xl mb-4">{t("subtitle")}</h1>
            <p>{t("p")}</p>
          </div>
          <div className="text-center bg-white shadow-lg w-[80%] rounded-xl -mt-32 z-10 p-9 flex items-center flex-col">
            <h2 className="font-semibold  text-black text-xl">{t("start")}</h2>
            <img
              src={myImage}
              className="w-20 h-20 border-purple-600 border-2 object-cover scale-105 rounded-full mt-7"
            />
            <p className="mt-3 font-semibold text-lg text-black">Ignacio</p>
            <span className="text-slate-500 rounded-xl border-slate-100 text-sm mt-2 pl-3 pr-3 border-[1px]">
              <span className="bg-green-500 w-2 h-2 rounded-full mt-0.5 inline-block"></span>{" "}
              {t("active")}
            </span>
            <button
              className="w-full gradient bg-gray-100 border border-gray-400 rounded-md text-black p-4 mt-4 hover:shadow-xl hover:bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500  hover:italic hover:text-white hover:font-normal transition-all duration-700 ease-in-out"
              onClick={isVisible}
            >
              {t("start")}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardProfile;
