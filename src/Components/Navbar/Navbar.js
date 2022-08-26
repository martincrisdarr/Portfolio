import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { animateScroll as scroll, Link } from "react-scroll";
import resume from "../../Assets/resume.pdf";
import ToTop from "./ToTop";
import { useEffect } from "react";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };
  const changeNavbar = () => {
    if (window.scrollY >= 600) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeNavbar);
  useEffect(() => {
    scroll.scrollToTop();
  }, []);
  return (
    <>
      {/* ---------------------------------- TOP NAVBAR ----------------------------------  */}
      <div className="py-6 px-8  fixed flex justify-between top-0 h-20 right-0 w-full z-50 bg-[#000000] md:bg-[#000000]/80 ">
        <div className="w-full flex justify-end  ">
          <div className={navbar ? "flex gap-6 items-center" : "hidden"}>
            <a href="https://github.com/martincrisdarr">
              <BsGithub size="1.8rem" className="text-white" />
            </a>
            <a href="https://www.linkedin.com/in/martin-cristina-darroux-727917232/">
              <BsLinkedin size="1.8rem" className="text-white" />
            </a>
            <a
              href={resume}
              download="MartinCrisDarr Resume"
              className="right-8 text-sm p-2 border-2 border-yellow-400 -skew-x-6 hover:bg-yellow-400 hover:text-white ease-in-out duration-300 text-yellow-400 "
            >
              Download CV
            </a>
          </div>
        </div>

        <motion.div
          animate={{ x: menu ? 100 : 0 }}
          transition={{ ease: "easeOut", duration: 0.7 }}
          className="absolute z-50"
        >
          <FiMenu
            onClick={handleMenu}
            className={
              menu
                ? "text-white  text-3xl transition-all duration-700 cursor-pointer absolute -left-4 z-50"
                : "text-white text-3xl rotate-180 transition-all duration-700 cursor-pointer -left-4 absolute  z-50"
            }
          />
        </motion.div>

        {/*-----------------------------------TO TOP BUTTON---------------------------------*/}
        {navbar ? (
          <ToTop toTopButton={() => scroll.scrollToTop()} duration={1000} />
        ) : null}
        {/* ---------------------------------- UL NAVBAR ----------------------------------  */}
        <motion.ul
          animate={{ x: menu ? 250 : 0 }}
          transition={{ ease: "easeOut", duration: 0.9 }}
          className="h-full w-[170px] flex flex-col justify-center items-end pr-6 fixed -left-64 z-40 top-0  bg-[#0B0B0B] shadow-xl  robotoCondensed text-3xl gap-6 text-white "
        >
          <Link to="home" smooth="true" duration={1000}>
            <motion.li
              whileHover={{ scale: 1.1 }}
              onClick={handleMenu}
              className="cursor-pointer"
            >
              Home
            </motion.li>
          </Link>
          <Link to="habilities" smooth="true" duration={1000}>
            <motion.li
              whileHover={{ scale: 1.1 }}
              onClick={handleMenu}
              className="cursor-pointer"
            >
              Habilities
            </motion.li>
          </Link>
          <Link to="about" smooth="true" duration={1000} offset={-100}>
            <motion.li
              whileHover={{ scale: 1.1 }}
              onClick={handleMenu}
              className="cursor-pointer"
            >
              About
            </motion.li>
          </Link>
          <Link to="work" smooth="true" duration={1000} offset={-80}>
            <motion.li
              whileHover={{ scale: 1.1 }}
              onClick={handleMenu}
              className="cursor-pointer"
            >
              Work
            </motion.li>
          </Link>
          <Link to="contact" smooth="true" offset={-10} duration={1000}>
            <motion.li
              whileHover={{ scale: 1.1 }}
              onClick={handleMenu}
              className="cursor-pointer"
            >
              Contact
            </motion.li>
          </Link>
        </motion.ul>
      </div>
    </>
  );
}

export default Navbar;
