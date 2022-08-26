import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
function ToTop({ toTopButton }) {
  return (
    <div className="w-12 h-12 bg-white absolute hidden md:flex items-center justify-center top-24 right-16 rounded-[50%] animate-bounce">
      <AiOutlineArrowUp
        onClick={toTopButton}
        size="2rem"
        className="color-black font-bold cursor-pointer "
      />
    </div>
  );
}

export default ToTop;
