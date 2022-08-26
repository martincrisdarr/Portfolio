import React from "react";

function EachWork({ title, img, view, code }) {
  return (
    <div className="w-[350px] h-48 border-4 px-4 border-gray-600 rounded-md ">
      <h1 className="w-full text-center py-2">{title}</h1>
      <div>
        <img src={img} alt="" />
        <div>
          <span>
            <img src="" alt="" />
          </span>
          <a href={view}>View</a>
          <a href={code}>Code</a>
        </div>
      </div>
    </div>
  );
}

export default EachWork;
