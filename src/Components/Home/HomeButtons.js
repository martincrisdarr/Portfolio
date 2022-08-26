import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import resume from "../../Assets/resume.pdf";

function HomeButtons() {
  return (
    <>
      <div className="mt-16 flex items-center gap-8">
        <a
          href={resume}
          download="MartinCrisDarr Resume"
          className="bg-yellow-400 w-64 p-4 text-center font-semibold  rubik tracking-wider hover:bg-yellow-300 cursor-pointer text-xl"
        >
          Download CV
        </a>
        <a href="https://github.com/martincrisdarr">
          <BsGithub size="2rem" className="text-white" />
        </a>
        <a href="https://www.linkedin.com/in/martin-cristina-darroux-727917232/">
          <BsLinkedin size="2rem" className="text-white" />
        </a>
      </div>
    </>
  );
}

export default HomeButtons;
