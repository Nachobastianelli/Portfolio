import { IconAddressBook } from "@tabler/icons-react";

const CvButton = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `assets/Ignacio-Bastianelli-CV.pdf`;
    link.download = "Mi-Curriculum.pdf";
    link.click();
  };

  return (
    <div className="flex justify-center my-32 ">
      <button
        className="relative  text-lg text-black "
        onClick={handleDownload}
      >
        <a href="https://google.com" className="h-full w-full"></a>
        <div className="absolute inset-x-0 h-full -bottom-2 bg-gray-300 border border-gray-500 rounded-lg"></div>

        <div className="relative flex gap-1 items-center text-blue-500  bg-gray-100 border border-gray-500 rounded-lg py-2 px-4 transition transform hover:translate-y-[1px]  active:translate-y-[7px]">
          <div>
            <IconAddressBook stroke={1.5} />
          </div>
          <div>CV</div>
        </div>
      </button>
    </div>
  );
};
export default CvButton;
