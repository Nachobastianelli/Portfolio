import { useTypewriter, Cursor } from "react-simple-typewriter";
import myImage from "../../assets/myImage.jpg"; // Asegúrate de que la ruta a tu imagen sea correcta.
import LinkedButtons from "../linkedButtons/LinkedButtons";

const Profile = ({ buttons }) => {
  const [text] = useTypewriter({
    words: ["Fullstack Developer", "Designer", "Mogolico"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <div className="flex items-center justify-center p-6  ">
      <div className="flex flex-col items-start max-w-[60%]">
        <div className="text-4xl font-semibold">
          Hi, <span className="font-bold text-indigo-500">I’m Ignacio</span>
        </div>
        <h1 className="mt-4 text-2xl">
          I’m a <span className="font-semibold text-indigo-600">{text}</span>
          <Cursor />
        </h1>
        <p className="mt-4 text-lg ">
          Junior Developer passionate about creating interactive and dynamic web
          applications. I am currently studying Software Development
        </p>
      </div>
      <div className="ml-8 flex flex-col justify-center items-center gap-3">
        <div>
          <img
            src={myImage}
            alt="Ignacio Bastianelli"
            className="rounded-full w-40 h-40 object-cover border-4 border-indigo-500 shadow-lg"
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
