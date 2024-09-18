import { useTypewriter, Cursor } from "react-simple-typewriter";
import myImage from "../../assets/myImage.jpg";
import LinkedButtons from "../linkedButtons/LinkedButtons";
import { useTranslation } from "react-i18next";
import { LaptopIcon } from "../../icons/icons";

const Profile = ({ buttons }) => {
  const { t, i18n } = useTranslation(["profile"]);
  const [text] = useTypewriter({
    words: [t("text1"), t("text2"), t("text3")],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <div className="flex flex-col gap-20 m-auto lg:gap-0 lg:flex-row  max-w-[700px] items-center justify-center p-6 pt-[100px] mt-[-100px] font-onest">
      <div className="flex flex-col items-start w-[90%]">
        <div className="text-4xl font-semibold">
          {t("saludo")}{" "}
          <span className="font-bold text-[#00b7ff] font-onest">
            {t("title")}
          </span>
          <span> 👋</span>
        </div>
        <h1 className="mt-4 text-2xl text-wrap font-onest">
          {t("antes")}{" "}
          <span className="font-semibold text-[#bfedff]">{text}</span>
          <Cursor />
        </h1>
        <div className="lg: max-w-[800px]">
          <p className="mt-4 text-lg font-onest">
            {t("text")}{" "}
            <span className="italic text-[#f6ffd0]   ">
              <span className="inline-block">{t("extra")}</span>
              <span className="inline-block align-middle mb-[6px]  ">
                <LaptopIcon />{" "}
              </span>
            </span>
          </p>
        </div>
      </div>
      <div className="lg:ml-8 flex flex-col justify-center items-center gap-3 relative">
        <div className="relative w-40 h-40">
          <div
            className="absolute inset-0 w-full rounded-full h-full bg-gradient-to-r from-blue-300 via-blue-700 to-blue-300 opacity-80 animate-galaxyBlur"
            style={{
              filter: "blur(30px)",
            }}
          ></div>

          <img
            src={myImage}
            alt="Ignacio Bastianelli"
            className="w-full h-full rounded-full object-cover border-4 border-[#00b7ff] shadow-lg animate-floating"
          />
        </div>
        <div>
          <LinkedButtons buttons={buttons} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
