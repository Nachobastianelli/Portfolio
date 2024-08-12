import React from "react";

const CardProyectItem = ({ urlImage, name, description, tecnologias = [] }) => {
  return (
    <div className="flex flex-col">
      <div className="flex cursor-pointer justify-center max-w-[70%] w-fit m-auto mt-10 items-center rounded-tr-md bg-[#222]">
        <div className="w-[58%]">
          <picture className="">
            <source
              srcSet={urlImage}
              className="rounded-md h-full"
              media="(min-width: 600px)"
            />
            <img
              src={urlImage}
              alt={name}
              className="rounded-tl-md w-fit h-full object-cover"
            />
          </picture>
        </div>
        <div className="flex flex-col w-[60%] gap-2 mx-2 ml-3">
          <div>
            <h1 className="text-3xl font-semibold text-[#E7CFFF]">{name}</h1>
          </div>
          <div>
            <p className="text-lg italic">{description}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-2 items-center bg-[#222] max-w-[70%] py-2 m-auto w-full rounded-b-md">
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
