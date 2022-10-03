import React from "react";

import { BsGithub } from "react-icons/bs";
import { DiWebplatform } from "react-icons/di";

function Card({ name, github, web, image }) {
  return (
    <div className=" w-[300px] md:w-[350px] h-48 border hover:scale-105 transition-all duration-200 rounded-md overflow-hidden shadow-xl">
      <div className="shadow-lg group container relative  rounded-md max-w-sm flex justify-center items-center  mx-auto content-div">
        <img src={image} alt="project image" className="w-full h-48 " />

        <div className="absolute mx-auto text-center opacity-0 my-auto hover:bg-yellow-500/60 w-full h-full fd-sh group-hover:opacity-100 pt-4">
          <span className="text-4xl font-bold text-black tracking-wider leading-relaxed font-sans">
            {name}
          </span>
          <div className="w-full flex items-center justify-center mt-6 gap-8 text-black">
            <a href={github}>
              <BsGithub className="cursor-pointer" size='3rem'/>
            </a>
            <a href={web}>
              <DiWebplatform className="cursor-pointer" size='3rem' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
