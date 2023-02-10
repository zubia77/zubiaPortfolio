import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";

const Landingpage = () => {
  return (
    <div className="landingpage h-screen w-screen bg-color-10">
      <div className="h-screen grid grid-cols-10 grid-rows-5">
        {/* Bubbles */}
        <div className="bubble bub1 col-start-2 row-start-1 w-64 h-64 rounded-full "></div>
        <div className="bubble bub2 rounded-full m-1 w-24 h-24 col-start-1 row-start-2"></div>
        <div className="bubble bub3 rounded-full w-36 h-36 col-start-2 row-start-3"></div>
        <div className="bubble bub4 rounded-full w-28 h-28 col-start-3 row-start-5"></div>
        <div className="bubble bub5 rounded-full m-5 w-48 h-48 col-start-1 row-start-3 "></div>
        <div className="bubble bub6 rounded-full w-36 h-36 col-start-3 row-start-3"></div>
        <div className="bubble bub7 rounded-full w-24 h-24 col-start-5 row-start-5"></div>
        <div className="bubble bub8 rounded-full w-28 h-28 col-start-9 row-start-5"></div>
        <div className="bubble bub9 rounded-full w-32 h-32 col-start-8 row-start-4"></div>
        <div className="bubble bub10 rounded-full w-40 h-40 col-start-8 row-start-3"></div>
        <div className="bubble bub11 rounded-full w-60 h-60 col-start-4 row-start-2"></div>
        <div className="bubble bub12 rounded-full w-24 h-24 col-start-6 row-start-2"></div>
        <div className="bubble bub13 rounded-full w-36 h-36 col-start-6 row-start-3"></div>
        <div className="bubble bub14 rounded-full w-40 h-40 col-start-6 row-start-5"></div>
        <div className="bubble bub15 rounded-full w-36 h-36 col-start-9 row-start-2"></div>
        <div className="bubble bub16 rounded-full w-36 h-36 col-start-7 row-start-1"></div>
        <div className="bubble bub17 rounded-full w-24 h-24 col-start-10 row-start-2"></div>

        {/* Meta Content */}
        <div className="mainContent bg-color-20/90 m-8 z-10 col-start-1 col-end-8 row-start-1 row-end-7 rounded-xl">
          <div className="h-full flex flex-col">
            {" "}
            <div className="flex justify-center">
              <img className="w-80 h-80" src="./public/Z.png" alt="" />
            </div>
            <div className="h-3/6 flex flex-col justify-between items-center text-color-10">
              <div className="greeting text-4xl font-100">Hi! I'm</div>
              <div className="name font-10 text-9xl">Zubi</div>
              <div className="profession text-3xl font-100">
                Frontend Developer
              </div>
            </div>
            <div className="">
              {" "}
              <div className="text-color-10 h-48 pt-32 flex justify-center text-center">
                <div className="mx-10">
                  <h2 className="text-2xl">10k+</h2>
                  <p className="text-sm font-20">lines of Code</p>
                </div>
                <div className="mx-10">
                  <h2 className="text-2xl">200+</h2>
                  <p className="text-sm font-20">nightshifts</p>
                </div> <div className="mx-10">
                  <h2 className="text-2xl">1 Mio+</h2>
                  <p className="text-sm font-20 w-20">minutes coding experience</p>
                </div>
                <div className="mx-10">
                  <h2 className="text-2xl">10+</h2>
                  <p className="text-sm font-20">project ideas</p>
                </div>
               
              </div>
            </div>
            <div className="socialMediaIcons h-3/5 m-2  flex justify-center items-end gap-4 text-color-20">
              <div className="w-8 h-8 rounded-full bg-color-10 flex justify-center items-center">
                <a
                  href="https://github.com/zubia77"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <Icon
                    className="text-2xl"
                    icon="icon-park-outline:github-one"
                  />
                </a>
              </div>
              <div className="w-8 h-8 rounded-full bg-color-10 flex justify-center items-center">
                <a
                  href="https://www.linkedin.com/in/zubia-rashid-05ba3621b/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon className="text-2xl" icon="uil:linkedin-alt" />
                </a>
              </div>

              <div className="w-8 h-8 rounded-full bg-color-10 flex justify-center items-center">
                <a
                  href="https://www.xing.com/profile/Zubia_Rashid"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon className="text-3xl" icon="ri:xing-fill" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Navbar */}
        <NavLink
          to="/home"
          className="navbar bg-color-20 h-32 col-start-8 col-end-11 row-start-1 rounded-xl mt-8 mr-12 z-10 text-color-10 flex justify-evenly items-center"
        >
          <div className="w-32">
            <img src="./public/Z.png" alt="" />
          </div>
          <div className="border-2 h-24 rounded-full"></div>
          <div className="w-36 flex justify-center items-center text-6xl font-10">
            Home
          </div>
        </NavLink>
        <NavLink
          to="/about"
          className="navbar bg-color-20 h-32 col-start-8 col-end-11 row-start-2 rounded-xl mt-8 mr-12  z-10 text-color-10 flex justify-evenly items-center"
        >
          <div className="w-32">
            <img src="./public/meinAvatar1.png" alt="" className="" />
          </div>
          <div className="border-2 h-24 rounded-full"></div>
          <div className="w-42 flex justify-center items-center text-6xl font-10">
            About
          </div>
        </NavLink>
        <NavLink
          to="/skills"
          className="navbar bg-color-20 h-32 col-start-8 col-end-11 row-start-3 rounded-xl mt-8 mr-12  z-10 text-color-10 flex justify-evenly items-center"
        >
          <div className="w-24 grid grid-cols-3 grid-rows-2 gap-2">
            <Icon icon="uiw:setting-o" className="text-7xl row-span-2" />
            <Icon icon="uiw:setting-o" className="text-5xl col-start-3" />
            <Icon icon="uiw:setting-o" className="text-4xl col-start-3 " />
          </div>
          <div className="border-2 h-24 rounded-full"></div>
          <div className="w-24 flex justify-center items-center text-6xl font-10">
            Skills
          </div>
        </NavLink>
        <NavLink
          to="/projects"
          className="navbar bg-color-20 h-32 col-start-8 col-end-11 row-start-4 rounded-xl mt-8 mr-12  z-10 text-color-10 flex justify-evenly items-center"
        >
          <div className="w-36 flex justify-center">
            {/* <Icon icon="tabler:bulb" className="text-8xl row-span-2"/>
          <Icon icon="bi:brush" className="text-6xl col-start-3"/> */}
            <Icon icon="ph:code-bold" className="text-8xl" />
          </div>
          <div className="border-2 h-24 rounded-full"></div>
          <div className="w-36 flex items-center justify-center text-6xl font-10">
            Projects
          </div>
        </NavLink>
        <NavLink
          to="/contact"
          className="navbar bg-color-20 h-32 col-start-8 col-end-11 row-start-5 rounded-xl mt-8 mr-12 z-10 text-color-10 flex justify-evenly items-center"
        >
          <div className="w-36 flex justify-center">
            <Icon
              icon="fluent-emoji-high-contrast:call-me-hand"
              className="text-8xl"
            />
            {/* <Icon icon="fluent-emoji-high-contrast:writing-hand" className="text-6xl col-start-1"/>
          <Icon icon="fluent-emoji-high-contrast:hand-with-index-finger-and-thumb-crossed" className="text-6xl col-start-3"/> */}
          </div>
          <div className="border-2 h-24 rounded-full"></div>
          <div className="w-36 flex justify-center items-center text-6xl font-10">
            Contact
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Landingpage;
