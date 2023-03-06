import React, { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import Navbar from "../components/Navbar";
import Bubbles from "../components/Bubbles";


const webdevIcons = [
  {
    name: "HTML",
    image: "../../public/html.png",
  },
  {
    name: "CSS",
    image: "../../public/css.png",
  },
  {
    name: "Javascript",
    image: "../../public/js.png",
  },
  {
    name: "Github",
    image: "../../public/github.png",
  },
  {
    name: "Sass",
    image: "../../public/sass.png",
  },
  {
    name: "Tailwind",
    image: "../../public/tailwind.png",
  },
  {
    name: "React JS",
    image: "../../public/react.png",
  },
  {
    name: "Mongo DB",
    image: "../../public/mongo.png",
  },
  {
    name: "Node JS",
    image: "../../public/node.png",
  },
  {
    name: "Express JS",
    image: "../../public/express.png",
  },
  {
    name: "Mernstack",
    image: "../../public/mernstack.png",
  },
];
const delay = 1500;

const Skills = () => {
  // const [index, setIndex] = useState(0);
  // const timeoutRef = useRef(null);

  // function resetTimeout() {
  //   if (timeoutRef.current) {
  //     clearTimeout(timeoutRef.current);
  //   }
  // }
  // useEffect(() => {
  //   resetTimeout();
  //   timeoutRef.current = setTimeout(
  //     () =>
  //       setIndex((prevIndex) =>
  //         prevIndex === webdevIcons.length - 1 ? 0 : prevIndex + 1
  //       ),
  //     delay
  //   );

  //   return () => {
  //     resetTimeout();
  //   };
  // }, [index]);

  return (
    <div className="landingpage h-screen w-screen bg-color-10">
      <div className="h-screen grid grid-cols-9 grid-rows-5">
        {/* Bubbles */}
        <Bubbles/>

        {/* Meta Content */}
        <div className="mainContent bg-color-20 z-10 col-start-1 col-end-8 row-start-1 row-end-7 m-8 rounded-xl flex flex-col items-center">
          <div className="softskills bg-color-10 m-4 shadow-inner w-11/12 font-10 text-3xl rounded-xl">
            <div className="flex items-center text-color-20">
              <Icon icon="mdi:heart-cog-outline" className="2 text-3xl" />
              Softskills
            </div>
            <div className="softskills flex justify-between">
              <div className="w-36 h-36 flex flex-col justify-center items-center">
                {" "}
                <div className="w-28 h-28 rounded-full bg-color-20 flex justify-center items-center shadow-outer">
                  <div className="iconBtn w-20 h-20  flex justify-center items-center">
                    <img
                      src="./public/zeitmanagement.png"
                      alt=""
                      className="w-16"
                    />
                  </div>
                </div>{" "}
                <div className="text-lg font-10">Time Management</div>
              </div>
              <div className="w-36 h-36  flex flex-col justify-center items-center">
                {" "}
                <div className="w-28 h-28 rounded-full bg-color-20 flex justify-center items-center shadow-outer">
                  <div className="iconBtn w-20 h-20  flex justify-center items-center">
                    <img
                      src="./public/teamfaehigkeit.png"
                      alt=""
                      className="w-16"
                    />
                  </div>
                </div>{" "}
                <div className="text-lg font-16">Teamplayer</div>
              </div>
              <div className="w-36 h-36  flex flex-col justify-center items-center">
                {" "}
                <div className="w-28 h-28 rounded-full bg-color-20 flex justify-center items-center shadow-outer">
                  <div className="iconBtn w-20 h-20  flex justify-center items-center">
                    <img
                      src="./public/planungskompetenz.png"
                      alt=""
                      className="w-16"
                    />
                  </div>
                </div>{" "}
                <div className="text-lg font-16">Planning Skills</div>
              </div>
              <div className="w-36 h-36  flex flex-col justify-center items-center">
                {" "}
                <div className="w-28 h-28 rounded-full bg-color-20 flex justify-center items-center shadow-outer">
                  <div className="iconBtn w-20 h-20  flex justify-center items-center">
                    <img
                      src="./public/loesungsorientiert.png"
                      alt=""
                      className="w-16"
                    />
                  </div>
                </div>{" "}
                <div className="text-lg font-10">Problem Solver</div>
              </div>
              <div className="w-36 h-36 flex flex-col justify-center items-center">
                {" "}
                <div className="w-28 h-28 rounded-full bg-color-20 flex justify-center items-center shadow-outer">
                  <div className="iconBtn w-20 h-20  flex justify-center items-center">
                    <img
                      src="./public/improvisation.png"
                      alt=""
                      className="w-16"
                    />
                  </div>
                </div>{" "}
                <div className="text-lg font-16">Improvisational Skills</div>
              </div>
              <div className="w-36 h-36  flex flex-col justify-center items-center">
                {" "}
                <div className="w-28 h-28 rounded-full bg-color-20 flex justify-center items-center shadow-outer">
                  <div className="iconBtn w-20 h-20  flex justify-center items-center">
                    <img
                      src="./public/krisenmanagement.png"
                      alt=""
                      className="w-16"
                    />
                  </div>
                </div>{" "}
                <div className="text-lg font-10">Crisis Management</div>
              </div>
            </div>
          </div>
          <div className="language bg-color-10 m-4 shadow-inner rounded-xl w-11/12 font-10 text-3xl">
            <div className="flex items-center text-color-20">
              <img src="./public/language.png" alt="" className="w-10 h-10" />
              Language
            </div>
            <div className="softskills flex justify-between">
              <div className="w-36 h-36 flex flex-col justify-center items-center">
                {" "}
                <div className="w-28 h-28 rounded-full bg-color-20 flex justify-center items-center shadow-outer">
                  <div className="iconBtn w-20 h-20  flex justify-center items-center">
                    <img src="./public/german.png" alt="" className="w-16" />
                  </div>
                </div>{" "}
                <div className="text-lg font-10">German</div>
              </div>
              <div className="w-36 h-36  flex flex-col justify-center items-center">
                {" "}
                <div className="w-28 h-28 rounded-full bg-color-20 flex justify-center items-center shadow-outer">
                  <div className="iconBtn w-20 h-20  flex justify-center items-center">
                    <img src="./public/english.png" alt="" className="w-16" />
                  </div>
                </div>{" "}
                <div className="text-lg font-16">English</div>
              </div>
              <div className="w-36 h-36  flex flex-col justify-center items-center">
                {" "}
                <div className="w-28 h-28 rounded-full bg-color-20 flex justify-center items-center shadow-outer">
                  <div className="iconBtn w-20 h-20  flex justify-center items-center">
                    <img src="./public/urdu.png" alt="" className="w-16" />
                  </div>
                </div>{" "}
                <div className="text-lg font-16">Urdu</div>
              </div>
              <div className="w-36 h-36  flex flex-col justify-center items-center">
                {" "}
                <div className="w-28 h-28 rounded-full bg-color-20 flex justify-center items-center shadow-outer">
                  <div className="iconBtn w-20 h-20  flex justify-center items-center">
                    <img src="./public/hindi.png" alt="" className="w-16" />
                  </div>
                </div>{" "}
                <div className="text-lg font-10">Hindi</div>
              </div>
            </div>
          </div>
          <div className="webdev bg-color-10 m-4 shadow-inner rounded-xl w-11/12 font-10 text-3xl ">
            <div className="flex items-center text-color-20">
              <Icon
                icon="icon-park-outline:code-brackets"
                className="2 text-3xl"
              />
              Web Development
            </div>
            <div
              className="webdev flex justify-between whitespace-nowrap transition ease-in-out 5s"
              // style={{
              //   transform: `translate3d(${-index * 100}%, 0, 0)`,
              // }}
            >
              {/* {webdevIcons.map((webdevIcon, index) => (
                <div className="">
                  <div className="w-36 h-36 flex flex-col justify-center items-center" >
                
                    <div className="w-28 h-28 rounded-full bg-color-20 flex justify-center items-center shadow-outer" key={index}>
                      <div className="iconBtn w-20 h-20  flex justify-center items-center">
                        <img src={webdevIcon.image} alt="image" className="w-16" />
                      </div>
                    </div>{" "}
                    <div className="text-lg font-10">{webdevIcon.name}</div>
                  </div>
                </div>
              ))} */}

<div className="w-36 h-36  flex flex-col justify-center items-center">
                {" "}
                <div className="w-28 h-28 rounded-full bg-color-20 flex justify-center items-center shadow-outer">
                  <div className="iconBtn w-20 h-20  flex justify-center items-center">
                  <img
                      src="./public/html.png"
                      alt=""
                      className="w-16"
                    />
                  </div>
                </div>{" "}
                <div className="text-lg font-16">HTML</div>
              </div>
              <div className="w-36 h-36  flex flex-col justify-center items-center">
                {" "}
                <div className="w-28 h-28 rounded-full bg-color-20 flex justify-center items-center shadow-outer">
                  <div className="iconBtn w-20 h-20  flex justify-center items-center">
                  <img
                      src="./public/css.png"
                      alt=""
                      className="w-16"
                    />
                  </div>
                </div>{" "}
                <div className="text-lg font-16">CSS</div>
              </div>
              <div className="w-36 h-36  flex flex-col justify-center items-center">
                {" "}
                <div className="w-28 h-28 rounded-full bg-color-20 flex justify-center items-center shadow-outer">
                  <div className="iconBtn w-20 h-20  flex justify-center items-center">
                  <img
                      src="./public/js.png"
                      alt=""
                      className="w-16"
                    />
                  </div>
                </div>{" "}
                <div className="text-lg font-16">Javascript</div>
              </div>
              <div className="w-36 h-36  flex flex-col justify-center items-center">
                {" "}
                <div className="w-28 h-28 rounded-full bg-color-20 flex justify-center items-center shadow-outer">
                  <div className="iconBtn w-20 h-20  flex justify-center items-center">
                  <img
                      src="./public/github.png"
                      alt=""
                      className="w-16"
                    />
                  </div>
                </div>{" "}
                <div className="text-lg font-16">Github</div>
              </div>
              <div className="w-36 h-36  flex flex-col justify-center items-center">
                {" "}
                <div className="w-28 h-28 rounded-full bg-color-20 flex justify-center items-center shadow-outer">
                  <div className="iconBtn w-20 h-20  flex justify-center items-center">
                  <img
                      src="./public/sass.png"
                      alt=""
                      className="w-16"
                    />
                  </div>
                </div>{" "}
                <div className="text-lg font-10">Sass</div>
              </div>
              <div className="w-36 h-36 flex flex-col justify-center items-center">
                {" "}
                <div className="w-28 h-28 rounded-full bg-color-20 flex justify-center items-center shadow-outer">
                  <div className="iconBtn w-20 h-20  flex justify-center items-center">
                  <img
                      src="./public/tailwind.png"
                      alt=""
                      className="w-16"
                    />
                  </div>
                </div>{" "}
                <div className="text-lg font-16">Tailwind</div>
              </div>
              <div className="w-36 h-36  flex flex-col justify-center items-center">
                {" "}
                <div className="w-28 h-28 rounded-full bg-color-20 flex justify-center items-center shadow-outer">
                  <div className="iconBtn w-20 h-20  flex justify-center items-center">
                  <img
                      src="./public/react.png"
                      alt=""
                      className="w-16"
                    />
                  </div>
                </div>{" "}
                <div className="text-lg font-10">React JS</div>
              </div>
              <div className="w-36 h-36  flex flex-col justify-center items-center">
                {" "}
                <div className="w-28 h-28 rounded-full bg-color-20 flex justify-center items-center shadow-outer">
                  <div className="iconBtn w-20 h-20  flex justify-center items-center">
                  <img
                      src="./public/mongo.png"
                      alt=""
                      className="w-16"
                    />
                  </div>
                </div>{" "}
                <div className="text-lg font-10">Mongo DB</div>
              </div>
              <div className="w-36 h-36  flex flex-col justify-center items-center">
                {" "}
                <div className="w-28 h-28 rounded-full bg-color-20 flex justify-center items-center shadow-outer">
                  <div className="iconBtn w-20 h-20  flex justify-center items-center">
                  <img
                      src="./public/node.png"
                      alt=""
                      className="w-16"
                    />
                  </div>
                </div>{" "}
                <div className="text-lg font-10">Node JS</div>
              </div>
              <div className="w-36 h-36  flex flex-col justify-center items-center">
                {" "}
                <div className="w-28 h-28 rounded-full bg-color-20 flex justify-center items-center shadow-outer">
                  <div className="iconBtn w-20 h-20  flex justify-center items-center">
                  <img
                      src="./public/express.png"
                      alt=""
                      className="w-16"
                    />
                  </div>
                </div>{" "}
                <div className="text-lg font-10">Express JS</div>
              </div>
              {/* <div className="w-36 h-36  flex flex-col justify-center items-center">
                {" "}
                <div className="w-28 h-28 rounded-full bg-color-20 flex justify-center items-center shadow-outer">
                  <div className="iconBtn w-20 h-20  flex justify-center items-center">
                  <img
                      src="./public/mern.png"
                      alt=""
                      className="w-16"
                    />
                  </div>
                </div>{" "}
                <div className="text-lg font-10">Mernstack</div>
              </div> */}
            </div>
          </div>
          <div className="designPO bg-color-10 m-4 w-11/12 font-10 text-3xl rounded-xl shadow-inner">
            <div className="flex items-center text-color-20">
              <Icon
                icon="fluent:design-ideas-24-regular"
                className="2 text-3xl"
              />
              UI-Design & Projectmanagement
            </div>
            <div className="softskills flex justify-between">
              <div className="w-36 h-36 flex flex-col justify-center items-center">
                {" "}
                <div className="w-28 h-28 rounded-full bg-color-20 flex justify-center items-center shadow-outer">
                  <div className="iconBtn w-20 h-20  flex justify-center items-center">
                    <img src="./public/figma.png" alt="" className="w-16" />
                  </div>
                </div>{" "}
                <div className="text-lg font-10">Figma</div>
              </div>
              <div className="w-36 h-36  flex flex-col justify-center items-center">
                {" "}
                <div className="w-28 h-28 rounded-full bg-color-20 flex justify-center items-center shadow-outer">
                  <div className="iconBtn w-20 h-20  flex justify-center items-center">
                    <img src="./public/canva.png" alt="" className="w-16" />
                  </div>
                </div>{" "}
                <div className="text-lg font-16">Canva</div>
              </div>
              <div className="w-36 h-36  flex flex-col justify-center items-center">
                {" "}
                <div className="w-28 h-28 rounded-full bg-color-20 flex justify-center items-center shadow-outer">
                  <div className="iconBtn w-20 h-20  flex justify-center items-center">
                    <img src="./public/gimp.png" alt="" className="w-16" />
                  </div>
                </div>{" "}
                <div className="text-lg font-16">Gimp</div>
              </div>
              <div className="w-36 h-36  flex flex-col justify-center items-center">
                {" "}
                <div className="w-28 h-28 rounded-full bg-color-20 flex justify-center items-center shadow-outer">
                  <div className="iconBtn w-20 h-20  flex justify-center items-center">
                    <img src="./public/po.png" alt="" className="w-16" />
                  </div>
                </div>{" "}
                <div className="text-lg font-10">Product Owner</div>
              </div>
              <div className="w-36 h-36 flex flex-col justify-center items-center">
                {" "}
                <div className="w-28 h-28 rounded-full bg-color-20 flex justify-center items-center shadow-outer">
                  <div className="iconBtn w-20 h-20  flex justify-center items-center">
                    <img src="./public/scrum.png" alt="" className="w-16" />
                  </div>
                </div>{" "}
                <div className="text-lg font-16">Scrum</div>
              </div>
              <div className="w-36 h-36  flex flex-col justify-center items-center">
                {" "}
                <div className="w-28 h-28 rounded-full bg-color-20 flex justify-center items-center shadow-outer">
                  <div className="iconBtn w-20 h-20  flex justify-center items-center">
                    <img src="./public/jira.png" alt="" className="w-16" />
                  </div>
                </div>{" "}
                <div className="text-lg font-10">Jira</div>
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

export default Skills;
