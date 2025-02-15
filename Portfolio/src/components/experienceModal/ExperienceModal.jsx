const ExperienceModal = ({ openClose, experience }) => {
  console.log(experience); // Esto te ayudará a ver los datos que llegan al modal

  const data = {
    date: experience?.date,
    title: experience?.title,
    description: experience?.description,
    shortDescription: experience?.shortDescription,
    image: experience?.image,
  };

  return (
    <div
      id="default-modal"
      tabIndex="-1"
      aria-hidden="true"
      className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50 modal-background"
    >
      <div className="relative p-4 w-full max-w-2xl bg-white rounded-lg shadow-sm dark:bg-gray-700 modal-content">
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-600">
          <div className="flex items-center gap-4">
            <div className="relative size-12">
              <div className="absolute inset-0 bg-white  rounded-2xl"></div>
              <img
                src={data.image}
                alt="Logo de empresa netizar"
                className="size-12 relative rounded-xl"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white ">
              {data.title || "Title Not Available"}
            </h3>
          </div>

          <button
            onClick={openClose}
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <div className="p-4 space-y-4">
          <p className="text-lg leading-relaxed text-gray-300 dark:text-gray-300">
            {data.date || "Date not available"}
          </p>
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            {data.description || "Description not available"}
          </p>
        </div>
        <div className="flex items-center p-4 border-t border-gray-200 dark:border-gray-600">
          <button
            onClick={openClose}
            type="button"
            className="py-2.5 px-5 text-sm font-medium text-gray-900 hover:text-red-400 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600  dark:hover:bg-gray-700"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceModal;
