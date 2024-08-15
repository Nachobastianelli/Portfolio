import React from "react";

const SlackItem = ({ name, logo }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-2 w-20 h-20 my-1 ">
        <div className="flex justify-center items-center font-normal text-center">
          {name}
        </div>
        <div className="h-10 w-10 flex items-center justify-center place-items-center ">
          <img src={logo} alt={name} />
        </div>
      </div>
    </>
  );
};

export default SlackItem;
