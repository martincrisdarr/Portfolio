import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import js from "../../Assets/Me/js.png";
import HomeButtons from "./HomeButtons";
function Title() {
  const [jsImg, setJsImg] = useState(false);
  const [text, setText] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setJsImg(true);
    }, 1400);
    setTimeout(() => {
      setText(true);
    }, 2100);
  }, []);
  return (
    <>
      <div className="mt-16 flex items-end text-white pt-32 w-full px-4 z-20 robotoCondensed">
        {jsImg ? (
          <img src={js} alt="js photo" className="w-16 h-16 absolute " />
        ) : null}
        <span className="text-white text-[28px] sm:text-5xl ml-20 tracking-wider">
          <Typewriter
            words={["martinCristinaDarroux.js"]}
            loop={1}
            cursor
            cursorStyle="l"
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </div>
      {text ? (
        <div className="w-full px-4">
          <h2 className="text-white text-3xl mt-8">FrontEnd Developer</h2>
          <HomeButtons />
        </div>
      ) : null}
    </>
  );
}

export default Title;
