import React from "react";
import html from "../../Assets/Habilities/html.png";
import css from "../../Assets/Habilities/css.png";
import sass from "../../Assets/Habilities/sass.png";
import js from "../../Assets/Habilities/js.png";
import react from "../../Assets/Habilities/react.png";
import node from "../../Assets/Habilities/node.png";
import tailwind from "../../Assets/Habilities/tailwind.png";
import redux from "../../Assets/Habilities/redux.png";
import EachHabilitie from "./EachHabilitie";
function HabilitiesSquare() {
  return (
    <>
      <div className="w-[80%] md:w-[800px] md:h-[400px] flex flex-wrap items-center justify-center gap-16 md:ml-16  border-4 border-gray-600 rounded-2xl md:px-16 py-12 rubik ">
        <EachHabilitie photo={html} habilitie="HTML" />
        <EachHabilitie photo={css} habilitie="CSS" />
        <EachHabilitie photo={sass} habilitie="SASS" />
        <EachHabilitie photo={js} habilitie="Javascript" />
        <EachHabilitie photo={react} habilitie="React" />
        <EachHabilitie photo={tailwind} habilitie="Tailwind" />
        <EachHabilitie photo={node} habilitie="Node" />
        <EachHabilitie photo={redux} habilitie="Redux" />
      </div>
    </>
  );
}

export default HabilitiesSquare;
