import { useTypewriter, Cursor } from "react-simple-typewriter";
import myImage from "../../assets/myImage.jpg";
import LinkedButtons from "../linkedButtons/LinkedButtons";

const Profile = ({ buttons }) => {
  const [text] = useTypewriter({
    words: ["Fullstack developer", "Designer", "Student"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <div className="flex flex-col gap-20 m-auto lg:gap-0 lg:flex-row  max-w-[700px] items-center justify-center p-6 pt-[100px] mt-[-100px] ">
      <div className="flex flex-col items-start w-[90%]">
        <div className="text-4xl font-semibold">
          Hi,{" "}
          <span className="font-bold bg-gradient-to-tr from-white via-purple-500 to-black bg-clip-text text-transparent">
            I’m Ignacio
          </span>
          👋
        </div>
        <h1 className="mt-4 text-2xl text-wrap ">
          I’m a <span className="font-semibold text-[#E7CFFF]">{text}</span>
          <Cursor />
        </h1>
        <div className="lg: max-w-[800px]">
          <p className="mt-4 text-lg ">
            Junior Developer passionate about creating interactive and dynamic
            web applications. I am currently studying{" "}
            <span className="italic text-pink-200">Software Development</span>
          </p>
        </div>
      </div>
      <div className="lg:ml-8 flex flex-col justify-center items-center gap-3">
        <div>
          <img
            src={myImage}
            alt="Ignacio Bastianelli"
            className="min-w-40 min-h-40 w-40 h-40 rounded-full object-cover border-4 border-indigo-500 shadow-lg"
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
