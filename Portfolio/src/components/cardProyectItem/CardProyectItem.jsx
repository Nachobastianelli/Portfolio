import React from "react";

const CardProyectItem = ({ urlImage, name, description, tecnologias = [] }) => {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col md:flex-row cursor-pointer justify-center  w-[70%] max-w-[600px] m-auto mt-10 items-center rounded-tr-md  bg-[#222]">
        <div className=" min-w-fit md:min-w-[58%] w-[58%]">
          <picture className="">
            <source
              srcSet={urlImage}
              className="rounded-md h-full"
              media="(min-width: 600px)"
            />
            <img
              src={urlImage}
              alt={name}
              className="rounded-tl-md rounded-tr-md md:rounded-tr-none w-fit h-full object-cover"
            />
          </picture>
        </div>
        <div className="flex flex-col w-[60%] gap-2 mx-2 ml-3">
          <div>
            <h1 className="text-3xl font-semibold text-center md:text-left mt-2 md:m-0 text-[#E7CFFF]">
              {name}
            </h1>
          </div>
          <div>
            <p className="text-lg line-clamp-3 md:line-clamp-4 text-center md:text-left mb-2 md:mb-0 active:line-clamp-none lg:line-clamp-none italic">
              {description}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-2 items-center bg-[#222] w-[70%] max-w-[600px] py-2 m-auto rounded-b-md">
        {tecnologias.map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-2 py-1 px-3 border border-white rounded-full"
          >
            <img src={tech.logo} alt={tech.name} className="w-5 h-5" />
            <div>{tech.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardProyectItem;
