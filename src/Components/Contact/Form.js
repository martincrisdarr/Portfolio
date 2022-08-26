import React from "react";


function Form() {
  
  
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center robotoCondensed">
      <h1 className="text-white text-[80px]  -left- md:right-32 opacity-20  tracking-wider">
        CONTACT
      </h1>
      <form
       method="POST"
       action="https://getform.io/f/8152f953-66d0-428b-892e-111c60a19972"
        className="w-[500px] h-[70%] flex flex-col justify-between items-center gap-y-4  px-16  rounded-md shadow-xl "
      >
        <label
          htmlFor="name"
          className="flex flex-col gap-2 font-semibold tracking-wider text-xl w-full"
        >
          Enter your name:
          <input
            name="name"
            type="text"
            className="w-full py-1 px-4 outline-none  text-black "
          />
        </label>
        <label
          htmlFor="email"
          className="flex flex-col gap-2 font-semibold tracking-wider text-xl w-full"
        >
          Enter your email:
          <input
            name="email"
            type="email"
            className="w-full py-1 px-4 outline-none  text-black "
          />
        </label>
        <label
          htmlFor="message"
          className="flex flex-col gap-2 tracking-wider font-semibold text-xl w-full"
        >
          Enter your message:
          <textarea
            name="message"
            cols="30"
            rows="5"
            className="w-full p-2  outline-none text-black"
          ></textarea>
        </label>
        <button
          type="submit"
          className="border-2 py-1 px-2 hover:bg-yellow-500 hover:border-yellow-500 font-semibold w-full"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Form;
