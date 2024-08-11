import LinkedButtons from "../linkedButtons/LinkedButtons";

const Footer = ({ buttons }) => {
  return (
    <div className="bg-black bg-opacity-15 mt-auto p-4 min-w-[100vw]">
      <p className="flex justify-center text-white items-center text-center mb-3 ">
        Made with ❤️ by Ignacio Bastianelli
        <br />
        All rights reserved.
      </p>

      <div className="flex justify-center mb-2">
        <LinkedButtons buttons={buttons} />
      </div>
    </div>
  );
};

export default Footer;
