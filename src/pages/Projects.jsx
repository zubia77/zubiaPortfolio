import React from "react";
import { Icon } from "@iconify/react";
import Navbar from "../components/Navbar";
import Bubbles from "../components/Bubbles";

const Projects = () => {
  return (
    <div className="landingpage h-screen w-screen bg-color-10">
      <div className="h-screen grid grid-cols-9 grid-rows-5">
        {/* Bubbles */}
        <Bubbles/>

        {/* Meta Content */}
        <div className="mainContent bg-color-20 m-8 z-10 col-start-1 col-end-8 row-start-1 row-end-7 rounded-xl">
          <div className="h-full grid grid-cols-5 grid-rows-5 ">
            <div className="one bg-color-10 w-40 h-40 col-start-2 row-start-1 m-10 bg-luftmasche bg-no-repeat bg-center bg-cover overflow-hidden object-cover">
              <a
                href="https://zubis-luftmasche.netlify.app"
                target="_blanked"
              ></a>
            </div>
            <div className="two bg-color-10 w-40 h-40 col-start-1 row-start-2 m-10 bg-bmi bg-no-repeat bg-center bg-cover overflow-hidden object-cover">
              <a
                href="https://zubi-bmi-rechner.netlify.app/"
                target="_blanked"
              ></a>
            </div>
            <div className="three bg-color-10 w-40 h-40 col-start-3 row-start-4 m-10 bg-mathenerds bg-no-repeat bg-center bg-cover overflow-hidden object-cover">
              <a
                href="https://mathenerds.netlify.app/index.html"
                target="_blanked"
              ></a>
            </div>
            <div className="four bg-color-10 w-80 h-80 col-start-2 row-start-2 m-10 bg-deutschify bg-no-repeat bg-center bg-cover overflow-hidden object-cover">
              <a href="https://deutschify.zubia.de" target="_blanked"></a>
            </div>
            <div className="five bg-color-10 w-40 h-40 col-start-3 row-start-1 m-10 bg-indianBride bg-no-repeat bg-center bg-cover overflow-hidden object-cover">
                <a href="https://the-indian-bride.netlify.app/"
                    target="_blanked"></a>
            </div>
            <div className="six bg-color-10 w-40 h-40 col-start-1 row-start-5 ml-20 bg-sticky bg-no-repeat bg-center bg-cover overflow-hidden object-cover">
                <a href="https://zubis-memo-board.netlify.app/"
                    target="_blanked"></a>
            </div>
            <div className="seven bg-color-10 w-80 h-80 col-start-4 row-start-4 m-15 bg- bg-no-repeat bg-center bg-cover overflow-hidden object-cover flex justify-center items-center text-6xl">
maminizer
            </div>
            <div className="eight bg-color-10 w-40 h-40 col-start-5 row-start-3 m-10 bg-derDieDas bg-no-repeat bg-center bg-cover overflow-hidden object-cover">
                <a href="https://der-die-das.zubia.de/"
                    target="_blanked"></a>
            </div>
            <div className="nine bg-color-10 w-80 h-80 col-start-4 row-start-1 m-10 flex justify-center items-center">
            <Icon icon="ph:code-bold" className="text-6xl" />
            </div>
            <div className="ten bg-color-10 w-40 h-40 col-start-2 row-start-4 m-10 flex justify-center items-center">
            <Icon icon="ph:code-bold" className="text-6xl" />
            </div>
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

export default Projects;
