import React from "react";
import { Icon } from "@iconify/react";
import Navbar from "../components/Navbar";
import Bubbles from "../components/Bubbles";

const Construction = () => {
  return (
    <div className="bg-color-10">
      <div className="h-screen grid grid-cols-9 grid-rows-5">
        {/* Bubbles */}
       {/* <Bubbles/> */}
        {/* Meta Content */}
        <div className="mainContent bg-color-20/90 m-8 z-10 col-start-1 col-end-11 row-start-1 row-end-6 rounded-xl">
          <div className="h-full flex flex-col items-center justify-center">
            <img src="../../public/underConstruction.png" alt="" className="lg:w-[800px]" />
            <div className="text-color-10 text-5xl font-10 text-center">Coming Soon</div>
          </div>
        </div>

        {/* Navbar */}
        {/* <div className="col-start-8 col-end-11">
          <Navbar />
        </div> */}
      </div>
    </div>
  );
};

export default Construction;
