import React, { useState } from "react";
import { tech } from "../../mocks/tech";
import SlackItem from "../slackItem/SlackItem";
import { IconSparkles } from "@tabler/icons-react";
import { IconStack2 } from "@tabler/icons-react";

const Stack = () => {
  const [techs, setTechs] = useState(tech);

  const techsMapped = techs.map((item) => (
    <SlackItem key={item.id} id={item.id} name={item.name} logo={item.logo} />
  ));
  return (
    <div className="flex flex-col border-gray-500 border bg-gradient-to-tr from-[#000] to-[#240655] w-fit max-w-[384px] justify-center rounded-lg mx-auto ">
      <div className="flex justify-center items-center gap-2 border-b-gray-500 py-3  border-b  ">
        <div className="text-yellow-300">
          <IconSparkles stroke={2} />
        </div>
        <p className="text-white italic text-2xl">Tech stack</p>
        <div className="text-yellow-300">
          <IconSparkles stroke={2} />
        </div>
      </div>
      <div className="flex  justify-center items-center text-center m-2 ">
        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid py-2 ">
          {techsMapped}
        </div>
      </div>
    </div>
  );
};

export default Stack;
