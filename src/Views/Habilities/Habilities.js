import React from "react";

import HabilitiesSquare from "../../Components/Habiltiies/HabilitiesSquare";
function Habilities() {
  return (
    <>
      <div
        id="habilities"
        name="habilities"
        className="w-screen md:mt-24 h-screen lg:mb-42  flex justify-center items-center robotoCondensed"
      >
        <h1 className="text-white text-[80px] absolute -left-40 md:left-8 opacity-20 -rotate-90 tracking-wider">
          HABILITIES
        </h1>
        <HabilitiesSquare />
      </div>
    </>
  );
}

export default Habilities;
