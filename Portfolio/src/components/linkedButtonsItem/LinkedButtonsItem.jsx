const LinkedButtonsItem = ({ link, logo, name }) => {
  return (
    <div className="flex  flex-row gap-8 items-center justify-center py-2 px-4 rounded-full bg-[#1c1c1c] hover:bg-[#333] transition-colors duration-200 shadow-md  h-10 w-10">
      <a
        href={link}
        className="text-white hover:text-indigo-400 transition-colors duration-500 "
        target="_blank"
        title={name}
        rel="noopener noreferrer"
      >
        <div className="w-10 h-10 flex justify-center items-center ">
          {logo}
        </div>
      </a>
    </div>
  );
};
export default LinkedButtonsItem;
