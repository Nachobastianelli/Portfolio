import myImage from "../../assets/myImage.jpg";

const CardProfile = () => {
  return (
    <>
      <h1 className="flex  items-center pt-[112px] mt-[-2px] pb-20  justify-center text-3xl font-semibold text-[#E7CFFF]  max-w-[82%] mx-auto">
        Contact Me 😊
      </h1>
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full ml-1 mr-1 flex flex-col justify-center items-center sm:w-96 border-gray-700 text-center">
          <div className="w-full rounded-2xl p-8 text-white bg-gradient-to-br from-[#5f99f9] to-[#8868dc] pb-44 relative">
            <h1 className="text-xl mb-4">Hi everyone!</h1>
            <p>Feels free to send me a messege 📥</p>
          </div>
          <div className="text-center bg-white shadow-lg w-[80%] rounded-xl -mt-32 z-10 p-9 flex items-center flex-col">
            <h2 className="font-semibold  text-black text-xl">
              Start chatting
            </h2>
            <img
              src={myImage}
              className="w-20 h-20 border-purple-500 border object-cover rounded-full mt-7"
            />
            <p className="mt-3 font-semibold text-lg text-black">Ignacio</p>
            <span className="text-slate-500 rounded-xl border-slate-100 text-sm mt-2 pl-3 pr-3 border-[1px]">
              <span className="bg-green-500 w-2 h-2 rounded-full mt-0.5 inline-block"></span>{" "}
              Active
            </span>
            <button className="w-full gradient rounded-md text-black p-4 mt-4 hover:shadow-xl hover:bg-gray-200 hover:italic transition-all duration-200 ease-in">
              Send a message
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardProfile;