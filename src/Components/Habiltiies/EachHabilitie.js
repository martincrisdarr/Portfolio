import React from "react";

function EachHabilitie({ photo, habilitie }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-2 text-white w-20 md:w-28 h-20 md:h-28">
        <img
          src={photo}
          alt="html"
          className="w-16 md:w-20 h-16 md:h-20 hover:scale-110 duration-300"
        />
        <p className="white">{habilitie}</p>
      </div>
    </>
  );
}

export default EachHabilitie;
