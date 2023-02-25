import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import "flip-card-wc";

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
      <div className="h-screen grid grid-cols-10 grid-rows-5">
        {/* Bubbles */}
        <div className="bubble bub1 col-start-2 row-start-1 w-64 h-64 rounded-full"></div>
        <div className="bubble bub2 rounded-full m-1 w-24 h-24 col-start-1 row-start-2"></div>
        <div className="bubble bub3 rounded-full w-36 h-36 col-start-2 row-start-3"></div>
        <div className="bubble bub4 rounded-full w-28 h-28 col-start-3 row-start-4"></div>
        <div className="bubble bub5 rounded-full m-5 w-48 h-48 col-start-1 row-start-3"></div>
        <div className="bubble bub6 rounded-full w-36 h-36 col-start-3 row-start-3"></div>
        <div className="bubble bub7 rounded-full w-24 h-24 col-start-5 row-start-4"></div>
        <div className="bubble bub8 rounded-full w-28 h-28 col-start-9 row-start-4"></div>
        <div className="bubble bub9 rounded-full w-32 h-32 col-start-8 row-start-4"></div>
        <div className="bubble bub10 rounded-full w-40 h-40 col-start-8 row-start-3"></div>
        <div className="bubble bub11 rounded-full w-60 h-60 col-start-4 row-start-2"></div>
        <div className="bubble bub12 rounded-full w-24 h-24 col-start-6 row-start-2"></div>
        <div className="bubble bub13 rounded-full w-36 h-36 col-start-6 row-start-3"></div>
        <div className="bubble bub14 rounded-full w-40 h-40 col-start-6 row-start-4"></div>
        <div className="bubble bub15 rounded-full w-36 h-36 col-start-9 row-start-2"></div>
        <div className="bubble bub16 rounded-full w-36 h-36 col-start-7 row-start-1"></div>
        <div className="bubble bub17 rounded-full w-24 h-24 col-start-10 row-start-2"></div>

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

export default Skills;
