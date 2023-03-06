import React from "react";
import { Icon } from "@iconify/react";
import Navbar from "../components/Navbar";
import Bubbles from "../components/Bubbles";

const About = () => {
  return (
    <div className="landingpage h-screen w-screen bg-color-10">
      <div className="h-screen grid grid-cols-9 grid-rows-5">
        {/* Bubbles */}
        <Bubbles/>
        
        {/* Meta Content */}
        <div className="metaContent bg-color-10 text-color-20 z-10 col-start-1 col-end-8 row-start-1 row-end-7 m-8 rounded-xl">
          <div className="h-full bg-about bg-no-repeat bg-contain bg-right">
            <p className="w-2/6 h-full flex items-center text-3xl p-10 font-10">
              Hi, My name is Zubia Rashid, I am a motivated Frontend Developer
              with skills in UI/UX Design, MERNstack and as a Product Owner. I
              am hands on and willing to get the job done. I started a course in
              Web Development last year and became very passionate in this
              field. I am quite the creative individual. Problems don't exist
              for me only challenges. A friend recently said the following about
              me "you don't sleep when you're tired, you sleep when the work is
              done!" This about sums up my dedication when I am focussed on a
              project.
            </p>
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

export default About;
