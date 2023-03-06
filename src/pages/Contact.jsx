import { useState } from "react";
import { Icon } from "@iconify/react";
import EyesFollow from "../components/EyesFollow";
import Email from "../components/Email";
import Navbar from "../components/Navbar";
import Bubbles from "../components/Bubbles";

const Contact = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="landingpage h-screen w-screen bg-color-10">
      <div className="h-screen grid grid-cols-9 grid-rows-5">
        {/* Bubbles */}
        <Bubbles/>

        {/* Meta Content */}
        <div className="mainContent bg-color-20/90 m-8 z-10 col-start-1 col-end-8 row-start-1 row-end-7 rounded-xl">
          <div className="w-full flex justify-between ">
            <div className="text-color-10 text-8xl font-10 m-40">
              Get in Touch
            </div>
            <EyesFollow />
            {/* <div className="flex flex-col -4" >
              <img src="./public/meinAvatar1.png" alt="" className="" />
              <div className="border-8 border-color-10 rounded-full w-full"></div>
            </div>{" "} */}
          </div>{" "}
          <div className="h-80  text-color-10 flex justify-around items-end z-10">
          <Email className="" trigger={isClicked} setTrigger={setIsClicked}>
              {" "}
            </Email>
            <div
              className="text-8xl border-2 rounded-full p-4"
              onClick={() => setIsClicked(true)}
            >
              {" "}
              <Icon
                icon="material-symbols:alternate-email-rounded"
                className="text-color-mail"
              />{" "}
            </div>
            <div className="text-8xl border-2 rounded-full p-4 ">
              <a
                href="https://www.linkedin.com/in/zubia-rashid-05ba3621b/"
                target="_blank"
                rel="noreferrer"
              >
                <Icon icon="uit:linkedin-alt" className="text-color-linked" />
              </a>{" "}
            </div>
            <div className="text-8xl border-2 rounded-full p-4">
              <a
                href="https://www.xing.com/profile/Zubia_Rashid"
                target="_blank"
                rel="noreferrer"
              >
                <Icon icon="tabler:brand-xing" className="text-color-xing" />
              </a>{" "}
            </div>
            <div className="text-8xl border-2 border-gray-500 rounded-full p-4">
              {" "}
              {/* <Icon icon="logos:slack-icon" className="text-color-slack" /> */}
              <Icon icon="ph:slack-logo-duotone" className="text-gray-500" />
            </div>
            <div className="text-8xl border-2 border-gray-500 rounded-full p-4">
              {" "}
              <Icon icon="ic:round-discord" className="text-gray-500" />
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

export default Contact;
