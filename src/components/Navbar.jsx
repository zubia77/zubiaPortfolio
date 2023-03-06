import React from 'react'
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";

function Navbar() {
  return (
    <div className='grid grid-rows-5 mt-8 gap-16'>
      <NavLink
          to="/home"
          className="navbar bg-color-20 w-96 h-32 row-start-1 rounded-xl ml-12 z-10 text-color-10 flex justify-evenly items-center"
        >
          <div className="w-32">
            <img src="./public/Z.png" alt="" />
          </div>
          <div className="border-2 h-24 rounded-full"></div>
          <div className="w-36 flex justify-center items-center text-5xl font-10">
            Home
          </div>
        </NavLink>
        <NavLink
          to="/about"
          className="navbar bg-color-20 w-96 h-32 row-start-2 rounded-xl ml-12  z-10 text-color-10 flex justify-evenly items-center"
        >
          <div className="w-32">
            <img src="./public/meinAvatar1.png" alt="" className="" />
          </div>
          <div className="border-2 h-24 rounded-full"></div>
          <div className="w-42 flex justify-center items-center text-5xl font-10">
            About
          </div>
        </NavLink>
        <NavLink
          to="/skills"
          className="navbar bg-color-20 w-96 h-32 row-start-3 rounded-xl ml-12  z-10 text-color-10 flex justify-evenly items-center"
        >
          <div className="w-24 grid grid-cols-3 grid-rows-2 gap-2">
            <Icon icon="uiw:setting-o" className="text-7xl row-span-2" />
            <Icon icon="uiw:setting-o" className="text-5xl col-start-3" />
            <Icon icon="uiw:setting-o" className="text-4xl col-start-3 " />
          </div>
          <div className="border-2 h-24 rounded-full"></div>
          <div className="w-24 flex justify-center items-center text-5xl font-10">
            Skills
          </div>
        </NavLink>
        <NavLink
          to="/projects"
          className="navbar bg-color-20 w-96 h-32 row-start-4 rounded-xl ml-12  z-10 text-color-10 flex justify-evenly items-center"
        >
          <div className="w-36 flex justify-center">
            {/* <Icon icon="tabler:bulb" className="text-8xl row-span-2"/>
          <Icon icon="bi:brush" className="text-6xl col-start-3"/> */}
            <Icon icon="ph:code-bold" className="text-8xl" />
          </div>
          <div className="border-2 h-24 rounded-full"></div>
          <div className="w-36 flex items-center justify-center text-5xl font-10">
            Projects
          </div>
        </NavLink>
        <NavLink
          to="/contact"
          className="navbar bg-color-20 w-96 h-32 row-start-5 rounded-xl ml-12 z-10 text-color-10 flex justify-evenly items-center"
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
          <div className="w-36 flex justify-center items-center text-5xl font-10">
            Contact
          </div>
        </NavLink>
    </div>
  )
}

export default Navbar
