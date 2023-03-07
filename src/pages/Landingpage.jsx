import React from "react";
import { Icon } from "@iconify/react";
import Typewriter from "typewriter-effect";
import Navbar from "../components/Navbar";
import Bubbles from "../components/Bubbles";

const Landingpage = () => {
  return (
    <div className="landingpage h-screen w-screen bg-color-10 ">
      <div className="h-screen grid grid-cols-9 grid-rows-5">
        {/* Bubbles */}
       <Bubbles/>

        {/* Meta Content */}
        <div className="mainContent bg-color-20/90 m-8 z-10 col-start-1 col-end-8 row-start-1 row-end-6 rounded-xl">
          <div className="h-full flex flex-col items-center">
            {" "}
            <div className="flex justify-center">
              <img className="w-80 h-80" src="./public/Z.png" alt="" />
            </div>
            <div className="h-3/6 flex flex-col justify-between items-center text-color-10">
              <div className="greeting text-4xl font-10">Hi! I'm</div>
              <div className="name font-10 text-9xl">Zubi</div>
              <div className=" text-3xl font-100">
                <Typewriter
                  className="profession text-9xl font-10"
                  options={{
                    strings: [
                      "Frontend Developer",
                      "Mernstack Developer",
                      "UI/UX Designer",
                      "Product Owner",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>
            <div className="flex bg-color-10 w-5/12 rounded-xl justify-center items-center font-30 text-3xl font-bold m-4">
              <h1 className="p-4 text-center">
                I am currently improving my Website
              </h1>
              <img src="../public/construction.png" alt="" className="w-40" />
            </div>
            <div className="">
              {" "}
              <div className="text-color-10 h-40 pt-12 flex justify-center text-center">
                <div className="mx-10">
                  <h2 className="text-2xl">10k+</h2>
                  <p className="text-sm font-10">lines of Code</p>
                </div>
                <div className="mx-10">
                  <h2 className="text-2xl">200+</h2>
                  <p className="text-sm font-10">nightshifts</p>
                </div>{" "}
                <div className="mx-10">
                  <h2 className="text-2xl">1 Mio+</h2>
                  <p className="text-sm font-10 w-20">
                    minutes coding experience
                  </p>
                </div>
                <div className="mx-10">
                  <h2 className="text-2xl">10+</h2>
                  <p className="text-sm font-10">project ideas</p>
                </div>
              </div>
            </div>
            <div className="socialMediaIcons pb-4  flex justify-center items-end gap-4 text-color-20">
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
        <div className="col-start-8 col-end-11">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
