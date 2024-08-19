import React, { useState } from "react";
import { tech } from "../../mocks/tech";
import SlackItem from "../slackItem/SlackItem";
import { IconSparkles } from "@tabler/icons-react";
import { IconStack2 } from "@tabler/icons-react";
import Atropos from "atropos/react";

const Stack = () => {
  const [techs, setTechs] = useState(tech);

  const techsMapped = techs.map((item) => (
    <SlackItem key={item.id} id={item.id} name={item.name} logo={item.logo} />
  ));

  return (
    <Atropos
      className="my-atropos w-fit max-w-[384px] mx-auto"
      activeOffset={40}
      shadow={true}
      shadowOffset={50}
      shadowScale={1}
      highlight={true}
      rotateXMax={20}
      rotateYMax={20}
    >
      <div className="flex flex-col border-gray-500 border bg-gradient-to-tr from-[#000] to-[#00205c] justify-center rounded-lg hover:scale-105 transition-all ease-in-out duration-300">
        <div
          className="flex justify-center items-center gap-2 border-b-gray-500 py-3 border-b"
          data-atropos-offset="10"
        >
          <div className="text-yellow-300 shadow-xl">
            {" "}
            <IconSparkles stroke={2} />
          </div>
          <p className="text-white italic text-2xl">Tech stack</p>
          <div className="text-yellow-300 shadow-xl">
            {" "}
            <IconSparkles stroke={2} />
          </div>
        </div>

        <div
          className="flex justify-center items-center text-center m-2"
          data-atropos-offset="10"
        >
          <div
            data-atropos-offset="5"
            className=" shadow-lg grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid py-2"
          >
            {techsMapped}
          </div>
        </div>
      </div>
    </Atropos>
  );
};

export default Stack;
