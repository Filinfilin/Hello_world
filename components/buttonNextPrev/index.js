import React,{ useRef, useEffect } from "react";
import { useState } from "react";
import $ from "./buttonNextPrev.module.scss";
import right from "../../public/arrowRight.png";
import left from "../../public/arrowLeft.png";
import Image from "next/image";

const ButtonNextPrev = ({ openPage, goTo, dirrection, scale }) => {

  const icon = {
    "right": right,
    "left": left 
  }

  return (
    <div
      className={`${$.arrow} ${scale ? $.scaleArrow : ""}`}
      onClick={() => openPage(goTo)}
    >
      <Image src={icon[dirrection]}/>
    </div>
  );
};

export default React.memo(ButtonNextPrev);
