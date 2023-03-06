import React from "react";
import { Icon } from "@iconify/react";
import Navbar from "../components/Navbar";
import Bubbles from "../components/Bubbles";

const Construction = () => {
  return (
    <div className="landingpage h-screen w-screen bg-color-10 ">
      <div className="h-screen grid grid-cols-9 grid-rows-5">
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
          <div className="h-full flex flex-col items-center">
            <img src="../../public/underConstruction.png" alt="" />
            <div className="text-color-10 text-8xl font-10">Coming Soon</div>
          </div>
        </div>

        {/* Navbar */}
        <div className="col-start-8 col-end-11">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Construction;
