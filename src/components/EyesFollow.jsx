import React from "react";
import useMightyMouse from "react-hook-mighty-mouse";
import "../App.css";

const EyesFollow = () => {
  const {
    selectedElement: {
      position: { angle: angleLeftEye },
    },
  } = useMightyMouse(true, "left-eye", { x: 45, y: 45 });
  const {
    selectedElement: {
      position: { angle: angleRightEye },
    },
  } = useMightyMouse(true, "right-eye", { x: 45, y: 45 });

  let rotateLeftEye = "";
  let rotateRightEye = "";

  if (angleLeftEye !== null && angleRightEye !== null) {
    rotateLeftEye = `rotate(${-angleLeftEye}deg)`;
    rotateRightEye = `rotate(${-angleRightEye}deg)`;
  }

  return (
    <div className="head z-30 ">
      {" "}
      <div className="eyes w-[150px] -z-20  absolute top-[185px]  bg-white left-[1035px]  flex justify-between">
        {" "}
        <div
          id="left-eye"
          className="eye"
          style={{ transform: rotateLeftEye }}
        >
          <img src="../public/pupil.png" className="pupilL scale-125" alt="" />
        </div>
        <div
          id="right-eye"
          className="eye"
          style={{ transform: rotateRightEye }}
        >
          <img src="../public/pupil.png" className="pupilR  scale-125" alt="" />
        </div>
      </div>
      <img src="../public/meinAvatar3.png" alt="" className="z-10 " />{" "}
      <div className="absolute top-[180px] -z-30  bg-white left-[1025px] w-[175px] h-20"></div>
    </div>
  );
};

export default EyesFollow;
