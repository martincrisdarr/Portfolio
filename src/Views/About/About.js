import React from "react";
import photo from "../../Assets/About/photo.jpg";

function About() {
  return (
    <div className="h-full w-full flex flex-col lg:flex-row justify-center items-center gap-y-6 md:items-start md:mt-16  text-white md:px-12 robotoCondensed">
      <div
        className="w-full h-full md:h-full flex justify-center items-center"
        name="about"
      >
        <img
          src={photo}
          alt="me"
          className="h-3/4 w-full px-6 md:px-0 md:w-3/5 mt-16 ml-6 rounded-sm "
        />
      </div>
      <div className="w-full h-full relative flex flex-col items-start justify-center md:mt-8 px-12  ">
        <h1 className="text-yellow-500 text-[80px] tracking-wider ">
          ABOUT ME
        </h1>
        <p className="md:mt-8 h-full tracking-wide text-[28px] leading-relaxed">
          Hi! My name is Martin and i'm from Argentina. <br /> I started
          studying in january of 2022 in Coderhouse. I made Web Development and
          Javascript, but then i continue learning React by my own. Actually im
          learning React Native for mobile development{" "}
        </p>
      </div>
    </div>
  );
}

export default About;
