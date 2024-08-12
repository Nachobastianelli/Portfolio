import { ArgIcon, EeuuIcon } from "../../icons/icons";
import { useEffect, useState } from "react";
const Header = () => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  const handleScroll = () => {
    setIsHeaderFixed(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [isEnglish, setIsEnglish] = useState(true);

  const styleAnchor =
    "p-4 border-b-2 border-indigo-500 border-opacity-0 hover:border-opacity-100 hover:scale-115 transition-all hover:text-indigo-300 duration-200 cursor-pointer ";

  const clickHandler = () => {
    setIsEnglish(!isEnglish);
  };
  return (
    <header
      className={`fixed top-0 w-full shadow-md bg-opacity-10 blur-0 ${
        isHeaderFixed ? "backdrop-blur-md" : ""
      }`}
    >
      <div className="flex items-center max-w-[60vw] w-full m-auto justify-between px-4 text-white">
        <div className="hover:scale-110 transition-all ease-in-out duration-300">
          <a href="#home">
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
        <div className="flex gap-6">
          <a className={styleAnchor} href="#about-me">
            About me
          </a>
          <a className={styleAnchor} href="#proyects">
            My proyects
          </a>
          <a className={styleAnchor} href="#contact">
            Contact me
          </a>
        </div>
        <div className="flex items-center ">
          <div className="relative inline-block w-10 h-6 select-none">
            <input
              onChange={clickHandler}
              type="checkbox"
              name="toggle"
              id="toggle"
              className="absolute opacity-0 w-full h-full cursor-pointer"
              checked={!isEnglish}
            />
            <div className="block bg-gray-300 w-full h-full rounded-full"></div>
            <div
              className={`absolute left-0 top-0 h-full w-6 rounded-full bg-white border-gray-300 flex items-center justify-center transition-transform duration-300 ease-in-out transform ${
                isEnglish ? "translate-x-0" : "translate-x-[80%]"
              }`}
            >
              {isEnglish ? <EeuuIcon /> : <ArgIcon />}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
