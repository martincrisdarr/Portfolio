import React from "react";
import Title from "../../Components/Home/Title";
function Home() {
  return (
    <>
      <div className="w-full my-auto h-screen flex items-center justify-center z-30 ">
        <div
          className="w-full flex flex-col justify-start items-center sm:items-start px-2 md:w-1/2 h-screen"
          id="home"
        >
          <Title />
        </div>
      </div>
    </>
  );
}

export default Home;
